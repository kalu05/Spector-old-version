const { MessageEmbed } = require("discord.js")
const db = require('quick.db');

module.exports = {
    config: {
        name: "unban",
        description: "Unban a user from the guild!",
        usage: "[name | tag | mention | ID] <reason> (optional)",
        category: "moderation",
        accessableby: "Administrator",
        aliases: ["unban"],
    },
    run: async (bot, message, args) => {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You do not have permission to unban members! - [BAN_MEMBERS]**")

        if (!args[0]) return message.channel.send("**Please specify user\`s ID to unban!**")
      
        let bannedMemberInfo = await message.guild.fetchBans()

        let bannedMember;
        bannedMember = bannedMemberInfo.find(b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || bannedMemberInfo.get(args[0]) || bannedMemberInfo.find(bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase());
        if (!bannedMember) return message.channel.send("**Please specify valid ID or tag! If that doesn\'t work, maybe member is not banned!**")

        let reason = args.slice(1).join(" ")

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I do not have permission to unban members! - [BAN_MEMBERS]**")
        try {
            if (reason) {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed = new MessageEmbed()
                    .setColor("#e6e6e6")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${bannedMember.user.tag} has been unbanned for ${reason}**`)
                message.channel.send(sembed)
            } else {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed2 = new MessageEmbed()
                    .setColor("#e6e6e6")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${bannedMember.user.tag} has been unbanned**`)
                message.channel.send(sembed2)
            }
        } catch {
            
        }

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        let embed = new MessageEmbed()
            .setColor("#e6e6e6")
            .setThumbnail(bannedMember.user.displayAvatarURL({ dynamic: true }))
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**Command**", "unban")
            .addField("**Unbanned**", `${bannedMember.user.username}`)
            .addField("**User\`s ID**", `${bannedMember.user.id}`)
            .addField("**Unbanned by**", message.author.username)
            .addField("**Reason**", `${reason}` || "**Reason not specified**")
            .addField("**Date**", message.createdAt.toLocaleString())
            .setFooter(message.guild.name, message.guild.iconURL())
            .setTimestamp();

        var sChannel = message.guild.channels.cache.get(channel)
        if (!sChannel) return;
        sChannel.send(embed)
    }
}