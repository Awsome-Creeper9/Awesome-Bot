package commands.fun;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.events.interaction.command.SlashCommandInteractionEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.interactions.commands.OptionType;
import net.dv8tion.jda.api.interactions.commands.build.CommandData;
import net.dv8tion.jda.api.interactions.commands.build.Commands;
import net.dv8tion.jda.api.interactions.commands.build.OptionData;
import net.dv8tion.jda.api.utils.FileUpload;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class GradientCommand extends ListenerAdapter {
    public static CommandData commandData = Commands.slash("gradient", "Create a gradient")
            .addOptions(
                    new OptionData(OptionType.STRING, "color-1", "1st color", true),
                    new OptionData(OptionType.STRING, "color-2", "2nd color", true),
                    new OptionData(OptionType.STRING, "color-3", "3rd color"),
                    new OptionData(OptionType.STRING, "color-4", "4th color"),
                    new OptionData(OptionType.STRING, "color-5", "5th color")
            );

    @Override
    public void onSlashCommandInteraction(SlashCommandInteractionEvent event) {
        if (event.getName().equals(commandData.getName())) {
            int red1 = 255;
            int green1 = 255;
            int blue1 = 255;
            int alpha1 = 255;
            int red2 = 255;
            int green2 = 255;
            int blue2 = 255;
            int alpha2 = 255;

            int red3 = 255;
            int green3 = 255;
            int blue3 = 255;
            int alpha3 = 255;

            int red4 = 255;
            int green4 = 255;
            int blue4 = 255;
            int alpha4 = 255;

            int red5 = 255;
            int green5 = 255;
            int blue5 = 255;
            int alpha5 = 255;

            boolean invalid = false;
            try {
                switch (event.getOption("color-1").getAsString().length() - 1) {
                    case 8:
                        red1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(1, 3), 16);
                        green1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(3, 5), 16);
                        blue1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(5, 7), 16);
                        alpha1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(7, 9), 16);
                        break;
                    case 6:
                        red1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(1, 3), 16);
                        green1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(3, 5), 16);
                        blue1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(5, 7), 16);
                        break;
                    case 4:
                        red1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color-1").getAsString().substring(1, 2), 16);
                        green1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color-1").getAsString().substring(2, 3), 16);
                        blue1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color-1").getAsString().substring(3, 4), 16);
                        alpha1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(4, 5), 16) * 16 + Integer.parseInt(event.getOption("color-1").getAsString().substring(4, 5), 16);
                        break;
                    case 3:
                        red1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color-1").getAsString().substring(1, 2), 16);
                        green1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color-1").getAsString().substring(2, 3), 16);
                        blue1 = Integer.parseInt(event.getOption("color-1").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color-1").getAsString().substring(3, 4), 16);
                        break;
                    default:
                        invalid = true;
                }
            }
            catch (NumberFormatException e) {
                invalid = true;
            }

            try {
                switch (event.getOption("color-2").getAsString().length() - 1) {
                    case 8:
                        red2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(1, 3), 16);
                        green2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(3, 5), 16);
                        blue2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(5, 7), 16);
                        alpha2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(7, 9), 16);
                        break;
                    case 6:
                        red2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(1, 3), 16);
                        green2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(3, 5), 16);
                        blue2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(5, 7), 16);
                        break;
                    case 4:
                        red2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color-2").getAsString().substring(1, 2), 16);
                        green2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color-2").getAsString().substring(2, 3), 16);
                        blue2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color-2").getAsString().substring(3, 4), 16);
                        alpha2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(4, 5), 16) * 16 + Integer.parseInt(event.getOption("color-2").getAsString().substring(4, 5), 16);
                        break;
                    case 3:
                        red2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color-2").getAsString().substring(1, 2), 16);
                        green2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color-2").getAsString().substring(2, 3), 16);
                        blue2 = Integer.parseInt(event.getOption("color-2").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color-2").getAsString().substring(3, 4), 16);
                        break;
                    default:
                        invalid = true;
                }
            }
            catch (NumberFormatException e) {
                invalid = true;
            }

            Color color1 = new Color(red1, green1, blue1, alpha1);
            Color color2 = new Color(red2, green2, blue2, alpha2);

            Color color3 = new Color(255, 255, 255, 255);
            Color color4 = new Color(255, 255, 255, 255);
            Color color5 = new Color(255, 255, 255, 255);

            BufferedImage img = new BufferedImage(1000, 1000, BufferedImage.TYPE_INT_ARGB);
            Graphics2D g2d = img.createGraphics();

            LinearGradientPaint gradient = new LinearGradientPaint(0, 0, 1000, 0, new float[] {0f, 1f}, new Color[] {color1, color2});

            String r1Str = Integer.toHexString(color1.getRed()) + "";
            String g1Str = Integer.toHexString(color1.getGreen()) + "";
            String b1Str = Integer.toHexString(color1.getBlue()) + "";
            String a1Str = Integer.toHexString(color1.getAlpha()) + "";

            if (r1Str.length() < 2) r1Str = "0" + r1Str;
            if (g1Str.length() < 2) g1Str = "0" + g1Str;
            if (b1Str.length() < 2) b1Str = "0" + b1Str;
            if (a1Str.length() < 2) a1Str = "0" + a1Str;

            String r2Str = Integer.toHexString(color2.getRed()) + "";
            String g2Str = Integer.toHexString(color2.getGreen()) + "";
            String b2Str = Integer.toHexString(color2.getBlue()) + "";
            String a2Str = Integer.toHexString(color2.getAlpha()) + "";

            if (r2Str.length() < 2) r2Str = "0" + r2Str;
            if (g2Str.length() < 2) g2Str = "0" + g2Str;
            if (b2Str.length() < 2) b2Str = "0" + b2Str;
            if (a2Str.length() < 2) a2Str = "0" + a2Str;

            String r3Str = "";
            String g3Str = "";
            String b3Str = "";
            String a3Str = "";

            String r4Str = "";
            String g4Str = "";
            String b4Str = "";
            String a4Str = "";

            String r5Str = "";
            String g5Str = "";
            String b5Str = "";
            String a5Str = "";

            if (event.getOption("color-3") != null) {
                try {
                    switch (event.getOption("color-3").getAsString().length() - 1) {
                        case 8:
                            red3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(1, 3), 16);
                            green3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(3, 5), 16);
                            blue3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(5, 7), 16);
                            alpha3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(7, 9), 16);
                            break;
                        case 6:
                            red3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(1, 3), 16);
                            green3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(3, 5), 16);
                            blue3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(5, 7), 16);
                            break;
                        case 4:
                            red3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color-3").getAsString().substring(1, 2), 16);
                            green3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color-3").getAsString().substring(2, 3), 16);
                            blue3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color-3").getAsString().substring(3, 4), 16);
                            alpha3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(4, 5), 16) * 16 + Integer.parseInt(event.getOption("color-3").getAsString().substring(4, 5), 16);
                            break;
                        case 3:
                            red3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color-3").getAsString().substring(1, 2), 16);
                            green3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color-3").getAsString().substring(2, 3), 16);
                            blue3 = Integer.parseInt(event.getOption("color-3").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color-3").getAsString().substring(3, 4), 16);
                            break;
                        default:
                            invalid = true;
                    }
                }
                catch (NumberFormatException e) {
                    invalid = true;
                }

                color3 = new Color(red3, green3, blue3, alpha3);

                gradient = new LinearGradientPaint(0, 0, 1000, 0, new float[] {0f, 0.5f, 1f}, new Color[] {color1, color2, color3});

                r3Str = Integer.toHexString(color3.getRed()) + "";
                g3Str = Integer.toHexString(color3.getGreen()) + "";
                b3Str = Integer.toHexString(color3.getBlue()) + "";
                a3Str = Integer.toHexString(color3.getAlpha()) + "";

                if (r3Str.length() < 2) r3Str = "0" + r3Str;
                if (g3Str.length() < 2) g3Str = "0" + g3Str;
                if (b3Str.length() < 2) b3Str = "0" + b3Str;
                if (a3Str.length() < 2) a3Str = "0" + a3Str;
            }
            if (event.getOption("color-4") != null) {
                try {
                    switch (event.getOption("color-4").getAsString().length() - 1) {
                        case 8:
                            red4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(1, 3), 16);
                            green4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(3, 5), 16);
                            blue4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(5, 7), 16);
                            alpha4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(7, 9), 16);
                            break;
                        case 6:
                            red4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(1, 3), 16);
                            green4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(3, 5), 16);
                            blue4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(5, 7), 16);
                            break;
                        case 4:
                            red4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color-4").getAsString().substring(1, 2), 16);
                            green4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color-4").getAsString().substring(2, 3), 16);
                            blue4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color-4").getAsString().substring(3, 4), 16);
                            alpha4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(4, 5), 16) * 16 + Integer.parseInt(event.getOption("color-4").getAsString().substring(4, 5), 16);
                            break;
                        case 3:
                            red4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color-4").getAsString().substring(1, 2), 16);
                            green4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color-4").getAsString().substring(2, 3), 16);
                            blue4 = Integer.parseInt(event.getOption("color-4").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color-4").getAsString().substring(3, 4), 16);
                            break;
                        default:
                            invalid = true;
                    }
                }
                catch (NumberFormatException e) {
                    invalid = true;
                }

                color4 = new Color(red4, green4, blue4, alpha4);

                gradient = new LinearGradientPaint(0, 0, 1000, 0, new float[] {0f, 0.33f, 0.67f, 1f}, new Color[] {color1, color2, color3, color4});

                r4Str = Integer.toHexString(color4.getRed()) + "";
                g4Str = Integer.toHexString(color4.getGreen()) + "";
                b4Str = Integer.toHexString(color4.getBlue()) + "";
                a4Str = Integer.toHexString(color4.getAlpha()) + "";

                if (r4Str.length() < 2) r4Str = "0" + r4Str;
                if (g4Str.length() < 2) g4Str = "0" + g4Str;
                if (b4Str.length() < 2) b4Str = "0" + b4Str;
                if (a4Str.length() < 2) a4Str = "0" + a4Str;
            }
            if (event.getOption("color-5") != null) {
                try {
                    switch (event.getOption("color-5").getAsString().length() - 1) {
                        case 8:
                            red5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(1, 3), 16);
                            green5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(3, 5), 16);
                            blue5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(5, 7), 16);
                            alpha5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(7, 9), 16);
                            break;
                        case 6:
                            red5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(1, 3), 16);
                            green5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(3, 5), 16);
                            blue5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(5, 7), 16);
                            break;
                        case 4:
                            red5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color-5").getAsString().substring(1, 2), 16);
                            green5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color-5").getAsString().substring(2, 3), 16);
                            blue5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color-5").getAsString().substring(3, 4), 16);
                            alpha5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(4, 5), 16) * 16 + Integer.parseInt(event.getOption("color-5").getAsString().substring(4, 5), 16);
                            break;
                        case 3:
                            red5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(1, 2), 16) * 16 + Integer.parseInt(event.getOption("color-5").getAsString().substring(1, 2), 16);
                            green5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(2, 3), 16) * 16 + Integer.parseInt(event.getOption("color-5").getAsString().substring(2, 3), 16);
                            blue5 = Integer.parseInt(event.getOption("color-5").getAsString().substring(3, 4), 16) * 16 + Integer.parseInt(event.getOption("color-5").getAsString().substring(3, 4), 16);
                            break;
                        default:
                            invalid = true;
                    }
                }
                catch (NumberFormatException e) {
                    invalid = true;
                }

                color5 = new Color(red5, green5, blue5, alpha5);

                gradient = new LinearGradientPaint(0, 0, 1000, 0, new float[] {0f, 0.25f, 0.5f, 0.75f, 1f}, new Color[] {color1, color2, color3, color4, color5});

                r5Str = Integer.toHexString(color5.getRed()) + "";
                g5Str = Integer.toHexString(color5.getGreen()) + "";
                b5Str = Integer.toHexString(color5.getBlue()) + "";
                a5Str = Integer.toHexString(color5.getAlpha()) + "";

                if (r5Str.length() < 2) r5Str = "0" + r5Str;
                if (g5Str.length() < 2) g5Str = "0" + g5Str;
                if (b5Str.length() < 2) b5Str = "0" + b5Str;
                if (a5Str.length() < 2) a5Str = "0" + a5Str;
            }

            g2d.setPaint(gradient);
            g2d.fillRect(0, 0, img.getWidth(), img.getHeight());
            g2d.dispose();

            try {
                ImageIO.write(img, "png", new File("output.png"));
            } catch (IOException e) {
                e.printStackTrace();
            }

            EmbedBuilder embedBuilder = new EmbedBuilder();

            embedBuilder
                    .setColor(color1.getRGB())
                    .setThumbnail("attachment://output.png")
                    .setTitle("Linear Gradient")
                    .addField("Colors:", "#" + r1Str + g1Str + b1Str + (alpha1 != 255 ? a1Str : "")
                            + ", #" + r2Str + g2Str + b2Str + (alpha2 != 255 ? a2Str : "")
                            + (!r3Str.isEmpty() ? ", #" + r3Str + g3Str + b3Str + (alpha3 != 255 ? a3Str : "") : "")
                            + (!r4Str.isEmpty() ? ", #" + r4Str + g4Str + b4Str + (alpha4 != 255 ? a4Str : "") : "")
                            + (!r5Str.isEmpty() ? ", #" + r5Str + g5Str + b5Str + (alpha5 != 255 ? a5Str : "") : ""),
                            false);

            if (!invalid) {
                event.replyEmbeds(embedBuilder.build()).addFiles(FileUpload.fromData(new File("output.png"), "output.png")).queue();
            }
            else {
                event.reply("One or more colors is invalid, format in hexadecimal as #rrggbb, #rrggbbaa, #rgb, or #rgba").setEphemeral(true).queue();
            }
        }
    }
}