const { Collection } = require("discord.js");
const fs = require("fs");
const prefix = 'K!'
const ascii = require('ascii-table')

module.exports = (client) => {
  
  let table = new ascii("Commands");
  table.setHeading('Command', ' Load status');

  client.commands = new Collection();

  const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);

      table.addRow(file, '✅')

      client.commands.set(command.name, command);
    }

  console.log(table.toString())

  client.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();


    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).run(client, message, args);
    } catch (error) {
      console.log(error);
    }
  });
};
