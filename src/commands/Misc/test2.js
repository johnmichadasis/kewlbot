
const { Collection } = require("discord.js");
const fs = require("fs");
const { prefix } = "K!"
const ascii = require("ascii-table");
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "test2",
  description: " ",

  async run(client, message, args) {
    let table = new ascii("Commands");
	table.setHeading("Command", " Load status");

	client.commands = new Collection();

	const commandFiles = fs.readdirSync("./").filter((file) => file.endsWith(".js"));

	for (const file of commandFiles) {
		const command = require(`${file}`);

		table.addRow(file, "✅");

		client.commands.set(command.name, command);
	}

	message.channel.send(table.toString());
  }
}