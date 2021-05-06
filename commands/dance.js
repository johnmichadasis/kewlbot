
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "dance",
  description: " ",

  async run(client, message, args) {
    const dancecmd = new MessageEmbed()
            .setTitle(`${message.member.user.tag} **dances till death**`)
            .setImage('https://cdn.discordapp.com/attachments/602850365431480331/619929531251425296/tenor.gif')
            .setColor('RANDOM')
            message.channel.send(dancecmd).catch(err => console.log(err))

            console.log('KEWL BOT    | DANCE COMMAND USED IN ' + message.guild.name)
  }
}