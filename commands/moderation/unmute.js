const { SlashCommandBuilder, Client, GatewayIntentBits, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unmute')
        .setDescription('Unmute a user on your server (only people with mute perms can use)')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to mute')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
        .setDMPermission(false),
    async execute(interaction) {

        if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.ModerateMembers, true)) {
            return interaction.reply({ content: 'The bot does not have permissions to Timeout Members.', ephemeral: true });
        }

        let user = interaction.options.getMember('user');

        if (user.permissions.has(PermissionFlagsBits.Administrator, true)) {
            return interaction.reply({ content: 'The user could not be unmuted as they have Administrator permissions.', ephemeral: true });
        }

        await user.timeout(null);

        interaction.client.users.send(user.id, `You have been unmuted on \`\`${interaction.guild.name}\`\`.`);
        interaction.reply({ content: `${user} has been unmuted.`, ephemeral: true });
    },
};