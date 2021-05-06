
    //const { Discord } = require('discord.js')
    const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "ban",
  description: " ",

  async run(client, message, args, Discord) {
    if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("You do not have permission to perform this command!")
 
        let banMember = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!banMember) return message.channel.send("Please provide a user to be banned in a mention")
     
        let reason = args.slice(2).join(" ");
        if(!reason) reason = "No reason given by the moderator."
     
        if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I do not have permission to perform the ban command!")
        //if (banMember.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]) || banMember.user.client)return message.channel.send(`Cannot ban ${banMember.user.username} either because he is a bot or has BAN_MEMBERS or has admin power that are higher.`).then(message.delete(10000);)
     
        
     if (reason) undefined;
        banMember.send(`Hello, you have been banned from ${message.guild.name} for: ${reason}.`).then(() =>
        message.guild.members.ban(banMember, {years: 90, reason: reason})).catch(err => console.log(err))
        message.channel.send(`**${banMember.user.tag}** has been succesfully banned from ${message.guild.name}.`)
        

        console.log('KEWL BOT    | BAN COMMAND USED IN ' + message.guild.name)
  }
}