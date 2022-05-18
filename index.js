// chamadas do discord.js --->
const { Client, Intents, Collection } = require("discord.js");
const { config } = require("./config.json");
const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');

dotenv.config();

//criar um novo cliente --->
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


// responder mensagens --->

for(const file of commandFiles) {

    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    client.commands.set(command.data.name, command);
}


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Erro ao executar o commando!', ephemeral: true });
	}
});

//events --->

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);

    if(event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    }
}


// status --->

client.user.setActivity("Jogando Digimon Master Online");

//fazer o bot logar --->
client.login(process.env.TOKEN);