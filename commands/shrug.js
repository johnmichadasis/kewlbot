module.exports = {
    name: 'shrug',
    description: "says the shrug command",
    aliases: [""],
    execute(message, args, Discord){
        const shrugcmd = new Discord.RichEmbed()
            .setTitle(`${message.member.user.tag} **shrugs**`)
            .setImage('https://media1.giphy.com/media/3o7TKHKjrDyqphX9Cg/giphy.gif')
            .setColor('RANDOM')
            message.channel.send(shrugcmd)

            console.log('KEWL BOT    | SHRUG COMMAND USED IN ' + message.guild.name)
    }
}