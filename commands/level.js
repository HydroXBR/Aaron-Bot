const { MessageEmbed } = require('discord.js'),
db = require('quick.db')

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.member;

  let profissão = db.get(`work_${message.guild.id}_${user.id}`);
  let work = profissão == null ? "Nenhuma" : profissão;
  let emojiwork = db.get(`emojiwork_${message.guild.id}_${user.id}`);
  let lv = db.get(`lv_${user.id}`) || 0;
  let xp = db.get(`xp_${user.id}`) || 0;
  let pp = db.get(`prefix_${message.guild.id}`) || `-`;

  let embed = new MessageEmbed()
    .setTitle(`Level`)
    .setColor("#00EEEE")
    .setThumbnail("https://i.ibb.co/ZNhD90g/XP.png")
    .setDescription(`**Level:** \n\`\`\`${lv}\`\`\`\n**XP:**\n\`\`\`${xp}\`\`\`\n\n\nCada comando utilizado equivale a 1xp, e a quantidade de XP determina seu level.`)
    .setFooter(`Para saber como funciona a relação level-xp, use o comando ${pp}levels`)

  message.inlineReply(embed)
}