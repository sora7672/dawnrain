const { Events } = require('discord.js');

const channels_to_check = [];

channels_to_check.push("1155226902278197290");
channels_to_check.push("1156670193175638056");

const ignored_signs = [];
ignored_signs.push("$");
ignored_signs.push("!");
ignored_signs.push("/");
ignored_signs.push("?");
ignored_signs.push("#");
ignored_signs.push("+");
ignored_signs.push("-");
ignored_signs.push("%");

const bad_words= [];
bad_words.push("fuck");
bad_words.push("shit");
bad_words.push("sex");
bad_words.push("tittys");


//only happens if a message is sent in a guild, where the bot is member of

function rep_bad_words(inText, wordReplace){
	
	var repText= "X".padStart(wordReplace.length, "X");
	return inText.replace(wordReplace, repText);
}


//returns true if one of the bad words is found in text
function check_bad_words (inText){
	var exists=false;
	var baddy ="";
	for (i in bad_words){
		if (inText.includes(bad_words[i])){
			exists= true;
			baddy=bad_words[i];
			break;
		}
	}
	return {"exists": exists,
	"word": baddy
	};
	
}


//replace ALL bad words found (looping)
function rep_all_bad_words(inText){
	var retText= inText;
	
	while(check_bad_words(retText).exists){
		
		retText=rep_bad_words(retText, check_bad_words(retText).word);
		
		
	}
	return retText;
	
}



module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		
		if (message.member.user.bot){return;}//if message is from any bot
		
		//check for channel id to be monitored else, ignore message
		let mon_me = false;
		for (i in channels_to_check){
			if (channels_to_check[i] == message.channelId){
				mon_me = true;
				break;
			}
		}
		if (mon_me==false) {return;}
		// end of check for channelids
		
		//check message start for special signs, if start with then ignore message
		for (i in ignored_signs){
			slit= message.content.charAt(0);
			if (ignored_signs[i] == message.content.charAt(0)){
				return;
			}
		}//end of check for signs

		if (check_bad_words(message.content).exists){
			
			message.channel.send(`${message.author.username} wrote: ${rep_all_bad_words(message.content)}`)
			message.channel.send(`Hey <@${message.author.id}> be warned! don't use bad words!`)
			message.delete();
		}
		//check for bad words, if found replace the message

		
		
		
		
		console.log ("Message send by no bot!");
		
		
		
	}
};
