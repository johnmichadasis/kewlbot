const Discord = require('discord.js')
const bot = new Discord.Client();
const ms = require('ms');
const fs = require('fs');
const ping = require('minecraft-server-util')
const cheerio = require('cheerio');
const request = require('request');
const randomPuppy = require("random-puppy");
const Google = require("relevant-google");
const googleapi = 'AIzaSyARxFZPtfEIvoLXjDDvbsDqxBgYDY-PryI';
const fetch = require('node-fetch');
const querystring = require('querystring');
const google = new Google(googleapi)
const config = require("./config.json");
const PREFIX = config.prefix;
const TOKEN = config.token;

bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}


bot.on('ready', () =>{
    console.log(`KEWL BOT    | ONLINE  GUILD COUNT: ${bot.guilds.size}`);
    bot.user.setStatus('idle')
    let statuses = [
        `In ${bot.guilds.size} guilds!`,
        `Kewl Games | ${PREFIX}help`,
        `KewlBot.Glitch.me | ${PREFIX}`,
        `with you! | ${PREFIX}help`,
      `Happy New Year!🕐`,
      `Over ${bot.users.size} users! | ${PREFIX}`
 ]
  
 setInterval(function() {
 let status = statuses[Math.floor(Math.random() * statuses.length)];
 bot.user.setActivity(status, { type: 'Playing'});
  
  
 }, 60000)
    //bot.user.setActivity(`kewlbot.glitch.me | ....`)

});

bot.on('message', async message =>{
    let args = message.content.substring(PREFIX.length).split(" ");
    if (message.content.includes(`${PREFIX}say`)) {
        if(message.author.id === "596554872564744232")return(message.author + 'you have been blacklisted from using the say command because u abused it')
        if(message.author.id === "661249728692092928")return(message.author + 'you have been blacklisted from using the say command because u abused it')
        if(message.author.id === "222755040643907595")return(message.author + 'you have been blacklisted from using the say command because u abused it')
        if(message.author.id === "305742353078157312")return(message.author + 'you have been blacklisted from using the say command because u abused it')
    message.channel.send(message.content.replace(`${PREFIX}say `, '')).then(message.delete()).catch(err => console.log(err));
    console.log('KEWL BOT    | SAY COMMAND USED IN ' + message.guild.name + " " + message.author.id)
    };
    if (message.content === `${PREFIX}afk`) {
        message.member.setNickname(`[AFK]${message.author.username}`).catch(err => console.log(err))
        message.channel.send(message.author + ' Is Now Idling <:KewlIdle:647418240309526538>');
        console.log('KEWL BOT    | AFK COMMAND USED IN ' + message.guild.name)
   };
   if (message.content === `${PREFIX}unafk`) {
    message.member.setNickname(message.content.replace('....unafk', `${message.author.username}`)).catch(err => console.log(err))
    message.channel.send(message.author + ' Your [AFK] Tag has been removed.');
    console.log('KEWL BOT    | UNAFK COMMAND USED IN ' + message.guild.name)
  };
  if (message.content.includes(`${PREFIX}nickme`)) {
    message.member.setNickname(message.content.replace(`${PREFIX}nickme `, '')).catch(err => console.log(err))
    message.channel.send(message.author + ' Your NickName has Been changed.');
    console.log('KEWL BOT    | NICKME COMMAND USED IN ' + message.guild.name)
  };
  if (message.content === `${PREFIX}resetnick`) {
    message.member.setNickname(`${message.author.username}`).catch(err => console.log(err))
    message.channel.send(message.author + ' Your NickName Has been reset.');
    console.log('KEWL BOT    | RESETNICK COMMAND USED IN ' + message.guild.name)
  };
  if (message.content.includes(`${PREFIX}avatar`)){
    let request = await message.channel.send('Generating avatar...')
    let taggedUser = message.mentions.users.first() || message.author;

    await message.channel.send({files: [
{
    attachment: taggedUser.displayAvatarURL,
    name: "avatar.png"
}
    ]})
    request.delete();
  }
  if (message.content.includes(`${PREFIX}clear`)){
      if(!args[1]) return('Please Provide an Amount of messages to delete!'+ message.author)
      message.channel.bulkDelete(args[1])
      message.channel.send('✅Successfully Deleted '+ args[1]+ ' messages.')
  }
  if (message.content.includes(`${PREFIX}eval`)) {
    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
    if(message.author.id !== config.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
  if(message.content.includes(`${PREFIX}meme`)) {
      if(!message.channel.nsfw)return message.channel.send(message.author + " This Command can be used ONLY in a nsfw channel.")
    const subReddits = ["dankmemes", "meme", "me_irl", "im14andthisisdeep"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const memebed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(memebed);
    console.log(`KEWL BOT    | MEME COMMAND USED IN ${message.guild.name}`)
  }
  if(message.content.includes(`${PREFIX}nuke`)) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have permission to nuke this channel.");
    if (!message.guild.member(bot.user).hasPermission('MANAGE_CHANNELS')) return message.reply('Sorry, I dont have the permissions to do this command I need MANAGE_CHANNELS.')
  await message.channel.clone().then((ch) =>{ch.setParent(message.channel.parent.id);ch.setPosition(message.channel.position); 

    
    ch.send('https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif')}); message.channel.delete();
  }
  if(message.content.includes(`${PREFIX}google`)) {
      if(!message.channel.nsfw) {
        return message.channel.send("**You can only perform this command in a NSFW environment channel!**")
    }
    if(args[0].length > 130 || args.length > 130) {
        return message.channel.send("Your characters for a search term should be lower than **130 characters** at maximum!")
    }

    const query = querystring.stringify({term: args.join(" ")})

    const list = await fetch(google.search(query).then(res => {
        const embed = new Discord.RichEmbed()
        .setAuthor(`${res.title}`)
        .setURL(`${res.formattedUrl}`)
        .addField(`Google Result`, (res.snippet))
        //.addField(`Link`, `${res.formattedUrl}`)
        .setColor(`RANDOM`)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .setFooter(`Google Search Engine! | Kewl bot | Created by JohnGameRage#3429`)
        message.channel.send(embed).catch(e => console.log(e.message))
    }))

    if(!list.length) {
        return message.channel.send(`**No search results found for ${args.join(" ")}!**`)
    }
  }
})

bot.on('message', async message =>{
    if(!message.content.startsWith(PREFIX)) return;
    if(message.author.bot || message.channel.type === "dm")return;
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
       case 'help':
        bot.commands.get('help').execute(message, args, Discord, bot);
            break;
       case 'ping':
        bot.commands.get('ping').execute(message, args, bot);
           break;
        case 'serverinfo':
            bot.commands.get('serverinfo').execute(message, args, Discord, bot, config);
            break;
        case 'poll':
            bot.commands.get('poll').execute(message, args);
            break;
        case 'shrug':
            bot.commands.get('shrug').execute(message, args, Discord);
           break;
        case 'dance':
            bot.commands.get('dance').execute(message, args, Discord);
           break;
        case 'foreveralone':
            bot.commands.get('fac').execute(message, args, Discord);
           break;
        case 'rage':
            bot.commands.get('rage').execute(message, args, Discord);
           break;
        case 'dab':
            bot.commands.get('dab').execute(message, args, Discord);
           break;
        case 'tpose':
            bot.commands.get('tpose').execute(message, args, Discord);
           break;
        case 'ban':
            bot.commands.get('ban').execute(message, args, Discord, bot)
           break;
        case 'tempmute':
            bot.commands.get('tempmute').execute(message, args, ms)
            break;
        case 'tm':
            bot.commands.get('tempmute').execute(message, args, ms)
            break;
        case 'mute':
            bot.commands.get('mute').execute(message, args)
            break;
        case 'unmute':
            bot.commands.get('unmute').execute(message,args)
            break;
        case '8ball':
            bot.commands.get('8ball').execute(message, args)
            break;
        case 'ship':
            bot.commands.get('ship').execute(message, args)
            break;
        case 'botinfo':
            bot.commands.get('botinfo').execute(message, args , Discord)
            break;
        case 'bi':
        bot.commands.get('botinfo').execute(message, args , Discord)
            break;
        case 'mc':
            bot.commands.get('minecraft').execute(message, args , ping, Discord)
            break;
        case 'userinfo':
            bot.commands.get('userinfo').execute(message, args, Discord, bot)
            break;
        case 'ui':
            bot.commands.get('userinfo').execute(message, args, Discord, bot)
            break;
        case 'randomlink':
            bot.commands.get('randomlink').execute(message,args, bot)
            break;
        case 'serverstats':
        bot.commands.get('servSSS').execute(message,args)
        break;
        case 'ss':
        bot.commands.get('servSSS').execute(message,args)
        break;
        
            }
})

bot.login(TOKEN);