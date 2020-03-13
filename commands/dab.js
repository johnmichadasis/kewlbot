module.exports = {
    name: 'dab',
    description: "says the dab command",
    aliases: [""],
    execute(message, args, Discord){
        const dabcmd = new Discord.RichEmbed()
            .setTitle(`${message.member.user.tag} **dabs**`)
            .setImage('https://cdn.discordapp.com/attachments/615247304554709011/620324846517223434/tenor_1.gif')
            .setColor('RANDOM')
            message.channel.send(dabcmd).catch(err => console.log(err))

            console.log('KEWL BOT    | DAB COMMAND USED IN ' + message.guild.name)
    }
}