const { SlashCommandBuilder, Client, GatewayIntentBits, ActivityType } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('Set status message of Awesome Bot (only Awsome_Creeper9 has access)')
		.addStringOption(option =>
			option.setName('status')
				.setDescription('Status message')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('type')
				.setDescription('Status type')
				.setRequired(true)
				.addChoices(
					{ name: 'Online', value: 'online' },
					{ name: 'Idle', value: 'idle' },
					{ name: 'Do Not Disturb', value: 'dnd' },
					{ name: 'Invisible', value: 'invisible' },
				))
	.addStringOption(option =>
		option.setName('activity')
			.setDescription('Activity type')
			.setRequired(true)
			.addChoices(
				{ name: 'Playing', value: 'playing' },
				{ name: 'Watching', value: 'watching' },
				{ name: 'Listening', value: 'listening' },
				{ name: 'Competing', value: 'competing' },
			)),
	async execute(interaction, client) {
		const status = interaction.options.getString('status')
		const type = interaction.options.getString('type')
		const activity = interaction.options.getString('activity')

		if (interaction.user.id != '564469575240908817') return await interaction.reply({ content: 'Only Awsome_Creeper9 can use this command', ephemeral: true})
		else {

			interaction.client.user.setStatus(type)

			if (activity === 'watching') {
				interaction.client.user.setActivity(status, { type: ActivityType.Watching });
			}
			else if (activity === 'listening') {
				interaction.client.user.setActivity(status, { type: ActivityType.Listening });
			}
			else if (activity === 'competing') {
				interaction.client.user.setActivity(status, { type: ActivityType.Competing });
			}
			else {
				interaction.client.user.setActivity(status);
			}

			await interaction.reply({ content: 'Status has been set', ephemeral: true});
		}
	},
};