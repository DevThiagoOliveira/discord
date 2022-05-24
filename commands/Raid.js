const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

const embed = new MessageEmbed()
    .setColor('0xd90505')
    .setTitle('TRUEVICE')
    .setAuthor({ name: 'BagualzinhoBot', iconURL: '/assets/img/EV_5LFBXYAEdgG0.png', })
    .setDescription('Para crafitar o truevice e necessario adquirir diversos itens farmaveis no RealW0rld - Tokyo-Odayba')
    .setThumbnail('/assets/img/Myotismon_(Raid).png')
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
    .setImage('/assets/img/109325b9068cd9a1d1664048ac49b6a9f100638a.png')
    .setTimestamp(Date.now())
    .setFooter({ text: `Mensagem enviada em`, iconURL: '/assets/img/EV_5LFBXYAEdgG0.png' });


module.exports = {
    data: new SlashCommandBuilder()
        .setName('raid')
        .setDescription('te mostra informações sobre as raid'),

    async execute(interaction) {

        await interaction.reply({embeds: [embed]});
    },
};
