const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');
const dotenv = require('dotenv');
dotenv.config();

const commands = [
    new SlashCommandBuilder().setName('online').setDescription('Replies with @everyone Estou online :)'),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body:commands })
    .then(() => console.log('Mensagem registrada com sucesso'))
    .catch(console.error);