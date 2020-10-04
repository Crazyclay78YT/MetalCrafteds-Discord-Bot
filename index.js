const Discord = require('discord.js');
const bot = new Discord.Client({disableMentions: "everyone"});
const fs = require('fs')
const {prefix, token} = require('./config.json');
bot.prefix = prefix;
bot.login(token);
bot.commands = new Discord.Collection();
bot.on("ready", () =>{
    console.log(`${bot.user.tag} has successfully booted up.`);
    bot.user.setActivity(` ${prefix}help | Under development`, { type: "PLAYING"})
 });
bot.on("warn", (info) => console.log(info));
bot.on("error", console.error);


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); 
for(const file of commandFiles) {
  const command = require(`./commands/${file}`); 
  bot.commands.set(command.name, command); 
} 

/*
//Server Greeting
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channel.cache.find(ch => ch.name === '💬main-chat');
    if(!channel) return;
    if(member.guild.name === 'vipcodestudio') {
        channel.send('Hello! Welcome to the server. Dont forget to check out #📜rules!')
    }
})
*/

//Commands
bot.on('message', message=>{

    let args = message.content.substring(prefix.length).split(' ');

    switch(args[0]){
    //General Commands
        //uptime
        
        case "uptime":
            bot.commands.get('uptime').execute(message, args);
            break;
        
        //Ping
        case "ping":
            bot.commands.get('ping').execute(message, args);
            break;
    
    //Help
        //Main menu
            case "help":
                bot.commands.get('help').execute(message, args);
                break;                
        //General help
            case "helpgeneral":
                bot.commands.get('helpgeneral').execute(message, args);
                break;
        //Music help
            case "helpmusic":
                bot.commands.get('helpmusic').execute(message, args);
                break;
        //Stream help
            case "helpstream":
                bot.commands.get('helpstream').execute(message, args);
                break;
                
    //Stream
        case "stream":
            bot.commands.get('stream').execute(message, args);
            break;

    //Poll system
            case "poll":
                const Embed = new Discord.MessageEmbed()
                    Color: 0x009900
                    Title: "Initiate Poll"
                    Desciption: "-poll to initiate a simple yes or no poll"
                    if(!args[1]){
                        message.channel.send(Embed);
                    }
                    let msgArgs = args.slice(1).join(" ");
                    message.channel.send("📋 " + "**" + msgArgs + "**").then(messgaeReaction => {
                            messgaeReaction.react('👍');
                            messgaeReaction.react('👎');
                    })
                break;
        }
    })
