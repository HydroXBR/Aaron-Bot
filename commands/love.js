const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  var list = [
    'https://gifman.net/wp-content/uploads/2019/06/eu-te-amo.gif',
    'https://i.pinimg.com/originals/99/b6/a6/99b6a64ce4a7cb38619ed32d324e6907.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)];
  let uu = message.mentions.users.first() || client.users.cache.get(args[0]);

  if(!uu) {
    message.reply("ops! Parece que **você não marcou e nem colocou na mensagem o ID de alguém** para dizer que ama...\n❌ | Tente novamente :)")
  } else {
    let avatar = message.author.displayAvatarURL({format: 'png'});

    const embed = new MessageEmbed()
      .setTitle('Eu te amo, viu?')
      .setColor('#FA8072')
      .setDescription(`Que fofo! :smiling_face_with_3_hearts: ${message.author} acaba de dizer "eu te amo" para ${uu}`)
      .setImage(rand)
      .setTimestamp()
      .setThumbnail(avatar)
      .setFooter('#FazoPIXeAjudeoADM: aaronbotjs@gmail.com')
      .setAuthor(message.author.tag, avatar);

    const rembed = new MessageEmbed()
      .setTitle('"Eu te amo" retribuído :)')
      .setColor('#B22222')
      .setDescription(`Que fofo! :smiling_face_with_3_hearts: ${uu} acaba de retribuir o "eu te amo" de ${message.author}`)
      .setImage(rand)
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Emoji_u1f504.svg/1200px-Emoji_u1f504.svg.png")
      .setFooter('#FazoPIXeAjudeoADM: aaronbotjs@gmail.com')

    let msg = await message.inlineReply(embed)
    msg.react('🔁')

    const filter = (reaction, user) => {
	    return ['🔁'].includes(reaction.emoji.name) && user.id == uu.id
    };

    msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	  .then(collected => {
	    const reaction = collected.first();

	  if (reaction.emoji.name === '🔁') {
		  message.inlineReply(rembed)
	  }
    })
  }
}