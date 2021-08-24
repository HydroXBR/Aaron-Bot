const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  try{
    let mp1 = `Ops! Parece que você não tem permissões necessárias para utilizar esse comando...\n\n> 👮 | **Permissão necessária:** *Expulsar membros*`;
    let mp2 = "Ops! Parece que  eu não tenho permissões necessárias para utilizar esse comando...\n\n> 👮 | **Permissão necessária:** *Expulsar membros*"
  
    let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");

    if(!message.member.hasPermission('KICK_MEMBERS')) return message.inlineReply(embederr(mp1));
    if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.inlineReply(embederr(mp2));

    const membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (membro === message.member) return message.inlineReply('Ops! Você não pode se expulsar!')

    if (!membro) return message.inlineReply(`Ops, ${message.author}! Você não mencionou e nem colocou a ID de ninguém para eu expulsar =/ Tente novamente!`)


    let motivo = args.slice(1).join(" ") ? args.slice(1).join(" ") : `Nenhum motivo fornecido`;

    let kickEmbed = new MessageEmbed()
    .setTitle(`Expulsão`)
    .setDescription(`**Usuário expulso do servidor:**\n${membro}\n\n**Expulso por:** \`${message.author.tag}\` | ${message.author.id}\n**Motivo:** ${motivo}`)
    .setColor("#FF0000");
  
    membro.kick({reason: motivo + ` (expulso a pedido de ${message.author.tag} | ${message.author.id})`})
    message.inlineReply(kickEmbed)
  }catch(error){
    console.log(error)
    message.inlineReply(`Ops! Não consegui expulsar o usuário :confused: Tente novamente, verifique os dados da mensagem :)`)
  }
}