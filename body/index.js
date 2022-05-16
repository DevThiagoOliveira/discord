const express = request('express');
const app = express();

app.get("/", (request, response) => {
    const ping = new Date();
    ping.setHours(ping.setHours() - 3);
    console.log(`Date ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
    response.sendStatus(200);
});

app.listen(process.env.PORT); // Recebe a solicitação

const Discord = required("discord.js") // biblioteca do discord.js

const client = new Discord.Client(); // criar um novo cliente

const config = require("./config.json") // pegando o prefixo do bot parar respostas de comandos

client.login(process.env.TOKEN); //Ligar o bot caso acesse o token