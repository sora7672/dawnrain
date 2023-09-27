const { Client, SlashCommandBuilder } = require('discord.js');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Get some infos'),
	async execute(interaction) {
		
		const channelid = '1156670193175638056'; 
		const userid = '515233500471754769'; 
		const channel = interaction.client.channels.cache.get(channelid);//cant get DM channels
		const user = interaction.client.users.cache.get(userid);
		
		await interaction.member.send("This message received the user, who called to command /dmme");//works
		await channel.send("Send in Channel with ID: ".concat(channel.id, "\nand the channelname: ", channel.name));//works on channels not dm channels
		await user.send("This message was sent to the user with an ID: ".concat(user.id, "\n with username: ", user.username));
		await interaction.reply('Success!');
		


	},
};
