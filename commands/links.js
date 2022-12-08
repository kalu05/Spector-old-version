const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton, } = require("discord-buttons");

module.exports = {
  name: "ping",
   aliases: ["hlp"],
  run: async (client, message, args ) => {

    message.delete({ timeout: 1000 })
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    var yourping = new Date().getTime() - message.createdTimestamp
    var botping = Math.round(client.ws.ping) 

    const author = message.author.tag

    const embed = new Discord.MessageEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
    .setDescription('**To join our official support server press the button below and ask us if you have any question/issue with bot!**')
        .setColor('#e6e6e6')
        .setFooter(message.guild.name, message.guild.iconURL())

    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let supportButton = new MessageButton()
    .setLabel(`Support Server!`)
    .setEmoji(`👤`)
    .setURL('https://discord.gg/ssdYgtKV7J')
    .setStyle('url')


    let row = new MessageActionRow()
    .addComponents(supportButton);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

    })

    collector.on('end', (b) => {
        MESSAGE.delete
    })
    }
  };