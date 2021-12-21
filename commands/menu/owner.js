const Discord = require('discord.js');
const { prefix, author } = require('../settings.json');
const { red } = require('chalk');

module.exports = {
    name: "owner",
    description: "owner command",

    async run(client, message, args) {
        const help = new Discord.MessageEmbed()
                    .setTitle(`My Master | ${client.user.username}`)
                    .setDescription(`***HELLO MASTER IM RUNNING GOOD AS NEW!!! I LOVE YOU ${client.user.username}*** `)
                    .setFooter(`© ${client.user.username} | Prefix: ${prefix} | By: ${author}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
        message.channel.send(help).catch((err) => {
            console.error(red(`[COMMAND FAILED] : [GUILD] ${message.guild.name} | [CHANNEL] ${message.channel.name} | [REASON] MISSING PERMISSIONS | ${err}`));
        });
    }
}
