const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton, } = require("discord-buttons");

module.exports = {
  name: "ping",
   aliases: ["hlp"],
  run: async (client, message, args ) => {

      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    var yourping = new Date().getTime() - message.createdTimestamp
    var botping = Math.round(client.ws.ping) 

    const author = message.author.tag

    const embed = new Discord.MessageEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
    .setDescription(`**If you want to vote for our bot click the button under this message. We hope that you like our bot.**`)
        .setColor('#e6e6e6')
        .setFooter(message.guild.name, message.guild.iconURL())
    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let voteButton = new MessageButton()
    .setLabel(`Vote!`)
    .setEmoji(`✨`)
    .setURL('https://top.gg/bot/867008793354698752')
    .setStyle('url')

    let row = new MessageActionRow()
    .addComponents(voteButton);

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