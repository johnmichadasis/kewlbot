
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "uselessweb",
  description: "",

  async run(client, message, args) {
    message.channel.send("https://theuselessweb.com/").catch(err => console.log(err))
    console.log('KEWL BOT    | RANDOMLINK COMMAND USED IN ' + message.guild.name)
  }
}