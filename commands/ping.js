module.exports = {
    name: 'ping',
    description: "says ping!",
    aliases: [""],
    execute(message, args, bot){
        message.channel.send(`Hoold on!`).then(m => {
        m.edit(`**Pong!**\nMessage edit time is ` + (message.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(bot.ping) + `ms.`).then(message.react('🏓'))
            
        });

        console.log('KEWL BOT    | PING COMMAND USED IN ' + message.guild.name)
    }
}