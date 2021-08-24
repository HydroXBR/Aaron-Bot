const { MessageEmbed } = require('discord.js'),
db = require("quick.db"),
jimp = require('jimp')

exports.run = async(client, message, args) => {
  const embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");

  if (!message.guild.me.hasPermission('ATTACH_FILES')) return message.inlineReply(embederr(`Ops! Não possuo a permissão **Anexar arquivos** para executar este comando... Por favor, peça a alguém da adminstração ou conceda-me esta permissão. Obrigado!`));

  const pp = db.get(`prefix_${message.guild.id}`) || `-`;
  const toBRL = value => Number(value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
  const img = jimp.read("https://i.ibb.co/5MrDBsw/r5.png");
  
  if (!args[0] || /local|serv/gmi.test(message.content)){
    const array = [];

    for(var e = 0; e < message.guild.members.cache.size; e++){
      const u = {
        user: {
        id: message.guild.members.cache.array()[e].user.tag,
        saldo: (db.get(`money_${message.guild.members.cache.array()[e].id}`)||0)
	      }
      };

      for (var key in u) {
	      array.push(u[key]);
      }

      array.sort(function(a, b){
        return b.saldo - a.saldo;
      });

      for (var i = 0; i < array.length; i++) {
	      array[i].rank = i + 1;
      }
    }
  img.then(image => {
      jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
      try{image.print(font, 140, 89, array[0].id, 400)}catch(e){image.print(font, 140, 89, `-`, 400)}
      try{image.print(font, 165, 150, toBRL(array[0].saldo), 400)}catch(e){image.print(font, 165, 150, `-`, 400)}
      try{image.print(font, 140, 210, array[1].id, 400)}catch(e){image.print(font, 140, 210, `-`, 400)}
      try{image.print(font, 165, 270, toBRL(array[1].saldo), 400)}catch(e){image.print(font, 165, 270, `-`, 400)}
      try{image.print(font, 140, 325, array[2].id, 400)}catch(e){image.print(font, 140, 325, `-`, 400)}
      try{image.print(font, 165, 382, toBRL(array[2].saldo), 400)}catch(e){image.print(font, 165, 382, `-`, 400)}
      try{image.print(font, 140, 440, array[3].id, 400)}catch(e){image.print(font, 140, 440, `-`, 400)}
      try{image.print(font, 165, 502, toBRL(array[3].saldo), 400)}catch(e){image.print(font, 165, 502, `-`, 400)}
      try{image.print(font, 140, 560, array[4].id, 400)}catch(e){image.print(font, 140, 560, `-`, 400)}
      try{image.print(font, 165, 615, toBRL(array[4].saldo), 400)}catch(e){image.print(font, 165, 615, `-`, 400)}
      image.getBuffer(jimp.MIME_PNG, (err, i) => {
      message.inlineReply(`${message.author} | Ranking de saldo do servidor`, {files: [{ attachment: i, name: "rank_local.png"}]})})
      })
    })
  } else if (/total|global/gmi.test(message.content)){
    const array = [];

    for(var e = 0; e < client.users.cache.size; e++){
      const u = {
        user: {
        id: client.users.cache.array()[e].tag,
        saldo: (db.get(`money_${client.users.cache.array()[e].id}`)||0)
	      }
      };

      for (var key in u) {
	      array.push(u[key]);
      }

      array.sort(function(a, b){
        return b.saldo - a.saldo;
      });

      for (var i = 0; i < array.length; i++) {
	      array[i].rank = i + 1;
      }
    }

  img.then(image => {
      jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
      try{image.print(font, 140, 89, array[0].id, 400)}catch(e){image.print(font, 140, 89, `-`, 400)}
      try{image.print(font, 165, 150, toBRL(array[0].saldo), 400)}catch(e){image.print(font, 165, 150, `-`, 400)}
      try{image.print(font, 140, 210, array[1].id, 400)}catch(e){image.print(font, 140, 210, `-`, 400)}
      try{image.print(font, 165, 270, toBRL(array[1].saldo), 400)}catch(e){image.print(font, 165, 270, `-`, 400)}
      try{image.print(font, 140, 325, array[2].id, 400)}catch(e){image.print(font, 140, 325, `-`, 400)}
      try{image.print(font, 165, 382, toBRL(array[2].saldo), 400)}catch(e){image.print(font, 165, 382, `-`, 400)}
      try{image.print(font, 140, 440, array[3].id, 400)}catch(e){image.print(font, 140, 440, `-`, 400)}
      try{image.print(font, 165, 502, toBRL(array[3].saldo), 400)}catch(e){image.print(font, 165, 502, `-`, 400)}
      try{image.print(font, 140, 560, array[4].id, 400)}catch(e){image.print(font, 140, 560, `-`, 400)}
      try{image.print(font, 165, 615, toBRL(array[4].saldo), 400)}catch(e){image.print(font, 165, 615, `-`, 400)}
      image.getBuffer(jimp.MIME_PNG, (err, i) => {
      message.inlineReply(`${message.author} | Ranking Global de saldo:`, {files: [{ attachment: i, name: "rankglobal.png"}]})})
      })
    })
  } else {
    message.inlineReply(embederr(`Ops, ${message.author}! Não consegui exibir esse ranking, se é que ele existe :confused:\n\nUse as sintaxes:\n\`${pp}rank local\` - Ver o ranking de saldo do servidor\n\`${pp}rank global\` - Ver o ranking de saldo global.`))
  }
}