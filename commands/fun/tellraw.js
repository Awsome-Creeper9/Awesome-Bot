const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tellraw')
		.setDescription('Repeats a message')
		.addStringOption(option =>
			option.setName('message')
				.setDescription('Message to be sent back')
				.setRequired(true)),
	async execute(interaction) {
		const message = interaction.options.getString('message');
		await interaction.reply(`${message}`);
	},
};