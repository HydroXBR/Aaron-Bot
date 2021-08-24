const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  let embed = new MessageEmbed()
    .setTitle("")
    .setDescription()
    .setThumbnail("https://static.wixstatic.com/media/77af00_204cff4bb058419ba81aa7b34ebca08f~mv2.gif")
    .setFooter(`Atualização por ${message.author.tag}`)

  if (!/ 1 | 2 | 3 /i.test(message.content)) return message.reply("ops! Você esqueceu de colocar o número correspondente. Observe:\n\n-log 1 (TEXTO) → adições ou melhorias\n-log 2 (TEXTO) → remoções, eliminações\n-log 3 (TEXTO) → modificações, alterações em geral")

  if (message.content.startsWith("-log 1")) {
    embed.setTitle(":green_circle:")
    embed.setColor("#00FF00")
    embed.setDescription(`**Atualização**\n\n${args.join(" ").slice(1)}`)
  }

  if (message.content.startsWith("-log 2")) {
    embed.setTitle(":red_circle:")
    embed.setColor("#FF0000")
    embed.setDescription(`**Atualização**\n\n${args.join(" ").slice(2)}`)
  }

  if (message.content.startsWith("-log 3")) {
    embed.setTitle(":white_circle:")
    embed.setColor("#FAFAFA")
    embed.setDescription(`**Atualização**\n\n${args.join(" ").slice(2)}`)
  }

  message.delete()
  message.channel.send(embed)
}