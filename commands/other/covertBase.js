const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('convert-base')
		.setDescription('Convert the base of an integer')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Input integer')
				.setRequired(true))
		.addIntegerOption(option =>
			option.setName('base')
				.setDescription('Base of input integer')
				.setRequired(true))
		.addIntegerOption(option =>
			option.setName('to-base')
				.setDescription('Base to convert integer to')
				.setRequired(true)),
	async execute(interaction) {
		const inputNumber = interaction.options.getString('input');
		const base = interaction.options.getInteger('base');
		const toBase = interaction.options.getInteger('to-base');

		const decimalNumber = parseInt(inputNumber, base);
		const outputNumber = decimalNumber.toString(toBase);
		await interaction.reply(`\`${inputNumber}\` from base \`${base}\` to base \`${toBase}\` is \`${outputNumber}\``);
	},
};