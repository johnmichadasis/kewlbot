module.exports = (client) => {
    client.on('message', (message) => {
        let guild = client.guilds.cache.get('839447938731212810')

        let c = guild.channels.cache.find((c) => c.id === '850851652482498590')

        if(message.channel.id === c.id) {
          message.react('✅')
          message.react('❎')
        }
    })
}