//Start
const Discord = require('discord.js');
const bot = new Discord.Client();


//-------------------Debugy thing-------------------\\
const testing = true;
function test(message) {
    if (testing) {
        console.log("TESTING: " + message);
    }
}
//-------------------Debugy thing--------------------\\


//-------------and it does display-------------\\
//test("this should display");
//-------------and it does display-------------\\


//-------------Discord Bot-------------\\

bot.on("ready", () => {
    generalChannel = bot.channels.cache.get('731959489036812310')
    test(`${bot.user.tag} is now online`)
   
    generalChannel.send("Hello, World! I am online :)")
});

bot.on("message", message => {
    //make a embed and send it to #info
    
    
    if (message.content === '-test') {
        if (message.author.bot) return; //prevents the bot from replying to itself
    infoChannel = bot.channels.cache.get('738107502255669336')
    
    infoChannel.send(info)
  }
});

bot.on("guildMemberAdd" , () => {
    //nothing
});

bot.login(nothing to see here);
//-------------Discord Bot-------------\\
