package Events;

import net.dv8tion.jda.api.events.interaction.SlashCommandEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

public class Test extends ListenerAdapter {

    @Override
    public void onSlashCommand(final SlashCommandEvent e) {
        if (!e.getName().equals("ping")) return;

        long time = System.currentTimeMillis();

        e.reply("Getting ping...").setEphemeral(true)
                .flatMap(v ->
                        e.getHook().editOriginalFormat("Ping: %d ms", System.currentTimeMillis() - time)
                        ).queue();
    }
}
