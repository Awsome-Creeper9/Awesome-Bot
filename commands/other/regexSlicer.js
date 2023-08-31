const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('regex-slicer')
		.setDescription('Removes text matching a regex pattern')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Input text')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('regex')
				.setDescription('Regex Pattern')
				.setRequired(true)),
	async execute(interaction) {
		const inputText = interaction.options.getString('input');
		const regexPattern = interaction.options.getString('regex');

		const regex = new RegExp(regexPattern, "g");
        const outputText = inputText.replace(regex, "");
        await interaction.reply(`${outputText}`);
	},
};