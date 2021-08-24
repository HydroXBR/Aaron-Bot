const { MessageEmbed } = require("discord.js"),
db = require('quick.db')

exports.run = async(client, message, args) => {
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;
  const embed = new MessageEmbed()
    .setTitle(`Tem certeza?`)
    .setDescription(`Ao solicitar a exclusão de seus dados que guardamos, como IDs de usuário, tudo seu na conta Aaron será eliminado, como dinheiro no perfil (fictício, comando \`${pp}perfil\`) que será eliminado, e quando alguém ver seu saldo fictício estará em 0, assim como todos os objetos fictícios comprados na conta Aaron.\n\nReaja com ✅ à essa mensagem para confirmar isso.\n\nAtenção: Apagar os dados Aaron é algo irreversível. Tenha bastante certeza.`)
    .setColor('#00EEEE')
  const embed2 = new MessageEmbed()
    .setTitle(`Dados deletados`)
    .setDescription(`Ok, como você pediu, deletei todos seus dados bancários no Aaron (fictícios), alguns podem demorar a ser computados, mas estamos concluindo o processo.`)
    .setColor('#0000EE')

    let msg = await message.inlineReply(embed)
    msg.react('✅')

    const filter = (reaction, user) => {
	    return ['✅'].includes(reaction.emoji.name) && user.id == message.author.id
    };

    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	  .then(collected => {
	    const reaction = collected.first();

	  if (reaction.emoji.name === '✅') {
		  db.delete(`money_${message.author.id}`)
      db.delete(`especialidade_${message.author.id}`)
      db.delete(`work_${message.author.id}_${message.guild.id}`)
      db.delete(`gemas_${message.author.id}`)
      db.delete(`carros_${message.author.id}`)
      db.delete(`objetos_${message.author.id}`)
      message.inlineReply(embed2)
	  }
    })
}