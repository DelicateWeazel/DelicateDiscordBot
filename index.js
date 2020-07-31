//Start
const Discord = require('discord.js');
const bot = new Discord.Client();
const package = require("./package.json");
const channelss = require("./channels.json")

//Note to self: FINISH ADDING ALL THE STUFFS FOR THE BOT(ON)DO(THING) tyvm
//PS. also make sure they work aswel ty



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
    .addField("github repository", '[My GitHub](https://github.com/DelicateWeazel/DelicateDiscordBot)')
    .addField("Version", "v" + package.version)
    
    .setTimestamp();
    
    
    if (message.content === '-info') {
        if (message.author.bot) return; //prevents the bot from replying to itself
    
    
    message.author.send(info)
  }
});
//-------------Commands-------------\\

//-------------on(thing) do (thing)-------------
bot.on("ready", () => {
    test(`${bot.user.tag} is now online`)
    bot.channels.cache.get(channelss.general).send("Hello, World! I am online :)")
});


bot.on("guildMemberAdd" , member => {
    const memberJoin = new Discord.MessageEmbed()
    .setTitle('guildMemberAdd')
    .addField('User', `${member}`)
    .addField('Has joined', `${guild.name}`)
    .setTimestamp();
    test(`user ${member} has joined`); 
    bot.channels.cache.get(channelss["member-log"]).send(memberJoin);

});

bot.on("guildMemberRemove", member => {
    const memberLeave = new Discord.MessageEmbed()
    .setTitle('guildMemberRemove')
    .addField('User', `${member}`)
    .addField('Has left or been banned from', `${guild.name}`)
    .setTimestamp();
    test(`user ${member} has left or been kicked`);
    bot.channels.cache.get(channelss["member-log"]).send(memberLeave);
});

bot.on("guildBanAdd", async (guild, user) => {
    test(`user ${user.tag} has been banned`);
    memberlog = bot.channels.cache.get('738753778932645939')
    memberlog.send(`${user.tag} has been banned`)
});
bot.on("messageDelete", message => {
    const deletedText = new Discord.MessageEmbed()
    .setTitle('messageDeleted')
    .addField('Message from', `${message.author.tag}`)
    .addField('Has been deleted in', `${message.channel.name}`)
    .addField('With the contents', `${message.content}`)
    .setTimestamp();
    test(`message from ${message.author.tag} has been deleted in ${message.channel.name}, message contents >: ${message.content}`)
    bot.channels.cache.get(channelss["text-log"]).send(deletedText)
})
//-------------on(thing) do (thing)-------------

bot.login(NothingToSeeHere);
//-------------Discord Bot-------------\\
