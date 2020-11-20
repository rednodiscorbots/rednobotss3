const Discord = require('discord.js');

var hd = [
    "https://www.twitch.tv/rednoofficial",
    
];

module.exports.run = async (bot, message, args) => {

  message.channel.send ( " Twitch Hesabımız: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'twitch',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'twitch'
};