const { MessageEmbed } = require('discord.js'),
db = require("quick.db")

exports.run = async (client, message, args) => {
  try{
  let mp1 = `Ops, ${message.author}! Você precisa da permissão **Anexar arquivos**  para executar este comando.`;
  let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");

  if (!message.member.hasPermission("ATTACH_FILES")) return message.inlineReply(embederr(mp1));

  let embed = new MessageEmbed() 
    .setColor('#00EEEE') 
    .setFooter(`Pois o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor. - Romanos 6.23 ♥`, message.author.displayAvatarURL({format: "png"}))

  if (!args[0]) {
    let mavatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
    embed.setTitle(`Avatar de ${message.author.username}`) 
    embed.setImage(mavatar)
  } else {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || client.users.cache.find(user => user.id == args[0])
    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 })
    embed.setTitle(`Avatar de ${user.username}`) 
    embed.setImage(avatar)
  }

  message.inlineReply(embed)
  }catch(error){
    console.log(error)
  }
}