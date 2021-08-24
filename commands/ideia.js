const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  let canal = message.guild.channels.cache.find(ch => ch.name === "🙋║sᴜɢᴇsᴛᴏ̃ᴇs-𝚛𝚎𝚌𝚎𝚋𝚒𝚍𝚊𝚜" || ch.name === "🙋・sug-recebidas" || ch.name === "suggestions" || ch.name === "💡-sugestões" || ch.name === "💬┃𝐒𝐮𝐠-𝐫𝐞𝐜𝐞𝐛𝐢𝐝𝐚𝐬" || ch.name.includes(`sugest`))

  let embed = new MessageEmbed()
    .setTitle("Sugestão recebida")
    .setColor("#FFFFF1")
    .setDescription(`**Autor**\n${message.author.tag}\n\n**Sugestão:**\n${args.join(" ")}`)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()

  let neembed = new MessageEmbed()
    .setTitle("❌ | Ops!")
    .setColor("#FF0000")
    .setDescription(`Ops, ${message.author}! **Você não especificou sua ideia!** Use esse comando assim:\n\n-ideia (SUA SUGESTÃO)`)
    .setFooter("Espero ter ajudado :)")

  if (!args[0]) {
    message.inlineReply(neembed)
  } else if (args.join("").length > 1000) {
    message.inlineReply(`❌ | Ops, ${message.author}! Sua mensagem é muito grande, contém mais de 1000 caracteres. Por favor, tente novamente resumindo a sua ideia com menos de 1000 caracteres, obrigado! :wink:`)
  } else {
    message.delete()
    let msg = await canal.send(embed)
    msg.react("☑")
    msg.react("❌")
    await message.channel.send(`☑ | ${message.author}, **a mensagem foi enviada com sucesso!** Obrigado pelas sugestões!`)
  }
}