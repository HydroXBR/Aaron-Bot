const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  var list = [
    'https://media.tenor.com/images/fe3e2fbf6e12bbb0acf05741db037f62/tenor.gif',
    'https://thumbs.gfycat.com/BoringFavorableDuckling-max-1mb.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) return message.inlineReply('lembre-se de mencionar um usuário válido para fazer cafuné!');

  let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new MessageEmbed()
    .setTitle('Cafuné')
    .setColor("#00EEEE")
    .setDescription(`${message.author} acaba fazer cafuné em ${user}`)
    .setImage(rand)
    .setThumbnail(avatar)
    .setFooter(':D')
  await message.inlineReply(embed);
}