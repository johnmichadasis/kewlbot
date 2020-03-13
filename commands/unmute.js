module.exports = {
    name: 'unmute',
    description: 'commits the unmute command',
    aliases: [""],
    execute(message, args){
        if(!message.member.roles.find(r => r.name === "Mod")) return message.member.send(message.author + ' Sorry, You Do Not Have The Required Permissions To Run That Command Or You Either Don\'t have a mod role in your guild.(You need to have mod role)')
        var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if(!person) return  message.reply("Sorry I can't Find " + person + "😅").catch(err => console.log(err))
 
            let role = message.guild.roles.find(role => role.name === "Muted")
           
            if(!role) return message.channel.send(message.author + " Couldn't find the muted role.").catch(err => console.log(err))
                person.removeRole(role.id).catch(err => console.log(err));
                message.channel.send(`@${person.user.tag} has been unmuted.`).catch(err => console.log(err))

                console.log('KEWL BOT    | UNMUTE COMMAND USED IN ' + message.guild.name)
    }}