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


//-------------Commands-------------\\
bot.on("message", message => {
    const cmdlist = new Discord.MessageEmbed()
    .setColor('#FFC0CB')
    .setTitle('Commands List')
    .addField('Help', 'Displays command listing')
    .addField('Info', 'Displays info about server and bot')
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/1200px-Blue_question_mark_icon.svg.png')
    .setTimestamp();
    if (message.content === '-help'){
      message.reply(cmdlist)
    
    }
})
bot.on("message", message => {
    const info = new Discord.MessageEmbed()
    .setColor('#029AA')
    .setTitle('Info')
    .addField("Place Holder", "PlaceHolder")
    .setTimestamp();
    
    
    if (message.content === '-info') {
        if (message.author.bot) return; //prevents the bot from replying to itself
    infoChannel = bot.channels.cache.get('738107502255669336')
    
    infoChannel.send(info)
  }
});
//-------------Commands-------------\\



bot.on("guildMemberAdd" , member => {
    testing(`user ${member.tag} has joined`); //just wanna see if what i did actually work
});

bot.login(nothingtoseehere);
//-------------Discord Bot-------------\\
