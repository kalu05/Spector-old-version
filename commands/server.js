const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "serverinfo",
        aliases: ["info"],
        description: "",
        category: "info",
        usage: "[question]",
        accessableby: "everyone",
    },
    run: async (bot, message, args) => {

  const owner = await message.guild.members.fetch(message.guild.ownerID);
	const embed = new MessageEmbed()
		.setColor("#e6e6e6")
		.setTitle("Server info")
		.setThumbnail(message.guild.iconURL)
		.addField(`Server Name`, `${message.guild.name}`, true)
		.addField(`Server ID`, `${message.guild.id}`, true)
		.addField(`Owner`, `${message.guild.owner.user.tag}`, true)
		.addField(`Server Region`, `${message.guild.region}`, true)
		.addField(`Members`, `${message.guild.memberCount}`, true)
		.addField(`Created at`, `${message.guild.createdAt.toDateString()}`, true)
    .setFooter("Made by lukaa#0001")
        var msg = await message.channel.send(embed);
    }
}
