
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "fac",
  description: " ",

  async run(client, message, args) {
    const facmd = new MessageEmbed()
            .setTitle(`${message.member.user.tag} **is forever alone**`)
            .setImage('https://cdn.discordapp.com/attachments/600743763979272204/619931515941552167/tumblr_mi068vORON1s0tauko1_400.gif')
            .setColor('RANDOM')
            message.channel.send(facmd).catch(err => console.log(err))

            console.log('KEWL BOT    | FOREVERALONE COMMAND USED IN ' + message.guild.name)
  }
}