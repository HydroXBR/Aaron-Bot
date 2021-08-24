const { MessageEmbed } = require('discord.js'),
db = require('quick.db')

exports.run = async(client, interaction) => {
  const messager = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {content: s}}}),
  embedder = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {embeds: [s.toJSON()]}}});

  const author = interaction.member.user.id;
  const user = interaction.data.options ? interaction.data.options[0].value : author;
  const tag = interaction.member.user.username + `#` + interaction.member.user.discriminator;
  const money = db.get(`money_${user}`) || 0;

  const toBRL = value => Number(value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

  let embed = new MessageEmbed()
    .setTitle(user == author ? `Saldo da sua conta` : `Saldo de ${/*usertag*/`a`}`)
    .setThumbnail("https://img.freepik.com/vetores-gratis/carteira-e-desenho-animado-do-dinheiro_138676-2086.jpg?size=338&ext=jpg")
    .setColor('#00EEEE')
    .setDescription(`O saldo desta conta, atualmente, é de:\n\n\`\`\`${toBRL(money)}\`\`\``);

  embedder(embed)
}