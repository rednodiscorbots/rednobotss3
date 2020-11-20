const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  let msg = message
  if(!message.member.roles.has('584093503957499945')) return message.reply('Rol vermek için yetkiniz yok!')

    let kayıt = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
    if (!kayıt) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (":link: Uyarı vermek için birini etiketlemelisin.")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "「⛔ 」Uyarı 2");
    if (!role) {
        try {
            role = await msg.guild.Role({
            });

            msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    
                });
            });
        } catch (e) {
            console.log(e.stack);
        }

    }

    if (kayıt.roles.has(role.id)) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (" ⛔ Önceden uyarınız mevcut! ")
        }
    });

    await kayıt.addRole(role);
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (":x:Sunucuda iki adet uyarı aldınız eğer uyarı sayınız üç olursa sunucudan yasaklanırsınız.")
        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'uyarıekle2',
    description: 'Sunucuya kayıt olursunuz!',
    usage: 'uyarıekle2'
};