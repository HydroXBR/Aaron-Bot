const { MessageEmbed } = require('discord.js'),
db = require("quick.db")

exports.run = async (client, message, args) => {
  let xp = db.get(`xp_${message.author.id}`) || 0;
  let cmds = db.get(`cmds`) || 0;
  db.set(`xp_${message.author.id}`, xp + 1);
  db.set(`cmds`, cmds + 1);
	let user = message.mentions.users.first() || client.users.cache.get(args[0])
	if(!user) return message.reply('lembre-se de mencionar um usuário válido para dar um oi!')

	let avatar = message.author.displayAvatarURL({format: 'png'})
	let list = [
		'https://media.tenor.com/images/5a5296439b011c94d89d533f779c254f/tenor.gif',
		'https://maisvideos.me/wp-content/uploads/2018/09/pinguin-recurta-bebe-dizendo-oi.gif'
	]
	let rand = list[Math.floor(Math.random() * list.length)]

	const embed = new MessageEmbed()
		.setTitle('Oieeee')
		.setColor('#00EEEE')
		.setDescription(`${message.author} acaba de dar um oi para ${user}`)
		.setImage(rand)
		.setTimestamp()
		.setThumbnail(avatar)
		.setFooter('Oie :D')
		.setAuthor(message.author.tag, avatar);

	const rembed = new MessageEmbed()
		.setTitle('Oieeee')
		.setColor('#00FF00')
		.setDescription(`${user} acaba de retribuir o oi de ${message.author}`)
		.setImage(rand)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Emoji_u1f504.svg/1200px-Emoji_u1f504.svg.png")
		.setFooter('Oie :D')
let msg = await message.inlineReply(embed);
  msg.react('🔁')

const filter = (reaction, user) => {
	return ['🔁'].includes(reaction.emoji.name) && user.id !== "800510988973506601"
};

msg.awaitReactions(filter, { max: 1, time: 100000000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🔁') {
			msg.reply(rembed);
		}
	})
}