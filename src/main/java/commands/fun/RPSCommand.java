package commands.fun;

import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.interactions.commands.OptionType;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;
import net.dv8tion.jda.api.interactions.commands.build.Commands;
import net.dv8tion.jda.api.interactions.commands.build.OptionData;

public class RPSCommand extends ListenerAdapter {
    public static CommandData commandData = Commands.slash("rps", "Play Rock, Paper, Scissors against the bot")
            .addOptions(
                    new OptionData(OptionType.STRING, "choice", "Your choice", true)
                            .addChoice("Rock", "rock")
                            .addChoice("Paper", "paper")
                            .addChoice("Scissors", "scissors")
            );

    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals(commandData.getName())) {
            String choice = event.getOption("choice").getAsString();
            int botChoice = (int) (Math.random() * 3);

            if (botChoice == 0) {
                if (choice.equals("rock")) {event.reply("You chose `rock` and I chose `rock`; We tied.").queue();}
                else if (choice.equals("paper")) {event.reply("You chose `paper` and I chose `rock`; You won.").queue();}
                else {event.reply("You chose `scissors` and I chose `rock`; I won.").queue();}
            }
            else if (botChoice == 1) {
                if (choice.equals("rock")) {event.reply("You chose `rock` and I chose `paper`; I won.").queue();}
                else if (choice.equals("paper")) {event.reply("You chose `paper` and I chose `paper`; We tied.").queue();}
                else {event.reply("You chose `scissors` and I chose `paper`; You won.").queue();}
            }
            else {
                if (choice.equals("rock")) {event.reply("You chose `rock` and I chose `scissors`; You won.").queue();}
                else if (choice.equals("paper")) {event.reply("You chose `paper` and I chose `scissors`; I won.").queue();}
                else {event.reply("You chose `scissors` and I chose `scissors`; We tied.").queue();}
            }
        }
    }
}
