const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gradient')
		.setDescription('Create a gradient')
		.addStringOption(option =>
			option.setName('color1')
				.setDescription('1st color (hex, rgb, or rgba)')
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
				.setDescription('5th color')),
	async execute(interaction) {
		const colors = [
			interaction.options.getString('color1'),
			interaction.options.getString('color2'),
			interaction.options.getString('color3'),
			interaction.options.getString('color4'),
			interaction.options.getString('color5'),
		]

		const canvas = Canvas.createCanvas(100, 100);
		const ctx = canvas.getContext('2d');

			if ((colors[0][0] === '#' || colors[0][0]+colors[0][1]+colors[0][2] === "rgb") && (colors[1][0] === '#' || colors[1][0]+colors[1][1]+colors[1][2] === "rgb")) {
				if(colors[2]) {
				if(colors[2][0] === '#' || colors[2][0]+colors[2][1]+colors[2][2] === "rgb") {
					if(colors[3]) {
					if(colors[3][0] === '#' || colors[3][0]+colors[3][1]+colors[3][2] === "rgb") {
						if(colors[4]) {
						if(colors[4][0] === '#' || colors[4][0]+colors[4][1]+colors[4][2] === "rgb") {
							let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
							gradient.addColorStop(0, `${colors[0]}`);
							gradient.addColorStop(0.25, `${colors[1]}`);
							gradient.addColorStop(0.5, `${colors[2]}`);
							gradient.addColorStop(0.75, `${colors[3]}`);
							gradient.addColorStop(1, `${colors[4]}`);
							ctx.fillStyle = gradient;
							ctx.fillRect(0, 0, canvas.width, canvas.height)
						}
						else {
							let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
							gradient.addColorStop(0, `${colors[0]}`);
							gradient.addColorStop(0.33, `${colors[1]}`);
							gradient.addColorStop(0.66, `${colors[2]}`);
							gradient.addColorStop(1, `${colors[3]}`);
							ctx.fillStyle = gradient;
							ctx.fillRect(0, 0, canvas.width, canvas.height)			
						}
						}
						else {
							let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
							gradient.addColorStop(0, `${colors[0]}`);
							gradient.addColorStop(0.33, `${colors[1]}`);
							gradient.addColorStop(0.66, `${colors[2]}`);
							gradient.addColorStop(1, `${colors[3]}`);
							ctx.fillStyle = gradient;
							ctx.fillRect(0, 0, canvas.width, canvas.height)			
						}
					}
					else {
						let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
						gradient.addColorStop(0, `${colors[0]}`);
						gradient.addColorStop(0.5, `${colors[1]}`);
						gradient.addColorStop(1, `${colors[2]}`);
						ctx.fillStyle = gradient;
						ctx.fillRect(0, 0, canvas.width, canvas.height)
					}
					}
					else {
						let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
						gradient.addColorStop(0, `${colors[0]}`);
						gradient.addColorStop(0.5, `${colors[1]}`);
						gradient.addColorStop(1, `${colors[2]}`);
						ctx.fillStyle = gradient;
						ctx.fillRect(0, 0, canvas.width, canvas.height)
					}
				}
				else {
					let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
					gradient.addColorStop(0, `${colors[0]}`);
					gradient.addColorStop(1, `${colors[1]}`);
					ctx.fillStyle = gradient;
					ctx.fillRect(0, 0, canvas.width, canvas.height)
				}
				}
				else {
					let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
					gradient.addColorStop(0, `${colors[0]}`);
					gradient.addColorStop(1, `${colors[1]}`);
					ctx.fillStyle = gradient;
					ctx.fillRect(0, 0, canvas.width, canvas.height)
				}
				const attachment = new AttachmentBuilder(await canvas.toBuffer('image/png'), { name: `image.png` })
				const embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle(`Gradient`)
				.addFields(
					{ 
						name: 'Colors:', 
						value: `${colors[0]}, ${colors[1]}${((colors[2]) && (colors[2][0] === '#' || colors[2][0]+colors[2][1]+colors[2][2] === "rgb")) ? ', '+colors[2] : ''}${((colors[3]) && (colors[3][0] === '#' || colors[3][0]+colors[3][1]+colors[3][2] === "rgb")) ? ', '+colors[3] : ''}${((colors[4]) && (colors[4][0] === '#' || colors[4][0]+colors[4][1]+colors[4][2] === "rgb")) ? ', '+colors[4] : ''}` },
				)
				.setThumbnail(`attachment://image.png`);

			await interaction.reply({ embeds: [embed], files: [attachment] });
			}
			else {
				interaction.reply({ content: `Please enter valid colors`, ephemeral: true })
			}
	},
};