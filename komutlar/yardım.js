const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Redno Bot Yardım Menüsü')
  .setDescription(`:white_small_square: \`r!yardım eğlence\` = Eğlence Komutlarını Listeler. \n\n:white_small_square: \`r!yardım moderasyon\` = Moderasyon Komutlarını Listeler. \n\n:white_small_square: \`r!yardım kullanıcı\` = Kullanıcı Komutlarını Listeler. \n\n:white_small_square: \`r!yardım komutlar\` = Sunucuya Özel Komutları Listeler.  \n\n:white_small_square: \`r!yardım rolekle\` = Sunucuya Özel Rol Ekleme Komutlarını Gösterir.`)
  message.channel.send({embed})
  }
   if (arg === 'eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('Eğlence  Komutları')
  .setDescription(`:white_small_square: \`r!discordavatar\` = Avatarınızı Discord Avatarı Olarak Yapar. \n:white_small_square: \`r!ara155\` = Polisi Arar. \n:white_small_square: \`r!ascii\` = Ascii Olarak Yazarsınız. \n:white_small_square: \`r!herkesebendençay\` = Herkese Çay Ismarlarsınız. \n:white_small_square: \`r!çayiç\` = Çay İçersiniz. \n:white_small_square: \`r!yumruk-at\` = Yumruk Atarsınız. \n:white_small_square: \`r!wwegif\` = WWE Gifi Atar. \n:white_small_square: \`r!stresçarkı\` = Stres Çarkı Çevirirsin. \n:white_small_square: \`r!yazı-tura\` = Yazı Tura Oynarsınız.  \n:white_small_square: \`r!simit\` = Simit Yersiniz.  \n:white_small_square: \`r!ping\` = Botun Pingini Gösterir. \n:white_small_square: \`r!fbi\` = FBI Gifi Atar. \n:white_small_square: \`r!wasted\` = Profilinize Wasted Efekti Ekler.\n:white_small_square: \`r!mesajdöndür\` = Yazdığınız Yazıyı Ters Çevirir.\n:white_small_square: \`r!intihar-et\` = İntihar Etmenizi Sağlar. \n:white_small_square: \`r!boks-makinası\` = Boks Makinasına Yumruk Atarsınız.\n:white_small_square: \`r!emojiyazı\` = İstediğiniz Yazıyı Emoji İle Yazar. \n:white_small_square: \`r!espri\` = Bot Size Espri Yapar. \n:white_small_square: \`r!slots\` = Slot Oyunu Oynarsınız. \n:white_small_square: \`r!csgo-kasa-açma\` = Bir Adet Cs:Go Kasası Açarsınız. \n:white_small_square: \`r!ateş-et\` = İstediğiniz Kullanıcıya Ateş Edersiniz. \n:white_small_square: \`r!sev\` = Sevdiğiniz Kişiye Gif Atar. \n:white_small_square: \`r!kralol\` = Kral Olursunuz. \n:white_small_square: \`r!rastgele-renk\` = Rastgele Bir Renk Söyler. \n:white_small_square: \`r!efkarölçer\` = Efkar Seviyenizi Ölçer. \n:white_small_square: \`r!hapishane\` = Tutuklarnırsınız.  \n:white_small_square: \`r!gta\` = Discord Fotoğrafınıza Gta Efekti Ekler. \n:white_small_square: \`r!mcödül\` = İstediğiniz Yazıyı Mc Ödülü Olarak Ekler. \n:white_small_square: \`r!pixel\` = Fotoğrafınızı Pixelleştirir. \n:white_small_square: \`r!1vs1\` = Seçtiğiniz Kişi ile VS Atarsınız. \n:white_small_square: \`r!aşkölçer\` = Etiketlediğiniz Kişiyle Aranızda ki Aşkı Ölçer. `)
  message.channel.send(embed)
  }
  if (arg === 'moderasyon' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Moderasyon Komutları:')
      .setDescription(` :white_small_square: \` r!otorol\` = Sunucu için otorol ayarlar. \n:white_small_square: \`r!sayaç-ayarla\` = Sunucu için sayaç ayarlar. \n:white_small_square: \`r!ban\` = İstediginiz Kişiyi Banlar. \n:white_small_square: \`r!unban\` = İstediğiniz Kişini Banını  Açar. \n:white_small_square: \`r!küfür-engelle [aç-kapat]\` = Küfürü Engeller. \n:white_small_square: \`r!link-engelle [aç-kapat]\` = Link Paylaşılmasını Engeller.  \n:white_small_square: \`r!oylama\` = Oylama Yapar. \n:white_small_square: \`r!slowmode\` = Yavaş Modu Açar. \n:white_small_square: \`r!temizle\` = İstediniz Kadar Mesaj Siler. \n:white_small_square: \`r!çekiliş\` = Çekiliş Yaparsınız. \n:white_small_square: \`r!sustur\` = İstediğiniz Kişiyi Geçici Olarak Susturursunuz. \n:white_small_square: \`r!kick\` = Kullanıcıyı Atar. \n:white_small_square: \`r!ailemiz\` = Sunucuda ki Mevcut Üye Sayısını Gösterir. \n:white_small_square: \`r!reklam-taraması\` = Sunucuda Reklam Taramsı Yapar \n:white_small_square: \`r!davetoluştur\` = Sınırsız Davet Linki Oluşturur. \n:white_small_square: \`r!temprole\` = İstediğiniz Kişiye Süreli Rol Verir. \n:white_small_square: \`r!bilgi-bot\` = Bot Hakkında Bilgi Verir.\n:white_small_square: \`r!prefix-ayarla\` = Botun Prefixini Değişmesini Sağlar. \n:white_small_square: \`r!isimdeğiştir\` = İstediğiniz Kullanıcının İsmini Değiştirir.  \n:white_small_square: \`r!resimlihoşgeldin\` = Resinli Gelen ve Giden Üyeleri Gösterir. \n:white_small_square: \`r!banlananlar\` = Sunucudan Banlanan Kişileri Gösterir. \n:white_small_square: \`r!mesajat\` = Bot İstediğiniz Kişiye Özelden Mesaj Atar.  \n:white_small_square: \`r!botkontrol\` = Botun Durumu Kontrol Edilir. \n:white_small_square: \`r!duyuruyap\` = Bot Sunucuda İstediğiniz Duyuruyu Yapar. \n:white_small_square: \`r!toplurolver\` = İstediğiniz Rolü Herkese Verir.  \n:white_small_square: \`r!rolinfo\` = İstediğiniz Rol Hakkında Bilgi Verir.  \n:white_small_square: \`r!sunucubilgi\` = Sunucu Hakkında Bilgi Verir.`)
      return message.channel.send(embed);
}
   if (arg === 'kullanıcı' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Kullanıcı Komutları:')
      .setDescription(`\n:white_small_square: \`r!avatar\` = İstediğiniz Kişinin Discord Avatarını Atar. \n:white_small_square: \`r!sunucuresmi\` = Sunucu Resmini Atar. \n:white_small_square: \`r!nsfw-gif\` = Nsfw Gifi Atar. \n:white_small_square: \`r!yetkilerim\` = Yetkilerinizi Gösterir. \n:white_small_square: \`r!kullanıcıbilgim\` = Bilgilerinizi Gösterir. \n:white_small_square: \`r!ping\` = Botun Pingini Gösterir. \n:white_small_square: \`r!afk [sebep]\` = AFK Olursunuz. \n:white_small_square: \`r!şifre\` = Size Özel Bir Şifre Ouşturur. \n:white_small_square: \`r!çeviri\` = İstediğiniz Yazıyı Çevirir \n:white_small_square: \`r!youtube\`= Youtube'da Arama Yapmanızı Sağlar \n:white_small_square: \`r!spotify\`= İstediğiniz Kişinin Spotify'da Ne Dinlediğini Görmenizi Sağlar. \n:white_small_square: \`r!hesapla\`= İstediğiniz İşlemi Hesaplar. \n:white_small_square: \`r!havadurumu\`= İstediğiniz Yerin Hava Durmunu Gösterir.\n:white_small_square: \`r!8ball\` = Bot Sorduğunuz Soruya Rastgele Cevap Verir. \n:white_small_square: \`r!kullanıcıara\` = Sunucuda İstediğiniz Bir Kullanıcıyı Arayabilirsiniz. \n:white_small_square: \`r!steamfiyat\` = Steam'de İstediğiniz Oyunun Fiyatını Gösterir. \n:white_small_square: \`r!rastgele-kullanıcı\` = Sunucudan Rastgele Bir Kullanıcı Seçer. \n:white_small_square: \`r!mcskin\` = Minecrafta İstediğiniz Oyuncunun Skinini Görmenizi Sağlar. \n:white_small_square: \`r!kısalt\` = İstediğiniz Linki Kısaltır. \n:white_small_square: \`r!üyedurum\` = Sunucuda ki Toplam Üyelerin Durumunu Gösterir. \n:white_small_square: \`r!şanslısayım\` = Şanslı Sayınızı Belirler. \n:white_small_square: \`r!bitcoin\` = Bitcoin Fiyatlarını Listeler. \n:white_small_square: \`r!saat\` = Saati Gösterir. \n:white_small_square: \`r!radyo\` = Ses Odasında İstediğiniz Radyo Kanalını Açar. \n:white_small_square: \`r!romen\` = İstediğiniz Sayıyı Romen Sayısı Olarak Yazar. \n:white_small_square: \`r!adamasmaca\` = Bot İle Adam Asmaca Oynarsınız. \n:white_small_square: \`r!google\` = Google'de Arama Yapmanızı Sağlar.  \n:white_small_square: \`r!zıt-renk\` = İstediğiniz Kişinin Fotoğrafını Zıt Renkler Yapar.`)
      return message.channel.send(embed);
}
   if (arg === 'komutlar' || arg === '1') {
      const embed = new Discord.RichEmbed()
      .setTitle('Sunucuya Özel Komutlar:')
      .setDescription(`\n:white_small_square: \`r!link\` = Discord Sunucumuzun Davet Linkini Atar. \n:white_small_square: \`r!steam\` = Kurucunun Steam Hesabını Atar. \n:white_small_square: \`r!grup\` = Steam Grubumuzu Atar. \n:white_small_square: \`r!instagram\` = İnstagram Sayfamızı Atar. \n:white_small_square: \`r!youtubekanal\` = Youtube Kanalımızın Linkini Atar. \n:white_small_square: \`r!tag\` = Discord Suncumuzda Kullandığımız Tagı Atar. \n:white_small_square: \`r!twitch\` =  Twitch Hesabımızı Atar.`)
      return message.channel.send(embed);
}
   if (arg === 'rolekle' || arg === '1') {
      const embed = new Discord.RichEmbed()
      .setTitle('Sunucuya Özel Rol Ekleme Komutları:')
      .setDescription(`\n:white_small_square: \`r!youtuberekle\` = Youtuber/Streamer Rolü Ekler.  \n:white_small_square: \`r!tasarımcıekle\` = Tasarımcı Rolü Ekler. \n:white_small_square: \`r!developerekle\` = Developer Rolü Ekler. \n:white_small_square: \`r!haftanınüyesiekle\` = Haftanın Üyesi Rolü Ekler. \n:white_small_square: \`r!vokalistekler\` = Vokalist Rolü Ekler. \n:white_small_square: \`r!gitaristekle\` = Gitarist Rolü Ekler. \n:white_small_square: \`r!ressamekle\` = Ressam Rolü Ekler. \n:white_small_square: \`r!vipekle\` = Vip rolü ekler. \n:white_small_square: \`r!armyekle\` = Army Rolü Verir. \n:white_small_square: \`r!aktivitecezasıekle\` = Aktivite Cezası Rolü Ekler. \n:white_small_square: \`r!uyarıekle1\` = Uyarı 1 Rolü Ekler. \n:white_small_square: \`r!uyarıekle2\` = Uyarı 2 Ekler.        `)
      return message.channel.send(embed);
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};
