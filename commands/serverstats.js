module.exports = {
    name: 'servSSS',
    description: 'ausudhudh',
    execute(message,args) {
        var server = message.guild;
    
        server.createChannel("ServerStats", "category").catch(err => console.log(err));
        let category = server.channels.find(c => c.name == "ServerStats" && c.type == "category");
        message.guild.createChannel(`Member Count: ${message.guild.memberCount}`, "voice").then(channel =>{
            //channel.setParent(category.id)//.catch(err => console.log(err));
        })
        message.guild.createChannel(`Channel Count: ${message.guild.channels.size}`, "voice").then(channel =>{
            //channel.setParent(category.id)//.catch(err => console.log(err));
        })
        message.guild.createChannel(`Role Count: ${message.guild.roles.size}`, "voice").then(channel =>{
            //chanel.setParent(category.id).catch(err => console.log(err));
        }).then(message.channel.send('✅Server Stats Succefully Set!')).catch(err => console.log(err));
    }
}