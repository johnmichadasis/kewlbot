
    const { MessageEmbed } = require('discord.js')

    module.exports = {
      name: "unmute",
      description: " ",
    
      async run(client, message, args) {
        if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("You do not have permission to perform this command!")
        var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if(!person) return  message.reply("Sorry I can't find them😅").catch(err => console.log(err))
 
            let role = message.guild.roles.cache.find(role => role.name === "Muted")
           
            if(!role) return message.channel.send(message.author + " Couldn't find the muted role.").catch(err => console.log(err))
                person.roles.remove(role.id).catch(err => console.log(err));
                message.channel.send(`@${person.user.tag} has been unmuted.`).catch(err => console.log(err))

                console.log('KEWL BOT    | UNMUTE COMMAND USED IN ' + message.guild.name)
      }
    }
