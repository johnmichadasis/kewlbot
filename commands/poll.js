module.exports = {
    name: 'poll',
    description: "says the poll command",
    aliases: [""],
    execute(message, args){
        message.author.send("Successfully Created Your Poll!")
            message.react('✅')
            .then(message.react('❌'))
            console.log('KEWL BOT    | POLL COMMAND USED IN ' + message.guild.name)
    }
}