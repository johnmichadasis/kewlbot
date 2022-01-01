
const { MessageEmbed } = require('discord.js')
const randomPuppy = require("random-puppy");

module.exports = {
  name: "meme",
  description: " ",

  async run(client, message, args) {
    //message.channel.send("This command is not maintained anymore.")
    if(!message.channel.nsfw)return message.channel.send(message.author + " This Command can be used ONLY in a nsfw channel.")
const subReddits = ["dankmemes", "meme", "me_irl", "r/wholesomememes", "comedyheaven"];
const random = subReddits[Math.floor(Math.random() * subReddits.length)];

const img = await randomPuppy(random);
 memebed = new MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
   .setTitle(`From r/${random}`)
    .setURL(`https://reddit.com/r/${random}`);

message.channel.send(memebed);
console.log(`KEWL BOT    | MEME COMMAND USED IN ${message.guild.name}`)
  }
}