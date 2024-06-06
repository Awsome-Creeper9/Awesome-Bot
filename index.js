const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
const foldersPath2 = path.join(__dirname, 'guild-commands');
const guildCommandFolders = fs.readdirSync(foldersPath2);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

for (const folder2 of guildCommandFolders) {
	const guildCommandsPath = path.join(foldersPath2, folder2);
	const guildCommandFiles = fs.readdirSync(guildCommandsPath).filter(file => file.endsWith('.js'));
	for (const file2 of guildCommandFiles) {
		const filePath2 = path.join(guildCommandsPath, file2);
		const command2 = require(filePath2);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command2 && 'execute' in command2) {
			client.commands.set(command2.data.name, command2);
		} else {
			console.log(`[WARNING] The command at ${filePath2} is missing a required "data" or "execute" property.`);
		}
	}
}

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
	client.user.setActivity("/help", {
		type: ActivityType.Playing,
	});
	const currentDate = new Date();
	if (currentDate.getMonth() === 5) {
		client.user.setAvatar('profile-pic/aroace-pfp.png');
	}
	else {
		client.user.setAvatar('profile-pic/pfp.png');
	}
});
 
// Log in to Discord with your client's token
client.login(token);

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});