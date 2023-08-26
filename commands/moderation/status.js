const { SlashCommandBuilder, Client, GatewayIntentBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('Set status message of Awesome Bot (only Awsome_Creeper9 has access)')
		.addStringOption(option =>
			option.setName('status')
				.setDescription('Status message')
				.setRequired(true)),
	async execute(interaction, client) {
		const status = interaction.options.getString('status')

		if (interaction.user.id != '564469575240908817') return await interaction.reply({ content: 'Only Awsome_Creeper9 can use this command', ephemeral: true})
		else {

			interaction.client.user.setActivity(status);

			await interaction.reply({ content: 'Status has been set', ephemeral: true});
		}
	},
};