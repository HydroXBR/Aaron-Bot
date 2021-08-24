const { MessageEmbed } = require("discord.js"),
fetch = require("node-fetch")

exports.run = async function(client, message, args){ 
  let serverPing = (Date.now() - message.createdTimestamp)
  let apiPing = client.ws.ping
  if(serverPing > 1000) serverPing = (serverPing / 1000) + "s"
  else serverPing += "ms"

  fetch("https://srhpyqt94yxb.statuspage.io/api/v2/status.json").then(response => response.json()
    .then(res => {
    r = res.status.description
    let embed = new MessageEmbed()
    .setTitle(`🏓  Pong! `)
    .setThumbnail("https://cdna.artstation.com/p/assets/images/images/006/059/004/original/leiden-quelch-pingpong.gif?1495727505")
    .setColor("#FF0000")
    .setDescription(`🌐 | Latência do Server: **${serverPing}**.\n📈 | Latência da API: **${apiPing}ms**\n:bar_chart: | Status Discord: **${r = "All Systems Operational" ? `Todos os sistemas operacionais` : r}**`)
    .setFooter(`"Tudo posso naquele que me fortalece!" - Filipenses 4.13 😊`)

  if (message.channel.id == "831382952013070346") {
    message.delete()
    message.channel.send(embed)
  } else {
    message.inlineReply(embed);
  }
  })
  )
}