const { MessageEmbed } = require("discord.js"),
db = require("quick.db")

exports.run = async (client, message, args) => {
  let gemap = db.get(`gemas_${message.author.id}`);
  let gema = gemap == null ? `0` : gemap;
  let dinheiro = db.get(`money_${message.author.id}`);
  let money = dinheiro == null ? "0" : dinheiro;
  let prefixx = db.get(`prefix_${message.guild.id}`);
  let pp = prefixx == null ? `-` : prefixx;
  let gemaemoji = client.emojis.cache.get('843922568386052117');
  const toBRL = value => Number(value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

  let embed = new MessageEmbed()
    .setDescription(`${gemaemoji} **Gemas**\n\nAs gemas são uma especialidade de moedas, e equivalem a R$ 2.000,00 no dinheiro da sua conta Aaron. Com as gemas, você pode comprar alguns itens especiais para uso na sua conta, bem como dobros e triplos de daily.\n\nPara comprar gemas, basta usar o comando \`${pp}gemas comprar X\`, substituindo, obviamente, \"X\" pelo número de gemas que deseja comprar.`)
    .setThumbnail("https://i.pinimg.com/originals/01/2b/79/012b79468fab02f2321367971b6fcccb.gif")
    .setColor("#00EEEE");

  let embed1 = new MessageEmbed()
    .setTitle("Dados ausentes!")
    .setDescription(`Para comprar gemas, você deve usar a seguinte sintaxe:\n\n\`${pp}gemas comprar X\`, substituindo \"X\" pelo número de gemas que você deseja comprar.`)
    .setThumbnail("https://i.pinimg.com/originals/01/2b/79/012b79468fab02f2321367971b6fcccb.gif")
    .setColor("#00EEEE");

  if (!args[0]) return message.inlineReply(embed);
  if (args[0] && !args[1]) return message.inlineReply(embed1);
  if (args[1] % 1 !== 0) return message.inlineReply("Ops! Por favor, forneça um número inteiro para comprar gemas!")

  if (Number(args[1])) {
    let m = Number(money)
    let a = Number(args[1])
    if (m < (a*2000)) {
      message.inlineReply(`Ops, ${message.author}! Você não tem **dinheiro suficiente** para comprar essa quantidade de gemas!\n\nAtualmente, você tem \`${toBRL(money)}\`, o que é insuficiente. Você precisa de mais \`${toBRL((a*2000) - m)}\` além do seu saldo atual para poder comprar ${a} gemas.`)
    } else if ((a * 2000) <= m) {
      let newsaldo = (m - (a*2000));
      let newgemas = (Number(gema) + a);
      db.set(`gemas_${message.author.id}`, newgemas)
      db.set(`money_${message.author.id}`, newsaldo)

      message.inlineReply(new MessageEmbed().setTitle("Gemas compradas com sucesso!").setColor("#00EEEE").setDescription(`Você comprou ${a} gemas com sucesso!\nAgora, você possui \`${newgemas}\` gemas e seu saldo atual é de \`${toBRL(newsaldo)}\``))
    }
  }
}