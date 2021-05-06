
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "help",
  description: " ",

  async run(client, message, args) {
    const help = new MessageEmbed()
            .setTitle('Click Here To View The Commands')
            .setDescription('[Commands](https://kewlbot.glitch.me/)')
            .setFooter('Kewl Bot | Created by JohnGameRage#3429', client.user.displayAvatarURL,)
            .setTimestamp()
            .setColor('0x33FF83');
            message.channel.send(help).then(message.react('📨'))

            console.log('KEWL BOT    | HELP COMMAND USED IN ' + message.guild.name)
  }
}