const fs = require('node:fs');
const path = require('node:path');//checking on indexed nodes form node.js
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js'); // idk why its written like this!
const { token }= require("./config.json");// in {} cuz json

const client = new Client({ intents: [
	// Not allowed: GatewayIntentBits.GuildMembers,GatewayIntentBits.MessageContent,
	GatewayIntentBits.Guilds,
	GatewayIntentBits.DirectMessages,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.GuildMessageReactions,
	GatewayIntentBits.GuildMessageTyping

] });

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const happening = require(filePath);
	if (happening.once) {
		client.once(happening.name, (...args) => happening.execute(...args));
	} else {
		client.on(happening.name, (...args) => happening.execute(...args));
	}
}









//just the login after everything is done in this file
client.login(token);