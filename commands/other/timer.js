const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timer')
		.setDescription('Set a timer')
		.addStringOption(option =>
			option.setName('interval-type')
				.setDescription('Type of interval')
				.setRequired(true)
				.addChoices(
					{ name: 'second', value: 'second' },
					{ name: 'minute', value: 'minute' },
					{ name: 'hour', value: 'hour' },
					{ name: 'day', value: 'day' },
					{ name: 'week', value: 'week' },
				))
		.addNumberOption(option =>
			option.setName('amount')
				.setDescription('Amount of the interval type')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('reason')
				.setDescription('Reason for the timer')),
	async execute(interaction) {
		const currentChannel = interaction.channel;
		const type = interaction.options.getString('interval-type');
		const amount = interaction.options.getNumber('amount');
		const reason = interaction.options.getString('reason');
		let timestamp = Date.now();
		let time = 0;

		if (type === 'second') {
			time = amount * 1000;
		}
		else if (type === 'minute') {
			time = amount * 1000 * 60;
		}
		else if (type === 'hour') {
			time = amount * 1000 * 60 * 60;
		}
		else if (type === 'day') {
			time = amount * 1000 * 60 * 60 * 24;
		}
		else if (type === 'week') {
			time = amount * 1000 * 60 * 60 * 24 * 7;
		}
		timestamp += time
		timestamp = parseInt(timestamp/1000)

		if (!reason) {
			await interaction.reply({ content: `Your \`${amount} ${type}\` timer has been set! It ends <t:${timestamp}:R>.`});
			setTimeout(async () => {
				if (currentChannel) {await currentChannel.send(`${interaction.user}, your \`${amount} ${type}\` timer has ended!`);}
				else {await await interaction.client.users.send(interaction.user.id, `${interaction.user}, your \`${amount} ${type}\` timer has ended!`);}
			}, time)
		}
		else {
			await interaction.reply({ content: `Your \`${amount} ${type}\` timer for \`${reason}\` has been set! It ends <t:${timestamp}:R>.`});
			setTimeout(async () => {
				if (currentChannel) {await currentChannel.send(`${interaction.user}, your \`${amount} ${type}\` timer for \`${reason}\` has ended!`);}
				else {await await interaction.client.users.send(interaction.user.id, `${interaction.user}, your \`${amount} ${type}\` timer for \`${reason}\` has ended!`);}
			}, time)
		}
	},
};