const Discord = require('discord.js');
const { inviteLink } = require('../settings.json');
const { red } = require("chalk");

module.exports = {
    name: "invite",
    description: "Invite bot to server command",

    async run(client, message, args) {

        const inviteEmbed = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} | Invite List `)
            .setDescription(`[🤖Discord Invite🤖](${inviteLink})`)
            .setColor(0x36393E);
        message.channel.send(inviteEmbed).catch((err) => {
            console.error(red(`[COMMAND FAILED] : [GUILD] ${message.guild.name} | [CHANNEL] ${message.channel.name} | [REASON] MISSING PERMISSIONS | ${err}`));
        });
    }
}