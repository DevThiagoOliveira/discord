const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const channel = client.channels.cache.get('975424523455332442');

const exampleEmbed = {
	color: 0x0099ff,
	title: 'Some title',
	url: 'https://discord.js.org',
	author: {
		name: 'Some name',
		icon_url: 'https://i.imgur.com/AfFp7pu.png',
		url: 'https://discord.js.org',
	},
	description: 'Some description here',
	thumbnail: {
		url: 'https://i.imgur.com/AfFp7pu.png',
	},
	fields: [
		{
			name: 'Regular field title',
			value: 'Some value here',
		},
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
	],
	image: {
		url: 'https://i.imgur.com/AfFp7pu.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'Some footer text here',
		icon_url: 'https://i.imgur.com/AfFp7pu.png',
	},
};

client.on('message',message => {

	if (message.author.bot) return

	const embed = new MessageEmbed()
	  .setDescription(message.content)
	  .setAuthor(message.author.tag, message.author.displayAvatarURL())
	channel.send({embeds: [embed]}).catch(console.error)
  });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('te da uma resposta com pong!'),
	async execute(interaction) {
		await interaction.reply(exampleEmbed);
	},
};