const { Client } = require("discord.js");
const client = new Client();
const run = require('./src/utils/tools/run')
require('dotenv').config();

client.on("ready", () => {
    console.log(`KEWL BOT    | ONLINE  GUILD COUNT: ${client.guilds.cache.size}`);
    run(client)
    client.user.setStatus('idle')
    let statuses = [
        `In ${client.guilds.cache.size} guilds!`,
        `Kewl Games | K!help`,
        `KewlBot.Glitch.me | K!`,
        `with you! | K!help`,
      `Over ${client.users.cache.size} users! | K!`
 ]
  
 setInterval(function() {
 let status = statuses[Math.floor(Math.random() * statuses.length)];
 client.user.setActivity(status, { type: 'PLAYING'});
 }, 60000)
});

client.login(process.env.token)