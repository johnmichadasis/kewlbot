const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "suggest",
    description: "",
    usage: "!suggest <suggestion>",
    category: "suggestions",
    aliases: [],

    async run(client, message, args) {
      let g = client.guilds.cache.get('839447938731212810')

      let c = g.channels.cache.find((c) => c.id === '850851652482498590')

      const suggestion = args.join(" ")
 
      if(!suggestion) return message.channel.send({ embed: { color: `000000`, descrpition: "Please specify your suggestion!" } })

      const Embed = new MessageEmbed()
        .setDescription(`**Suggestion:** ${suggestion}`)
        .setColor(`000000`)
        .setTimestamp()
        .addField("Status", "Pending")
      message.channel.send({ embed: { color: `000000`, description: "Suggestion sent!" } })
      g.channels.cache.get(c.id).send("<@&839908407372152852>").then(g.channels.cache.get(c.id).send(Embed))
    }
}
//850851652482498590
//839447938731212810