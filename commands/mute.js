const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.inlineReply(
      "❌ | Ops! Parece que você não tem permissão para executar esse comando!\nPermissão necessária: *Gerenciar cargos*"
    )
  }
  
  let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.inlineReply("❌ | Ops! Falta-me a permissão *Gerenciar cargos* para fazer isso. Me dê a permissão e tente novamente :)");
  }

  let user = message.mentions.members.first()
  
  if(!args[0]) return message.inlineReply('❌ | Você esqueceu de mencionar um usuário! Tente novamente :)');

  if(!user) return message.inlineReply('❌ | Ops! O usuário mencionado não existe ou não foi encontrado =/');

  if(user.id === message.author.id) {
    return message.inlineReply("❌ | Ops! Você não pode se mutar!");
  }
    
  let reason = args.slice(1).join(" ")
    
    
  if(!reason) {
    return message.inlineReply("❌ | Ops! Faltou especificar o motivo do mute.\n\nFaça assim:\n-mute <user> <motivo> :wink:")
  }
    
  let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
  
  let confirmembed = new MessageEmbed()
    .setTitle("Tem certeza?")
    .setThumbnail("http://gifmania.com.br/wp-content/uploads/2020/07/gif-interrogacao.gif")
    .setColor("#FFFF00")
    .setDescription(`Você está prestes a mutar o usuário ${user} neste servidor.\n\nReaja com ✔️ para mutar o usuário e informá-lo no privado\nReaja com 🔒 para mutar o usuário sem informá-lo.\nReja com ❌ para cancelar o mute.`)

  let muteembed = new MessageEmbed()
    .setTitle('Usuário mutado')
    .setColor("#00FF00")
    .setThumbnail(user.user.displayAvatarURL())
    .setImage("http://4.bp.blogspot.com/-1d3QyAd2vpA/VaOj79ycG-I/AAAAAAAARbM/zr61MN-zQDc/s1600/Mostrar%2Ba%2Blingua%2Bn%25C3%25A3o%2B%25C3%25A9%2Bmais%2Bfeio.gif")
    .addField(':mute: Usuário Mutado:', user)
    .addField(':ballot_box_with_check: Mutado por:', message.author)
    .addField(':question: Motivo:', reason)
    .addField('Espero que da próxima vez o usuário fale coisas interessantes e legais para não ser mutado novamente :)', "Lembre-se de verificar as permissões do cargo **Muted**, para funcionar corretamente :)")
    .setFooter('Mutado, quebrar as regras dá nisso!', client.user.displayAvatarURL())
    .setTimestamp()

    if(!muterole) {
    return message.inlineReply("❌ | Este servidor não tem o cargo `Muted`, Crie um!")
    }
    
  try{
  let msg = await message.inlineReply(confirmembed)
  msg.react('✔️').then(() => {
  msg.react('🔒')
  msg.react('❌')
  })

const filter = (reaction, user) => {
	return ['✔️', '🔒', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
}
msg.awaitReactions(filter, { max: 1, time: 100000000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✔️') {
      user.roles.add(muterole)
      muteembed.addField("**Usuário foi informado?**", "Sim")
      message.inlineReply(muteembed)
      user.send(`Você foi mutado no servidor **${message.guild.name}**\nMotivo: \`${reason}\``)
		}
    if (reaction.emoji.name === '🔒') {
      muteembed.addField("**Usuário foi informado?**", "Não")
      user.roles.add(muterole)
      message.inlineReply(muteembed)
		}
    if (reaction.emoji.name === '❌') {
			msg.reply("❌ | Ok, eu não mutei o usuário :)");
		}
	})
}catch(error){
  message.inlineReply(`❌ | Ops! Ocorreu um erro! Talvez o cargo ${muterole} seja maior que meu cargo máximo, ou seja, estou sem permissões para fazer isso. Tente novamente após mudar isso, se não funcionar, fale com meus técnicos em https://abre.ai/aaronbotsite :wink:`)
}
}