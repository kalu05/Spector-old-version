const Discord = require("discord.js");
const moment = require("moment");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  message.delete();
  let kmember = message.guild.member(message.mentions.users.first());
  let reason = args.join(" ").slice(22);
  
 if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You do not have permission to kick users! - [KICK_MEMBERS]**");
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("**I do not have permission to kick users! - [KICK_MEMBERS]**");

            if (!args[0]) return message.channel.send('**Please specify user to get kicked!**');
  if(!reason) reason = "Unacceptable behavior.";
  
 let kickembed = new Discord.MessageEmbed()
  .setTitle(`**KICK**`)
  .setColor("#e6e6e6")
  .setFooter(`At: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)
  .addField("Kicked User:", `${kmember} with ID: ${kmember.id}`)
  .addField("Kicked By:", `${message.author}`)
  .addField("Reason:", reason);
  
  let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;
  
  kmember.send(reason);
  message.guild.member(kmember).kick(reason);
  channel.send(kickembed);
  
}

module.exports.help = {
  name: "kick"
}