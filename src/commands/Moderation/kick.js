
    //const { Discord } = require('discord.js')
    const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "kick",
  description: " ",

  async run(client, message, args, Discord) {
    if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send("You do not have permission to perform this command!")
 
        let banMember = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!banMember) return message.channel.send("Please provide a user to be kicked in a mention")
     
        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason given by the moderator."
     
        if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I do not have permission to perform the ban command!")
     
        
     if (reason) undefined;
        
        banMember.send(`Hello, you have been kicked from ${message.guild.name} for: ${reason}`).then(() =>
        banMember.kick())
        const embed = new MessageEmbed()
        .setTitle('kicked a member')
        .setDescription(`${banMember} was successfully kicked.`)
        .addField('Moderator', message.member, true)
        .addField('Member', banMember, true)
        .addField('Reason', reason)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed)
        
        

        console.log('KEWL BOT    | KICK COMMAND USED IN ' + message.guild.name)
  }
}