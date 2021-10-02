package Events;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.Member;
import net.dv8tion.jda.api.entities.Message;
import net.dv8tion.jda.api.entities.User;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import java.awt.*;

public class HelpCommand extends ListenerAdapter {

    @Override
    public void onMessageReceived(final MessageReceivedEvent e) {
        if (e.getAuthor().isBot()) return;
        final Message msg = e.getMessage();
        final User author = e.getAuthor();

        if (msg.getContentRaw().startsWith("!help")) {
            EmbedBuilder embed = new EmbedBuilder();

            // Set title of Embed
            // Argument 1: Title
            // Argument 2: URL as String (null acceptable)
            embed.setTitle("Aether", null);

            // Set Embed color
            embed.setColor(new Color(255, 0, 54));

            // Set text of Embed
            embed.setDescription("Description Test");

            // Add field
            // Argument one: Name
            // Argument 2: Text of Field
            // Argument 3: Inline (boolean)
            embed.addField("Title of Field", "Field Content", false);

            // Add spacer like field
            embed.addBlankField(false);

            // Add embed Author
            // Argument 1: Name
            // Argument 2: URL
            // Argument 3: Icon URL
            embed.setAuthor(author.getName(), null, author.getAvatarUrl());

            // Set Footer
            // Argument 1: Text
            // Argument 2: Icon URL
            embed.setFooter("Aether", author.getAvatarUrl());

//            // Set Image
//            // Argument 1: Image URL
//            embed.setImage("https://damascus.vercel.app/img/woodland.a8d23e69.png");
//
//            // Set Thumbnail Image
//            // Argument 1: Image URL
//            embed.setThumbnail("https://damascus.vercel.app/img/woodland.a8d23e69.png");

            e.getChannel().sendMessage(embed.build()).queue();
        }
    }
}
