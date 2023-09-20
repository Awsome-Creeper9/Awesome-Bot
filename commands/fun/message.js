const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('msg')
		.setDescription('Send a DM to a user')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('User to DM')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('message')
				.setDescription('Message to be DM\'d')
				.setRequired(true))
		.addBooleanOption(option =>
			option.setName('anonymous')
				.setDescription('DM Anonymously?')),
	async execute(interaction, client) {
		const user = interaction.options.getUser('user');
		const message = interaction.options.getString('message');
		const anon = interaction.options.getBoolean('anonymous');
		const userId = user.id

		let canSend = true;
		const blackList = [
			''
		]

		for (let i = 0; i < blackList.length; i++) {
			if (userId === blackList[i]) {
				canSend = false
			}
		}

		if (canSend === true) {
			if (anon === true) {
				await interaction.client.users.send(userId, `${message}`)
				await interaction.reply({ content: `Message sent to ${user} anonymously`, ephemeral: true })
			}
			else {
				await interaction.client.users.send(userId, `${interaction.user} sent: ${message}`)
				await interaction.reply({ content: `Message sent to ${user}`, ephemeral: true });
			}
		}
		else {
			await interaction.reply({ content: `Cannot send message to ${user}; they asked to be on a blacklist`, ephemeral: true });
		}
	},
};