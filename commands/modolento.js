const { MessageEmbed } = require('discord.js'),
ms = require('ms'),
db = require("quick.db")

exports.run = async (client, message, args) => {
  try{
    let mp1 = `Ops! Parece que você não tem permissões necessárias para utilizar esse comando...\n\n> 👮 | **Permissão necessária:** *Gerenciar canais*`;
    let mp2 = "Ops! Parece que  eu não tenho permissões necessárias para utilizar esse comando...\n\n> 👮 | **Permissão necessária:** *Gerenciar canais*"
  
    let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");

    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.inlineReply(embederr(mp1));
    if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.inlineReply(embederr(mp2));

    const pp = db.get(`prefix_${message.guild.id}`) || `-`;

    if (!args[0]) return message.inlineReply(embederr(`Você não especificou um tempo válido!\nTente assim: \`2h\` | \`2s\``));

    const currentCooldown = message.channel.rateLimitPerUser;

    const reason = args[1] ? args.slice(1).join(' ') : `Motivo não informado`

    const embed = new MessageEmbed()
      .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

    if (args[0] == 'off') {
      if (currentCooldown === 0) return message.inlineReply(embederr('O **Modo Lento** do canal já está desligado'));
      embed.setTitle('Modo lento desativado')
      .setColor("#00FFFF")
      return message.channel.setRateLimitPerUser(0, reason)
    }

    const time = ms(args[0]) / 1000;

    if (isNaN(time)) return message.inlineReply(embederr(`Esse não é um horário válido, por favor tente novamente!\n\nExemplo: \`${pp}modolento 5s\``));

    if (time >= 21600) return message.inlineReply(embederr(`O limite do modo lento é muito alto, digite qualquer coisa menor que 6 horas.`));

    if (currentCooldown === time) return message.inlineReply(embederr(`O Modo Lento já está definido para ${args[0]}`));

    embed.setTitle('Modo lento ativado')
      .addField('Intervalo do modo lento: ', args[0])
      .addField('Motivo: ', reason)
      .addField(`Desativar`, `Para desativar o Modo Lento digite **${pp}modolento 0s** ou **${pp}modolento off**`)
      .setColor('RANDOM')

    message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));
  }catch(error){
    console.log(error)
    message.inlineReply(embederr(`Ops! Não consegui ativar o modo lento por algum motivo, desculpe :confused:`))
  }
}