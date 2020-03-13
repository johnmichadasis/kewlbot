module.exports = {
    name: 'help',
    description: "Sends the help command",
    aliases: [""],
    execute(message, args, Discord, bot){
        const help = new Discord.RichEmbed()
            .setTitle('Click Here To View The Commands')
            .setDescription('[Commands](https://kewlbot.glitch.me/)')
            .setFooter('Kewl Bot | Created by JohnGameRage#3429', bot.user.displayAvatarURL,)
            .setTimestamp()
            .setColor('0x33FF83');
            message.channel.send(help).then(message.react('📨'))

            console.log('KEWL BOT    | HELP COMMAND USED IN ' + message.guild.name)
    }
}