
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "troll",
  description: " ",

  async run(client, message, args) {
    const trollcmd = new MessageEmbed()
            .setTitle(`${message.member.user.tag} **trolls**`)
            .setImage('https://cdn.discordapp.com/attachments/602850365431480331/619930715043397655/giphy_1.gif')
            .setColor('RANDOM')
            message.channel.send(trollcmd).catch(err => console.log(err))

            console.log('KEWL BOT    | TROLL COMMAND USED IN ' + message.guild.name)
  }
}