const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dawnrain')
		.setDescription('Add dawnrain to your server'),
	async execute(interaction) {
		await interaction.reply({content: "'Add me! ==> https://discord.com/api/oauth2/authorize?client_id=1155223173369958450&permissions=8&scope=bot%20applications.commands'", ephemeral: true });
	},
};
