const { MessageEmbed } = require('discord.js'),
youtubesearchapi = require("youtube-search-api")

exports.run = async (client, message, args) => {
  let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");

  try{
    if(/https?/gmi.test(message.content) && /youtube/gmi.test(message.content)){
      let link = args[0]
      let linkbaixar = args[0].replace("youtube.com", "youtubex2.com")

      let embed1 = new MessageEmbed()
        .setTitle("Download")
        .setThumbnail("https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png")
        .setDescription(`**[Clique aqui](${linkbaixar})** para baixar seu vídeo!`)
        .setColor("#00EEEE")

      message.inlineReply(embed1)
    }else if(!/https?/gmi.test(message.content)){
      const results = await youtubesearchapi.GetListByKeyword(args.join(" "), true)
		    if(!results || !results.items.length) return await message.channel.send(embederr(`Ops! O vídeo não foi encontrado, tente novamente :wink:`))
		
		    let videoId = results.items[0].id;
		    let videoTitle = results.items[0].title;

        let embed2 = new MessageEmbed()
          .setTitle("Download")
          .setDescription(`**Vídeo:** \`${videoTitle}\`\n\n**[Clique aqui](https://ytop1.com/Youtube/${videoId})** para baixar o vídeo!`)
          .setThumbnail(results.items[0].thumbnail.thumbnails[0].url || "https://trucao.com.br/wp-content/uploads/2018/07/youtube-logo.png")
          .setColor("#00EEEE")
      
        message.inlineReply(embed2)
    }else if(/https?/gmi.test(message.content) && !/youtube/gmi.test(message.content)){
      message.inlineReply(embederr(`Ops, ${message.author}! Esse não parece ser um link para um vídeo do YouTube! Tente novamente :wink:`))
    }
  }catch(error){
    console.log(error)
    message.inlineReply(embederr(`Desculpe, ${message.author}! Mas não consegui gerar o link de download do vídeo! Verifique os dados e se o link está correto. Obrigado!`))
  }
}

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

    embedder(embe1)
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