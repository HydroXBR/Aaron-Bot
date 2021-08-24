const { MessageEmbed } = require("discord.js"),
db = require("quick.db")

exports.run = async(client, message, args) => {
  let pp = db.get(`prefix_${message.guild.id}`) || `-`;
  let embed = new MessageEmbed()  
    .setTitle("Meu servidor oficial :)")
    .setDescription(`E aí, ${message.author}? Tudo bem? Muito obrigado, segue o link para entrar no meu servidor oficial, e obtenha vantagens como mais dinheiro no \`${pp}daily\` e mais algumas vantagens ${client.emojis.cache.get("853384983204593694")}\n\nChega de enrolação, toma logo o link:\nhttps://discord.gg/chnhwPBVxX`)
    .setColor("#00EEEE")
    .setThumbnail("https://i.ibb.co/JjGRPwV/Bot.png")

  message.inlineReply(embed)
}