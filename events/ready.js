const { Events } = require('discord.js');
const { ActivityType } = require('discord.js');




module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		
		
		//client.user.setAvatar('URL or path'); // can set another avatar for the bot
		client.user.setUsername('DawnRain');//Change bot username
		
		
		client.user.setPresence({ activities: [{ name: 'Im getting programmed!', type: ActivityType.Competing}], status: 'dnd' });
		//Types possible: Competing, Listening, Streaming, Watching, CustomStatus
		// status possible: online, idel, dnd, invisible -> DND = do not disturb
		
		console.log(`Ready! Logged in as ${client.user.tag}`);
	}
};
