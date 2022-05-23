const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timer')
		.setDescription('te responde com ola'),
		
	async execute(interaction) {

        var timer = new Timer();
        timer.start();
        
        timer.addEventListener('secondsUpdated', function (e) {
            let chrono = $('#basicUsage').html(timer.getTimeValues().toString());
        });

        //Embed
		let embed = new MessageEmbed()
			.setColor('#581845')
			.setDescription({chrono: chrono});


        //return
		await interaction.reply({embeds: [embed]});
	},
};