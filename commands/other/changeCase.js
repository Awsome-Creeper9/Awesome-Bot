const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('change-case')
		.setDescription('Convert text to either uppercase or lowercase')
		.addStringOption(option =>
			option.setName('text')
				.setDescription('Text to convert to either uppercase or lowercase')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('case')
				.setDescription('Uppercase or lowercase')
				.setRequired(true)
				.addChoices(
					{ name: 'Uppercase', value: 'uppercase' },
					{ name: 'Lowercase', value: 'lowercase' },
				)),
	async execute(interaction) {
		const text = interaction.options.getString('text');
		const choice = interaction.options.getString('case');

		if (choice === 'uppercase') {
			await interaction.reply(text.toUpperCase());
		}
		else if (choice === 'lowercase') {
			await interaction.reply(text.toLowerCase());
		}
		else {
			await interaction.reply(text);
		}
	},
};