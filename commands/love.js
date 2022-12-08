const Discord = require('discord.js');

module.exports = {
    config: {
        name: "lock",
        description: "lock channel",
        aliases: []
    },
    run: async (bot, message, args) => {

if(!message.mentions.members.first()) return message.channel.send(`Please mention someone to calculate the love percentage`).then(message.react('❌'));
        var user = message.mentions.users.first();
        if(user.id === message.author.id) return message.channel.send("Can't mention yourself");

        const love = Math.round(Math.random() * 100);
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex); 
        
        let loveEmbed = new Discord.MessageEmbed()
        .setTitle("Love percentage")
        .setDescription(`${message.author} loves ${user} this much: ${love}%\n\n${loveLevel}`)
        .setThumbnail(user.avatarURL());
        message.channel.send(loveEmbed)
    }
}