
const { MessageEmbed } = require('discord.js')
const ms = require('ms');

module.exports = {
  name: "tempban",
  description: " ",

  async run(client, message, args) {
    if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("You do not have permission to perform this command!")
        var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!person) return  message.reply("Sorry I can't find them.").catch(err => console.log(err))
 

 
 
            let time = args[1];
            if(!time){
                return message.reply("You didn't specify a time!").catch(err => console.log(err));
            }
 
            message.guild.members.ban(person).catch(err => console.log(err))
 
 
            message.channel.send(`@${person.user.tag} has now been banned for ${ms(ms(time))}`)
 
            setTimeout(function(){
               
                message.guild.members.unban(person);
                message.channel.send(`@${person.user.tag} has been unbanned.`).catch(err => console.log(err))
            }, ms(time));
 
            console.log('KEWL BOT    | TEMPBAN COMMAND USED IN ' + message.guild.name)
  }
}