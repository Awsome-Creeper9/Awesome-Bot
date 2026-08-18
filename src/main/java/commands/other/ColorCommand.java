package commands.other;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.interactions.commands.OptionType;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;
import net.dv8tion.jda.api.interactions.commands.build.Commands;
import net.dv8tion.jda.api.interactions.commands.build.OptionData;
import net.dv8tion.jda.api.utils.FileUpload;

public class ColorCommand extends ListenerAdapter {
    public static CommandData commandData = Commands.slash("color", "Display a color")
            .addOptions(
                    new OptionData(OptionType.STRING, "color", "Color to display", true)
            );

    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals(commandData.getName())) {

            int red = 255;
            int green = 255;
            int blue = 255;
            int alpha = 255;
            boolean invalid = false;
            try {
                switch (event.getOption("color").getAsString().length() - 1) {
                    case 8:
                        red = Integer.parseInt(event.getOption("color").getAsString().substring(1, 3), 16);
                        green = Integer.parseInt(event.getOption("color").getAsString().substring(3, 5), 16);
                        blue = Integer.parseInt(event.getOption("color").getAsString().substring(5, 7), 16);
                        alpha = Integer.parseInt(event.getOption("color").getAsString().substring(7, 9), 16);
                        break;
                    case 6:
                        red = Integer.parseInt(event.getOption("color").getAsString().substring(1, 3), 16);
                        green = Integer.parseInt(event.getOption("color").getAsString().substring(3, 5), 16);
                        blue = Integer.parseInt(event.getOption("color").getAsString().substring(5, 7), 16);
                        break;
                    case 4:
                        red = Integer.parseInt(event.getOption("color").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color").getAsString().substring(1, 2), 16);
                        green = Integer.parseInt(event.getOption("color").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color").getAsString().substring(2, 3), 16);
                        blue = Integer.parseInt(event.getOption("color").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color").getAsString().substring(3, 4), 16);
                        alpha = Integer.parseInt(event.getOption("color").getAsString().substring(4, 5), 16) * 16 + Integer.parseInt(event.getOption("color").getAsString().substring(4, 5), 16);
                        break;
                    case 3:
                        red = Integer.parseInt(event.getOption("color").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color").getAsString().substring(1, 2), 16);
                        green = Integer.parseInt(event.getOption("color").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color").getAsString().substring(2, 3), 16);
                        blue = Integer.parseInt(event.getOption("color").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color").getAsString().substring(3, 4), 16);
                        break;
                    default:
                        invalid = true;
                }
            }
            catch (NumberFormatException e) {
                invalid = true;
            }

            Color color = new Color(red, green, blue, alpha);

            BufferedImage img = new BufferedImage(1000, 1000, BufferedImage.TYPE_INT_ARGB);
            Graphics2D g2d = img.createGraphics();

            g2d.setColor(color);
            g2d.fillRect(0, 0, img.getWidth(), img.getHeight());
            g2d.dispose();

            try {
                ImageIO.write(img, "png", new File("output.png"));
            } catch (IOException e) {
                e.printStackTrace();
            }

            EmbedBuilder embedBuilder = new EmbedBuilder();

            String rStr = Integer.toHexString(color.getRed()) + "";
            String gStr = Integer.toHexString(color.getGreen()) + "";
            String bStr = Integer.toHexString(color.getBlue()) + "";
            String aStr = Integer.toHexString(color.getAlpha()) + "";

            if (rStr.length() < 2) rStr = "0" + rStr;
            if (gStr.length() < 2) gStr = "0" + gStr;
            if (bStr.length() < 2) bStr = "0" + bStr;
            if (aStr.length() < 2) aStr = "0" + aStr;

            embedBuilder
                    .setColor(color.getRGB())
                    .setThumbnail("attachment://output.png")
                    .setTitle("#" + rStr + gStr + bStr + (alpha != 255 ? aStr : ""))
                    .addField("Color:", "#" + rStr + gStr + bStr + (alpha != 255 ? aStr : ""), false);

            if (!invalid) {
                event.replyEmbeds(embedBuilder.build()).addFiles(FileUpload.fromData(new File("output.png"), "output.png")).queue();
            }
            else {
                event.reply("Color is invalid, format in hexadecimal as #rrggbb, #rrggbbaa, #rgb, or #rgba").setEphemeral(true).queue();
            }
        }
    }
}