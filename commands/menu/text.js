const Discord = require('discord.js');
const { inviteLink } = require('../settings.json');
const { red } = require("chalk");
const {
  MessageEmbed
} = require('discord.js')
const fs = require('fs')

module.exports = {
  name: "send",
  description: "Send message to all guilds bot joined",
  usage: `send <text>`,
  category: "dev",
  run: async (client, message, args) => {
client.guilds.cache.map((guild) => { 
const channel = guild.channels.cache.find(
    (c) => c.type === "text" && c.permissionsFor(guild.me).has("SEND_MESSAGES")
  );
  channel.send('Global Ban(2.0) Comming Soon!')
})
}}