import Events.HelpCommand;
import Events.Test;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.entities.Activity;

import javax.security.auth.login.LoginException;
import java.util.Collections;
import java.util.Scanner;

public class Bot {


    private static String token;
    private static Scanner scanner;

    public static void main(String[] args) throws LoginException {

        scanner = new Scanner(System.in);
        System.out.println("Bot Token: ");
        token = scanner.next();

        JDA jda = JDABuilder.createDefault(token)
                .addEventListeners(new Test())
                .addEventListeners(new HelpCommand())
                .setActivity(Activity.playing("Type /ping"))
                .build();

        jda.upsertCommand("ping", "Get the bot's latency to Discord servers").queue();
    }

}
