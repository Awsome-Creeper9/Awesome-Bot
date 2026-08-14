package commands.fun;

import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.interactions.commands.OptionType;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;
import net.dv8tion.jda.api.interactions.commands.build.Commands;
import net.dv8tion.jda.api.interactions.commands.build.OptionData;

public class EchoCommand extends ListenerAdapter{
    public static CommandData commandData = Commands.slash("echo", "Repeats a message")
            .addOptions(
                    new OptionData(OptionType.STRING, "message", "Message to be sent back", true)
            );

    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals(commandData.getName())) {
            String message = event.getOption("message").getAsString();

            event.reply("Message sent").setEphemeral(true).queue();

            event.getChannel().sendMessage(message).queue();
        }
    }
}
