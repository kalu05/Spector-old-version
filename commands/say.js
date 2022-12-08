const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "say",
        category: "fun",
        noalias: [''],
        description: "Says your input via the bot",
        usage: "[text]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
      try {
        if (args.length === 0)
            return message.channel.send("**Enter some text!**")
        message.delete({ timeout: 1000 })

        const embed = new MessageEmbed()
            .setDescription(args.join(" "))
            .setColor("#e6e6e6");

        message.channel.send(embed)
      } catch (e) {
          throw e;
      };
  }
};
