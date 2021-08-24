const Discord = require("discord.js"),
db = require("quick.db")

exports.run = async (client, message, args, level) => {
  let mp1 = `Ops, ${message.author}! Você precisa da permissão **Gerenciar canais**  para executar este comando.`;
  let embed = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");

  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.inlineReply(embed(mp1);)

  let pp = db.get(`prefix_${message.guild.id}`) || `-`;
  
  try {
    if (!args[1]) return message.inlineReply(`❌ | Ops! Faltou especificar o tipo do canal. Faça isso assim:\n\n${pp}criarcanal \`TEXTO/VOZ\` \`NOME\` \n\nOu seja, use \`text\` para canal de texto e \`voice\` para canal de voz. :)`)
    if (!args[0]) return message.inlineReply(`❌ | Ops! Faltou especificar o nome do canal. Faça isso assim:\n\n${pp}criarcanal \`texto/voz\` \`NOME\` \n\nOu seja, use \`text\` para canal de texto e \`voice\` para canal de voz, e após isso, insira o nome do canal. :)`)

    let tipo = /vo(z|ice)/.test(args[0]) ? "voice" : "text";
    let typee = tipo == "voice" ? "Voz" : "Texto";

    let namme = args.slice(1).join("")
    message.guild.channels.create(namme, {type:tipo}, [])

    let embed = new Discord.MessageEmbed()
      .setTitle("Canal criado com sucesso!")
      .setColor("#00EEEE")
      .setThumbnail("https://media.giphy.com/media/ycCRy3EKg7m4wNBRWv/giphy.gif")
      .addField("Nome do canal", namme)
      .addField("Tipo de canal", typee)

      message.inlineReply(embed)
  } catch (err) {
    message.inlineReply('Ops! Houve um erro! Tente novamente mais tarde, ou contate meus técnicos em https://abre.ai/aaronbotsite')
  }
}