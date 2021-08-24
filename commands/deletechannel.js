const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  let mp1 = `Ops, ${message.author}! Você precisa da permissão **Gerenciar canais**  para executar este comando.`;
  let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");

  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.inlineReply(embed(mp1));

  try{
  const channell = message.guild.channels.cache.get(args.join("")) || message.mentions.channels.first() || message.guild.channels.cache.find(u => u.id == message.channel.id);

  let fetchEmbed = new MessageEmbed()
    .setTitle("Confirmação")
    .setColor("#00EEEE")
    .setThumbnail("http://gifmania.com.br/wp-content/uploads/2020/07/gif-interrogacao.gif")
    .setDescription(`Tem certeza que deseja excluir o canal ${channell}?\nReaja à mensagem.`)
  let cEmbed = new MessageEmbed()
    .setTitle("Canal não deletado")
    .setColor("#00EEEE")
    .setThumbnail("https://media1.giphy.com/media/pjFF8YLW996aXqFHAu/source.gif")
    .setDescription(`O canal não foi eliminado.`)
    .setFooter(`Solicitação: ${message.author.tag}`)
  let sEmbed = new MessageEmbed()
    .setTitle("Canal deletado")
    .setColor("#00EEEE")
    .setThumbnail("https://payload.cargocollective.com/1/20/651586/13142851/iconeLixeira_05.gif")
    .setDescription(`O canal \`${channell.name}\` foi deletado com sucesso!`)
    .setFooter(`Deletado por: ${message.author.tag}`)
  
  let msg = await message.inlineReply(fetchEmbed);
    msg.react('✔️')
    msg.react('❌')

  const filter = (reaction, user) => {
  	return ['✔️', '❌'].includes(reaction.emoji.name) && user.id == message.author.id
  };

  msg.awaitReactions(filter, { max: 1, time: 100000000, errors: ['time'] })
  	.then(collected => {
  		const reaction = collected.first();

  		if (reaction.emoji.name === '✔️') {
        if (args[0] && channell !== message.channel) {
  			  channell.delete()
          message.inlineReply(message.author, sEmbed)
        } else {
          channell.delete()
          if (message.author.id == message.guild.owner.id){
          sEmbed.setFooter(`Deletado por você mesmo`)
          message.author.send(`O canal foi deletado com sucesso.`, sEmbed)
          } else {
          message.author.send(`O canal foi deletado com sucesso.`, sEmbed)
          message.guild.owner.send(`O canal \`${channell.name}\` foi deletado com sucesso pelo usuário ${message.author}. Estou lhe informando porque você é o dono do servidor, e o usuário pediu para eu deletar o mesmo canal no qual ele usou este comando, então, não ficaria a confirmação para ninguém. Obrigado! :wink:`)
          }
        }
  		}
      if (reaction.emoji.name === '❌') {
  			msg.reply(cEmbed);
  		}
  	})
  }catch(error){
    console.log(error)
    message.inlineReply(embederr(`Ops! Algo deu errado.`))
  }
}