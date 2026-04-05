const { SlashCommandBuilder, Client, GatewayIntentBits, ActivityType } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('change-pfp')
		.setDescription('Change profile picture of Awesome Bot until start of new day (only Awsome_Creeper9 has access)')
		.addStringOption(option =>
			option.setName('type')
				.setDescription('Profile picture type')
				.setRequired(true)
				.addChoices(
					{ name: 'Default', value: 'default' },
					{ name: 'AroAce', value: 'aroace' },
					{ name: 'Trans', value: 'trans' },
				)),
	async execute(interaction, client) {
		const type = interaction.options.getString('type')

		if (interaction.user.id != '564469575240908817') return await interaction.reply({ content: 'Only Awsome_Creeper9 can use this command', ephemeral: true})
		else {
            if (type === "default") {
                interaction.client.user.setAvatar('./profile-pic/pfp.png');
            }
            else if (type === "aroace") {
                interaction.client.user.setAvatar('./profile-pic/aroace-pfp.png');
            }
            else if (type === "trans") {
                interaction.client.user.setAvatar('./profile-pic/trans-pfp.png');
            }

			await interaction.reply({ content: 'Profile pic has been changed', ephemeral: true});
		}
	},
};