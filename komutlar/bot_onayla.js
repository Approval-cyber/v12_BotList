const Discord = require('discord.js');
const appdata = require("quick.db");

exports.run = function(client, message, args) {
  let approv = message;
    if (!approv.member.roles.cache.array().filter(r => r.id === "763797654228435003")[0]) return approv.channel.send('bu Komudu kullanmak için Bot tester rolünüzün olması lazım').then(s=> s.delete (15000));
	let ocean = args[0]
  let approvalocean = args[1]
	let approvalog = "763837598333403216" //  Bot Eklendi / Onaylandı / Rededildi Kanalı
	
	if (!ocean) return approv.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  approv.delete()
		client.channels.get(approvalog).send(`:tada:<@${approvalocean}> adlı kişinin <@${ocean}> adlı botu onaylandı. <a:kalp:776581213103063050> \n Onaylayan yetkili : ${approv.author}`);
		approv.channel.send(` Botu onayladınız.`).then(x => x.delete({timeout: 3000}))
   appdata.set(`botsıra_${approv.guild.id}`,- 1)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 3
};

exports.help = {
  name: 'botonayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6
