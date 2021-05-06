
const { MessageEmbed } = require('discord.js')
const { request } = require('request');

module.exports = {
  name: "avatar",
  description: " ",

  async run(client, message, args) {
    let request = await message.channel.send('Generating avatar...')
    let taggedUser = message.mentions.users.first() || message.author;

    await message.channel.send(`${taggedUser.avatarURL()}`)
    request.delete();
  }
}