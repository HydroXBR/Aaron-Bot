const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  var list = [
    'https://acegif.com/wp-content/uploads/laughing-42.gif',
    'https://thumbs.gfycat.com/EvilRawEastsiberianlaika-size_restricted.gif',
    'https://acegif.com/wp-content/uploads/laughing-11.gif',
    'https://media.tenor.com/images/822682730ff8f7637079393c7f9d2976/tenor.gif'
  ]

  var rand = list[Math.floor(Math.random() * list.length)];

  let avatar = message.author.displayAvatarURL({format: 'png'})

  let embed = new MessageEmbed()
    .setTitle('Rindo muito')
    .setColor('#FA8072')
    .setDescription(`${message.author} está rindo muito\nKKKKKKKKKKKKKKKKKK`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter('kkkkkkkkk')
    .setAuthor(message.author.tag, avatar)

  message.delete()
  message.channel.send(embed)
}