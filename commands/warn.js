const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    config: {
        name: "utisaj",
        aliases: ['report'],
        category: "moderation",
        description: "reports a user of the guild",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("**You do not have permissions to warn users! - [VIEW_AUDIT_LOG]**");
        if (!args[0]) return message.channel.send("**Please specify a user!**")

        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!target) return message.channel.send("**Please specify a user!**")
        if (target.id === message.member.id) return message.channel.send("**Can not warn yourself!**")
        
        let reason = args.slice(1).join(" ")

        if (target.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Cannot Warn This User!**')
        if (target.hasPermission("MANAGE_GUILD") || target.user.bot) return message.channel.send("**Cannot Warn This User!**")
      try {
        const sembed2 = new MessageEmbed()
            .setColor("#e6e6e6")
            .setThumbnail('https://i.imgur.com/QviVCgw.png')
            .setDescription(`**You Have Been Warned In ${message.guild.name} for - ${reason || "No Reason!"}**`)
            .setFooter(message.guild.name, message.guild.iconURL())
        target.send(sembed2)
      } catch {
        
      }
        if (reason) {
        const embed = new MessageEmbed()
            .setColor("#e6e6e6")
            .setThumbnail('https://i.imgur.com/QviVCgw.png')
            .setAuthor(`${message.guild.name}`, message.guild.iconURL())
            .setDescription(`**${target.displayName} je upozoren a razlog je: ${reason}!**`)
        message.channel.send(embed)
        } else {
            const embed = new MessageEmbed()
            .setColor("#e6e6e6")
            .setThumbnail('https://i.imgur.com/QviVCgw.png')
            .setAuthor(`${message.guild.name}`, message.guild.iconURL())
            .setDescription(`**${target.displayName} je upravno upozoren!**`)
        message.channel.send(embed)
        }

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const sembed = new MessageEmbed()
            .setColor('#e6e6e6')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/QviVCgw.png')
            .setFooter(message.guild.name, message.guild.iconURL())
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**Command**", "warn")
            .addField("**Warned**", `${target}`)
            .addField("**User\`s ID**", `${target.user.id}`)
            .addField("**Warned by**", `${message.member}`)
            .addField("**Warned in**", `${message.channel}`)
            .addField("**Reason**", `**${reason || "Did something wrong."}**`)
            .addField("**Date**", message.createdAt.toLocaleString());

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(sembed)
    }
}
