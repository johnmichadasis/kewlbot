
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "serverstats",
  description: " ",

  async run(client, message, args) {
    var server = message.guild;
    message.channel.send('This command is no longer maintainted by the Developer.')
    
        //message.guild.createChannel("ServerStats", "category").catch(err => console.log(err));
        //let category = message.guild.channels.cache.find(c => c.name == "ServerStats" && c.type == "category");
        //if(message.guild.channels.cache.find(`Member Count: ${message.guild.memberCount}`))return(message.channel.send('Serverstats already exist.Please do not abuse this command.'))
        //message.guild.channel.create(`Member Count: ${message.guild.memberCount}`, "voice").then(channel =>{
            //channel.setParent(category.id)//.catch(err => console.log(err));
        //})
        //message.guild.channel.create(`Channel Count: ${message.guild.channels.size}`, "voice").then(channel =>{
            //channel.setParent(category.id)//.catch(err => console.log(err));
        //})
        //message.guild.channels.createChannel(`Role Count: ${message.guild.roles.size}`, "voice").then(channel =>{
            //chanel.setParent(category.id).catch(err => console.log(err));
   //     }).then(message.channel.send('✅Server Stats Succefully Set!')).catch(err => console.log(err));
  }
}