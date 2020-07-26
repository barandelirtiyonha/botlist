const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = async(client, message, args) => {
        const yardim = new Discord.RichEmbed()
        .setColor('#fff000')
             .setAuthor(`Komut Listesi`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`Komutlar`, `${prefix}botekle = Botunu Sisteme Eklersin. \n ${prefix}onayla = Bot Onaylama Komutu. \n ${prefix}reddet = Bot Reddetme Komutu. \n ${prefix}botat = Botu Sunucudan Atar.`) // bunlar boş kalırsa hata verir
             .addField(`Linkler ->`, `[CodeWork](discord.gg/codework)`) // bunlar boş kalırsa hata verir
             .setFooter(`Menüyü ${message.author.username} istedi.`, message.author.avatarURL)
        return message.channel.sendEmbed(yardim);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}

exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : 'yardım'
}