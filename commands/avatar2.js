const { MessageEmbed } = require('discord.js')

exports.run = async (client, interaction) => {
  const messager = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {content: s}}}),
  embedder = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {embeds: [s.toJSON()]}}});

  const author = interaction.member.user.id;
  const user = interaction.data.options ? interaction.data.options[0].value : interaction.member.user.id;

  console.log(author)
  console.log(user)

  const user1 = user == author ? author : user;
  const avatarUrl = client.users.cache.get(user1).avatar;
  const userTag = client.users.cache.get(user1).username + `#` + client.users.cache.get(user1).discriminator;
  const avatarLink = `https://cdn.discordapp.com/avatars/${user}/${avatarUrl}.png?size=1024`;

  let embed = new MessageEmbed()
    .setTitle(`Avatar de ${userTag}`)
    .setColor('#00EEEE')
    .setFooter(`Pois o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor. - Romanos 6.23 ♥`)
    .setImage(avatarLink)

  /*if (!args[0]) {
    let mavatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
    embed.setTitle(`Avatar de ${message.author.username}`) 
    embed.setImage(mavatar)
  } else {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || client.users.cache.find(user => user.id == args[0])
    let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 })
    embed.setTitle(`Avatar de ${user.username}`) 
    embed.setImage(avatar)
  }*/

  embedder(embed)
}