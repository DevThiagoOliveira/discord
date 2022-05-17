// chamadas do discord.js
const { Client, Intents } = require("discord.js");
const { config } = require("./config.json");
const dotenv = require('dotenv');

dotenv.config();

//criar um novo cliente
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//debug
client.once('ready', () => {
    console.log('Estou funcionando');
});

//fazer o bot logar
client.login(process.env.TOKEN);