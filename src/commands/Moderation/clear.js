
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "clear",
  description: " ",

  async run(client, message, args) {
        if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to perform this command!")
    //if(!args[2]) return('Please Provide an Amount of messages to delete!'+ message.author)
      message.channel.bulkDelete(message.content.replace('K!clear ', "")).catch(err => console.log(err))
      message.channel.send('✅Successfully Deleted '+ message.content.replace('K!clear ', "")+ ' messages.').catch(err => console.log(err))
  }
}