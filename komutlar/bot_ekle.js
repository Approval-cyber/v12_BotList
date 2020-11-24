const Discord = require('discord.js');
const db = require("quick.db");
const moment = require("moment")

exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let ocean = "763797739716476939"
	let Approval_kanal = "763797738205741096" 
  let approvalog = "763797739217223720"
	
  if (message.channel.id !== Approval_kanal) return message.channel.send(`Bu komutu sadece <#${Approval_kanal}> Approval_kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
	if (message.channel.id == Approval_kanal) {
  if (!botid) return message.channel.send(`:no_entry: Botunun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!prefix) return message.channel.send(`:no_entry: Botunun prefixini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!onaylımı) return message.channel.send(`:no_entry: Botunun Dbl onaylımı onu yazmalısın`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const approvguild = message.member.guild
  let approvmember = message.member
  // Embeb Temelini Atıp Heryerde Kullanıcaz
  moment.locale("tr")
  db.set(`botsıra_${message.guild.id}`,1)
  let botsıra = db.fetch(`botsıra_${message.guild.id}`) || '1'
  let approvembed = new Discord.MessageEmbed()
      .setAuthor(approvguild.name, approvguild.iconURL({dynamic: true}))
      .setFooter("Approval ❤️ Sky BotList", approvmember.user.displayAvatarURL({dynamic: true}))
      .setTimestamp()
  client.channels.cache.get(ocean).send(approvembed.setDescription(`Yeni Bir Başvuru Geldi. | Başvuru Sırası **${botsıra}** \n\n`+'Bot Bilgileri ; ```İD : '+botid+' \n Bot Sahibi : '+message.author.tag+'\n Bot Prefix : '+prefix+'\n Bot Onaylı mı ? '+onaylımı+' ```'+`[Botu Eklemek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`))

  client.channels.cache.get(approvalog).send(`${message.author} adlı kullanıcının   botu sıraya ekledi. Botu onaylanmayı bekliyor. `+ ' ``` Bot İD '+botid+' \n Bot Prefix '+prefix+'\n  Bot Dbl`de onaylı mı ?  '+onaylımı+'```'+`  `)
    message.author.send('Botunuz Sıraya Eklendi. \n Sıranız.'+ botsıra + ' ```Sky Bot List #1 : https://discord.gg/RcAKDWQ \n Sky Bot List #2 : https://discord.gg/dKmnsge \n Sky Bot List #3 : https://discord.gg/EKyAtHk \n Sky Bot List #4 : https://discord.gg/Vs8VbYq```')
  message.channel.send(`<a:guncelleme:776581242379567144> Sisteme Eklendi.`).then(x => x.delete({timeout: 3000}))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};
