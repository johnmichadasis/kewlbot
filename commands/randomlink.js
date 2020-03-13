module.exports = {
    name: 'randomlink',
    description: 'description',
    execute(message, args, bot) {
        let links = [
            "http://www.stallman.org/photos/rms-working/pages/78.html", 
            "http://data.gov.uk",
            "https://www.gov.uk/service-manual/phases/alpha.html", 
            "http://www.fsf.org/blogs/community/watch-libreplanet-live-this-weekend",
            "http://techrights.org/2013/01/26/2013-rms-talk/", 
            "http://www.muktware.com/5406/richard-stallman-turns-60-continues-fight-our-freedom",
            "http://collections.lacma.org/", 
            "http://www.stallman.org/photos/rms-working/pages/72.html",
            "http://www.stallman.org/photos/rms-working/pages/73.html"]
            let reply = links[Math.floor(Math.random() * links.length)]
        message.channel.send(reply).catch(err => console.log(err))
        console.log('KEWL BOT    | RANDOMLINK COMMAND USED IN ' + message.guild.name)
    }
}