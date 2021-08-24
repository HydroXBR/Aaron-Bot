const Discord = require("discord.js"),
db = require("quick.db")

exports.run = async (client, message, args) => {
  if (message.author.id === "755162323026706583") {
    let dl = "https://i.ibb.co/HBcsVBS/image.png"
    let image = "https://i.ibb.co/bvZwhFG/image.png"
    message.delete()

    let embed = new Discord.MessageEmbed()
      .setTitle("Palavra do dia - Will")
      .setColor(`RANDOM`)
      .setImage(image)
      .setThumbnail(dl)
      .setDescription("**Will**\nNão, não é nome de pessoa :joy:\n\nA palavra *will*, no inglês, é um verbo *to be*, ou seja, significa ser/estar, mas no **futuro**. Ou seja, uma coisa que ainda vai acontecer. Pode significar, então:\n• Será\n• Estará\n• Irá\n\n**Exemplos:**\n• *She will study.* (Ela irá estudar.)\n• *I will sing at the evento.* (Eu irei cantar no evento.)\n• *They will ride their bikes in the afternoon.* (Eles vão andar de bicicleta à tarde.)")
      .setFooter("Espero ter ajudado em algo :)")

  let ids = [
    "801065849217089606"
  ]

  ids.forEach(id => {
    let thisChannel = client.channels.cache.find(e => e.id == id)
    thisChannel.send(embed)
  })
  }
}