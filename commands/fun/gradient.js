const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gradient')
		.setDescription('Create a gradient')
		.addStringOption(option =>
			option.setName('color1')
				.setDescription('1st color')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('color2')
				.setDescription('2nd color')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('color3')
				.setDescription('3rd color'))
		.addStringOption(option =>
			option.setName('color4')
				.setDescription('4th color'))
		.addStringOption(option =>
			option.setName('color5')
				.setDescription('5th color'))
		.addStringOption(option =>
			option.setName('color6')
				.setDescription('6th color'))
		.addStringOption(option =>
			option.setName('color7')
				.setDescription('7th color'))
		.addStringOption(option =>
			option.setName('color8')
				.setDescription('8th color'))
		.addStringOption(option =>
			option.setName('color9')
				.setDescription('9th color'))
		.addStringOption(option =>
			option.setName('color10')
				.setDescription('10th color'))
		.addStringOption(option =>
			option.setName('type')
				.setDescription('Type of gradient')
				.addChoices(
					{ name: 'Linear', value: 'linear' },
					{ name: '45 Degrees', value: '45 degrees' },
					{ name: 'Radial', value: 'radial' },
					{ name: 'Conic', value: 'conic' })),
	async execute(interaction) {
		const type = interaction.options.getString('type')
		const colors = [
			interaction.options.getString('color1'),
			interaction.options.getString('color2'),
			interaction.options.getString('color3'),
			interaction.options.getString('color4'),
			interaction.options.getString('color5'),
			interaction.options.getString('color6'),
			interaction.options.getString('color7'),
			interaction.options.getString('color8'),
			interaction.options.getString('color9'),
			interaction.options.getString('color10')
		]

		const canvas = Canvas.createCanvas(1000, 1000);
		const ctx = canvas.getContext('2d');

		function checkColor(color) {
			return !!color;
		}

		function createGradient(colors, type) {
			let gradient;
			let title;
			if (type === '45 degrees') {
				gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
				title = 'Linear Gradient (45°)';
			}
			else if (type === 'radial') {
				ctx.beginPath();
				ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
				ctx.closePath();
				ctx.clip();
				gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
				title = 'Radial Gradient';
			}
			else if (type === 'conic') {
				ctx.beginPath();
				ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
				ctx.closePath();
				ctx.clip();
				gradient = ctx.createConicGradient(Math.PI / 2, canvas.width / 2, canvas.height / 2);
				title = 'Conic Gradient';
			}
			else {
				gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
				title = 'Linear Gradient';
			}
			let colorCount = 0;
			for (let i of colors) {
				colorCount = checkColor(i) ? colorCount + 1 : colorCount;
			}
			if (colorCount < 2) {
				interaction.reply({ content: `Not enough colors!`, ephemeral: true });
			}
			let divisions = 1 / (colorCount - 1)
			for (let i = 0; i < colorCount; i++) {
				gradient.addColorStop(i * divisions, `${colors[i]}`);
			}
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: `image.png` }) //await?
			const embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle(title)
				.addFields(
					{
						name: 'Colors:',
						value: `${colors[0]}, ${colors[1]}${(checkColor(colors[2])) ? ', '+colors[2] : ''}${(checkColor(colors[3])) ? ', '+colors[3] : ''}${(checkColor(colors[4])) ? ', '+colors[4] : ''}${(checkColor(colors[5])) ? ', '+colors[5] : ''}${(checkColor(colors[6])) ? ', '+colors[6] : ''}${(checkColor(colors[7])) ? ', '+colors[7] : ''}${(checkColor(colors[8])) ? ', '+colors[8] : ''}${(checkColor(colors[9])) ? ', '+colors[9] : ''}` },
				)
				.setThumbnail(`attachment://image.png`);

			interaction.reply({ embeds: [embed], files: [attachment] }); //await?
		}

		createGradient(colors, type);
	},
};