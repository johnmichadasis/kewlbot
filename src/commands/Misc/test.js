
const { MessageEmbed } = require('discord.js')
const randomPuppy = require("random-puppy");

module.exports = {
  name: "test",
  description: " ",

  async run(client, message, args) {
    if(message.author.id !== "494105564335308811") return (message.channel.send("You are not the owner of the bot, Please stop."))
if(!args[2]){
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
}else if(args[2] === "history") {
  if(!message.channel.nsfw)return message.channel.send(message.author + " This Command can be used ONLY in a nsfw channel.")
const subReddits14 = ["historymemes"];
const random14 = subReddits14[Math.floor(Math.random() * subReddits14.length)];

const img14 = await randomPuppy(random14);
 memebed14 = new MessageEmbed()
    .setColor("RANDOM")
    .setImage(img14)
   .setTitle(`From r/${random14}`)
    .setURL(`https://reddit.com/r/${random14}`);

message.channel.send(memebed14);
console.log(`KEWL BOT    | MEME COMMAND USED IN ${message.guild.name}`)
}else if(args[2] === "wholesome") {
  if(!message.channel.nsfw)return message.channel.send(message.author + " This Command can be used ONLY in a nsfw channel.")
const subReddits1 = ["wholesomememes"];
const random1 = subReddits1[Math.floor(Math.random() * subReddits1.length)];

const img1 = await randomPuppy(random1);
 memebed1 = new MessageEmbed()
    .setColor("RANDOM")
    .setImage(img1)
   .setTitle(`From r/${random1}`)
    .setURL(`https://reddit.com/r/${random1}`);

message.channel.send(memebed1);
console.log(`KEWL BOT    | MEME COMMAND USED IN ${message.guild.name}`)
   }else if (args[2] === "aw") {
  if(!message.channel.nsfw)return message.channel.send(message.author + " This Command can be used ONLY in a nsfw channel.")
const subReddits2 = ["aww"];
const random2 = subReddits2[Math.floor(Math.random() * subReddits2.length)];

const img2 = await randomPuppy(random2);
 memebed2 = new MessageEmbed()
    .setColor("RANDOM")
    .setImage(img2)
   .setTitle(`From r/${random2}`)
    .setURL(`https://reddit.com/r/${random2}`);

message.channel.send(memebed2);
console.log(`KEWL BOT    | MEME COMMAND USED IN ${message.guild.name}`)
   }

   }
  }