const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {

	data: new SlashCommandBuilder()
		.setName('nome') //minusculo sempre, sem caractere especial
		.setDescription('descrição'),
		
	async execute(interaction) {

        let embed = new MessageEmbed() //Embed
        .setColor('#581845')
        .setDescription('-->> just a test <<--');

        await interaction.reply({embeds: [embed]}); //retorno
    },
};