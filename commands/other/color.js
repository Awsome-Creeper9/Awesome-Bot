const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('color')
        .setDescription('Display a color')
        .addStringOption(option =>
            option.setName('color')
                .setDescription('Color to display')
                .setRequired(true)),
    async execute(interaction) {
        const color = interaction.options.getString('color')

        const canvas = Canvas.createCanvas(1000, 1000);
        const ctx = canvas.getContext('2d');

        function checkColor(color) {
            return !!color;
        }
        let title = color;
        gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `${color}`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let displayColor;
        if (color[0] === '#') {
            displayColor = color.length === 7 || color.length === 9 ?parseInt(color.slice(1, 7), 16) : 0x000000;
        }
        else {
            displayColor = 0x000000;
        }

        const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: `image.png` }) //await?
        const embed = new EmbedBuilder()
            .setColor(displayColor)
            .setTitle(title)
            .addFields(
                {
                    name: 'Color:',
                    value: `${color}` },
            )
            .setThumbnail(`attachment://image.png`);

        interaction.reply({ embeds: [embed], files: [attachment] }); //await?
    },
};