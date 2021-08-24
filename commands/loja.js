const { MessageEmbed } = require(`discord.js`),
db = require("quick.db")

module.exports.run = async (client, message, args) => {
  const prefixx = db.get(`prefix_${message.guild.id}`);
  const pp = prefixx == null ? `-` : prefixx;
  let gemap = db.get(`gemas_${message.author.id}`);
  let gema = gemap == null ? `0` : gemap;
  let dinheiro = db.get(`money_${message.author.id}`);
  let money = dinheiro == null ? "0" : dinheiro;

  let embed = new MessageEmbed().setTitle(`Loja do Aaron`).setColor(`#00FFFF`).setImage(`https://img1.dreamies.de/img/82/b/fpknmqhxlox.gif`).setDescription(`Bem-vindo à minha loja! Aqui, você pode comprar itens usando seu dinheiro e suas gemas disponíveis na sua conta Aaron! :)\n\nEscolha uma categoria e digite no canal:\nCarros: \`${pp}carros\`\nObjetos: \`${pp} objetos\``).setFooter('Espero ter ajudado :D');

  await message.inlineReply(embed)
}