const { SlashCommandBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, Events, EmbedBuilder, ModalBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggest')
		.setDescription('Send a suggestion to Awsome_Creeper9'),
	async execute(interaction) {
		const userId = '564469575240908817'
		let canSend = true;
		const bannedUsers = [
			''
		]

		for (let i = 0; i < bannedUsers.length; i++) {
			if (interaction.user.id === bannedUsers[i]) {
				canSend = false
			}
		}

		const placeholderTitles = ['Color space options for /gradient', 'Admin Commands', 'Blacklist Request', 'New Command Idea: /test'];

		const modal = new ModalBuilder()
			.setCustomId('suggest-modal')
			.setTitle('Suggestion')
			.addComponents(
				new ActionRowBuilder().addComponents(
					new TextInputBuilder()
						.setCustomId('title-input')
						.setLabel('Title')
						.setStyle(TextInputStyle.Short)
						.setMaxLength(50)
						.setPlaceholder(placeholderTitles[Math.floor(Math.random() * (placeholderTitles.length - .1))])
						.setRequired(true),
				),
				new ActionRowBuilder().addComponents(
					new TextInputBuilder()
						.setCustomId('description-input')
						.setLabel('Description')
						.setStyle(TextInputStyle.Paragraph)
						.setRequired(true),
				),
			);

		await interaction.showModal(modal);

		interaction.client.once(Events.InteractionCreate, async interaction => {
			if (!interaction.isModalSubmit()) return;

			if (canSend === true) {
				const suggestion = {
					title: interaction.fields.getTextInputValue('title-input'),
					desc: interaction.fields.getTextInputValue('description-input'),
				}
				const embed = new EmbedBuilder()
					.setColor(0xFFFF80)
					.setTitle('Suggestion:')
					.addFields({ name: suggestion.title, value: suggestion.desc })
					.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
					.setFooter({ text: interaction.user.id })
					.setTimestamp(Date.now())

				await interaction.client.users.send(userId, { embeds: [embed] });
			}
			await interaction.reply({ content: 'Your suggestion has been sent!', ephemeral: true });
		})

	},
};