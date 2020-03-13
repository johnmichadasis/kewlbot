module.exports = {
    name: '8ball',
    description: 'random reply',
    aliases: [""],
    execute(message, args){
        let eightballwords = [ 
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes – definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy, try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            'Don’t count on it.',
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good.',
            'Very doubtful.'
        ]
        let eightballre = eightballwords[Math.floor(Math.random() * eightballwords.length)]
        message.channel.send(message.author + ' ' + eightballre).catch(err => console.log(err))

        console.log('KEWL BOT    | 8BALL COMMAND USED IN ' + message.guild.name)
    }
}