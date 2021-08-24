const { MessageEmbed } = require('discord.js'),
db = require("quick.db")

exports.run = async (client, message, args) => {
  try{
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || client.users.cache.find(user => user.id == args[0]) || message.author;

    let profissão = db.get(`work_${message.guild.id}_${user.id}`);
    let work = profissão == null ? "Nenhuma" : profissão;
    let emojiwork = db.get(`emojiwork_${message.guild.id}_${user.id}`);
    let lv = db.get(`lv_${message.author.id}`) || 0;
    let pp = db.get(`prefix_${message.guild.id}`) || `-`;

    let embed = new MessageEmbed()
      .setTitle("Profissão")
      .setDescription(`${profissão == null ? "Aqui, você pode escolher sua profissão. Até agora, você não tem nenhuma. =/ Reaja de acordo com a profissão que deseja" : `Aqui, você pode escolher sua profissão. Atualmente, você é **${profissão}**. Reaja de acordo com a profissão que deseja`}, lembrando que há requisito de level.\n\n**Level atual:** \`${lv}\`\n\n:clown: Palhaço(a) - Level 0\n:camera_with_flash: Fotógrafo(a) - Level 2\n:hammer_pick: Minerador(a)  - Level 3\n:hammer: Marceneiro(a) - Level 4\n:ambulance: Médico(a)  - Level 5\n:helmet_with_cross: Bombeiro(a)  - Level 6\n:man_judge: Juiz(a)  - Level 7\n:police_car: Policial  - Level 8\n:arrow_forward: Youtuber  - Level 9\n🏞️ Artista  - Level 10\n\n<:sirene:844184014684160010> **HEY! ESPERA AS REAÇÕES ABAIXO CARREGAREM, ATÉ A ÚLTIMA! ↓**`)
      .setColor("#7FFFD4")
      .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f4bc.png")

    let msg = await message.inlineReply(embed);
    msg.react("🤡")
    msg.react("📸")
    msg.react("⚒️")
    msg.react('🔨')
    msg.react("🚑")
    msg.react("⛑️")
    msg.react("👨‍⚖️")
    msg.react("🚓")
    msg.react("▶️")
    msg.react("🏞️")

    const filter = (reaction, user) => {
	    return ['🔨', '⚒️', '🚑', '⛑️', '👨‍⚖️', '🤡', '🚓', '📸', '▶️', "🏞️"].includes(reaction.emoji.name) && user.id == message.author.id
    };

    msg.awaitReactions(filter, { max: 1, time: 100000000,       errors: ['time'] })
	    .then(collected => {
	  const reaction = collected.first();


    if (reaction.emoji.name === '🤡') {
		  db.set(`work_${message.guild.id}_${user.id}`, `Palhaço(a)`);
      db.set(`emojiwork_${message.guild.id}_${user.id}`, `🤡`)
      let pembed = new MessageEmbed()
        .setTitle("Profissão escolhida com sucesso!")
        .setDescription(`Agora, sua **profissão** é:\n\n 🤡 - Palhaço(a)`)
        .setColor("#00EEEE")
        .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f4bc.png")
        .setFooter("Parabéns por trabalhar, mesmo sendo preguiçoso KKK")
      msg.edit(pembed)
	  }
    if (reaction.emoji.name === '📸') {
      if (lv >= 2) {
		    db.set(`work_${message.guild.id}_${user.id}`, `Fotógrafo(a)`);
        db.set(`emojiwork_${message.guild.id}_${user.id}`, `📸`)
        let pembed = new MessageEmbed()
          .setTitle("Profissão escolhida com sucesso!")
          .setDescription(`Agora, sua **profissão** é:\n\n 📸 - Fotógrafo(a)`)
          .setColor("#00EEEE")
          .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f4bc.png")
          .setFooter("Parabéns por trabalhar, mesmo sendo preguiçoso KKK")
        msg.edit(pembed)
      } else {
        msg.edit(`Ops, ${message.author}! Desculpe, mas você precisa chegar até o nível 8 para ter essa profissão. Atualmente, seu nível é \`${lv}\`. Continue usando meus comandos e consulte o nível usando \`${pp}level\` :wink:`)
      }
	  }
    if (reaction.emoji.name === '⚒️') {
      if (lv >= 3) {
		    db.set(`work_${message.guild.id}_${user.id}`, `Minerador(a)`);
        db.set(`emojiwork_${message.guild.id}_${user.id}`, `⚒️`)
        let pembed = new MessageEmbed()
          .setTitle("Profissão escolhida com sucesso!")
          .setDescription(`Agora, sua **profissão** é:\n\n ⚒️ - Minerador(a)`)
          .setColor("#00EEEE")
          .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f4bc.png")
          .setFooter("Parabéns por trabalhar, mesmo sendo preguiçoso KKK")
        msg.edit(pembed)
      } else {
        msg.edit(`Ops, ${message.author}! Desculpe, mas você precisa chegar até o nível 3 para ter essa profissão. Atualmente, seu nível é \`${lv}\`. Continue usando meus comandos e consulte o nível usando \`${pp}level\` :wink:`)
      }
	  }
	  if (reaction.emoji.name === '🔨') {
      if (lv >= 4) {
		    db.set(`work_${message.guild.id}_${user.id}`, `Marceneiro(a)`);
        db.set(`emojiwork_${message.guild.id}_${user.id}`, `🔨`)
        let pembed = new MessageEmbed()
          .setTitle("Profissão escolhida com sucesso!")
          .setDescription(`Agora, sua **profissão** é:\n\n 🔨 - Marceneiro(a)`)
          .setColor("#00EEEE")
          .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f4bc.png")
          .setFooter("Parabéns por trabalhar, mesmo sendo preguiçoso KKK")
        msg.edit(pembed)
      } else {
        msg.edit(`Ops, ${message.author}! Desculpe, mas você precisa chegar até o nível 4 para ter essa profissão. Atualmente, seu nível é \`${lv}\`. Continue usando meus comandos e consulte o nível usando \`${pp}level\` :wink:`)
      }
	  }
    if (reaction.emoji.name === '🚑') {
      if (lv >= 5) {
		    db.set(`work_${message.guild.id}_${user.id}`, `Médico(a)`);
        db.set(`emojiwork_${message.guild.id}_${user.id}`, `🚑`)
        let pembed = new MessageEmbed()
          .setTitle("Profissão escolhida com sucesso!")
          .setDescription(`Agora, sua **profissão** é:\n\n 🚑 - Médico(a)`)
          .setColor("#00EEEE")
          .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f4bc.png")
          .setFooter("Parabéns por trabalhar, mesmo sendo preguiçoso KKK")
        msg.edit(pembed)
      } else {
        msg.edit(`Ops, ${message.author}! Desculpe, mas você precisa chegar até o nível 5 para ter essa profissão. Atualmente, seu nível é \`${lv}\`. Continue usando meus comandos e consulte o nível usando \`${pp}level\` :wink:`)
      }
	  }
    if (reaction.emoji.name === '⛑️') {
      if (lv >= 6) {
		    db.set(`work_${message.guild.id}_${user.id}`, `Bombeiro(a)`);
        db.set(`emojiwork_${message.guild.id}_${user.id}`, `⛑️`)
        let pembed = new MessageEmbed()
          .setTitle("Profissão escolhida com sucesso!")
          .setDescription(`Agora, sua **profissão** é:\n\n ⛑️ - Bombeiro(a)`)
          .setColor("#00EEEE")
          .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f4bc.png")
          .setFooter("Parabéns por trabalhar, mesmo sendo preguiçoso KKK")
        msg.edit(pembed)
      } else {
        msg.edit(`Ops, ${message.author}! Desculpe, mas você precisa chegar até o nível 6 para ter essa profissão. Atualmente, seu nível é \`${lv}\`. Continue usando meus comandos e consulte o nível usando \`${pp}level\` :wink:`)
      }
	  }
    if (reaction.emoji.name === '👨‍⚖️') {
      if (lv >= 7) {
		  db.set(`work_${message.guild.id}_${user.id}`, `Juiz(a)`);
      db.set(`emojiwork_${message.guild.id}_${user.id}`, `👨‍⚖️`)
      let pembed = new MessageEmbed()
        .setTitle("Profissão escolhida com sucesso!")
        .setDescription(`Agora, sua **profissão** é:\n\n 👨‍⚖️ - Juiz(a)`)
        .setColor("#00EEEE")
        .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f4bc.png")
        .setFooter("Parabéns por trabalhar, mesmo sendo preguiçoso KKK")
      msg.edit(pembed)
      } else {
        msg.edit(`Ops, ${message.author}! Desculpe, mas você precisa chegar até o nível 7 para ter essa profissão. Atualmente, seu nível é \`${lv}\`. Continue usando meus comandos e consulte o nível usando \`${pp}level\` :wink:`)
      }
	  }
    if (reaction.emoji.name === '🚓') {
      if (lv >= 8) {
		    db.set(`work_${message.guild.id}_${user.id}`, `Policial`);
        db.set(`emojiwork_${message.guild.id}_${user.id}`, `🚓`)
        let pembed = new MessageEmbed()
          .setTitle("Profissão escolhida com sucesso!")
          .setDescription(`Agora, sua **profissão** é:\n\n 🚓 - Policial`)
          .setColor("#00EEEE")
          .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f4bc.png")
        .setFooter("Parabéns por trabalhar, mesmo sendo preguiçoso KKK")
        msg.edit(pembed)
      } else {
        msg.edit(`Ops, ${message.author}! Desculpe, mas você precisa chegar até o nível 8 para ter essa profissão. Atualmente, seu nível é \`${lv}\`. Continue usando meus comandos e consulte o nível usando \`${pp}level\` :wink:`)
      }
	  }
    if (reaction.emoji.name === '▶️') {
      if (lv >= 9) {
		    db.set(`work_${message.guild.id}_${user.id}`, `Youtuber`);
        db.set(`emojiwork_${message.guild.id}_${user.id}`, `▶️`)
        let pembed = new MessageEmbed()
          .setTitle("Profissão escolhida com sucesso!")
          .setDescription(`Agora, sua **profissão** é:\n\n ▶️ - Youtuber`)
          .setColor("#00EEEE")
          .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f4bc.png")
          .setFooter("Parabéns por trabalhar, mesmo sendo preguiçoso KKK")
        msg.edit(pembed)
      } else {
        msg.edit(`Ops, ${message.author}! Desculpe, mas você precisa chegar até o nível 9 para ter essa profissão. Atualmente, seu nível é \`${lv}\`. Continue usando meus comandos e consulte o nível usando \`${pp}level\` :wink:`)
      }
	  }
    if (reaction.emoji.name === '🏞️') {
      if (lv >= 10) {
		    db.set(`work_${message.guild.id}_${user.id}`, `Artista`);
        db.set(`emojiwork_${message.guild.id}_${user.id}`, `🏞️`)
        let pembed = new MessageEmbed()
          .setTitle("Profissão escolhida com sucesso!")
          .setDescription(`Agora, sua **profissão** é:\n\n 🏞️ - Artista`)
          .setColor("#00EEEE")
          .setThumbnail("https://thumbs.gfycat.com/ClumsyPositiveDiscus-size_restricted.gif")
          .setFooter("Parabéns por trabalhar, mesmo sendo preguiçoso KKK")
        msg.edit(pembed)
      } else {
        msg.edit(`Ops, ${message.author}! Desculpe, mas você precisa chegar até o nível 10 para ter essa profissão. Atualmente, seu nível é \`${lv}\`. Continue usando meus comandos e consulte o nível usando \`${pp}level\` :wink:`)
      }
	  }
    })
  }catch(e){
    console.log(e)
    message.inlineReply(`Ops, ${message.author}! Desculpe, mas não consegui executar este comando... Contate-me em https://abre.ai/aaronbotsite ou aguarde e tente novamente :wink:`)
  }
}