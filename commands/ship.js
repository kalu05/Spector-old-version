const Discord = require("discord.js");

module.exports = {
    name: "ship",
    category: "Fun",
    description: "Ship 2 members",
    usage: "ship <name1> <name2>\n**e.g.**\n\`ship name_1 name_2\`\n> Check the affinity between 2 people",
    run: async (client, msg, arg) => {

        const nonamesEmbed = new Discord.MessageEmbed()
            .setColor(`#e6e6e6`)
            .setTitle(`⛔ Enter 2 names to start`)

        let user1 = arg[0];
        let user2 = arg[1];
        if (!user1 || !user2) return msg.channel.send(nonamesEmbed).then(msg => msg.delete({ timeout: 5000 }));
        var ship = Math.floor(Math.random() * 100) + 1;

        let bar = "";

        for (var i=0; i < Math.round(ship/10) ; i++) {
            bar += "⬜";
        }
        for (var i=0; i < 10-Math.round(ship/10) ; i++) {
            bar += "🔳";
        }

        let shipEmbed = new Discord.MessageEmbed()
            .setFooter(`${bar} ${ship}%`);

        switch (true) {
            case (ship>=0 && ship <=19):
                shipEmbed
                    .setColor(`640000`)
                    .setTitle(`🔻 ${user1}\n🔺 ${user2}`)
                    .setDescription(`**Bad love. Better to break up. Sorry :(**`)
                msg.channel.send(shipEmbed);
                break;
            case (ship>=20 && ship <=49):
                shipEmbed
                    .setColor(`960000`)
                    .setTitle(`❤️ SHIP ❤️`)
                    .setDescription(`🔻 ${user1}\n🔺 ${user2}\n**You dont go too well togheter**`)
                msg.channel.send(shipEmbed);
                break;
            case (ship>=50 && ship <=89):
                shipEmbed
                    .setColor(`C80000`)
                    .setTitle(`💓 SHIP 💓`)
                    .setDescription(`🔻 ${user1}\n🔺 ${user2}\n**You go really good togheter**`)
                msg.channel.send(shipEmbed);
                break;
            case (ship>=90 && ship <=100):
                shipEmbed
                    .setColor(`FA0000`)
                    .setTitle(`💗 SHIP 💗`)
                    .setDescription(`🔻 ${user1}\n🔺 ${user2}\n**You are perfect couple. I wish you all best in relationship.**`)
                msg.channel.send(shipEmbed);
                break;
        };
    }
}