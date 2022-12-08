const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton, } = require("discord-buttons");
const white = "#e6e6e6";

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

      message.react('<:spector:876829596111241306>')

    //--------------------EMBEDS------------------------

    const embed = new Discord.MessageEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
    .addField('***FAQ***', '‎‎‎‎‎‎‎‏‏‎ ‎')
        .addField('`Who is the bot developer?`', '*Bot developer is lukaa#0001*')
        .addField('`How to use commands?`', '*To use command type [prefix] + [name of the command].*')
        .addField('`Why is there bugs in bot?`', '*This bot is in v.2 or still in build version. So if you see any bugs feel free to join our support server or contact bot developer.*')
        .addField('`How to properly report bugs?`', '*Its easier than you think. Just join our support server or contact bot owner in dm about bug that you saw.*')
        .setColor('#e6e6e6')
        .setFooter(message.guild.name, message.guild.iconURL())

    const commands = new Discord.MessageEmbed()
    .setColor("#e6e6e6")
            .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
            .setTitle(`All commands`)
            .setDescription(`**This all the commands that the bot have.**`)
            .addFields(
	{ name: '`add-these [emojis]`', value: '*Adding multiple emojis at once!*', inline: false },
{ name: '`addrole [tag] [role]`', value: '*Adding role to tagged user!*', inline: false },
{ name: '`ascii [text]`', value: '*Converting normal text to ASCII textconverting normal text to ASCII text!*', inline: false },
{ name: '`avatar [tag]`', value: '*Showing yours or tagged user avatar!*', inline: false },
{ name: '`ban [tag] [reason]`', value: '*Banning tagged user!*', inline: false },
{ name: '`botinfo`', value: '*Showing info about bot!*', inline: false },
{ name: '`channelinfo [channel]`', value: '*Showing info for specified channel!*', inline: false },
{ name: '`clear [amount to be cleared]`', value: '*Deleting specified amount of messages!*', inline: false },
{ name: '`firstmessage`', value: '*Showing a first message in channel you run the command!*', inline: false },
{ name: '`gay [tag]`', value: '*Adding a pride flag on your or tagged user pfpdding a pride flag on your or tagged user pfp!*', inline: false },
{ name: '`hack [tag]`', value: '*Hacking a tagged user ( not real hacking, just for fun )!*', inline: false },
{ name: '`help`', value: '*Showing all bots commands!*', inline: false },
{ name: '`hug [tag]`', value: '*Hugging a tagged user!*', inline: false },
{ name: '`inviteme`', value: '*Sending link for inviting bot!*', inline: false },
{ name: '`invites`', value: '*Showing how much invites you have!*', inline: false },
{ name: '`kick [tag] [reason]`', value: '*Kicking a tagged user!*', inline: false },
{ name: '`kiss [tag]`', value: '*Kissing a tagged user!*', inline: false },
{ name: '`links`', value: '*Sending our links!*', inline: false },
{ name: '`love [tag]`', value: '*Showing how much you love tagged user!*', inline: false },
{ name: '`math [equivalation]`', value: '*Doing math for you!*', inline: false },
{ name: '`meaning [word]`', value: '*Showing a meaning for specified word!*', inline: false },
{ name: '`meme`', value: '*Sending a random meme!*', inline: false },
{ name: '`mixpfp [base user tag] [second user tag]`', value: '*Mixing yours and tagged users pfp!*', inline: false },
{ name: '`mute [tag] [reason]`', value: '*Muting a tagged user!*', inline: false },
{ name: '`ping`', value: '*Showing yours and bots ping!*', inline: false })
.setFooter(message.guild.name, message.guild.iconURL())

        const commands2 = new Discord.MessageEmbed()
        .setColor("#e6e6e6")
        .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
        .setTitle("This is the second page for commands, I didn`t had much space in first page :)")
        .addFields(
{ name: '`remind [time] [reason]`', value: '*Reminding you after specified time for specified reason!*', inline: false },
{ name: '`roleinfo [role]`', value: '*Showing info for tagger role!*', inline: false },
{ name: '`say [text]`', value: '*Saying a text so you dont have to!*', inline: false },
{ name: '`server`', value: '*Showing info about server in which you run command!*', inline: false },
{ name: '`setmodlogchannel [channel]`', value: '*Setting a mod log ( for banning, kicking, muting, etc )!*', inline: false },
{ name: '`setmuterole [role]`', value: '*Setting a mute role ( for muting members )*', inline: false },
{ name: '`ship [tag 1] [tag 2]`', value: '*Showing how much love is between you and tagged user!*', inline: false },
{ name: '`slap [tag]`', value: '*Slapping a tagged user!*', inline: false },
{ name: '`slowmode [time]`', value: '*Setting a slowmode in channel that you run command for specified amount of time!*', inline: false },
{ name: '`unban [id] [reason]`', value: '*Unbaning a tagged user ( only ids )!*', inline: false },
{ name: '`unmute [tag] [reason]`', value: '*Unmuting a tagged user!*', inline: false },
{ name: '`voicekick [tag]`', value: '*Kicking a user from voice channel that you are in!*', inline: false },
{ name: '`vote`', value: '*Sending a link for voting for bot!*', inline: false },
{ name: '`warn [tag] [reason]`', value: '*Warns a tagged user!*', inline: false },
{ name: '`weather [City/Region/Country]`', value: '*Showing weather in specified city/region/country!*', inline: false },
{ name: '`hackban [userID] `', value: '*Banning a user that is not on the server!*'},
{ name: '`vcmove [usertag/userID] [vcchannelID]`', value: '*Moving a member from one to another voice channel!*'})

        const donate = new Discord.MessageEmbed()
        .setColor("#e6e6e6")
            .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
            .setTitle(`How to donate`)
            .setDescription(`If you want to [donate](https://paypal.me/itzollyx3) think good before doing it, you dont have to donate, its just your wish to do it. And please dont to refunds, money that I get from donating is going into bots development.`)
            .setFooter(message.guild.name, message.guild.iconURL())

        const informations = new Discord.MessageEmbed()
        .setColor("#e6e6e6")
            .setThumbnail('https://cdn.discordapp.com/attachments/725466010215514174/912441790072782888/PPCSpyTools-April2021-400400.jpg')
            .setTitle(`Basic info about bot.`)
            .setDescription(" `Name:` **Spector**\n`Version:` **2.0**\n`Used language:` **discord.js**\n`Creator:` **lukaa#0001**")
            .setFooter(message.guild.name, message.guild.iconURL()) 
            
    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let commandsButton = new MessageButton()
    .setLabel(`Commands`)
    .setID(`help1`)
    .setEmoji(`💻`)
    .setStyle("grey");

    let commands2Button = new MessageButton()
    .setLabel(`Commands`)
    .setID(`help2`)
    .setEmoji(`💻`)
    .setStyle("grey");

    let donatingButton = new MessageButton()
    .setLabel(`Donate`)
    .setID(`help3`)
    .setEmoji(`💰`)
    .setStyle("grey");

    let informationsButton = new MessageButton()
    .setLabel(`Info`)
    .setID(`help4`)
    .setEmoji(`❓`)
    .setStyle("grey");
    
    let row = new MessageActionRow()
    .addComponents(commandsButton, commands2Button, donatingButton, informationsButton);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(commands, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(commands2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(donate, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(informations, row);
            await b.reply.defer()

        }

    collector.on('end', (b) => {
        MESSAGE.delete
    })
    })}
  };