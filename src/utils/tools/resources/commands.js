const { Collection } = require("discord.js");
const fs = require("fs");
const { prefix } = require("../../config/config.json");
const ascii = require("ascii-table");

module.exports = (client) => {
	let table = new ascii("Commands");
	table.setHeading("Command", " Load status");

	client.commands = new Collection();

	fs.readdirSync(`./src/commands/`).forEach((dir) => {
		const directories = fs.readdirSync(`./src/commands/${dir}`).filter((file) => file.endsWith('.js'))
		for(let file of directories) {
			const command = require(`../../../commands/${dir}/${file}`)

			table.addRow(file, "✅");
	
			client.commands.set(command.name, command);
		}
	})

	console.log(table.toString());

	client.on("message", async(message) => {
			if (message.author.bot) return;
			if (message.channel.type === "dm") return;
			if (message.content.indexOf(prefix) !== 0) return;

			const args = message.content.slice(prefix.length).trim().split(/ +/g);
			const commandName = args.shift().toLowerCase();

			const command =
				client.commands.get(commandName) ||
				client.commands.find(command => command.aliases && command.aliases.includes(commandName));

			if (!command) return message.channel.send({ embed: { color: `000000`, description: "That is not a valid command!" } });

			try {
				command.run(client, message, args);
			} catch (error) {
				console.log(error);
			}
		})
};
