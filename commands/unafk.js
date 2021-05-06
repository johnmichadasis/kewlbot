
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "unafk",
  description: " ",

  async run(client, message, args) {
    message.member.setNickname(message.content.replace('K!unafk', `${message.author.username}`)).catch(err => console.log(err))
    message.channel.send(message.author + ' Your [AFK] Tag has been removed.');
    console.log('KEWL BOT    | UNAFK COMMAND USED IN ' + message.guild.name)
  }
}