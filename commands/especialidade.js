const Discord = require('discord.js'),
db = require("quick.db")

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || client.users.cache.find(user => user.id == args[0]) || message.author;

  let especialidadep = db.get(`especialidade_${message.guild.id}_${user.id}`);
  let especialidade = especialidadep == null ? "Nenhuma" : especialidadep;

  let embed = new Discord.MessageEmbed()
    .setTitle("Especialidade")
    .setDescription(`${especialidadep == null ? "Aqui, você pode escolher sua especialidade :). Até agora, você não tem nenhuma no servidor. =/ Reaja de acordo com a sua especialidade." : `Aqui, você pode escolher sua especialidade. Atualmente, você tem a especialidade de **${especialidadep}**. Reaja de acordo com a especialidade que deseja.`}\n\n:microphone2: Pregação(a)\n:guitar: Música\n:video_game: Games\n:flag_jp: Anime\n:pencil2: Desenho\n:paintbrush: Pintura\n🏞️ Arte\n:dancer: Dança\n:microphone: Canto\n:arrow_forward: Youtuber\n:robot: Programação\n:pencil: Escrita\n:1234: Matemática\n⚽ Esporte\n🇺🇸 Idiomas\n\n<:sirene:844184014684160010> **HEY! ESPERA AS REAÇÕES ABAIXO CARREGAREM, ATÉ A ÚLTIMA! ↓**`)
    .setColor("#00EEEE")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")

  let msg = await message.inlineReply(embed);
  msg.react('🎙️')
  msg.react("🎸")
  msg.react("🎮")
  msg.react("🇯🇵")
  msg.react("✏️")
  msg.react("🖌")
  msg.react("🏞️")
  msg.react("💃")
  msg.react("🎤")
  msg.react("▶️")
  msg.react("🤖")
  msg.react("📝")
  msg.react("🔢")
  msg.react("⚽")
  msg.react("🇺🇸")

  const filter = (reaction, user) => {
	  return ['🎙️', '🎸', '🎮', '🇯🇵', '✏️', '🖌', '🏞️', '💃', '🎤', '▶️', '🤖', '📝', '🔢', '⚽', "🇺🇸"].includes(reaction.emoji.name) && user.id == message.author.id
  };

  msg.awaitReactions(filter, { max: 1, time: 100000000,       errors: ['time'] })
	  .then(collected => {
	const reaction = collected.first();

	if (reaction.emoji.name === '🎙️') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Pregação`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 🎙️ - Pregação`)
    .setColor("#00EEEE")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '🎸') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Música`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 🎸 - Música`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '🎮') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Games`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 🎮 - Games`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '🇯🇵') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Anime`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 🇯🇵 - Anime`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '✏️') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Desenho`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n ✏️ - Desenho`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '🖌') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Pintura`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 🖌 - Pintura`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '🏞️') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Arte`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 🏞️ - Arte`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '💃') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Dança`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 💃 - Dança`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '🎤') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Canto`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 🎤 - Canto`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '▶️') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Youtuber`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n ▶️ - YouTuber`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '🤖') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Programação`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 🤖 - Programação`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '📝') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Escrita`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 📝 - Escrita`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '🔢') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Matemática`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 🔢 - Matemática`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '⚽') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Esporte`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n ⚽ - Esporte`)
    .setColor("#00FF00")
    .setThumbnail("http://25.media.tumblr.com/8fb327b41fae5c04297cb315654643b5/tumblr_n02s03cEvm1sfhbr8o1_500.gif")
    .setFooter(":)")
    msg.edit(pembed)
	}
  if (reaction.emoji.name === '🇺🇸') {
		db.set(`especialidade_${message.guild.id}_${user.id}`, `Idiomas`);
    let pembed = new Discord.MessageEmbed()
    .setTitle("Especialidade escolhida com sucesso!")
    .setDescription(`Agora, sua **especialidade** é:\n\n 🇺🇸 - Idiomas`)
    .setColor("#00FF00")
    .setThumbnail("https://i.pinimg.com/originals/07/a5/8b/07a58b82d8b87a9f17cdb1b9372a9c88.gifw")
    .setFooter(":)")
    msg.edit(pembed)
	}
})
}