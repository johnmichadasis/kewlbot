const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    client.on('messageReactionAdd', async(reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch();
        if(reaction.partial) await reaction.fetch();
        if(user.bot) return;
        if(!reaction.message.guild) return;
        if(reaction.emoji.name === '❎') {
            const suggestionChannel = reaction.message.guild.channels.cache.find(channel => channel.id === reaction.message.channel.id)
            const suggestionEmbed = await suggestionChannel.messages.fetch(reaction.message.id)
            const data = suggestionEmbed.embeds[0]
            
            const Embed = new MessageEmbed()
                .setDescription(data.description)
                .setColor(`000000`)
                .setTimestamp()
                .addField("Status", "Denied")

            suggestionEmbed.edit(Embed)

            suggestionEmbed.reactions.removeAll()
        }
    })
}