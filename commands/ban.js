const { MessageEmbed } = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {
  try{
  let xp = db.get(`xp_${message.author.id}`) || 0;
  let cmds = db.get(`cmds`) || 0;
  db.set(`xp_${message.author.id}`, xp + 1);
  db.set(`cmds`, cmds + 1);
  let prefixx = db.get(`prefix_${message.guild.id}`);
  let pp = prefixx == null ? `-` : prefixx;

  let mp1 = `Ops! Parece que você não tem permissões necessárias para utilizar esse comando...\n\n> 👮 | **Permissão necessária:** *Banir membros*`;
  let mp2 = "Ops! Parece que  eu não tenho permissões necessárias para utilizar esse comando...\n\n> 👮 | **Permissão necessária:** *Banir membros*"
  
  let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");


  if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(embederr(mp1))
  if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply(embederr(mp2))
  
  var motivo = args.slice(1).join(" ");
  if (!motivo) return message.reply(embederr(`Ops, **você esqueceu de colocar um motivo**.\n\nFaça assim: \`${pp}ban USER MOTIVO\``));

  const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!membro) return message.inlineReply(embederr(`Ops, acho que você esqueceu de algo... mencione o membro que deseja banir, ou coloque a ID.`));
  if (membro === message.member) return message.inlineReply(embederr(`Você não pode se banir do servidor!`));

  var msgg = "Sim"
  var msgg2 = "Não"

  let confirmembed = new MessageEmbed()
    .setTitle("Confirmar ban")
    .setColor("#00EEEE")
    .setImage("http://gifmania.com.br/wp-content/uploads/2020/07/gif-interrogacao.gif")
    .setDescription(`Tem certeza que deseja banir esse membro do servidor?
    
    Reaja com ✔️ para confirmar o banimento e enviar uma mensagem ao usuário banido.
    Reaja com 🔒 para confirmar o banimento e NÃO enviar mensagem ao usuário banido.
    Reaja com ❌ para desistir do banimento.`)

  let banEmbed = new MessageEmbed()
    .setTitle(`Ban`)
    .setDescription(`Um membro acaba de ser banido por ${message.author.username}!`)
    .setThumbnail("https://media.tenor.com/images/fe829734d0d3b1d5faf7bb92c1a951aa/tenor.gif")
    .setImage("https://media1.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif")
    .addField('Membro Banido: ', membro)
    .addField("Autor do Ban: ", `\`${message.author.tag}\` | ${message.author.id}`)
    .addField("Motivo: ", motivo)
    .addField("Mensagem enviada?", msgg)

  let banEmbed2 = new MessageEmbed()
    .setTitle(`Ban`)
    .setDescription(`Um membro acaba de ser banido por ${message.author.username}!`)
    .setThumbnail("https://media.tenor.com/images/fe829734d0d3b1d5faf7bb92c1a951aa/tenor.gif")
    .setImage("https://media1.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif")
    .addField('Membro Banido: ', membro)
    .addField("Autor do Ban: ", message.author.username)
    .addField("Motivo: ", motivo)
    .addField("Mensagem enviada?", msgg2)
  
    let banC = new MessageEmbed()
    .setTitle(`Ban cancelado`)
    .setColor("#FF0000")
    .setDescription(`O usuário não foi banido.`)
    .setThumbnail("https://images.emojiterra.com/mozilla/512px/274c.png")
  let msg = await message.channel.send(confirmembed);
  msg.react('✔️').then(() => {
  msg.react('🔒')
  msg.react('❌')
  })

const filter = (reaction, user) => {
	return ['✔️', '🔒', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 100000000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✔️') {
      try{
      membro.ban({reason: motivo + ` - banido por ${message.author.tag}`})
      membro.send(`Você foi banido no servidor **${message.guild.name}**\nEsperamos que da próxima vez obedeça às regras.`)
			msg.reply(banEmbed);
      }catch(error){return message.inlineReply(`Ops, ${message.author}! Não consegui banir o usuário! Verifique os cargos, se o meu for menor do que o usuário que você quer banir, não conseguirei baní-lo :confused:`)}
		}
    if (reaction.emoji.name === '🔒') {
      try{
      membro.ban({reason: motivo + ` - banido por ${message.author.tag}`})
			msg.reply(banEmbed2);
      }catch(error){return message.inlineReply(`Ops, ${message.author}! Não consegui banir o usuário! Verifique os cargos, se o meu for menor do que o usuário que você quer banir, não conseguirei baní-lo :confused:`)}
		}
    if (reaction.emoji.name === '❌') {
			msg.reply(banC);
		}
	})
  }catch(error){
    console.log(error)
    message.inlineReply(`Ops! Desculpe, mas não consegui banir o usuário :confused: Tente novamente mais tarde...`)
  }
}