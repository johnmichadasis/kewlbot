
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "clear",
  description: " ",

  async run(client, message, args) {
    //if(!args[2]) return('Please Provide an Amount of messages to delete!'+ message.author)
      message.channel.bulkDelete(message.content.replace('K!clear ', "")).catch(err => console.log(err))
      message.channel.send('✅Successfully Deleted '+ message.content.replace('K!clear ', "")+ ' messages.').catch(err => console.log(err))
  }
}