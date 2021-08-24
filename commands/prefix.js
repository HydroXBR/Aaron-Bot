const { MessageEmbed } = require("discord.js"),
db = require("quick.db")

exports.run = async (client, message, args) => {
  let pp = db.get(`prefix_${message.guild.id}`) || `-`;
  let bot = client.users.cache.find(u => u.id == "800510988973506601")

  if (message.content.length > 13) return message.inlineReply(`❌ | Ops, ${message.author}! Desculpe, mas o prefixo deve ter apenas **um caractere**, como \`-\`, \`+\`, \`*\`, etc. Obrigado :wink:`);

  if (message.content.includes("set")) {
    if (message.member.permissions.has("ADMINISTRATOR")) {
    db.set(`prefix_${message.guild.id}`, `${args[1]}`)

    let pembed = new MessageEmbed()
      .setTitle("Prefixo alterado com sucesso")
      .setThumbnail("https://media.giphy.com/media/ycCRy3EKg7m4wNBRWv/giphy.gif")
      .setColor("#00EEEE")
      .setDescription(`Você alterou meu prefixo neste servidor, agora, o prefixo é: \`${args[1]}\`\n\nUse \`${args[1]}help\` para testar :)`)
      .setFooter(`Prefixo alterado por ${message.author.tag}`)

      message.inlineReply(pembed)
      try{
      let member = message.guild.members.cache.get("800510988973506601")
      await member.setNickname(`Aaron (${db.get(`prefix_${message.guild.id}`)})`)
      }catch(error){
        console.log(error)
      }
    } else {
      message.inlineReply("Ops! Parece que você não tem permissões necessárias para utilizar esse comando...\n👮 | **Permissão necessária:** *Administrador*")
    }
  } else {
    let embed = new MessageEmbed()
      .setTitle("Prefix")
      .setDescription(`Por padrão, venho com o prefixo \`-\`, mas  o comando *prefix* possibilita alterar meu prefixo no seu servidor.\n\n**Como utilizar?**\nPara alterar o prefixo, basta digitar:\n\`${pp}prefix set PREFIXO\`\n\n<:sirene:844184014684160010> **ATENÇÃO: O PREFIXO DEVE TER APENAS UM CARACTERE, COMO \`=\`, POR EXEMPLO.**\n\nPsiu! você só pode usar esse comando se tiver a permissão *Administrador* :wink:`)
      .setColor("#00EEEE")
      .setThumbnail("https://i.ibb.co/JjGRPwV/Bot.png")
      message.inlineReply(embed)
  }
}