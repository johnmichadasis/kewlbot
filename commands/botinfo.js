module.exports = {
   name: 'botinfo',
   description: 'runs the botinfo cmd',
   aliases: [""],
   execute(message, args , Discord) {
       const botinfo = new Discord.RichEmbed()
       .setTitle('Kewl Bot Info')
       .addField('About Kewl Bot' ,`Kewl Bot is a fun discord bot to help you express feelings with animated gif commands!`)
       .addField('Moderation Commands',`There will be some moderation commands in the future but who knows we might cancel it because of our limited time.`)
       .addField('Suggestions' ,`We are looking for ideas about emote commands to make more also when we get moderation commmands`)
       .setDescription(
      '[Invite Me :]](https://discordapp.com/oauth2/authorize?client_id=596554872564744232&scope=bot&permissions=470101062)\n[Vote Kewl Bot on Top.gg](https://top.gg/bot/596554872564744232/vote)\n[Vote Kewl Bot On Bots on Discord](https://bots.ondiscord.xyz/bots/596554872564744232)\n[Support Server](https://discord.gg/c5daS89)\n[Follow The Owner](https://twitter.com/J0hnGameRage)')
       .setThumbnail('https://cdn.discordapp.com/avatars/596554872564744232/457b6ba261d03168e15cf22229cdbc3f.webp?size=512')
       .setColor('RANDOM')
       .setFooter('Kewl Bot Created By JohnGameRage#3429')
       .setTimestamp()

      message.channel.send(botinfo).catch(err => console.log(err))

      console.log('KEWL BOT    | BOTINFO COMMAND USED IN ' + message.guild.name)
   }
}