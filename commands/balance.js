const Discord = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {
  let prefixx = db.get(`prefix_${message.guild.id}`);
  let pp = prefixx == null ? `-` : prefixx;
  
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || client.users.cache.find(user => user.id == args[0]) || message.author;
  let dinheiro = db.get(`money_${user.id}`);
  let money = dinheiro == null ? "0" : dinheiro;
  const toBRL = value => Number(value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
  
  let embed = new Discord.MessageEmbed()
    .setTitle(user.id == message.author.id ? `Saldo da sua conta` : `Saldo de ${user.tag}`)
    .setThumbnail("https://img.freepik.com/vetores-gratis/carteira-e-desenho-animado-do-dinheiro_138676-2086.jpg?size=338&ext=jpg")
    .setColor('#00EEEE')
    .setDescription(user.id == message.author.id ? `O seu saldo, atualmente, é de:\n\n\`\`\`${toBRL(money)}\`\`\`` : `O saldo de ${user.tag}, atualmente, é de:\n\n\`\`\`${toBRL(money)}\`\`\``);

  message.inlineReply(embed)
}