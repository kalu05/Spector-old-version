const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton, } = require("discord-buttons");

module.exports = {
  name: "inviteme",
   aliases: ["hlp"],
  run: async (client, message, args ) => {

      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    var yourping = new Date().getTime() - message.createdTimestamp
    var botping = Math.round(client.ws.ping) 

    const author = message.author.tag

    const embed = new Discord.MessageEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
    .setDescription(`**To invite our bot press the button below and enjoy. We hope that you like our bot.**`)
        .setColor('#e6e6e6')
        .setFooter(message.guild.name, message.guild.iconURL())
    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let inviteButton = new MessageButton()
    .setLabel(`Invite!`)
    .setEmoji(`🎊`)
    .setURL('https://discord.com/api/oauth2/authorize?client_id=867008793354698752&permissions=8&scope=bot')
    .setStyle('url')

    let row = new MessageActionRow()
    .addComponents(inviteButton);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

            MESSAGE.edit(embed, row);
            await b.reply.defer()

        }

    )

    collector.on('end', (b) => {
        MESSAGE.delete
    })
    }
  };