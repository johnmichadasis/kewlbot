const prefix = "K!";
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "say",
  description: " ",

  async run(client, message, args) {
    if(message.author.id === "596554872564744232")return(message.author + 'you have been blacklisted from using the say command because u abused it')
        if(message.author.id === "661249728692092928")return(message.author + 'you have been blacklisted from using the say command because u abused it')
        if(message.author.id === "222755040643907595")return(message.author + 'you have been blacklisted from using the say command because u abused it')
        if(message.author.id === "305742353078157312")return(message.author + 'you have been blacklisted from using the say command because u abused it')
    message.channel.send(message.content.replace(`${prefix}say `, '')).then(message.delete()).catch(err => console.log(err));
    console.log('KEWL BOT    | SAY COMMAND USED IN ' + message.guild.name + " " + message.author.id)
  }
}