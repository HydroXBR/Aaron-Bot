/*const { MessageEmbed } = require("discord.js")
const db = require("quick.db")*/

exports.run = async (client, message, args) => {
  return message.inlineReply(`Desculpa, ${message.author}! Infelizmente esse comando foi desativado, pois, ao me aprovar, o Discord não autorizou a liberação de intents para que eu receba eventos de entrada e saída de servidor, portanto, este comando está inativo... Obrigado pela compreensão! :wink:`)
  /*
  let vote = `[Vote em mim e me ajude a crescer :heart:](https://top.gg/bot/800510988973506601)`
  let mp1 = `Ops, ${message.author}! Você precisa da permissão **Gerenciar canais**  para executar este comando.`;
  let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");

  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.inlineReply(embederr(mp1));

  let pp = db.get(`prefix_${message.guild.id}`) || `-`;

  if (/o[nm]/i.test(message.content)) {
    db.set(`membercount_${message.guild.id}`, `on`);
    message.guild.channels.create(`👥 | Membros: ${message.guild.members.cache.size}`, {type:"voice"}, []).then(chan => chan.updateOverwrite(message.guild.roles.everyone, {
        CONNECT: false,
        VIEW_CHANNEL: true,
        SPEAK: false,
        CREATE_INSTANT_INVITE: false,
        STREAM: false
        })).then(chan => db.set(`membercountchannel_${message.guild.id}`, chan.id)
        )

    message.inlineReply(new MessageEmbed().setTitle("Contador de membros ligado com sucesso!").setDescription(`Como você pediu, criei um canal de voz privado, e os membros do servidor tem permissões apenas para ver o canal na lista de canais do servidor, mas não conectar. Então, toda vez que alguém entrar ou sair do servidor, o número é atualizado.\n\n${vote}`).setColor("#00FF00").setThumbnail("https://media1.tenor.com/images/cdbfdbfac52cdd4f3aefc2ec929f57f4/tenor.gif?itemid=16726264").setFooter(`Membercount ligado por ${message.author.tag}`).setTimestamp())
  
  } else if (/off|desl/gmi.test(message.content)) {
    let canal = message.guild.channels.cache.find(u => u.id == db.get(`membercountchannel_${message.guild.id}`))
	
    if(!canal) return await message.inlineReply(new MessageEmbed().setDescription("O canal não foi encontrado").setTimestamp().setColor('#00EEEE'))

    db.delete(`membercountchannel_${message.guild.id}`);
	  canal.delete();
	
	  message.inlineReply(new MessageEmbed().setTitle("Contador de membros desligado com sucesso!").setDescription(`Como você pediu, deletei o canal de voz criado anteriormente para contar os membros do servidor.`).setColor("#00FF00").setThumbnail("https://media1.tenor.com/images/cdbfdbfac52cdd4f3aefc2ec929f57f4/tenor.gif?itemid=16726264").setFooter(`Membercount desligado por ${message.author.tag}`).setTimestamp())
  }else{
    message.inlineReply(new MessageEmbed().setTitle("Contador de membros").setDescription(`Ao ativar o contador, crio um canal de voz privado, para os membros acompanharem a quantidade de participantes do servidor, e, sempre que alguém entra e sai, atualizo o número.\n\n**Para ligar**, digite:\n\`${pp}membercount on\`\n**Para desligar**, digite:\n\`${pp}membercount off\``).setColor("#00FFFF").setThumbnail("https://i.pinimg.com/originals/14/bd/f7/14bdf7aa1794bc0a9965bbff73deefe2.gif"))
  }*/
}