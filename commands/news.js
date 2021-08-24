const { MessageEmbed } = require('discord.js'),
db = require('quick.db')

exports.run = async (client, message, args) => {
  try{
    const pp = db.get(`prefix_${message.guild.id}`) || `-`;
    const embed = new MessageEmbed()
      .setTitle(`News`)
      .setColor('#00EEEE')
      .setThumbnail('https://i.pinimg.com/originals/57/cb/46/57cb46de34f5803c75582936435daa75.gif')
      .setDescription(`Oi, ${message.author}!\n\nA funcionalidade \`news\` é uma das que mais me destaca, visto que é uma função exclusiva e que há pouquíssimos bots com esse sistema (se é que tem haha)\n\nAo ativar a funcionalidade \`news\`, basta utilizar o comando \`-addnews #canal/ID do canal\` - só! E a partir daí, quando sair uma notícia, ela será enviada para o canal solicitado.\n\n**Veja como utilizar, mais especificamente:**\n`)
      .addField(`Se você quiser apenas notícias tech, gamer, execute assim:`, `\`${pp}addnews #canal/ID tech\``)
      .addField(`Se você quiser tudo, incluindo tecnologia, notícias cotidiano, vacinação, política, etc., execute assim:`, `\`${pp}addnews #canal/ID\``)
      .addField(`Para desativar, se já estiver ativado:`, `\`${pp}addnews #canal/ID off\``)
      .addField(`Saber mais:`, `Acesse: https://abre.ai/aaronnews`)
    message.inlineReply(embed)
  }catch(e){
    console.log(e)
    message.inlineReply(`Ops, não consegui executar o comando solicitado... Desculpe pela inconvêniência.`)
  }
}