const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {

	data: new SlashCommandBuilder()
		.setName('ping') //minusculo sempre, sem caractere especial
		.setDescription('lhe mostra o seu ping'),
		
	async execute(interaction) {

        let embed = new MessageEmbed() //Embed
        .setColor('#581845')
        .setDescription(`ping`);

        await interaction.reply({embeds: [embed]}); //retorno
    },
};
