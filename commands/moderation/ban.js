const { SlashCommandBuilder, Client, GatewayIntentBits, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a user on your server (only people with ban perms can use)')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to ban')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for the ban'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),
    async execute(interaction) {

        if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.BanMembers, true)) {
            return interaction.reply({ content: 'The bot does not have permissions to Ban Members.', ephemeral: true });
        }

        let user = interaction.options.getMember('user');
        let reason = interaction.options.getString('reason');

        if (user.permissions.has(PermissionFlagsBits.Administrator, true)) {
            return interaction.reply({ content: 'The user could not be banned as they have Administrator permissions.', ephemeral: true });
        }

        if (reason) {
            // interaction.client.users.send(user.id, `You have been muted on \`\`${interaction.guild.name}\`\` for \`\`${time} hours\`\` for the reason \`\`${reason}\`\`.`);
            interaction.reply({ content: `${user} has been banned for the reason \`\`${reason}\`\`.`, ephemeral: true });
            await user.ban(user, { reason: reason });
        }
        else {
            // interaction.client.users.send(user.id, `You have been muted on \`\`${interaction.guild.name}\`\` for \`\`${time} hours\`\`.`);
            interaction.reply({ content: `${user} has been banned.`, ephemeral: true });
            await user.ban(user);
        }
    },
};