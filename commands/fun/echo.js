const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Repeats a message')
		.addStringOption(option =>
			option.setName('message')
				.setDescription('Message to be sent back')
				.setRequired(true)),
	async execute(interaction) {
		const message = interaction.options.getString('message');
		const currentChannel = interaction.channel;

		await interaction.reply({ content: 'Message sent', ephemeral: true});

		if (currentChannel) {await currentChannel.send(`${message}`);}
		else {await interaction.client.users.send(interaction.user.id, `${message}`);}
	},
};