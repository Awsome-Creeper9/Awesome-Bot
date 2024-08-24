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
        let user = interaction.options.getMember('user');

        await user.timeout(null);

        interaction.client.users.send(user.id, `You have been unmuted on \`\`${interaction.guild.name}\`\`.`);
        interaction.reply({ content: `${user} has been unmuted.`, ephemeral: true });
    },
};