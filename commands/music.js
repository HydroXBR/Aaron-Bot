const { MessageEmbed } = require("discord.js")
const ytdl = require("ytdl-core"),
youtubesearchapi = require("youtube-search-api"),
getYoutubeTitle = require("../getYoutubeTitle"),
db = require("quick.db"),
fetch = require('node-fetch'),
JSDOM = require("jsdom").JSDOM,
replace = require('string.prototype.replaceall')

exports.run = async (client, message, args) => {
  const musicChannel = await message.member.voice.channel
  if(!musicChannel) return await message.inlineReply("Ops! Você não está em um canal de voz!")

  let rand = [
    'https://i.pinimg.com/originals/9f/49/d8/9f49d80ae9e1e1623adcd63b9a18e1a6.gif', 'https://i.pinimg.com/originals/05/4a/a3/054aa3421c22e0c9e04ada3082066a8d.gif', "https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif", 'https://i.pinimg.com/originals/9f/49/d8/9f49d80ae9e1e1623adcd63b9a18e1a6.gif', 'https://i.imgur.com/t8H8ist.gif?noredirect'
  ], randA = rand[Math.floor(Math.random() * rand.length)]


	const pp = require("quick.db").get(`prefix_${message.guild.id}`) || "-",
	isURL = string => {try{new URL(string); return true}catch(e){return false}},
  videoNotFound = `❌ | Ops, ${message.author}! Não consegui encontrar a música que você pediu 😕\nTente novamente, verifique a ortografia e o nome da música 😉`,
	embed = new MessageEmbed().setTitle("Tocando agora").setColor("#0000FF").setThumbnail(randA).setFooter(`Para parar, digite ${pp}dc`);

  var videoId;
  var videoTitle;

  if(isURL(args[0])){
		const url = new URL(args[0]),
		urlSearch = new Object

		url.search.replace("?", "").split("&").forEach(current => {
			current = current.split("=")
			urlSearch[current[0]] = current[1] || null
		})

    videoId = urlSearch.v
    const response = await fetch(url),
		text = await response.text(),
		html = new JSDOM(text.substr(15)).window.document;

    videoTitle = html.querySelector(`meta[name="title"]`).content || html.querySelector("title").textContent.replace(" - YouTube", "");

    const results = await youtubesearchapi.GetListByKeyword(videoTitle, true)

    videoId = results.items[0].id
		videoTitle = results.items[0].title;

    embed.setDescription(`**Música**: [${videoTitle}](https://www.youtube.com/watch?v=${videoId})\n**A pedido de:** ${message.author}`).setThumbnail(results.items[0].thumbnail.thumbnails[0].url || randA);
	}else{
		const results = await youtubesearchapi.GetListByKeyword(args.join(" "), true)
		if(!results || !results.items.length) return await message.channel.send(videoNotFound)
		
		videoId = results.items[0].id
		videoTitle = results.items[0].title;
    embed.setDescription(`**Música**: [${videoTitle}](https://www.youtube.com/watch?v=${videoId})\n**A pedido de:** ${message.author}`)
    embed.setThumbnail(results.items[0].thumbnail.thumbnails[0].url || randA);
    if(!videoId) return await message.inlineReply(videoNotFound)
  }

	const stream = ytdl(`https://www.youtube.com/watch?v=${videoId}`, {filter: "audioonly"}),
    connection = await musicChannel.join(),
    dispatcher = connection.play(stream);
  
  await message.inlineReply(embed);
	dispatcher.on("end", () => musicChannel.leave())
}
