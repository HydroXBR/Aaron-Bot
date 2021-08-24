const { MessageEmbed } = require('discord.js'),
db = require("quick.db")

exports.run = async (client, message, args) => {
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;
  const channelc = client.channels.cache.get("853491913193029682");

  let mp1 = `Ops! Parece que você não tem permissões necessárias para utilizar esse comando...\n\n> 👮 | **Permissão necessária:** *Gerenciar canais*`;
  let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.inlineReply(embederr(mp1));

  try{
  const embed = new MessageEmbed()
    .setTitle(/off/gmi.test(message.content) ? "OFF" : "Solicitação - news")
    .setColor("#00FFFF")
    .addField("Autor da solicitação", `${message.author.tag} - <@${message.author.id}>`)
    .addField("Servidor", `${message.guild.name} - ${message.guild.id}`)
    .addField("Canal", `${message.channel.name} - ${message.channel.id}`)
    .addField("Conteúdo", !/a|b|c|d|e|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|1|2|3|4|5|6|7|8|9|<|>|@/gmi.test(args.join(" ")) ? `Nenhum` : args.join(" "))

  if(/all|normal|te[ck]h/gmi.test(args[1])){
    embed.addField(`Tipo de notícias:`, args[1])
  }

  if (message.mentions.channels.first()) {
    const canalid = message.mentions.channels.first();
    embed.addField("Informações adicionais", `ID ${canalid.id}`);
    channelc.send(`<@755162323026706583>`, embed);
  } else {
    channelc.send(`<@755162323026706583>`, embed)
  }

  let e = new MessageEmbed()
    .setTitle("Solicitação enviada com sucesso")
    .setDescription(/off/gmi.test(message.content) ? `Ok, ${message.author}! não enviarei mais as notícias aqui ☺` : `Ok, ${message.author}! Sua solicitação foi enviada com sucesso,em breve enviarei as notícias aqui, do tipo solicitado! ☺\nPS: *Se houver demora, não se preocupe, já foi tudo registrado, **APENAS AGUARDE** a nova notícia que sair, **NÃO** ennie mais solicitações repetidas com o mesmo canal.*`)
    .setColor("#00EEEE")
    .setThumbnail("https://media.giphy.com/media/ycCRy3EKg7m4wNBRWv/giphy.gif")
    .addField(`Se você quiser apenas notícias tech, gamer, execute novamente, assim:`, `\`${pp}addnews #canal/ID tech\``)
    .addField(`Se você quiser apenas notícias cotidiano, vacinação, política, etc., execute novamente, assim:`, `\`${pp}addnews #canal/ID normal\``)
    .addField(`Se preferir tudo, mesmo:`, `Apenas aguarde :)`)

  message.inlineReply(e);

  }catch(error){
    console.log(error)
    message.inlineReply(embederr(`Ops! Desculpe, mas algo deu errado =/ Tente novamente mais tarde ou mande o problema na minha DM, e meus administradores irão analisar isso. Obrigado.`))
  }
}