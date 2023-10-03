const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

const pingTxt = "This is my timed pong!!";



module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('This will set a timed ping'),
	async execute(interaction) {
		await interaction.reply('Pong again!');
		for (let i = 5; i>0; i--){
			await interaction.editReply(pingTxt.concat('\n', i));
			await wait(1000);
		}
		//delete reply
		await interaction.deleteReply();
	},
};


