const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  let pp = require('quick.db').get(`prefix_${message.guild.id}`) || `-`;

  let embed = new MessageEmbed()
    .setTitle(`Levels`)
    .setColor("#00EEEE")
    .setThumbnail("https://i.ibb.co/ZNhD90g/XP.png")
    .setDescription(`Cada comando utilizado equivale a 1xp, e a quantidade de XP determina seu level.\n\n`)
    .addField(`Level`, `1\n2\n3\n4\n5\n6\n7\n8\n9\n10`, true)
    .addField(`XP`, `50\n100\n300\n500\n700\n900\n1000\n1150\n1500\n2000`, true)
    .setFooter(`Para saber o seu level ou o de alguém, use o comando ${pp}level`)

  message.inlineReply(embed)
}