const { MessageEmbed } = require("discord.js"),
fetch = require("node-fetch")

exports.run = async(client, interaction) => {
  /*let serverPing = (Date.now() - message.createdTimestamp)*/
  let apiPing = client.ws.ping
  /*if(serverPing > 1000) serverPing = (serverPing / 1000) + "s"
  else serverPing += "ms"*/

  fetch("https://srhpyqt94yxb.statuspage.io/api/v2/status.json").then(response => response.json()
  .then(res => {
    r = res.status.description

    let embed = new MessageEmbed()
    .setTitle(`🏓  Pong! `)
    .setThumbnail("https://cdna.artstation.com/p/assets/images/images/006/059/004/original/leiden-quelch-pingpong.gif?1495727505")
    .setColor("#00EEEE")
    .setDescription(`📈 | Latência da API: **${apiPing}ms**\n:bar_chart: | Status Discord: **${r = "All Systems Operational" ? `Todos os sistemas operacionais` : r}**`)
    .setFooter(`"Tudo posso naquele que me fortalece!" - Filipenses 4.13 😊`)
  

  client.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
      type: 4,
      data: {
        embeds: [embed.toJSON()]
        }
      }
    });
  })
  )
}