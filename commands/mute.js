
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "mute",
  description: " ",

  async run(client, message, args) {
    if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("You do not have permission to perform this command!")
        var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        if(!person) return  message.reply("Sorry I can't Find " + person + " 😅")
 
            let role = message.guild.roles.cache.find(role => role.name === "Muted")
           
            if(!role) return message.reply(" Couldn't find the muted role.").catch(err => console.log(err))

            person.roles.add(role.id).catch(err => console.log(err));

            message.channel.send(`@${person.user.tag} has been muted.`).catch(err => console.log(err))

            console.log('KEWL BOT    | MUTE COMMAND USED IN ' + message.guild.name)
  }
}