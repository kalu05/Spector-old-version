const Discord = require('discord.js')
const randomPuppy = require('random-puppy')

module.exports.run = async (client, message) => {
var subreddits = [
  'https://cdn.discordapp.com/attachments/862253552482254858/896748476250083398/elena-and-damon-the-vampire-diaries.gif',
'https://cdn.discordapp.com/attachments/862253552482254858/896748475973271622/dylasnobrien.gif',
'https://cdn.discordapp.com/attachments/862253552482254858/896747874174517278/tvd-caroline-forbes.gif',
'https://cdn.discordapp.com/attachments/862253552482254858/896747612856799252/GEmEV1.gif',
'https://cdn.discordapp.com/attachments/862253552482254858/896747098144374784/d8fc70f1fc7e99c2b7022a1187b5efc1.gif',
'https://cdn.discordapp.com/attachments/862253552482254858/896746106682216488/8e9537bea019459818ccc6fe419f8410.gif',
'https://cdn.discordapp.com/attachments/862253552482254858/896745760786382878/bonnie-bennett-enzo-and-bonnie-bennett-kissing.gif',
'https://cdn.discordapp.com/attachments/862253552482254858/896745279825530931/6c71531c5dc88e9ae0379df56baf2bc4.gif',
'https://cdn.discordapp.com/attachments/862253552482254858/892519944435146752/887bb072bd293a1c4f7f5164075e1e80.gif',
'https://cdn.discordapp.com/attachments/862253552482254858/892519613097738340/54c2157302607a6e47ba0f4606347036.gif',
'https://cdn.discordapp.com/attachments/892164258425618492/892166184475185192/1632779383432.gif',
'https://cdn.discordapp.com/attachments/892164258425618492/892165520164540426/1632779231639.gif',
'https://cdn.discordapp.com/attachments/892164258425618492/892165467928686632/1632779215980.gif',
'https://cdn.discordapp.com/attachments/892164258425618492/892165327474016296/1632779179584.gif',
'https://cdn.discordapp.com/attachments/892164258425618492/892165191217856523/1632779153080.gif',
'https://cdn.discordapp.com/attachments/892164258425618492/892165152047251456/1632779144003.gif',
'https://cdn.discordapp.com/attachments/892164258425618492/892165103015854170/1632779120829.gif'
]


    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    
   
            var user = message.mentions.members.first()
            if(!user){
                return message.reply('Please specify a user to kiss!')
            };

            const embed = new Discord.MessageEmbed()
                .setColor('#e6e6e6')
                .setDescription(`${message.author} has kissed **${user}**`)
                .setImage(sub);
            message.channel.send({
                embed
            });
     
}
module.exports.help = {
    name: "kiss",
    description: "Sends a kiss gif to channel you can choose to mention user to kiss them.",
    usage: "/kiss [@USER]"
}