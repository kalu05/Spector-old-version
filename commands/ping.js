const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton, } = require("discord-buttons");

module.exports = {
  name: "ping",
   aliases: ["pg"],
  run: async (client, message, args ) => {

      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    var yourping = new Date().getTime() - message.createdTimestamp
    var botping = Math.round(client.ws.ping) 

    const author = message.author.tag

    const embed = new Discord.MessageEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
    .setDescription(`**If you want to see bots ping than click on: 🤖 Bot\`s ping! \n \n If you want to see yours ping click on: 🌸 Yours ping!**`)
        .setColor('#e6e6e6')
        .setFooter(message.guild.name, message.guild.iconURL())

            const yourPing = new Discord.MessageEmbed()
    .setColor("#e6e6e6")
            .setTitle(`@${author} here is your ping!`)
            .setDescription(`<a:x_alert:905949722001420419> | **Here is the yours ping!** | <a:x_alert:905949722001420419> \n \n <a:diamond:881619947988582471> | ***${yourping} ms*** | <a:diamond:881619947988582471> `)
            .setThumbnail(message.author.avatarURL({ dynamic:true }))
            .setFooter(message.guild.name, message.guild.iconURL())

    const botPing = new Discord.MessageEmbed()
    .setColor("#e6e6e6")
            .setTitle('Bot\`s ping')
            .setDescription(`<a:x_alert:905949722001420419> | **Here is the bots ping!** | <a:x_alert:905949722001420419> \n \n <a:diamond:881619947988582471> | ***${botping} ms*** | <a:diamond:881619947988582471> `)
            .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
            .setFooter(message.guild.name, message.guild.iconURL())
    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let botPingButton = new MessageButton()
    .setLabel(`Bot\`s ping!`)
    .setID(`help1`)
    .setEmoji(`🤖`)
    .setStyle("grey");

    let yourPingButton = new MessageButton()
    .setLabel(`Your Ping!`)
    .setID(`help2`)
    .setEmoji(`🌸`)
    .setStyle("grey");

    let row = new MessageActionRow()
    .addComponents(botPingButton, yourPingButton);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(botPing, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(yourPing, row);
            await b.reply.defer()

        }

    })

    collector.on('end', (b) => {
        MESSAGE.delete
    })
    }
  };