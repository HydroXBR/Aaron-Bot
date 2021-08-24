const { MessageEmbed } = require("discord.js"),
db = require("quick.db")

exports.run = async (client, message, args) => {
  try{
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.inlineReply(`Ops, ${message.author}! Você precisa ter permissão de administrador para fazer isso :confused:`);

  const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
  const question = args.slice(1).join(" ");

  if (!channel || !question) return message.inlineReply(`Ops! Faltou especificar o canal, faça assim: \`${pp}poll #channel/ID MOTIVO\``);

  const embed = new MessageEmbed()
    .setTitle(`Enquete!`)
    .setDescription(`${message.author} criou a seguinte enquete:\n\n${question}`)
    .setThumbnail("https://s2.glbimg.com/oeGnJ3pDzDOYvw7sCfqStPHEhmc=/0x0:480x480/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Z/X/QKyPZbQ2ujBBwBo0g7Qg/giphy-1-.gif")
    .setColor(`#00EEEE`)

  message.delete()
  let msg = await client.channels.cache.get(channel.id).send(embed);
  await msg.react("👍")
  await msg.react("👎")
  }catch(error){
    console.log(error)
    message.inlineReply(`Ops, ${message.author}! Eu tentei, mas não consegui enviar a mensagem para o canal soliitado. Verifique a ortografia, e também se eu tenho permissões para mandar mensagens no canal especificado :wink:`)
  }
}