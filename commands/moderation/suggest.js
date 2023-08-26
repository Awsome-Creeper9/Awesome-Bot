const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggest')
		.setDescription('Send a suggestion to Awsome_Creeper9')
		.addStringOption(option =>
			option.setName('suggestion')
				.setDescription('Message sent to Awsome_Creeper9')
				.setRequired(true)),
	async execute(interaction) {
		const userId = '564469575240908817'
		var canSend = true;
		const bannedUsers = [
			''
		]

		const suggestion = interaction.options.getString('suggestion')

		for (let i = 0; i < bannedUsers.length; i++) {
			if (interaction.user.id === bannedUsers[i]) {
				canSend = false
			}
		}
		if (canSend === true) {
			await interaction.client.users.send(userId, `Suggestion from ${interaction.user}: ${suggestion}`);
		}
		await interaction.reply({ content: 'Your suggestion has been sent!', ephemeral: true });
	},
};