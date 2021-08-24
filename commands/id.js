const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
  let iduser = user.id

  let embed = new MessageEmbed()
    .setTitle("User ID")
    .setDescription(`Oi, tudo bem?\n\nComo você pediu, o ID do usuário mencionado é:\n**${iduser}**\n\nPara mais informações, use o comando *-userinfo* :)`)
    .setColor("#1E90FF")
    .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
    .setFooter("Espero ter ajudado :)")

  let myidembed = new MessageEmbed()
    .setTitle("User ID")
    .setDescription(`Oi, tudo bem?\n\nComo você pediu, o seu ID é:\n**${iduser}**\n\nPara mais informações, use o comando *-userinfo* :)`)
    .setColor("#1E90FF")
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setFooter("Espero ter ajudado :)")

  let hydroembed = new MessageEmbed()
    .setTitle("User ID")
    .setDescription(`Oi, tudo bem?\n\nComo você pediu, o meu ID é:\n**${iduser}**\n\nPara mais informações, use o comando *-userinfo* :)`)
    .setColor("#1E90FF")
    .setThumbnail("https://i.ibb.co/JjGRPwV/Bot.png")
    .setFooter("Espero ter ajudado :)")

try{
if (iduser === message.author.id) {
  message.inlineReply(myidembed)
} else if (iduser === "800510988973506601") {
  message.inlineReply(hydroembed)
} else {
  message.inlineReply(embed)
}
}catch(error){
		message.inlineReply("❌ | Ops! Houve um erro! Pode ser porque você marcou um canal ou cargo, verifique :wink: \n:incoming_envelope: | Desculpe a inconveniência, se preferir, contate-me em https://abre.ai/hydrosite ;)")
	}
}