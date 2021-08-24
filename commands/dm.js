const { MessageEmbed } = require("discord.js"),
db = require("quick.db")

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) {
    message.inlineReply("ops! Parece que você não tem permissões necessárias para utilizar esse comando...\n👮 | **Permissão necessária:** *Administrador*")
    }

  let argss = args.slice(1).join(" ")

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

  if (!user) {
    message.inlineReply(`❌ | Ops! Houve um erro. Você não mencionou um usuário, bem como não enviou sua ID... Tente novamente :)`)
  }

  if (!argss) {
    message.inlineReply("❌ | Ops! Houve um erro. Você não digitou a mensagem a ser enviada. Tente novamente :)")
  }

  let embed = new MessageEmbed()
    .setTitle("Mensagem enviada com sucesso!")
    .setDescription(`Usuário que enviou: ${message.author}\nDestinarário: ${user}\n\nMensagem enviada:\n \`${argss}\``)
    .setColor("#00EEEE")
    .setThumbnail("https://passeiorio.com.br/wp-content/themes/passeiorio/assets/media/icones/msg-enviado.gif")
    .setFooter("Espero ter ajudado :)")

  try {
    user.user.send(`**Olá, ${user}! Tudo bem?** :slight_smile:\n**Você recebeu uma mensagem da administração do servidor *${message.guild.name}*** de ID ${message.guild.id}. Se ela possui conteúdo ofensivo, NSFW, etc., por favor, reporte no site: https://abre.ai/aaronbotsite, e saia do servidor. Obrigado!\n\n\n\`${argss}\`\n\n\n\n**Atenção:** *Não responda a essa mensagem por aqui, sou um bot e não leio as mensagens. Obrigado!*`)
    message.delete()
  }catch(error){
    message.inlineReply("❌ | Ops! Houve um erro. Tente novamente ou contate meus criadores em https://abre.ai/hydrosite")
  }
}