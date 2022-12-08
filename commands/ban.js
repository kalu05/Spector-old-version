const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    config: {
        name: "ban",
        aliases: ["b"],
        category: "moderation",
        description: "banuje membera",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        accessableby: "Administrator",
    },
    run: async (bot, message, args) => {
        try {
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You do not have permission to ban members! - [BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I dont have permission to ban members! - [BAN_MEMBERS]**");
            if (!args[0]) return message.channel.send("**Please specify valid member to ban!**")

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("**Specified member are not on the server!**");
            if (banMember === message.member) return message.channel.send("**You can not ban yourself.**")

            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("**Sorry I can not ban specified member.**")
            try {
            banMember.send(`**You have been banned from ${message.guild.name} for - ${reason || "You did something wrong"}**`).then(() =>
                message.guild.members.ban(banMember, { days: 7, reason: reason })).catch(() => null)
            } catch {
                message.guild.members.ban(banMember, { days: 7, reason: reason })
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("#e6e6e6")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** has been banned for ${reason}`)
            message.channel.send(sembed)
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("#e6e6e6")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** has been banned successfully.`)
            message.channel.send(sembed2)
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#e6e6e6")
                .setThumbnail(banMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Command**", "ban")
                .addField("**Banned**", banMember.user.username)
                .addField("**User`s ID**", `${banMember.id}`)
                .addField("**Banned by**", message.author.username)
                .addField("**Reason**", `${reason || "**Did something wrong.**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
};