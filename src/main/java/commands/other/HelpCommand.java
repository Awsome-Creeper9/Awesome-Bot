package commands.other;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.events.interaction.command.CommandAutoCompleteInteractionEvent;
import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.interactions.commands.Command;
import net.dv8tion.jda.api.interactions.commands.OptionType;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;
import net.dv8tion.jda.api.interactions.commands.build.Commands;
import net.dv8tion.jda.api.interactions.commands.build.OptionData;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class HelpCommand extends ListenerAdapter {
    public static CommandData commandData = Commands.slash("help", "Get info on commands and how to use them")
            .addOptions(
                    new OptionData(OptionType.STRING, "command", "Specify a command you need help with")
            );

    private final String[] commandList = {"help", "ping", "echo", "kill", "rps"};

    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals(commandData.getName())) {
            String command = (event.getOption("command") != null) ? event.getOption("command").getAsString() : "";

            EmbedBuilder embedBuilder = new EmbedBuilder();

            if (command.equals("help")) {
                embedBuilder
                        .setColor(0x000000)
                        .setTitle("/help")
                        .setDescription("/help [command]")
                        .addField("Description:", "Sends a list of all the commands or the info on a specific command.", false)
                        .addField("[command]:", "*Optional*. The ``command`` value allows you to obtain info on a specific command.", false);
            }
            else if (command.equals("ping")) {
                embedBuilder
                        .setColor(0x000000)
                        .setTitle("/ping")
                        .setDescription("/ping")
                        .addField("Description:", "Returns \"Pong!\".", false);
            }
            else if (command.equals("echo")) {
                embedBuilder
                        .setColor(0x000000)
                        .setTitle("/echo")
                        .setDescription("/echo <message>")
                        .addField("Description:", "Sends a message directly back to the channel.", false)
                        .addField("<message>:", "**Required**. The ``message`` value is what the bot will send back.", false);
            }
            else if (command.equals("kill")) {
                embedBuilder
                        .setColor(0x000000)
                        .setTitle("/kill")
                        .setDescription("/kill <user> [method] [item-name]")
                        .addField("Description:", "Allows you to \"kill\" another user.", false)
                        .addField("<user>:", "**Required**. The ``user`` value provides the user to be \"killed\".", false)
                        .addField("[method]:", "*Optional*. The ``method`` value sets the method of the ``user``\\'s death (default: generic).", false)
                        .addField("[item-name]:", "*Optional*. The ``item-name`` value sets the name of the item used to \"kill\" the ``user`` (if applicable).", false)
                        .addField("*Additional Info*:", "The full list of valid ``method`` values is on the [wiki](https://github.com/Awsome-Creeper9/Awesome-Bot/wiki/kill).", false);
            }
            else if (command.equals("rps")) {
                embedBuilder
                        .setColor(0x000000)
                        .setTitle("/rps")
                        .setDescription("/rps <choice>")
                        .addField("Description:", "Allows you to play rock, paper, scissors with the bot.", false)
                        .addField("<choice>:", "**Required**. The ``choice`` value is your choice between rock, paper, or scissors.", false);
            }
            else {
                embedBuilder
                        .setColor(0x000000)
                        .setTitle("Help:")
                        .setUrl("https://github.com/Awsome-Creeper9/Awesome-Bot/wiki/")
                        .addField("help", "/help [command]", false)
                        .addField("ping", "/ping", false)
                        .addField("echo", "/echo <message>", false)
                        .addField("kill", "/kill <user> [method] [item-name]", false)
                        .addField("rps", "/rps <choice>", false);
            }

            event.replyEmbeds(embedBuilder.build()).queue();
        }
    }

    @Override
    public void onCommandAutoCompleteInteraction(CommandAutoCompleteInteractionEvent event) {
        if (event.getName().equals(commandData.getName()) && event.getFocusedOption().getName().equals("command")) {
            List<Command.Choice> options = Stream.of(commandList)
                    .filter(c -> c.startsWith(event.getFocusedOption().getValue()))
                    .map(c -> new Command.Choice(c, c))
                    .collect(Collectors.toList());
            int initSize = options.size();
            for (int i = 0; i < initSize - 25; i++) {
                options.removeLast();
            }
            event.replyChoices(options).queue();
        }
    }
}