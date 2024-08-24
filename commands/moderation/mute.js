const { SlashCommandBuilder, Client, GatewayIntentBits, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Mute a user on your server (only people with mute perms can use)')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to mute')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for the mute'))
        .addNumberOption(option =>
            option.setName('time')
                .setDescription('The time in hours for the mute')
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
        .setDMPermission(false),
    async execute(interaction) {
        let user = interaction.options.getMember('user');
        let reason = interaction.options.getString('reason');
        let time = interaction.options.getNumber('time');

        if (time == null || time <= 0) {
            time = 28 * 24;
        }

        await user.timeout(time * 3600000);

        if (reason) {
            if (time >= 24) {
                interaction.client.users.send(user.id, `You have been muted on \`\`${interaction.guild.name}\`\` for \`\`${time / 24} days\`\` for the reason \`\`${reason}\`\`.`);
                interaction.reply({ content: `${user} has been muted for \`\`${time / 24} days\`\` for the reason \`\`${reason}\`\`.`, ephemeral: true });
            }
            else {
                interaction.client.users.send(user.id, `You have been muted on \`\`${interaction.guild.name}\`\` for \`\`${time} hours\`\` for the reason \`\`${reason}\`\`.`);
                interaction.reply({ content: `${user} has been muted for \`\`${time} hours\`\` for the reason \`\`${reason}\`\`.`, ephemeral: true });
            }
        }
        else {
            if (time >= 24) {
                interaction.client.users.send(user.id, `You have been muted on \`\`${interaction.guild.name}\`\` for \`\`${time / 24} days\`\`.`);
                interaction.reply({ content: `${user} has been muted for \`\`${time / 24} days\`\`.`, ephemeral: true });
            }
            else {
                interaction.client.users.send(user.id, `You have been muted on \`\`${interaction.guild.name}\`\` for \`\`${time} hours\`\`.`);
                interaction.reply({ content: `${user} has been muted for \`\`${time} hours\`\`.`, ephemeral: true });
            }
        }
    },
};