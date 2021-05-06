

const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "poll",
  description: " ",

  async run(client, message, args) {
    message.author.send("Successfully Created Your Poll!")
            message.react('✅')
            .then(message.react('❌'))
            console.log('KEWL BOT    | POLL COMMAND USED IN ' + message.guild.name)
  }
}