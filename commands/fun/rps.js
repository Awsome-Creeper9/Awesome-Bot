const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rps')
		.setDescription('Play Rock, Paper, Scissors against the bot')
		.addStringOption(option =>
			option.setName('choice')
				.setDescription('Your choice')
				.setRequired(true)
				.addChoices(
					{ name: 'rock', value: 'rock' },
					{ name: 'paper', value: 'paper' },
					{ name: 'scissors', value: 'scissors' },
				)),
	async execute(interaction) {
		const choice = interaction.options.getString('choice');
		let botChoice = Math.floor(Math.random() * 3)
		if (botChoice === 0) {
			if (choice === 'rock') {await interaction.reply(`You chose \`rock\` and I chose \`rock\`; We tied.`);}
			else if (choice === 'paper') {await interaction.reply(`You chose \`paper\` and I chose \`rock\`; You won.`);}
			else if (choice === 'scissors') {await interaction.reply(`You chose \`scissors\` and I chose \`rock\`; I won.`);}
		}
		else if (botChoice === 1) {
			if (choice === 'rock') {await interaction.reply(`You chose \`rock\` and I chose \`paper\`; I won.`);}
			else if (choice === 'paper') {await interaction.reply(`You chose \`paper\` and I chose \`paper\`; We tied.`);}
			else if (choice === 'scissors') {await interaction.reply(`You chose \`scissors\` and I chose \`paper\`; You won.`);}
		}
		else if (botChoice === 2 || botChoice === 3) {
			if (choice === 'rock') {await interaction.reply(`You chose \`rock\` and I chose \`scissors\`; You win.`);}
			else if (choice === 'paper') {await interaction.reply(`You chose \`paper\` and I chose \`scissors\`; I win.`);}
			else if (choice === 'scissors') {await interaction.reply(`You chose \`scissors\` and I chose \`scissors\`; We tie.`);}
		}
		else {await interaction.reply(`Your options are: \'rock\', \'paper\', or \'scissors\'`);}
	},
};