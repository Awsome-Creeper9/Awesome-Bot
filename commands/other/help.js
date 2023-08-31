const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Convert the base of an integer')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('Specify a command you need help with')),
	async execute(interaction) {
		const command = interaction.options.getString('command');

		if (command === 'convert-base') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/convert-base')
			.setDescription('Converts the value given in the \'input\' parameter from the base given in the \'base\' parameter to the base given in the \'to-base\' parameter (works with bases 2-36).')
			.addFields(
				{ name: 'Syntax:', value: '/convert-base <input> <base> <to-base>' },
			)
		}
		else if (command === 'ping') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/ping')
			.setDescription('A test command. It\'ll reply to you with \'pong\'.')
			.addFields(
				{ name: 'Syntax:', value: '/ping' },
			)
		}
		else if (command === 'random color') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/random color')
			.setDescription('Replies with an embed of a random color.')
			.addFields(
				{ name: 'Syntax:', value: '/random color' },
			)
		}
		else if (command === 'random word') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/random word')
			.setDescription('Replies to you with \'amount\' amount of words (default is 1).')
			.addFields(
				{ name: 'Syntax:', value: '/random word [amount]' },
			)
		}
		else if (command === 'random letter') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/random letter')
			.setDescription('Replies to you with \'amount\' amount of English letters (default is 1).')
			.addFields(
				{ name: 'Syntax:', value: '/random letter [amount]' },
			)
		}
		else if (command === 'random integer') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/random integer')
			.setDescription('Replies with a random integer between the value given in the \'minimum\' parameter and the value given in the \'maximum\' parameter.')
			.addFields(
				{ name: 'Syntax:', value: '/random integer <minimum> <maximum>' },
			)
		}
		else if (command === 'suggest') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/suggest')
			.setDescription('Sends a suggestion to Awsome_Creeper9.')
			.addFields(
				{ name: 'Syntax:', value: '/suggest <suggestion>' },
			)
		}
		else if (command === 'tellraw') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/tellraw')
			.setDescription('Send the message you told it in the \'message\' parameter.')
			.addFields(
				{ name: 'Syntax:', value: '/tellraw <message>' },
			)
		}
		else if (command === 'kill') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/kill')
			.setDescription('Kills a selected user from the \'user\' parameter using the method from the \'method\' parameter (default is generic).')
			.addFields(
				{ name: 'Syntax:', value: '/kill <user> [method]' },
				{ name: 'Valid Method Values:', value: 'random, generic, player generic, melee, ranged, cactus, cactus escape, fall, hit ground too hard, hit ground too hard escape, fell off ladder, fell off vines, fell off weeping vines, fell off twisting vines, fell off scaffolding, fell while climbing, fell out of water, doomed fall, void, void escape, magic, magic escape, player magic, explosion, player explosion, starvation, starve whilst fighting, lightning, lightning whilst fighting, wither, wither whilst fighting, firework, berry bush, berry bush escape, lava, lava escape, magma, magma escape, drowning, drowning escape, freezing, freezing escape, fire, burning, burned whilst fighting, fire whilst fighting, kinetic energy, kinetic energy escape, anvil, falling block, suffocation, suffocated whilst fighting, trident, stalagmite, stalagmite whilst fighting, stalactite, bed, cramming, cramming escape, thorns, blaze, bee, warden, wither skull, world border, world border whilst fighting, dehydration, dehydration escape, command, command whilst fighting, snowball' },
			)
		}
		else if (command === 'help') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/help')
			.setDescription('Sends an embed with a list of commands, or with help for a specific command if specified in the \'command\' parameter')
			.addFields(
				{ name: 'Syntax:', value: '/help [command]' },
			)
		}
		else if (command === 'status') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/status')
			.setDescription('Sets the bot\'s status message to what was given in the \'status\' parameter (Only Awsome_Creeper9 has access to run the command).')
			.addFields(
				{ name: 'Syntax:', value: '/status <status>' },
			)
		}
		else if (command === 'msg') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/msg')
			.setDescription('DM\'s the user given in the \'user\' parameter with the message from the \'message\' parameter. the DM can be sent anonymously if the \'anonymous\' parameter is set to \'True\' (False by default).')
			.addFields(
				{ name: 'Syntax:', value: '/msg <user> <message> [anonymous]' },
			)
		}
		else if (command === 'rps') {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('/rps')
			.setDescription('Allows you to play Rock, Paper, Scissors against the bot.')
			.addFields(
				{ name: 'Syntax:', value: '/rps <choice>' },
				{ name: 'Valid Choice Values:', value: 'rock, paper, scissors' },
			)
		}
		else {
			var embed = new EmbedBuilder()
			.setColor(0x000000)
			.setTitle('Help:')
			.addFields(
				{ name: 'help', value: '/help [command]' },
				{ name: 'convert-base', value: '/convert-base <input> <base> <to-base>' },
				{ name: 'kill', value: '/kill [method]' },
				{ name: 'ping', value: '/ping' },
				{ name: 'random color', value: '/random color' },
				{ name: 'random word', value: '/random word [amount]' },
				{ name: 'random letter', value: '/random letter [amount]' },
				{ name: 'random integer', value: '/random integer <minimum> <maximum>' },
				{ name: 'tellraw', value: '/tellraw <message>' },
				{ name: 'suggest', value: '/suggest <suggestion>' },
				{ name: 'status', value: '/status <status>' },
				{ name: 'msg', value: '/msg <user> <message> [anonymous]' },
				{ name: 'rps', value: '/rps <choice>' },
			)
		}
		
		await interaction.reply({ embeds: [embed] });
	},
};