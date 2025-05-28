const { SlashCommandBuilder, DMChannel, AttachmentBuilder, EmbedBuilder} = require('discord.js');
const Canvas = require("@napi-rs/canvas");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hexcodle')
		.setDescription('Play a game of hexcodle')
		.setDMPermission(false),
	async execute(interaction) {
		const canvas = Canvas.createCanvas(100, 100);
		const ctx = canvas.getContext('2d');

		const r = Math.round(Math.random() * 255);
		const g = Math.round(Math.random() * 255);
		const b = Math.round(Math.random() * 255);

		let HexR = r.toString(16).toUpperCase();
		let HexG = g.toString(16).toUpperCase();
		let HexB = b.toString(16).toUpperCase();
		if (r < 16) {HexR = '0' + HexR}
		if (g < 16) {HexG = '0' + HexG}
		if (b < 16) {HexB = '0' + HexB}


		const HexInt = `0x${HexR}${HexG}${HexB}`
		let Hex;
		Hex = `#${HexR}${HexG}${HexB}`

		ctx.fillStyle = `${Hex}`
		ctx.fillRect(0, 0, canvas.width, canvas.height)

		const attachment = new AttachmentBuilder(await canvas.toBuffer('image/png'), { name: `image.png` })
		// interaction.reply({ content: `${Hex}`, files: [attachment] });

		const embed = new EmbedBuilder()
			.setColor(Number(HexInt))
			.setThumbnail(`attachment://image.png`);

		let responseObj = {
			guessTotal: 0,
			guessed: [[], [], [], [], []],
		}

		let validChars = '0123456789abcdef';

		if (interaction.channel) {
			await interaction.reply({ embeds: [embed], files: [attachment], content: `## Hexcodle\nTotal Guesses: ${responseObj.guessTotal}/5\nPrevious Guesses:\n` })
				.then(() => {
					const collector = interaction.channel.createMessageCollector({
						filter: m => m.author.id === interaction.user.id && "#" == m.content[0] && validChars.includes(m.content[1].toLowerCase()) && validChars.includes(m.content[2].toLowerCase()) && validChars.includes(m.content[3].toLowerCase()) && validChars.includes(m.content[4].toLowerCase()) && validChars.includes(m.content[5].toLowerCase()) && validChars.includes(m.content[6].toLowerCase()) && m.content.length === 7,
						time: 300000
					});

					collector.on('collect', m => {
						let hints = " ";
						for(let i = 1; i <= 6; i++) {
							if (m.content.toLowerCase()[i] === Hex.toLowerCase()[i]) {
								hints += ':white_check_mark:';
							}
							else if (parseInt(m.content.toLowerCase()[i], 16) > parseInt(Hex.toLowerCase()[i], 16)) {
								let diff = parseInt(m.content.toLowerCase()[i], 16) - parseInt(Hex.toLowerCase()[i], 16);
								if (diff <= 2) {
									hints += ':arrow_down_small:'
								}
								else {
									hints += ':arrow_double_down:'
								}
							}
							else {
								let diff = parseInt(Hex.toLowerCase()[i], 16) - parseInt(m.content.toLowerCase()[i], 16);
								if (diff <= 2) {
									hints += ':arrow_up_small:'
								}
								else {
									hints += ':arrow_double_up:'
								}
							}
						}
						responseObj.guessed[responseObj.guessTotal] = [m.content, hints];
						responseObj.guessTotal++;

						interaction.editReply({ content:`## Hexcodle\nTotal Guesses: ${responseObj.guessTotal}/5\nPrevious Guesses:\n${responseObj.guessed[0]}\n${responseObj.guessed[1]}\n${responseObj.guessed[2]}\n${responseObj.guessed[3]}\n${responseObj.guessed[4]}\n` })

						if (m.content.toLowerCase() === Hex.toLowerCase()) {
							collector.stop('win');
						}
						if (responseObj.guessTotal === 5) {
							collector.stop('fail');
						}
					})

					collector.on('end', (collected, reason) => {
						if (reason === 'win') {
							interaction.channel.send('You Win!');
						}
						else if (reason === 'fail') {
							interaction.channel.send(`You Lose! The hex code was \`\`${Hex}\`\``);
						}
						else {
							interaction.channel.send(`You ran out of time! The hex code was \`\`${Hex}\`\``);
						}
					})
				});
		}
		else {
			interaction.reply({ content: 'Hexcodle currently doesn\'t work in DMs. Please use this command in a server channel for the time being. Sorry.', ephemeral: true });
		}
	},
};