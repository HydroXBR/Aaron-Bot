const { MessageEmbed } = require("discord.js"),
ytdl = require("ytdl-core"),
youtubesearchapi = require("youtube-search-api")

exports.run = async (client, message, args) => {
  const results = await youtubesearchapi.GetListByKeyword(args.join(" "), true)
  const ytt = y => `https://www.youtube.com/watch?v=${y}`
  
  const embed = new MessageEmbed()
    .setTitle(`Resultados da pesquisa`)
    .setColor(`#FF0000`)
    .setThumbnail("https://i.pinimg.com/originals/19/7b/36/197b365922d1ea3aa1a932ff9bbda4a6.png")

  if(!results || !results.items.length) return (message.inlineReply(embed.setDescription(`Nenhum vídeo encontrado :confused: - Verifique os termos da pesquisa`)));


  for (var i = 0; i < 5; i++) {
    if (results.items[i].title !== undefined || results.items[i].title !== "undefined"){
      embed.addField(results.items[i].title, ytt(results.items[i].id))
    }
  }
  await message.inlineReply(embed)
}