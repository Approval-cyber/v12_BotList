const Discord = require('discord.js');
const appdata = require("quick.db");


exports.run = function(client, message, args) {
  
    if (!message.member.roles.cache.array().filter(r => r.id === "763797654228435003")[0]) return message.channel.send('bu Komudu kullanmak için Bot tester rolünüzün olması lazım').then(s=> s.delete (15000));
	let ocean = args[0]
  let approvalocean = args[1]
    let approvalsebeb = args.slice(2).join(" ") || `Belirtilmemiş!`;
	let approvalog = "763797739217223720"
	
	if (!ocean) return message.channel.send(` Botun idsini yazmalısın.`).then(x => x.delete({timeout: 3000}))
    if (!approvalocean) return message.channel.send(` Bot Sahibi id yazman lazım.`).then(x => x.delete({timeout: 3000}))
  message.delete()
		client.channels.cache.get(approvalog).send(` <@${approvalocean}> adlı kişini <@${ocean}> adlı botu reddedildi. `+'```approvalsebeb : '+ approvalsebeb+ '```'+ ` Reddeden yetkili : ${message.author}`);
		message.channel.send(`Botu reddettiniz.`).then(x => x.delete({timeout: 3000}))
     appdata.set(`botsıra_${message.guild.id}`,- 1)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet'],
  permLevel: 3
};

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: ''
};
