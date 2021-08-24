const { MessageEmbed } = require(`discord.js`),
db = require('quick.db')

exports.run = async (client, message, args) => {
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;
  const embednick = new Discord.MessageEmbed()
    .setColor("#00EEEE")
    .setTitle("Ops! Faltou o nick/usuário...")
    .setThumbnail("https://media3.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif")
    .setDescription(`Para alterar o nickname de algum usuário, você precisa inserir o comando -name, seguido da menção do usuário, e, após, o nome desejado.\n\n Exemplo: ${pp}name <@800510988973506601> Bot Aaron`)
    .setFooter("Vamos tentar novamente?")
  if (!message.member.hasPermission(["ADMINISTRATOR"])) {
    return message.inlineReply({embed: {color: "RED", description: "Você não pode usar este comando!"}})
  }

  let user = message.mentions.users.first()
  let nick = args.slice(1).join(" ")

  const embed = new Discord.MessageEmbed()
    .setColor("#00FF00")
    .setTitle("Nickname alterado :)")
    .setThumbnail("https://www.hidrosconsultoria.com.br/site/wp-content/uploads/2017/06/check1.gif")
    .setDescription(`O nickname foi alterado com sucesso para **${nick}**`)
  
  if (!user || !nick) return message.inlineReply(embednick);
  

  let member = message.guild.members.cache.get(user.id)
  try{
  await member.setNickname(nick);
  message.inlineReply(embed)
  }catch(error){
    message.inlineReply(`Ops, ${message.author}! Houve um erro, e eu não consegui alterar o nickname do usuário. Por favor, verifique as permissões, se o usuário tiver um cargo igual ou maior que o meu, não conseguirei alterar!`)
  }
}