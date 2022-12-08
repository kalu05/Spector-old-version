module.exports = {
    config: {
        name: "clear",
        aliases: ["clear"],
        category: "moderation",
        description: "Deletes messages from a channel",
        usage: "delete [amount of messages]",
        accessableby: "Administrator"
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have hasPermission to clear messages!- [MANAGE_MESSAGES]")
        if (isNaN(args[0]))
            return message.channel.send('**Please specify valid nummber for clearing messages!**');

        if (args[0] > 100)
            return message.channel.send("**Please specify number under 100!**");

        if (args[0] < 1)
            return message.channel.send("**Please specify number more than 1!**");

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**successfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({ timeout: 2000 }))).catch(() => null)
    }
}