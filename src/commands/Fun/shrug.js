
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "shrug",
  description: " ",

  async run(client, message, args) {
    const shrugcmd = new MessageEmbed()
            .setTitle(`${message.member.user.tag} **shrugs**`)
            .setImage('https://media1.giphy.com/media/3o7TKHKjrDyqphX9Cg/giphy.gif')
            .setColor('RANDOM')
            message.channel.send(shrugcmd)

            console.log('KEWL BOT    | SHRUG COMMAND USED IN ' + message.guild.name)
  }
}