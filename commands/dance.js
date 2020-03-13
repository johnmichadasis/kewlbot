module.exports = {
    name: 'dance',
    description: "says the dance command",
    aliases: [""],
    execute(message, args, Discord){
        const dancecmd = new Discord.RichEmbed()
            .setTitle(`${message.member.user.tag} **dances till death**`)
            .setImage('https://cdn.discordapp.com/attachments/602850365431480331/619929531251425296/tenor.gif')
            .setColor('RANDOM')
            message.channel.send(dancecmd).catch(err => console.log(err))

            console.log('KEWL BOT    | DANCE COMMAND USED IN ' + message.guild.name)
    }
}