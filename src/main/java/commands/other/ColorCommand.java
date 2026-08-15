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
                    new OptionData(OptionType.INTEGER, "red", "Red channel of color to display (0–255)", true)
                            .setMinValue(0)
                            .setMaxValue(255),
                    new OptionData(OptionType.INTEGER, "green", "Green channel of color to display (0–255)", true)
                            .setMinValue(0)
                            .setMaxValue(255),
                    new OptionData(OptionType.INTEGER, "blue", "Blue channel of color to display (0–255)", true)
                            .setMinValue(0)
                            .setMaxValue(255),
                    new OptionData(OptionType.INTEGER, "alpha", "Alpha channel of color to display (0–255)")
                            .setMinValue(0)
                            .setMaxValue(255)
            );

    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals(commandData.getName())) {
            int red = event.getOption("red").getAsInt();
            int green = event.getOption("green").getAsInt();
            int blue = event.getOption("blue").getAsInt();
            int alpha = (event.getOption("alpha") != null) ? event.getOption("alpha").getAsInt() : 255;

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
                    .setTitle("#" + rStr + gStr + bStr + aStr)
                    .addField("Color:", "#" + rStr + gStr + bStr + aStr, false);

            event.replyEmbeds(embedBuilder.build()).addFiles(FileUpload.fromData(new File("output.png"), "output.png")).queue();
        }
    }
}