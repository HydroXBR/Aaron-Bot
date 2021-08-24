const jimp = require("jimp")

exports.run = async (client, message, args) => {
  let img = jimp.read("https://i.snipboard.io/CRxkyw.jpg")
  if (!args[0]) return message.channel.send("❌ | Você esqueceu de **escrever algo depois do comando**, para gerar o meme!")
  if(message.content.length > 90) return message.inlineReply(`❌ | Você passou do limite de letras (90)`)
  img.then(image => {
    jimp.loadFont(jimp.FONT_SANS_64_BLACK).then(font => image.print(font, 10, 4, args.join(" "), 700, (err, image, { x, y }) => {
      image.getBuffer(jimp.MIME_PNG, (err, i) => {
        message.inlineReply({files: [{ attachment: i, name: "notstonkss.png"}]})
      })
    }
  ))
})
}