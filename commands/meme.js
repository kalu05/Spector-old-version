const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    config: {
        name: "meme",
        category: "fun",
        noalias: "No Aliases",
        usage: " ",
        description: "Sends an epic meme",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

        const subReddits = ["dankmeme", "meme", "me_irl", "MemeEconomy", "AdviceAnimals", "ComedyCemetery", "memes", "PrequelMemes", "terriblefacebookmemes", "PewdiepieSubmissions", "funny", "teenagers"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor("#e6e6e6")
            .setImage(img)
            .setTitle("meme!")
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}
