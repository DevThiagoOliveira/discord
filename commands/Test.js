const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('te da uma resposta com um embed'),
		
	async execute(interaction) {

		let embed = new MessageEmbed()
			.setColor('#581845')
			.setDescription('->> just a test <<--');

		await interaction.reply({embeds: [embed]});
	},
};