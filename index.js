
const { Client } = require("discord.js");
const command = require('./commands.js')
//const events = require("./src/utils/structures/events");
const client = new Client();
//const token = process.env['token']
const  ascii  = require('ascii-table')
const { ms } = require('ms');
const { ping }= require('minecraft-server-util')
const { cheerio } = require('cheerio');
const { request } = require('request');
const { randomPuppy } = require("random-puppy");
const { Google } = require("relevant-google");
//const googleapi = 'AIzaSyARxFZPtfEIvoLXjDDvbsDqxBgYDY-PryI';
const { fetch } = require('node-fetch');
const { querystring } = require('querystring');
//const { Google } = require("relevant-google");
//const google = new Google(googleapi)
const { config } = require("./config.json");
const prefix = "K!";
const token = "NTk2NTU0ODcyNTY0NzQ0MjMy.XR7PBQ.cNkJqyJrkaYNUndSinpF-7DvFLM";

let table = new ascii("Client");
table.setHeading('Load status');
table.addRow('✅')

client.on("ready", () => {
    console.log(`KEWL BOT    | ONLINE  GUILD COUNT: ${client.users.cache.size}`);
    client.user.setStatus('idle')
    let statuses = [
        `In ${client.users.cache.size} guilds!`,
        `Kewl Games | ${prefix}help`,
        `KewlBot.Glitch.me | ${prefix}`,
        `with you! | ${prefix}help`,
      //`Happy New Year!🕐`,
      `Over ${client.users.cache.size} users! | ${prefix}`
 ]
  
 setInterval(function() {
 let status = statuses[Math.floor(Math.random() * statuses.length)];
 client.user.setActivity(status, { type: 'Playing'});
 }, 60000)
 command(client);
});


client.login(token);