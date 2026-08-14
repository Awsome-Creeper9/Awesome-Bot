package commands.fun;

import net.dv8tion.jda.api.entities.User;
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

public class KillCommand extends ListenerAdapter{
    public static CommandData commandData = Commands.slash("kill", "Kills a user")
            .addOptions(
                    new OptionData(OptionType.USER, "user", "User to be killed", true),
                    new OptionData(OptionType.STRING, "method", "Method of how the user was killed", false, true),
                    new OptionData(OptionType.STRING, "item-name", "Name of item used to kill the user")
            );

    private final String[] methodList = {"random", "generic", "player generic", "melee", "ranged", "cactus", "cactus escape", "fall", "hit ground too hard", "hit ground too hard escape", "fell off ladder", "fell off vines", "fell off weeping vines", "fell off twisting vines", "fell off scaffolding", "fell while climbing", "fell out of water", "doomed fall", "void", "void escape", "magic", "magic escape", "player magic", "explosion", "player explosion", "starvation", "starve while fighting", "lightning", "lightning while fighting", "wither", "wither while fighting", "firework", "berry bush", "berry bush escape", "lava", "lava escape", "magma", "magma escape", "drowning", "drowning escape", "freezing", "freezing escape", "fire", "burning", "burned while fighting", "fire while fighting", "kinetic energy", "kinetic energy escape", "anvil", "falling block", "suffocation", "suffocated while fighting", "trident", "stalagmite", "stalagmite while fighting", "stalactite", "bed", "cramming", "cramming escape", "thorns", "fireball", "bee", "warden", "wither skull", "world border", "world border while fighting", "dehydration", "dehydration escape", "command", "command while fighting", "snowball", "crossbow firework", "warden escape", "even more magic", "mace", "spear", "hot sulfur cube", "hot sulfur cube escape"};

    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals(commandData.getName())) {
            User user = event.getOption("user").getAsUser();
            String userString = "<@" + user.getId() + ">";
            String method = (event.getOption("method") != null) ? event.getOption("method").getAsString() : "";
            String item = (event.getOption("item-name") != null) ? event.getOption("item-name").getAsString() : "";
            String interactionUserString = "<@" + event.getUser().getId() + ">";

            String[] methodList = {"generic", "player generic", "melee", "ranged", "cactus", "cactus escape", "fall", "hit ground too hard", "hit ground too hard escape", "fell off ladder", "fell off vines", "fell off weeping vines", "fell off twisting vines", "fell off scaffolding", "fell while climbing", "fell out of water", "doomed fall", "void", "void escape", "magic", "magic escape", "player magic", "explosion", "player explosion", "starvation", "starve while fighting", "lightning", "lightning while fighting", "wither", "wither while fighting", "firework", "berry bush", "berry bush escape", "lava", "lava escape", "magma", "magma escape", "drowning", "drowning escape", "freezing", "freezing escape", "fire", "burning", "burned while fighting", "fire while fighting", "kinetic energy", "kinetic energy escape", "anvil", "falling block", "suffocation", "suffocated while fighting", "trident", "stalagmite", "stalagmite while fighting", "stalactite", "bed", "cramming", "cramming escape", "thorns", "fireball", "bee", "warden", "wither skull", "world border", "world border while fighting", "dehydration", "dehydration escape", "command", "command while fighting", "snowball", "crossbow firework", "warden escape", "even more magic", "mace", "spear", "hot sulfur cube", "hot sulfur cube escape"};

            if (method.equals("random")) {
                method = methodList[(int) (Math.random() * methodList.length)];
            }
            String message;
            if (method.equals("void")) {message = userString + " fell out of the world";}
            else if (method.equals("melee")) {
                if (!item.equals("")) {message = userString + " was slain by " + interactionUserString + " using [*" + item + "*]";}
                else {message = userString + " was slain by " + interactionUserString;}
            }
            else if (method.equals("ranged")) {
                if (!item.equals("")) {message = userString + " was shot by " + interactionUserString + " using [*" + item + "*]";}
                else {message = userString + " was shot by " + interactionUserString;}
            }
            else if (method.equals("cactus")) {message = userString + " was pricked to death";}
            else if (method.equals("cactus escape")) {message = userString + " walked into a cactus while trying to escape " + interactionUserString;}
            else if (method.equals("fall")) {message = userString + " fell from a high place";}
            else if (method.equals("hit ground too hard")) {message = userString + " hit the ground too hard";}
            else if (method.equals("hit the ground too hard escape")) {message = userString + " hit the ground too hard while trying to escape " + interactionUserString;}
            else if (method.equals("fell off ladder")) {message = userString + " fell off a ladder";}
            else if (method.equals("fell off vines")) {message = userString + " fell off some vines";}
            else if (method.equals("fell off weeping vines")) {message = userString + " fell off some weeping vines";}
            else if (method.equals("fell off twisting vines")) {message = userString + " fell off some twisting vines";}
            else if (method.equals("fell off scaffolding")) {message = userString + " fell off scaffolding";}
            else if (method.equals("fell out of water")) {message = "death.fell.accident.water";}
            else if (method.equals("doomed fall")) {
                if (!item.equals("")) {message = userString + " was doomed to fall by " + interactionUserString + " using [*" + item + "*]";}
                else {message = userString + " was doomed to fall by " + interactionUserString;}
            }
            else if (method.equals("void escape")) {message = userString + " didn't want to live in the same world as " + interactionUserString;}
            else if (method.equals("magic")) {message = userString + " was killed by magic";}
            else if (method.equals("magic escape")) {message = userString + " was killed by magic while trying to escape " + interactionUserString;}
            else if (method.equals("player magic")) {
                if (!item.equals("")) {message = userString + " was killed by " + interactionUserString + " using [*" + item + "*]";}
                else {message = userString + " was killed by " + interactionUserString + " using magic";}
            }
            else if (method.equals("explosion")) {message = userString + " blew up";}
            else if (method.equals("player explosion")) {
                if (!item.equals("")) {message = userString + " was blown up by " + interactionUserString + " using [*" + item + "*]";}
                else {message = userString + " was blown up by " + interactionUserString;}
            }
            else if (method.equals("starvation")) {message = userString + " starved to death";}
            else if (method.equals("starve while fighting")) {message = userString + " starved to death while fighting " + interactionUserString;}
            else if (method.equals("lightning")) {message = userString + " was struck by lightning";}
            else if (method.equals("lightning while fighting")) {message = userString + " was struck by lightning while fighting " + interactionUserString;}
            else if (method.equals("wither")) {message = userString + " withered away";}
            else if (method.equals("wither while fighting")) {message = userString + " withered away while fighting " + interactionUserString;}
            else if (method.equals("firework")) {message = userString + " went off with a bang";}
            else if (method.equals("berry bush")) {message = userString + " was poked to death by a sweet berry bush";}
            else if (method.equals("berry bush escape")) {message = userString + " was poked to death by a sweet berry bush while trying to escape " + interactionUserString;}
            else if (method.equals("lava")) {message = userString + " tried to swim in lava";}
            else if (method.equals("lava escape")) {message = userString + " tried to swim in lava while trying to escape " + interactionUserString;}
            else if (method.equals("drowning")) {message = userString + " drowned";}
            else if (method.equals("drowning escape")) {message = userString + " drowned while trying to escape " + interactionUserString;}
            else if (method.equals("magma")) {message = userString + " discovered the floor was lava";}
            else if (method.equals("magma escape")) {message = userString + " walked into the danger zone due to " + interactionUserString;}
            else if (method.equals("freezing")) {message = userString + " froze to death";}
            else if (method.equals("freezing escape")) {message = userString + " was frozen to death by " + interactionUserString;}
            else if (method.equals("fire")) {message = userString + " went up in flames";}
            else if (method.equals("fire while fighting")) {message = userString + " waled into fire while fighting " + interactionUserString;}
            else if (method.equals("burning")) {message = userString + " burned to death";}
            else if (method.equals("burned while fighting")) {message = userString + " burned to a crisp while fighting " + interactionUserString;}
            else if (method.equals("kinetic energy")) {message = userString + " experienced kinetic energy";}
            else if (method.equals("kinetic energy escape")) {message = userString + " experienced kinetic energy while trying to escape " + interactionUserString;}
            else if (method.equals("anvil")) {message = userString + " was squashed by a falling anvil";}
            else if (method.equals("falling block")) {message = userString + " was squashed by a falling block";}
            else if (method.equals("trident")) {
                if (!item.equals("")) {message = userString + " was impaled by " + interactionUserString + " with [*" + item + "*]";}
                else {message = userString + " was impaled by " + interactionUserString;}
            }
            else if (method.equals("stalagmite")) {message = userString + " was impaled by a stalagmite";}
            else if (method.equals("stalagmite while fighting")) {message = userString + " was impaled by a stalagmite while fighting " + interactionUserString;}
            else if (method.equals("stalactite")) {message = userString + " was skewered by a falling stalactite";}
            else if (method.equals("suffocation")) {message = userString + " suffocated in a wall";}
            else if (method.equals("suffocated while fighting")) {message = userString + " suffocated in a wall while fighting " + interactionUserString;}
            else if (method.equals("bed")) {message = userString + " was killed by [Intentional Game Design]";}
            else if (method.equals("cramming")) {message = userString + " was squished too much";}
            else if (method.equals("cramming escape")) {message = userString + " was squashed by " + interactionUserString;}
            else if (method.equals("thorns")) {message = userString + " was killed trying to hurt " + interactionUserString;}
            else if (method.equals("fireball")) {message = userString + " was fireballed by " + interactionUserString;}
            else if (method.equals("bee")) {message = userString + " was stung to death";}
            else if (method.equals("warden")) {message = userString + " was obliterated by a sonically-charged shriek";}
            else if (method.equals("warden escape") && !item.equals("")) {message = userString + " was obliterated by a sonically-charged shriek while trying to escape " + interactionUserString + " wielding [*" + item + "*]";}
            else if (method.equals("wither skull")) {message = userString + " was shot by a skull from " + interactionUserString;}
            else if (method.equals("world border")) {message = userString + " left the confines of this world";}
            else if (method.equals("world border while fighting")) {message = userString + "left the confines of this world while fighting " + interactionUserString;}
            else if (method.equals("dehydration")) {message = userString + " died from dehydration";}
            else if (method.equals("dehydration escape")) {message = userString + " died from dehydration while trying to escape " + interactionUserString;}
            else if (method.equals("player generic")) {message = userString + " died because of " + interactionUserString;}
            else if (method.equals("command")) {message = userString + " was killed";}
            else if (method.equals("command while fighting")) {message = userString + " was killed while fighting " + interactionUserString;}
            else if (method.equals("snowball")) {message = userString + " was pummeled by " + interactionUserString;}
            else if (method.equals("crossbow firework") && !item.equals("")) {message = userString + " went off with a bang due to a firework fired from [*" + item + "*] by " + interactionUserString;}
            else if (method.equals("even more magic")) {message = userString + " was killed by even more magic";}
            else if (method.equals("mace")) {
                if (!item.equals("")) {message = userString + " was smashed by " + interactionUserString + " with [*" + item + "*]";}
                else {message = userString + " was smashed by " + interactionUserString;}
            }
            else if (method.equals("spear")) {
                if (!item.equals("")) {message = userString + " was speared by " + interactionUserString + " using [*" + item + "*]";}
                else {message = userString + " was speared by " + interactionUserString;}
            }
            else if (method.equals("hot sulfur cube")) {message = userString + " died because not just the floor is lava";}
            else if (method.equals("hot sulfur cube escape")) {message = interactionUserString + " showed " + userString + " that not just the floor is lava";}
            else {message = userString + " died";}

            event.reply(message).queue();
        }
    }

    @Override
    public void onCommandAutoCompleteInteraction(CommandAutoCompleteInteractionEvent event) {
        if (event.getName().equals(commandData.getName()) && event.getFocusedOption().getName().equals("method")) {
            List<Command.Choice> options = Stream.of(methodList)
                    .filter(m -> m.startsWith(event.getFocusedOption().getValue()))
                    .map(m -> new Command.Choice(m, m))
                    .collect(Collectors.toList());
            int initSize = options.size();
            for (int i = 0; i < initSize - 25; i++) {
                options.removeLast();
            }
            event.replyChoices(options).queue();
        }
    }
}
