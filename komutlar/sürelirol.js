const ms = require("ms");

exports.run = (client, message, args, func) => {
  
    var user = message.mentions.users.first();
    if(!user) return message.reply("Kullanıcı belirt")
    var role = message.metions.roles.first();
    if(!role) return message.reply("Rol belirt")
    var süre = args[2]
    if(!süre) return message.reply("Dakika cinsinden süre belirt")

    user.addRole(role.id)
    message.reply("Kullanıcıya rol verildi")
      setTimeout(() => {
    
        user.removeRole(role.id)
        message.channel.send(user + " Süreli rolün doldu")

    }, ms(süre))
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3,
    kategori: "Moderaöt Komutları"
};
  
  exports.help = {
    name: 'temprole',
    description: 'Etiketlenen kullanıcıya etiketlenen rolü verir.',
    usage: 'temprrle <@kullanıcı> <@rol> <süre>'
};
