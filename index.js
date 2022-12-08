const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
client.config = config;
const disbut = require('discord-buttons');
disbut(client)
const mySecret = process.env['BOT_TOKEN']
const prefix = process.env['prefix']
const red = `#e6e6e6`

client.commands = new Discord.Collection();

/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log(`👌 Command loaded: ${commandName}`);
  });
});

fs.readdir('./events/', (_err, files) => {
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    const event = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    console.log(`👌 Event loaded: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
})

client.on('guildCreate', async guild => {
  let YourChannel = await client.channels.fetch('950444793136300098');
  const embed = new Discord.MessageEmbed()
    .setTitle(`Bot joined a server`)
    .setDescription(`${guild.name}`)
    .setColor(0x9590EE)
    .setThumbnail(guild.iconURL())
    .addField(`Owner`, `${guild.owner.user.tag}`)
    .addField(`Member Count`, `${guild.memberCount}`)
    .setFooter(`${guild.id}`)
  YourChannel.send(embed);
});

client.on("message", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.channel.send({
      embed: {
        description: `***I think you want to know something more about me, am I right?***\n \n**Hello! My name is Spector\n \nI was made by lukaa#7885**\n \n**My prefix is \`s!\`\n \n To start using my commands type \`s!help\`**`,
        author: message.author.tag,
        color: red
      }
    })
  }
})

client.login(mySecret);
