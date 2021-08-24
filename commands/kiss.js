const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
var list = [
  'https://www.portaldodog.com.br/cachorros/wp-content/uploads/2016/02/beijo-cachorro-14.gif',
  'https://imgur.com/lYQt9rx.https://i.pinimg.com/originals/42/9a/89/429a890a39e70d522d52c7e52bce8535.gif',
  'https://media.tenor.com/images/338b948758c24e9b347e5b8d8db01624/tenor.gif',
  "https://i.pinimg.com/originals/de/8c/94/de8c941bff621731fcf4ed8cbf6542c3.gif"
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.inlineReply('Ops! Lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new MessageEmbed()
        .setTitle('Beijo')
        .setColor('#A52A2A')
        .setDescription(`Olha que fofo, rs :heart_eyes: ${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu')
        .setAuthor(message.author.tag, avatar);

  const rembed = new MessageEmbed()
        .setTitle('Beijo retribuído :)')
        .setColor('#FF0000')
        .setDescription(`Olha que fofo, rs :heart_eyes: ${user}  acaba de retribuir o beijo de ${message.author}`)
        .setImage(rand)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Emoji_u1f504.svg/1200px-Emoji_u1f504.svg.png")
        .setFooter('Kissu kissu kissu')

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