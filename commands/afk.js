
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "afk",
  description: " ",

  async run(client, message, args) {
    message.member.setNickname(`[AFK]${message.author.username}`).catch(err => console.log(err))
    message.channel.send(message.author + ' Is Now Idling');
    console.log('KEWL BOT    | AFK COMMAND USED IN ' + message.guild.name)
  }
}