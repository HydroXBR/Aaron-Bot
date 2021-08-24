const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  var list = [
    'https://i.pinimg.com/originals/ea/b7/e2/eab7e2b3f32d3306f6c9840724b7df65.gif',
    'https://media.tenor.com/images/003a3986b9557cb2a6fee36b54459bb9/tenor.gif',
    'https://media.tenor.com/images/9d0f7d3c74a1ffb00fa6660a96015897/tenor.gif',
    "https://media.tenor.com/images/9b620e36872db80072f07e987f63bd39/tenor.gif"
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let uu = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!uu) return message.inlineReply('Ops! Lembre-se de mencionar um usuário válido para abraçar!');

  let avatar = message.author.displayAvatarURL({format: 'png'});

  const embed = new MessageEmbed()
    .setTitle('Abraço!')
    .setColor('#00EEEE')
    .setDescription(`Que fofo! :smiling_face_with_3_hearts: ${message.author} acaba de abraçar ${uu}`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter('Hug u')
    .setAuthor(message.author.tag, avatar);

  const rembed = new MessageEmbed()
    .setTitle('Abraço retribuído :)')
    .setColor('#00EEEE')
    .setDescription(`Que fofo! :smiling_face_with_3_hearts: ${uu} acaba de retribuir o abraço de ${message.author}`)
    .setImage(rand)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Emoji_u1f504.svg/1200px-Emoji_u1f504.svg.png")
    .setFooter('Hug u')

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