const { MessageEmbed } = require("discord.js")

exports.run = async (client, message,args) => {
  let user = message.author
  let userr = message.mentions.members.first() || message.guild.members.cache.get(args[0])


  let embed = new MessageEmbed()
    .setTitle(`Feliz aniversário, ${userr.user.tag}!`)
    .setDescription(`Todos nós, **inclusive o ${message.author}**, te desejamos um **feliz aniversário** cheio das bençãos de Deus e de alegria!!!\n\nHappy birthday!`)
    .setImage("https://i.pinimg.com/originals/ff/68/1e/ff681e5594b64c218c956f244ecd7b34.gif")
    .setThumbnail("https://i.pinimg.com/originals/91/a3/88/91a388479efa1060949e655b70198012.png")
    .setColor('#00EEEE')
    .setFooter(":)")

  if (!userr) {
    message.inlineReply("Ops! Parece que você não mencionou ninguém, e muito menos inseriu a ID de um usuário :(\nTente novamente!")
  } else {
    message.inlineReply(embed)
  }
}