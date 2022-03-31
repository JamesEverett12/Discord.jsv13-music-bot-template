const { MessageEmbed } = require("discord.js")
const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(", ") || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``

module.exports = (client, queue, playlist) => {
    const embed = new MessageEmbed()
        .setColor(client.config.color)
        .setTitle("Playlist Added")
        .setDescription(`**${playlist.name}** has been added to the queue.`)
        .addField("Status", "" + status(queue))
        .setFooter({text: `${client.user.username} | Playlist`, iconURL: client.user.displayAvatarURL()})
        .setTimestamp()
        queue.textChannel.send({ embeds: [embed] })
}