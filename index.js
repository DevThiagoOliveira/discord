// chamadas do discord.js --->
const { Client, Intents, Collection } = require("discord.js");
const { config } = require("./config.json");
const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');

dotenv.config();

//criar um novo cliente --->
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//debug --->
client.once('ready', () => {
    console.log('Estou online');
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

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

//fazer o bot logar --->
client.login(process.env.TOKEN);