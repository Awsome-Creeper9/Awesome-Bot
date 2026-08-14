package commands.other;

import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.interactions.commands.OptionType;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;
import net.dv8tion.jda.api.interactions.commands.build.Commands;
import net.dv8tion.jda.api.interactions.commands.build.OptionData;

public class ChangeCaseCommand extends ListenerAdapter {
    public static CommandData commandData = Commands.slash("change-case", "Convert text to either uppercase or lowercase")
            .addOptions(
                    new OptionData(OptionType.STRING, "text", "Text to convert to either uppercase or lowercase", true),
                    new OptionData(OptionType.STRING, "case", "Uppercase or lowercase", true)
                            .addChoice("Uppercase", "upper")
                            .addChoice("Lowercase", "lower")
            );

    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals(commandData.getName())) {
            String text = event.getOption("text").getAsString();
            String choice = event.getOption("case").getAsString();

            if (choice.equals("upper")) {
                event.reply(text.toUpperCase()).queue();
            }
            else {
                event.reply(text.toLowerCase()).queue();
            }

        }
    }
}
