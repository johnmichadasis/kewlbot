
const { MessageEmbed } = require('discord.js')
const ms = require('ms');

module.exports = {
  name: "tempmute",
  description: " ",

  async run(client, message, args) {
    if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("You do not have permission to perform this command!")
        var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!person) return  message.reply("Sorry I can't Find " + person + "😅").catch(err => console.log(err))
 
            let role = message.guild.roles.cache.find(role => role.name === "Muted")
           
            if(!role) return message.channel.send(message.author + " Couldn't find the mute role.").catch(err => console.log(err));
 
 
            let time = args[1];
            if(!time){
                return message.reply("You didn't specify a time!").catch(err => console.log(err));
            }
 
            person.roles.add(role.id).catch(err => console.log(err));
 
 
            message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)
 
            setTimeout(function(){
               
                person.roles.remove(role.id).catch(err => console.log(err));
                message.channel.send(`@${person.user.tag} has been unmuted.`).catch(err => console.log(err))
            }, ms(time));
 
            console.log('KEWL BOT    | TEMPMUTE COMMAND USED IN ' + message.guild.name)
  }
}