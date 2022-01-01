
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "userinfo",
  description: " ",

  async run(client, message, args) {
    const usera = message.mentions.users.first() || message.author;
    const Embed = new MessageEmbed()
                .setTitle(usera.username)
                .addField('ID', usera.id)
                .addField('Discrimination', usera.discriminator)
                .addField('Account Creation', usera.createdAt)
                .setFooter('Kewl Bot | Created by Michh#9683', client.user.displayAvatarUR)
                .setTimestamp()
                .setColor('RANDOM')
                .setThumbnail(usera.avatarURL);
                message.channel.send(Embed)
  }
}