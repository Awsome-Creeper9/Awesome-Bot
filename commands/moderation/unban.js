const { SlashCommandBuilder, Client, GatewayIntentBits, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unban')
        .setDescription('Unban a user on your server (only people with ban perms can use)')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to unban')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),
    async execute(interaction) {

        if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.BanMembers, true)) {
            return interaction.reply({ content: 'The bot does not have permissions to Ban Members.', ephemeral: true });
        }

        let user = interaction.options.getUser('user');

        // interaction.client.users.send(user.id, `You have been muted on \`\`${interaction.guild.name}\`\` for \`\`${time} hours\`\` for the reason \`\`${reason}\`\`.`);


        // await interaction.guild.members.unban(user);
        interaction.guild.bans.remove(user)
            .then(user => interaction.reply({ content: `${user} has been unbanned.`, ephemeral: true }))
            .catch(console.error);
    },
};