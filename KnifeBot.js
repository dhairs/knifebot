const filter = message => message.author.id;

const Discord = require("discord.js");
const client = new Discord.Client();

const help = new Discord.RichEmbed()
   .setColor(0x008080)
  .addField("Basic Commands","\u200b")
  .addField("'help", "Displays this message.", true)
  .addField("'ping", ":ping_pong: Pong! (Used To Show Response Time)")
  .addField("Hi", "Used to engage in a tiny conversation")
  .addField("'invite", "Used to invite me to your server")
  .addField("`'announce`", "Used by admins to address the newcomers!")
  .addField("'addrule", "Used by the server admin to be able to post to the #rules channel")
  .addField("'info", "This command will tell you more about me and my owner/programmer")
  const secretai = new Discord.RichEmbed()
  .setColor(0x008080)
  .addField("Need help?" ,"Type 'help to get full command list")

const invite = new Discord.RichEmbed()
  .setColor(0x008080)
  .addField("Here's The Link You'll Need To Add Me To Your Server" ,"[**Click This To Add Me!**](https://discordapp.com/oauth2/authorize?client_id=308711735139762187&scope=bot&permissions=8)")

 const info = new Discord.RichEmbed()
 .setColor(0x008080)
 .addField("Secret AI is a Bot Coded By @Dhairyag23#7326 to make Life On Discord A LOT Easier","Make Sure To Follow The Updates To This Bot @ [This Text (It is a Link)](https://sites.google.com/a/mnmsa.org/video-gamesbydg/discord-app-f-r-i-e-n-d-s-join)")

 
 client.login("MzA4NzExNzM1MTM5NzYyMTg3.C-k1xg.8Tc59BZWOeeOHTKZQ6kv674TBiE");

client.on('ready', () => {
  console.log('I am ready!');

  });

	client.on("message", (message) => {
		if (message.content.startsWith("'setgame")){
			message.delete();
	client.user.setGame(`${message.content.split(" ").slice(1).join(" ")}`)
};
  if (message.content.includes("'ping")) {
  
	message.delete();
	var time1 = message.createdTimestamp
    message.channel.send("Pinging...").then(lol => {
      var time2 = lol.createdTimestamp
      lol.edit(":ping_pong: **Pong!** **Response Time:** `" +(time2-time1)+" `Miliseconds")
      { disableEveryone: true }
      
    });     
  } else
  if (message.isMentioned(client.user.id)) {
    message.delete();
	message.channel.sendEmbed(
      secretai,
      message.author,
    { disableEveryone: true }
    );
  } else
  if (message.content.includes("@Knife Bot")) {
    message.delete();
	message.channel.sendEmbed(
    secretai,
    message.author,
    { disableEveryone: true}
    );
  } else
  if (message.content.includes("'poop")) {
	  message.delete();
    message.channel.send("Suck IT:open_mouth:!");
  } else 
	  if (!message.member.roles.find('name', 'Announcer')){
	if (message.content.startsWith("'announce")){
	
			message.delete();
			message.channel.send("You Do Not Have The Perm To Be Able To Send To This Channel, Or, You Do Not Have A Role Called `Announcer`, Please Create A Role Called Announcer")
		};
	};
		
if (message.member.roles.find('name', 'Announcer') ){
			if (message.content.startsWith("'announce")){
		message.delete();
		if(message.guild.channels.find('name', 'announcements')) {
  message.guild.channels.find('name', 'announcements').send(` ***__Announcement__*** \n ${message.content.split(" ").slice(1).join(" ")}`)
return;
if (!message.guild.channels.find('name', 'announcements')){
	message.channel.send("You Do Not Have A Channel Called `#announcements` so please create one... And Make Sure I Have The Perm To Post To It...")
};
	};
	};
		};
  if(message.author.bot) return;
  if (message.content.includes("'help")){
	  message.delete();
	 
	 message.channel.sendEmbed(
	  help,
	  message.author,
	  message.channel.send(message.author.username+", Check your Mentions for my `'help`"))
  };
	  if (message.content.includes("'invite")){
	
message.channel.sendEmbed(
	invite,
	message.author,
	{ disableEveryone: true }
	);
};
	
    
	

if (message.content.includes("discord.gg")){
	if(!message.guild.channels.find(channel => message.channel.name.includes('partnered-servers'))){ message.delete() 
	message.channel.send("This message Was __NOT__ sent In the #partnered-servers channels, so please make one that includes the text `partnered-servers` or send this message in it.")
};
};

if (message.content.startsWith("'addrule ")){
	message.delete();
	if (!message.member.roles.exists('name', 'Ruler')){
		message.channel.send("You Do Not Have A Role Called `Ruler`, please Get A Role Called `Ruler` to use This Command")
	};
	if(!message.guild.channels.find(channel => channel.name.includes('rules'))){
		message.channel.send("I could not find a channel that includes the phrase `rules` please make one that includes the phrase")
	};
	if (message.member.roles.exists('name', 'Ruler')){
	if(message.guild.channels.find(channel => channel.name.includes('rules'))){
 if(message.guild.channels.find(channel => channel.name.includes('rules'))){
	message.guild.channels.find(channel => channel.name.includes('rules')).send(`${message.author.username} added the following rule: \n ${message.content.split(" ").slice(1).join(" ")}`)
	};
  };
	};

};
	


if (message.content.includes("'info")) {
	message.delete();
	message.channel.sendEmbed(
	info,
	message.author.username,
	{ disableEveryone: true }

);

};
client.on("guildMemberRemove", (member) =>{
	
		if(message.guild.channels.find(channel => channel.name.includes('mod-log'))){
	message.guild.channels.find(channel => channel.name.includes('mod-log')).send("Goodbye "+(member)+", RIP...:cry:")
	};
});
client.on("guildMemberAdd", (member) =>{
if(message.guild.channels.find(channel => channel.name.includes('mod-log'))){ message.delete().send("Welcome "+(member)+", To "+member.guild.name+ "! Enjoy your stay! :smiley:")
};
});
if (message.content.includes("'bulkdelete")){
	message.delete();
	message.channel.fetchMessages({ limit: (`  ${message.content.split(" ").slice(1).join(" ")}`) }).then(messages => {
    const filteredMessages = messages.filter(filter);
    message.channel.bulkDelete(filteredMessages);
	});
  let params = message.content.split(' ')
let cmd = params.shift()
if (cmd === "'ban"){
 if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
        message.reply('```An error has occured\nReason: You do not have the BAN_MEMBERS permission```')
        return;
      }

      let user = message.mentions.users.first();

      if (user == null) {
        message.reply("User does not exist. (Make sure you mention the user)");
        return;
      }

      let reason = message.content.replace(params[0] + " ", "").replace(cmd + "ban ", "");
      if (reason == null || reason == "" || params[0] == null || params[1] == null) {
        message.reply("Command syntax: ** " + cmd + "ban @User Reason**");
        return;
      }

      if (!message.channel.guild.member(user).bannable) {
        message.reply("I can not ban them!");
        return;
      }

      let banner = "";
      let banned = "";

      if (message.channel.guild.member(message.author).nickname == null) {
        banner = message.author.username;
      } else {
        banner = message.channel.guild.member(message.author).nickname;
      }

      if (message.channel.guild.member(user).nickname == null) {
        banned = user.username;
      } else {
        banned = message.channel.guild.member(user).nickname;
      }

      user.send(message.author.username + "#" + message.author.discriminator + " has banned you from " + message.guild.name + "! Reason: **" + reason + "**.");
      if(message.guild.channels.find('name', 'mod-log')) {
                message.guild.channels.find('name', 'mod-log').send(`User ${user.username} has been banned for the reason of ${reason}.`);
              } else {
                message.guild.defaultChannel.send(`User ${user.username} has been banned for the reason of ${reason}.`);
  }
      setTimeout(function () {
        message.channel.guild.member(user).ban()
          .then(() => {
            message.channel.send(":ok_hand:");
          })
          .catch(err => {
            message.reply(`\`${err}\``);
            return;
          });
      }, 1000);
};
};
	});
}
	 

	