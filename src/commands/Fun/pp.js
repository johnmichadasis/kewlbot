
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "pp",
  description: " ",

  async run(client, message, args) {
    let taggedUser = message.mentions.users.first() || message.author;
    let words = [
        "8D",
        "8=D",
        "8==D",
        "8===D",
        "8====D",
        "8=====D",
        "8======D",
        '8=======D',
        '8========D',
        '8=========D',
        '8==========D',
        '8===========D',
        '8============D',
        '8=============D',
        '8==============D',
        '8===============D',
        '8================D'
        ]
  
        let pp = words[Math.floor(Math.random() * words.length)]
    const ragecmd = new MessageEmbed()
            .setTitle(`peepee size machine`)
            .setDescription(`${taggedUser}'s penis ${pp}`)
            message.channel.send(ragecmd)

            console.log('KEWL BOT    | PP COMMAND USED IN ' + message.guild.name)
  }
}