const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('caesar-cypher')
		.setDescription('Caesar Cypher')
		.addStringOption(option => option.setName('string').setDescription('String to cypher').setRequired(true))
		.addIntegerOption(option => option.setName('shift').setDescription('Amount of letters to shift the string').setRequired(true)),
	async execute(interaction) {
			const letters = 'abcdefghijklmnopqrstuvwxyz'
			var string = interaction.options.getString('string')
			var amount = interaction.options.getInteger('shift')

			var newString = "";
			var isLetter = 0;
			for (let i = 0; i < string.length; i++) {
				if (string[i] == " ") {
					isLetter += 1;
					newString += " ";
				}
				for (let j = 0; j < letters.length; j++) {
					if (string[i] == letters[j]) {
						isLetter += 1;
						if (j + amount > letters.length - 1) {
							let newAmount = (j + amount) - (letters.length)
							newString += letters[newAmount]
						}
						else {
							newString += letters[j + amount]
						}
					}
					else if (string[i] == letters[j].toUpperCase()) {
						isLetter += 1;
						if (j + amount > letters.length - 1) {
							let newAmount = (j + amount) - (letters.length)
							newString += letters[newAmount].toUpperCase()
						}
						else {
							newString += letters[j + amount].toUpperCase()
						}
					}
				}
			}
			if (isLetter == string.length) {
				await interaction.reply(`${newString}`);
			}
			else {
				await interaction.reply(`You may only use letters and spaces in your string.`);
			}
		 },
};