module.exports = {
    name: 'serverinfo',
    description: "says the serverinfo command",
    aliases: ["si"],
    execute(message, args, Discord, bot, config){
const List = message.guild.emojis.map(e => e.toString()).join(" ")|| "No emojis 😫";
if(!List>20)return('Hey! You Have To Many Emojis To Fit In A RichEmbed :(')
const ServerInfoEmbed = new Discord.RichEmbed()
    .setTitle('**Server Information**')
    .setAuthor(`${message.guild.name} | Discord Info`, message.guild.iconURL)
    .addField('**Server Name:**', `${message.guild.name}`, true)
    .addField('**Server Owner:**', `${message.guild.owner}`, true)
    .addField('**Server Member Count:**', `${message.guild.memberCount}`, true)
    .addField('**Server Role Count**', `${message.guild.roles.size}`, true)
    .addField('**Server Region:**', `${message.guild.region}`, true)
    .addField('**Server Channels Count:**', `${message.guild.channels.size}`, true)
    .addField('**Server Creation:**', `${message.guild.createdAt}`, true)
    .addField('**Server ID**', `${message.guild.id}`)
    .addField('**Server AfkChannel**', message.guild.afkChannel || "No Afk Channel", true)
    .addField('**Server AFK Timeout**', `${message.guild.afkTimeout}`, true)
    .addField('**Server Emojis:**', `${List}`)
    .addField('**Server System Channel**', message.guild.systemChannel || "No System Channel", true)
    .addField('**Server Verifaction Level**', message.guild.verificationLevel, true)
    .addField('**You Joined This Guild At**', message.member.joinedAt, true)
    .addField('Server Info', `${config.prefix}ServerInfo Command`)
    .setFooter('Kewl Bot | Created by JohnGameRage#3429', bot.user.displayAvatarURL,)
    .setTimestamp()
    .setColor('0x3368FF')
    .setThumbnail(message.guild.iconURL);
    message.channel.send(ServerInfoEmbed).then(message.react('📨'))

            console.log('KEWL BOT    | SERVERINFO COMMAND USED IN ' + message.guild.name)
    }
}