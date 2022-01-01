

const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "resetnick",
  description: " ",

  async run(client, message, args) {
    message.member.setNickname(`${message.author.username}`).catch(err => console.log(err))
    message.reply(' Your nickname has been reset.');
    console.log('KEWL BOT    | RESETNICK COMMAND USED IN ' + message.guild.name)
  }
}