const { MessageEmbed } = require('discord.js'),
youtubesearchapi = require("youtube-search-api")

exports.run = async(client, interaction) => {
  const messager = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {content: s}}}),
  embedder = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {embeds: [s.toJSON()]}}});

  const link = interaction.data.options[0].value;
  if(/https?/gmi.test(link) && /youtube/gmi.test(link)){
    let linkbaixar = link.replace("youtube.com", "youtubex2.com")

    let embed1 = new MessageEmbed()
      .setTitle("Download")
      .setThumbnail("https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png")
      .setDescription(`**[Clique aqui](${linkbaixar})** para baixar seu vídeo!`)
      .setColor("#00EEEE")

    embedder(embed1)
  }else if(!/https?/gmi.test(link)){
    const results = await youtubesearchapi.GetListByKeyword(link, true)
		
    if(!results || !results.items.length) return await message.channel.send(embederr(`Ops! O vídeo não foi encontrado, tente novamente :wink:`))
		
		let videoId = results.items[0].id;
		let videoTitle = results.items[0].title;

    let embed2 = new MessageEmbed()
      .setTitle("Download")
      .setDescription(`**Vídeo:** \`${videoTitle}\`\n\n**[Clique aqui](https://ytop1.com/Youtube/${videoId})** para baixar o vídeo!`)
      .setThumbnail(results.items[0].thumbnail.thumbnails[0].url || "https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png")
      .setColor("#00EEEE")
    
    embedder(embed2)
    }else if(/https?/gmi.test(link) && !/youtube/gmi.test(link)){
      messager(`Ops! Esse não parece ser um link para um vídeo do YouTube! Tente novamente :wink:`)
    }
}