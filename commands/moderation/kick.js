const { SlashCommandBuilder, Client, GatewayIntentBits, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a user on your server (only people with kick perms can use)')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to kick')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for the kick'))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .setDMPermission(false),
    async execute(interaction) {

        if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.KickMembers, true)) {
            return interaction.reply({ content: 'The bot does not have permissions to Kick Members.', ephemeral: true });
        }

        let user = interaction.options.getMember('user');
        let reason = interaction.options.getString('reason');

        if (user.permissions.has(PermissionFlagsBits.Administrator, true)) {
            return interaction.reply({ content: 'The user could not be kicked as they have Administrator permissions.', ephemeral: true });
        }

        if (reason) {
            // interaction.client.users.send(user.id, `You have been kicked from \`\`${interaction.guild.name}\`\` for the reason \`\`${reason}\`\`.`);
            interaction.reply({ content: `${user} has been kicked for the reason \`\`${reason}\`\`.`, ephemeral: true });
        }
        else {
            // interaction.client.users.send(user.id, `You have been kicked from \`\`${interaction.guild.name}\`\`.`);
            interaction.reply({ content: `${user} has been kicked.`, ephemeral: true });
        }

        await user.kick(reason);
    },
};