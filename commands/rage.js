module.exports = {
    name: 'rage',
    description: "says the rage command",
    aliases: [""],
    execute(message, args, Discord){
        const ragecmd = new Discord.RichEmbed()
            .setTitle(`${message.member.user.tag} **rages... alot**`)
            .setImage('https://cdn.discordapp.com/attachments/600743763979272204/619933187388342292/SpeedyWhimsicalKittiwake-size_restricted.gif')
            .setColor('RANDOM')
            message.channel.send(ragecmd)

            console.log('KEWL BOT    | RAGE COMMAND USED IN ' + message.guild.name)
    }
}