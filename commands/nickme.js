const { prefix } = "K!"
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "nickme",
  description: " ",

  async run(client, message, args) {
    message.member.setNickname(message.content.replace(`K!nickme `, '')).catch(err => console.log(err))
    message.reply(' Your nickname has been changed.');
    console.log('KEWL BOT    | NICKME COMMAND USED IN ' + message.guild.name)
  }
}