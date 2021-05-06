
const { MessageEmbed } = require('discord.js')
const { ping } = require('minecraft-server-util')

module.exports = {
  name: "mc",
  description: " ",

  async run(client, message, args, ping) {
    if(!args[1]) return message.channel.send('You must type a minecraft server ip')
            if(!args[2]) return message.channel.send('You must type a minecraft server port')
 
            ping(args[1], parseInt(args[2]), (error, reponse) =>{
                if(error) throw error
                const Embed = new Discord.RichEmbed()
                .setTitle('Server Status')
                .addField('Server IP', reponse.host)
                .addField('Server Version', reponse.version)
                .addField('Online Players', reponse.onlinePlayers)
                .addField('Max Players', reponse.maxPlayers)
                .addField('Modt', reponse.descriptionText)
                .setFooter('Kewl Bot | Created by JohnGameRage#3429')
                .setThumbnail('https://carlisletheacarlisletheatre.org/images/minecraft-icon-transparent-9.png')
                .setTimestamp()
                .setColor('RANDOM')
                message.channel.send(Embed)
            })
               
  }
}