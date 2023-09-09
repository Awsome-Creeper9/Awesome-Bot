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
		const type = interaction.options.getString('interval-type');
		const amount = interaction.options.getNumber('amount');
		const reason = interaction.options.getString('reason');
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

		if (!reason) {
			await interaction.reply({ content: `Your \`${amount} ${type}\` timer has been set!`, ephemeral: true });
			setTimeout(() => {
				interaction.followUp({ content: ` ${interaction.user}, your \`${amount} ${type}\` timer has ended!`, ephemeral: true })
			}, time)
		}
		else {
			await interaction.reply({ content: `Your \`${amount} ${type}\` timer for \`${reason}\` has been set!`, ephemeral: true });
			setTimeout(() => {
				interaction.followUp({ content: ` ${interaction.user}, your \`${amount} ${type}\` timer for \`${reason}\` has ended!`, ephemeral: true })
			}, time)
		}
	},
};