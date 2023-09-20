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
					{ name: 'linear', value: 'linear' },
					{ name: '45 degrees', value: '45 degrees' },
					{ name: 'radial', value: 'radial' },)),
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
			if (!color) { return false }
			else { return true }
		}


		if (type === 'radial') {
			if (checkColor(colors[0]) && checkColor(colors[1])) {
				ctx.beginPath();
				ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
				ctx.closePath();
				ctx.clip();
				if(checkColor(colors[2])) {
					if(checkColor(colors[3])) {
						if(checkColor(colors[4])) {
							if(checkColor(colors[5])) {
								if(checkColor(colors[6])) {
									if(checkColor(colors[7])) {
										if(checkColor(colors[8])) {
											if(checkColor(colors[9])) {
												let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
												gradient.addColorStop(0, `${colors[0]}`);
												gradient.addColorStop(0.11, `${colors[1]}`);
												gradient.addColorStop(0.22, `${colors[2]}`);
												gradient.addColorStop(0.33, `${colors[3]}`);
												gradient.addColorStop(0.44, `${colors[4]}`);
												gradient.addColorStop(0.56, `${colors[5]}`);
												gradient.addColorStop(0.67, `${colors[6]}`);
												gradient.addColorStop(0.78, `${colors[7]}`);
												gradient.addColorStop(0.89, `${colors[8]}`);
												gradient.addColorStop(1, `${colors[9]}`);
												ctx.fillStyle = gradient;
												ctx.fillRect(0, 0, canvas.width, canvas.height)	
											}
											else {
												let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
												gradient.addColorStop(0, `${colors[0]}`);
												gradient.addColorStop(0.125, `${colors[1]}`);
												gradient.addColorStop(0.25, `${colors[2]}`);
												gradient.addColorStop(0.375, `${colors[3]}`);
												gradient.addColorStop(0.5, `${colors[4]}`);
												gradient.addColorStop(0.625, `${colors[5]}`);
												gradient.addColorStop(0.75, `${colors[6]}`);
												gradient.addColorStop(0.875, `${colors[7]}`);
												gradient.addColorStop(1, `${colors[8]}`);
												ctx.fillStyle = gradient;
												ctx.fillRect(0, 0, canvas.width, canvas.height)	
											}
										}
										else {
											let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
											gradient.addColorStop(0, `${colors[0]}`);
											gradient.addColorStop(0.14, `${colors[1]}`);
											gradient.addColorStop(0.29, `${colors[2]}`);
											gradient.addColorStop(0.43, `${colors[3]}`);
											gradient.addColorStop(0.57, `${colors[4]}`);
											gradient.addColorStop(0.71, `${colors[5]}`);
											gradient.addColorStop(0.86, `${colors[6]}`);
											gradient.addColorStop(1, `${colors[7]}`);
											ctx.fillStyle = gradient;
											ctx.fillRect(0, 0, canvas.width, canvas.height)	
										}
									}
									else {
										let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
										gradient.addColorStop(0, `${colors[0]}`);
										gradient.addColorStop(0.16, `${colors[1]}`);
										gradient.addColorStop(0.33, `${colors[2]}`);
										gradient.addColorStop(0.5, `${colors[3]}`);
										gradient.addColorStop(0.66, `${colors[4]}`);
										gradient.addColorStop(0.83, `${colors[5]}`);
										gradient.addColorStop(1, `${colors[6]}`);
										ctx.fillStyle = gradient;
										ctx.fillRect(0, 0, canvas.width, canvas.height)	
									}
								}
								else {
									let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
									gradient.addColorStop(0, `${colors[0]}`);
									gradient.addColorStop(0.2, `${colors[1]}`);
									gradient.addColorStop(0.4, `${colors[2]}`);
									gradient.addColorStop(0.6, `${colors[3]}`);
									gradient.addColorStop(0.8, `${colors[4]}`);
									gradient.addColorStop(1, `${colors[5]}`);
									ctx.fillStyle = gradient;
									ctx.fillRect(0, 0, canvas.width, canvas.height)			
								}
							}
							else {
								let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
								gradient.addColorStop(0, `${colors[0]}`);
								gradient.addColorStop(0.25, `${colors[1]}`);
								gradient.addColorStop(0.5, `${colors[2]}`);
								gradient.addColorStop(0.75, `${colors[3]}`);
								gradient.addColorStop(1, `${colors[4]}`);
								ctx.fillStyle = gradient;
								ctx.fillRect(0, 0, canvas.width, canvas.height)			
							}
						}
						else {
							let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
							gradient.addColorStop(0, `${colors[0]}`);
							gradient.addColorStop(0.33, `${colors[1]}`);
							gradient.addColorStop(0.66, `${colors[2]}`);
							gradient.addColorStop(1, `${colors[3]}`);
							ctx.fillStyle = gradient;
							ctx.fillRect(0, 0, canvas.width, canvas.height)			
						}
					}
					else {
						let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
						gradient.addColorStop(0, `${colors[0]}`);
						gradient.addColorStop(0.5, `${colors[1]}`);
						gradient.addColorStop(1, `${colors[2]}`);
						ctx.fillStyle = gradient;
						ctx.fillRect(0, 0, canvas.width, canvas.height)
					}
				}
				else {
					let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
					gradient.addColorStop(0, `${colors[0]}`);
					gradient.addColorStop(1, `${colors[1]}`);
					ctx.fillStyle = gradient;
					ctx.fillRect(0, 0, canvas.width, canvas.height)
				}

				const attachment = new AttachmentBuilder(await canvas.toBuffer('image/png'), { name: `image.png` })
				const embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle(`Radial Gradient`)
				.addFields(
					{ 
						name: 'Colors:', 
						value: `${colors[0]}, ${colors[1]}${(checkColor(colors[2])) ? ', '+colors[2] : ''}${(checkColor(colors[3])) ? ', '+colors[3] : ''}${(checkColor(colors[4])) ? ', '+colors[4] : ''}${(checkColor(colors[5])) ? ', '+colors[5] : ''}${(checkColor(colors[6])) ? ', '+colors[6] : ''}${(checkColor(colors[7])) ? ', '+colors[7] : ''}${(checkColor(colors[8])) ? ', '+colors[8] : ''}${(checkColor(colors[9])) ? ', '+colors[9] : ''}` },
				)
				.setThumbnail(`attachment://image.png`);

			await interaction.reply({ embeds: [embed], files: [attachment] });
			}
			else {
				interaction.reply({ content: `Please enter valid colors`, ephemeral: true })
			}
		}

		else if (type === '45 degrees') {
			if (checkColor(colors[0]) && checkColor(colors[1])) {
				if(checkColor(colors[2])) {
					if(checkColor(colors[3])) {
						if(checkColor(colors[4])) {
							if(checkColor(colors[5])) {
								if(checkColor(colors[6])) {
									if(checkColor(colors[7])) {
										if(checkColor(colors[8])) {
											if(checkColor(colors[9])) {
												let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
												gradient.addColorStop(0, `${colors[0]}`);
												gradient.addColorStop(0.11, `${colors[1]}`);
												gradient.addColorStop(0.22, `${colors[2]}`);
												gradient.addColorStop(0.33, `${colors[3]}`);
												gradient.addColorStop(0.44, `${colors[4]}`);
												gradient.addColorStop(0.56, `${colors[5]}`);
												gradient.addColorStop(0.67, `${colors[6]}`);
												gradient.addColorStop(0.78, `${colors[7]}`);
												gradient.addColorStop(0.89, `${colors[8]}`);
												gradient.addColorStop(1, `${colors[9]}`);
												ctx.fillStyle = gradient;
												ctx.fillRect(0, 0, canvas.width, canvas.height)	
											}
											else {
												let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
												gradient.addColorStop(0, `${colors[0]}`);
												gradient.addColorStop(0.125, `${colors[1]}`);
												gradient.addColorStop(0.25, `${colors[2]}`);
												gradient.addColorStop(0.375, `${colors[3]}`);
												gradient.addColorStop(0.5, `${colors[4]}`);
												gradient.addColorStop(0.625, `${colors[5]}`);
												gradient.addColorStop(0.75, `${colors[6]}`);
												gradient.addColorStop(0.875, `${colors[7]}`);
												gradient.addColorStop(1, `${colors[8]}`);
												ctx.fillStyle = gradient;
												ctx.fillRect(0, 0, canvas.width, canvas.height)	
											}
										}
										else {
											let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
											gradient.addColorStop(0, `${colors[0]}`);
											gradient.addColorStop(0.14, `${colors[1]}`);
											gradient.addColorStop(0.29, `${colors[2]}`);
											gradient.addColorStop(0.43, `${colors[3]}`);
											gradient.addColorStop(0.57, `${colors[4]}`);
											gradient.addColorStop(0.71, `${colors[5]}`);
											gradient.addColorStop(0.86, `${colors[6]}`);
											gradient.addColorStop(1, `${colors[7]}`);
											ctx.fillStyle = gradient;
											ctx.fillRect(0, 0, canvas.width, canvas.height)	
										}
									}
									else {
										let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
										gradient.addColorStop(0, `${colors[0]}`);
										gradient.addColorStop(0.16, `${colors[1]}`);
										gradient.addColorStop(0.33, `${colors[2]}`);
										gradient.addColorStop(0.5, `${colors[3]}`);
										gradient.addColorStop(0.66, `${colors[4]}`);
										gradient.addColorStop(0.83, `${colors[5]}`);
										gradient.addColorStop(1, `${colors[6]}`);
										ctx.fillStyle = gradient;
										ctx.fillRect(0, 0, canvas.width, canvas.height)	
									}
								}
								else {
									let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
									gradient.addColorStop(0, `${colors[0]}`);
									gradient.addColorStop(0.2, `${colors[1]}`);
									gradient.addColorStop(0.4, `${colors[2]}`);
									gradient.addColorStop(0.6, `${colors[3]}`);
									gradient.addColorStop(0.8, `${colors[4]}`);
									gradient.addColorStop(1, `${colors[5]}`);
									ctx.fillStyle = gradient;
									ctx.fillRect(0, 0, canvas.width, canvas.height)			
								}
							}
							else {
								let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
								gradient.addColorStop(0, `${colors[0]}`);
								gradient.addColorStop(0.25, `${colors[1]}`);
								gradient.addColorStop(0.5, `${colors[2]}`);
								gradient.addColorStop(0.75, `${colors[3]}`);
								gradient.addColorStop(1, `${colors[4]}`);
								ctx.fillStyle = gradient;
								ctx.fillRect(0, 0, canvas.width, canvas.height)			
							}
						}
						else {
							let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
							gradient.addColorStop(0, `${colors[0]}`);
							gradient.addColorStop(0.33, `${colors[1]}`);
							gradient.addColorStop(0.66, `${colors[2]}`);
							gradient.addColorStop(1, `${colors[3]}`);
							ctx.fillStyle = gradient;
							ctx.fillRect(0, 0, canvas.width, canvas.height)			
						}
					}
					else {
						let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
						gradient.addColorStop(0, `${colors[0]}`);
						gradient.addColorStop(0.5, `${colors[1]}`);
						gradient.addColorStop(1, `${colors[2]}`);
						ctx.fillStyle = gradient;
						ctx.fillRect(0, 0, canvas.width, canvas.height)
					}
				}
				else {
					let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
					gradient.addColorStop(0, `${colors[0]}`);
					gradient.addColorStop(1, `${colors[1]}`);
					ctx.fillStyle = gradient;
					ctx.fillRect(0, 0, canvas.width, canvas.height)
				}
				const attachment = new AttachmentBuilder(await canvas.toBuffer('image/png'), { name: `image.png` })
				const embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle(`Linear Gradient (45°)`)
				.addFields(
					{ 
						name: 'Colors:', 
						value: `${colors[0]}, ${colors[1]}${(checkColor(colors[2])) ? ', '+colors[2] : ''}${(checkColor(colors[3])) ? ', '+colors[3] : ''}${(checkColor(colors[4])) ? ', '+colors[4] : ''}${(checkColor(colors[5])) ? ', '+colors[5] : ''}${(checkColor(colors[6])) ? ', '+colors[6] : ''}${(checkColor(colors[7])) ? ', '+colors[7] : ''}${(checkColor(colors[8])) ? ', '+colors[8] : ''}${(checkColor(colors[9])) ? ', '+colors[9] : ''}` },
				)
				.setThumbnail(`attachment://image.png`);

			await interaction.reply({ embeds: [embed], files: [attachment] });
			}
			else {
				interaction.reply({ content: `Please enter valid colors`, ephemeral: true })
			}
		}


		else {
			if (checkColor(colors[0]) && checkColor(colors[1])) {
				if(checkColor(colors[2])) {
					if(checkColor(colors[3])) {
						if(checkColor(colors[4])) {
							if(checkColor(colors[5])) {
								if(checkColor(colors[6])) {
									if(checkColor(colors[7])) {
										if(checkColor(colors[8])) {
											if(checkColor(colors[9])) {
												let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
												gradient.addColorStop(0, `${colors[0]}`);
												gradient.addColorStop(0.11, `${colors[1]}`);
												gradient.addColorStop(0.22, `${colors[2]}`);
												gradient.addColorStop(0.33, `${colors[3]}`);
												gradient.addColorStop(0.44, `${colors[4]}`);
												gradient.addColorStop(0.56, `${colors[5]}`);
												gradient.addColorStop(0.67, `${colors[6]}`);
												gradient.addColorStop(0.78, `${colors[7]}`);
												gradient.addColorStop(0.89, `${colors[8]}`);
												gradient.addColorStop(1, `${colors[9]}`);
												ctx.fillStyle = gradient;
												ctx.fillRect(0, 0, canvas.width, canvas.height)	
											}
											else {
												let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
												gradient.addColorStop(0, `${colors[0]}`);
												gradient.addColorStop(0.125, `${colors[1]}`);
												gradient.addColorStop(0.25, `${colors[2]}`);
												gradient.addColorStop(0.375, `${colors[3]}`);
												gradient.addColorStop(0.5, `${colors[4]}`);
												gradient.addColorStop(0.625, `${colors[5]}`);
												gradient.addColorStop(0.75, `${colors[6]}`);
												gradient.addColorStop(0.875, `${colors[7]}`);
												gradient.addColorStop(1, `${colors[8]}`);
												ctx.fillStyle = gradient;
												ctx.fillRect(0, 0, canvas.width, canvas.height)	
											}
										}
										else {
											let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
											gradient.addColorStop(0, `${colors[0]}`);
											gradient.addColorStop(0.14, `${colors[1]}`);
											gradient.addColorStop(0.29, `${colors[2]}`);
											gradient.addColorStop(0.43, `${colors[3]}`);
											gradient.addColorStop(0.57, `${colors[4]}`);
											gradient.addColorStop(0.71, `${colors[5]}`);
											gradient.addColorStop(0.86, `${colors[6]}`);
											gradient.addColorStop(1, `${colors[7]}`);
											ctx.fillStyle = gradient;
											ctx.fillRect(0, 0, canvas.width, canvas.height)	
										}
									}
									else {
										let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
										gradient.addColorStop(0, `${colors[0]}`);
										gradient.addColorStop(0.16, `${colors[1]}`);
										gradient.addColorStop(0.33, `${colors[2]}`);
										gradient.addColorStop(0.5, `${colors[3]}`);
										gradient.addColorStop(0.66, `${colors[4]}`);
										gradient.addColorStop(0.83, `${colors[5]}`);
										gradient.addColorStop(1, `${colors[6]}`);
										ctx.fillStyle = gradient;
										ctx.fillRect(0, 0, canvas.width, canvas.height)	
									}
								}
								else {
									let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
									gradient.addColorStop(0, `${colors[0]}`);
									gradient.addColorStop(0.2, `${colors[1]}`);
									gradient.addColorStop(0.4, `${colors[2]}`);
									gradient.addColorStop(0.6, `${colors[3]}`);
									gradient.addColorStop(0.8, `${colors[4]}`);
									gradient.addColorStop(1, `${colors[5]}`);
									ctx.fillStyle = gradient;
									ctx.fillRect(0, 0, canvas.width, canvas.height)			
								}
							}
							else {
								let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
								gradient.addColorStop(0, `${colors[0]}`);
								gradient.addColorStop(0.25, `${colors[1]}`);
								gradient.addColorStop(0.5, `${colors[2]}`);
								gradient.addColorStop(0.75, `${colors[3]}`);
								gradient.addColorStop(1, `${colors[4]}`);
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
					gradient.addColorStop(1, `${colors[1]}`);
					ctx.fillStyle = gradient;
					ctx.fillRect(0, 0, canvas.width, canvas.height)
				}
				const attachment = new AttachmentBuilder(await canvas.toBuffer('image/png'), { name: `image.png` })
				const embed = new EmbedBuilder()
				.setColor(0x000000)
				.setTitle(`Linear Gradient`)
				.addFields(
					{ 
						name: 'Colors:', 
						value: `${colors[0]}, ${colors[1]}${(checkColor(colors[2])) ? ', '+colors[2] : ''}${(checkColor(colors[3])) ? ', '+colors[3] : ''}${(checkColor(colors[4])) ? ', '+colors[4] : ''}${(checkColor(colors[5])) ? ', '+colors[5] : ''}${(checkColor(colors[6])) ? ', '+colors[6] : ''}${(checkColor(colors[7])) ? ', '+colors[7] : ''}${(checkColor(colors[8])) ? ', '+colors[8] : ''}${(checkColor(colors[9])) ? ', '+colors[9] : ''}` },
				)
				.setThumbnail(`attachment://image.png`);

			await interaction.reply({ embeds: [embed], files: [attachment] });
			}
			else {
				interaction.reply({ content: `Please enter valid colors`, ephemeral: true })
			}
		}
	},
};