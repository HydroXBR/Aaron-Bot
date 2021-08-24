const jimp = require("jimp"),
ms = require("ms"),
cooldowns = {}

exports.run = async (client, message, args) => {
  let img = jimp.read("https://i.ibb.co/GFj07q0/image.png")
  if (!args[0]) return message.channel.send("❌ | Você esqueceu de **escrever algo depois do comando**, para gerar o meme!")
  if(message.content.length > 50) return message.inlineReply(`❌ | Você passou do limite de letras (50)`)
  img.then(image => {
    jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => image.print(font, 370, 310, args.join(" "), 250, (err, image, { x, y }) => {
      image.getBuffer(jimp.MIME_PNG, (err, i) => {
        message.inlineReply({files: [{ attachment: i, name: "poze.png"}]})
      })
    }
  ))
})
}