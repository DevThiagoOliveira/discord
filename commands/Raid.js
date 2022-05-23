const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

const embed = new MessageEmbed()
	.setColor('0xd90505')
	.setTitle('TRUEVICE')
	.setAuthor({ name: 'BagualzinhoBot', iconURL: 'https://as1.ftcdn.net/v2/jpg/04/68/07/06/1000_F_468070658_K5tqsWISZK0yPQHWF9aOK5S6knaWGOmx.jpg',})
	.setDescription('Para crafitar o truevice e necessario adquirir diversos itens farmaveis no RealW0rld - Tokyo-Odayba')
	.setThumbnail('https://dmowiki.com/images/4/40/Myotismon_%28Raid%29.png')
	.addFields(
        { 
            name: 'Faça a sequência de mapas abaixo para conseguir os itens:\n', 
            value: '\n\nMinato / Odaiba/ Big Sghit/ Shybuya/ Vale off Light',
            inline: true 
        },
		{ 
            name: `Alguns itens necessários para o crafit do truevice são dropaveis em DUNGEONS:`,
            value: `\nSkullmera Tower {SkullMeramons Digicore}\nMyo TV {Soul Of Myotismon}\nVenom Odaiba {VenomMyotismons Venom}`,
            inline: true
        },
	)
	.setImage('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/26628811/109325b9068cd9a1d1664048ac49b6a9f100638a.png')
	.setTimestamp(Date.now());

    const row = new MessageActionRow()
        .addComponents([
            new MessageSelectMenu()
                .setCustomId('MINATO')
                .setPlaceholder('MINATO')
                .addOptions([
                    {
                        label: `MINATO`,
                        value: `-1`,
                        default: true
                    },
                    {
                        label: `MYOTISMON`,
                        value: `1`,
                        description: `Myotismon (Minato) CH 1 2 0 {Myotismons Digicore}*`,
                        default: true
                    }
                ])
                .setMinValues(1)
                .setMaxValues(2),

                .setCustomId('ODAIBA')
                .setPlaceholder('ODAIBA')
                .addOptions([
                    {
                        label: `OKUWAMON`,
                        value: `-1`,
                        description: `Okuwamon CH 0 1 2 {Digimons Bionic Energy}`,
                        default: true
                    },
                    {
                        label: `GR0UND0M0N`,
                        value: `1`,
                        description: `Groundomon CH 0 1 2 {Digital Energy}`,
                        default: true
                    }
                ])
                .setMinValues(1)
                .setMaxValues(2),

                .setCustomId('BIG SGHIT')
                .setPlaceholder('BIG SGHIT')
                .addOptions([
                    {
                        label: `MYOTISMON`,
                        value: `-1`,
                        description: `Myotismon (Visão Grande) CH 1 2 0 {Vírus Infectivo} `,
                        default: true
                    },
                    {
                        label: `DARKTYRANOMON`,
                        value: `1`,
                        description: `DarkTyranomon 0 1 2 {Vírus Infeccioso}`,
                        default: true
                    }
                ])
                .setMinValues(1)
                .setMaxValues(2)],
                [
                .setCustomId('SHYBUIA')
                .setPlaceholder('SHYBUIA')
                .addOptions([
                    {
                        label: `MYOTISMON`,
                        value: `-1`,
                        description: `Myotismon (Shibuya) CH 3 2 1 0 {Myotismons Digicore} `,
                        default: true
                    },
                    {
                        label: `RAREMON`,
                        value: `1`,
                        description: `Raremon CH 0 1 2 3 {POE} `,
                        default: true
                    },
                    {
                        label: `PHANTOMON`,
                        value: `2`,
                        description: `Phantomon CH 3 2 1 0 {POE}`,
                        default: true
                    }
                ])
                .setMinValues(1)
                .setMaxValues(3)
                ],
                [
                .setCustomId('VALE 0FF LIGH7')
                .setPlaceholder('VALE 0FF LIGH7')
                .addOptions([
                    {
                        label: `AQUILAMON`,
                        value: `-1`,
                        description: `Aquilamon CH 0 1 2 3 {FOE}`,
                        default: true
                    },
                    {
                        label: `MAMMOTHYMON`,
                        value: `-1`,
                        description: `Mammothymon CH 3 2 1 0 {FOE}`,
                        default: true
                    }   
                ])
                .setMinValues(1)
                .setMaxValues(3)
                ]
            ]);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('raid')
		.setDescription('teste do cronometro'),
		
	async execute(interaction) {
    
        //return
        await interaction.reply({embeds: [embed], components: [row]});
	},
};
