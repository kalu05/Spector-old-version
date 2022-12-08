const urban = require('relevant-urban');
const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "znacenje",
        aliases: ["staznaci"],
        category: "fun",
        description: "Give information about urban words!",
        usage: "[word]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        if(!args[0])
        return message.channel.send("Please Enter Something To Search");

        let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium";
        try {
            let res = await urban(args.join(' '))
                if (!res) return message.channel.send("No results found for this topic, sorry!");
                let { word, urbanURL, definition, example, thumbsUp, thumbsDown, author } = res;

                let embed = new MessageEmbed()
                    .setColor("#e6e6e6")
                    .setAuthor(`Word - ${word}`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
                    .setDescription(`**Defintion:**\n*${definition || "No definition"}*\n\n**Example:**\n*${example || "No Example"}*`)
                    .addField('**Rating:**', `**\`Upvotes: ${thumbsUp} | Downvotes: ${thumbsDown}\`**`)
                    .addField("**Link**",  `[link to ${word}](${urbanURL})`)
                    .addField("**Author:**", `${author || "unknown"}`)
                    .setTimestamp()

                message.channel.send(embed)
            
        } catch (e) {
            console.log(e)
            return message.channel.send("looks like i've broken! Try again")
        }
    }
}