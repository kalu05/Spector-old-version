const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: "invites",
        aliases: ["help"],
        description: "",
        category: "info",
        usage: "[question]",
        accessableby: "everyone",
    },
    run: async (bot, message, args) => {
      
        var user = null;
        user = message.author;

        message.guild.fetchInvites()
        .then

        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                    for(var i=0; i < userInvites.length; i++)
                    {
                        var invite = userInvites[i];
                        userInviteCount += invite['uses'];
                    }
                        const inviteEmbed = new MessageEmbed()
      .setTitle('Your invites!')
      .setDescription(`<a:h_tada:896424782789242882>***${userInviteCount}*** <a:h_tada:896424782789242882>`)
      .setColor('#e6e6e6')

        message.channel.send(inviteEmbed);
            }
        )
}
}
