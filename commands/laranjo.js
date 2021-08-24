const { Client, MessageAttachment } = require('discord.js'),
Jimp = require("jimp")

exports.run = async (client, message, args) => {
  

  Jimp.read(`https://media.discordapp.net/attachments/689750456695914586/691077705071984710/295364123043211.png?width=540&height=482`, function (err, image) {
    if (err) message.inlineReply('Ops! Ocorreu um erro ao criar a imagem.')
    Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
      image.print(font, 23, 310, args.join(" "), 320)
      image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        const attachment = new MessageAttachment(buffer, 'laranjo.png')
        messager({files: [{ attachment: i, name: "perfil.png"}]})
      })
    })
  })
}