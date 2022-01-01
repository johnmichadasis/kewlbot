
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "dab",
  description: " ",

  async run(client, message, args) {
    const dabcmd = new MessageEmbed()
            .setTitle(`${message.member.user.tag} **dabs**`)
            .setImage('https://cdn.discordapp.com/attachments/615247304554709011/620324846517223434/tenor_1.gif')
            .setColor('RANDOM')
            message.channel.send(dabcmd).catch(err => console.log(err))

            console.log('KEWL BOT    | DAB COMMAND USED IN ' + message.guild.name)
  }
}