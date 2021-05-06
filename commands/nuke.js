
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "nuke",
  description: " ",

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have permission to nuke this channel.");
    if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.reply('Sorry, I dont have the permissions to do this command I need MANAGE_CHANNELS.')
  await message.channel.clone().then((ch) =>{ch.setParent(message.channel.parent.id);ch.setPosition(message.channel.position); 

    
    ch.send('https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif')}); message.channel.delete();
  }
}