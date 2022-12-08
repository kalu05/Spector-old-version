const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent

exports.run = async (client, message, args, tools) => { //lets started your commands script
      if (!message.mentions.users.first()) return message.reply("You have to specify user to slap!"); //if no one is mentions , lets reply as
    if(message.mentions.users.first().id === "504567188519256068") return message.reply('You can slap him you piece of a shit.'); //if they mentions you , lets reply as
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap"); //wut we need 
    
    const embed = new Discord.MessageEmbed() //once discordjs is updated to 12.2.0 , richembed is removed , they replaced as MessageEmbed Method
    .setColor("#e6e6e6") // you can set it as you went
    .setTitle(`${message.mentions.users.first().username} you have been slapped by ${message.author.username}!`) //lets reply as a some fun reply
    .setImage(body.url) //lets show slap image (GIF}
    .setFooter(message.guild.name, message.guild.iconURL); //personnel footer
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'slap', //commands name
    description: 'Udari koga god hoces', //commands description
    usage: 'slap', //how they work
    example: 'slap @Spector#0359' //lets make a some example about how they work
  };