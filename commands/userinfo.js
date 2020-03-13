module.exports = {
    name: 'userinfo',
    description: 'userinfo cmd',
    aliases: [""],
    execute(message, args, Discord, bot) {
const usera = message.mentions.users.first() || message.author;
const Embed = new Discord.RichEmbed()
                .setTitle(usera.username)
                .addField('ID', usera.id)
                .addField('Discrimination', usera.discriminator)
                .addField('Account Creation', usera.createdAt)
                .setFooter('Kewl Bot | Created by JohnGameRage#3429', bot.user.displayAvatarUR)
                .setTimestamp()
                .setColor('RANDOM')
                .setThumbnail(usera.avatarURL);
                message.channel.send(Embed)
    }
}