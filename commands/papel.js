const { MessageEmbed } = require("discord.js"),
db = require("quick.db")

exports.run = async(client, message, args) => {
  let papel = require("quick.db").get(`papel_${message.author.id}`);
  let papeis = require("quick.db").get(`papeis_${message.author.id}`);
  let money = Number(require("quick.db").get(`money_${message.author.id}`));
  const toBRL = value => Number(value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;

  let embed = new MessageEmbed()
    .setTitle("Papéis de parede do perfil")
    .setColor("#DB7093")
    .setDescription(`Sabia que você pode alterar o papel de parede do comando \`${pp}perfil\`? Veja os papéis de parede disponíveis, clique no nome deles para ver o layout :) Ah, **para comprar ou usar um wallpaper**, basta digitar \`${pp}papel <NÚMERO DO PAPEL>\``)
    .addField(`:one: :necktie: Clássico | Já adquirido :unlock: - R$ 0,00`, `[Clique aqui para ver](https://i.ibb.co/CMYGCqn/1a.png)`)
    .addField(`:two: :sunrise: Céu ${/2a/gmi.test(papeis) ? `| Já adquirido :unlock:` : `:lock:`} - R$ 250`, `[Clique aqui para ver](https://i.ibb.co/vV7Gfrx/2a.png)`)
    .addField(`:three: :milky_way: Universo ${/3a/gmi.test(papeis) ? `| Já adquirido :unlock:` : `:lock:`} - R$ 400`, `[Clique aqui para ver](https://i.ibb.co/N72Kp83/3a.png)`)
    .addField(`:four: :wood: Madeira ${/4a/gmi.test(papeis) ? `| Já adquirido :unlock:` : `:lock:`} - R$ 600`, `[Clique aqui para ver](https://i.ibb.co/Stg23tz/4a.png)`)
    .addField(`:five: :green_heart: Esverdeado ${/5a/gmi.test(papeis) ? `| Já adquirido :unlock:` : `:lock:`} - R$ 700`, `[Clique aqui para ver](https://i.ibb.co/CMYGCqn/1a.png)`);

  if (!args[0]) return message.inlineReply(embed);

  if (/2|3|4|5/gmi.test(message.content)) {
    if (args[0] == "2") {
      if (!/2a/.test(papeis)) {
      if (money >= 250) {
        if(papeis == null) {
          db.set(`papeis_${message.author.id}`, `2a`)
          db.set(`papel_${message.author.id}`, `2a`)
          db.set(`money_${message.author.id}`, (money - 250))
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você comprou o papel de parede 2 (Céu) com sucesso por \`R$ 250,00\` da conta Aaron.`)
        } else {
          db.set(`papeis_${message.author.id}`, (papeis+`2a`))
          db.set(`papel_${message.author.id}`, `2a`)
          db.set(`money_${message.author.id}`, (money - 250))
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você comprou o papel de parede 2 (Céu) com sucesso por \`R$ 250,00\` da conta Aaron.`)
        }
      } else {
        message.inlineReply(`:confused: | Ops, ${message.author}! Você não tem dinheiro suficiente na conta Aaron para comprar esse papel de parede! Você precisa de \`${toBRL(250 - money)}\` a mais...`)
      }
      }else{
          db.set(`papel_${message.author.id}`, `2a`)
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você setou o papel de parede 2 (Céu) com sucesso.`)
      }
    }else if (args[0] == "3") {
      if (!/3a/.test(papeis)) {
      if (money >= 400) {
        if(papeis == null) {
          db.set(`papeis_${message.author.id}`, `3a`)
          db.set(`papel_${message.author.id}`, `3a`)
          db.set(`money_${message.author.id}`, (money - 400))
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você comprou o papel de parede 3 (universo) com sucesso por \`R$ 400,00\` da conta Aaron.`)
        } else {
          db.set(`papeis_${message.author.id}`, (papeis+`3a`))
          db.set(`papel_${message.author.id}`, `3a`)
          db.set(`money_${message.author.id}`, (money - 400))
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você comprou o papel de parede 3 (universo) com sucesso por \`R$ 400,00\` da conta Aaron.`)
        }
      } else {
        message.inlineReply(`:confused: | Ops, ${message.author}! Você não tem dinheiro suficiente na conta Aaron para comprar esse papel de parede! Você precisa de \`${toBRL(400 - money)}\` a mais...`)
      }
      }else{
          db.set(`papel_${message.author.id}`, `3a`)
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você setou o papel de parede 3 (universo) com sucesso.`)
      }
    }else if (args[0] == "4") {
      if (!/4a/.test(papeis)) {
      if (money >= 600) {
        if(papeis == null) {
          db.set(`papeis_${message.author.id}`, `4a`)
          db.set(`papel_${message.author.id}`, `4a`)
          db.set(`money_${message.author.id}`, (money - 600))
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você comprou o papel de parede 4 (madeira) com sucesso por \`R$ 600,00\` da conta Aaron.`)
        } else {
          db.set(`papeis_${message.author.id}`, (papeis+`4a`))
          db.set(`papel_${message.author.id}`, `4a`)
          db.set(`money_${message.author.id}`, (money - 600))
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você comprou o papel de parede 4 (madeira) com sucesso por \`R$ 600,00\` da conta Aaron.`)
        }
      } else {
        message.inlineReply(`:confused: | Ops, ${message.author}! Você não tem dinheiro suficiente na conta Aaron para comprar esse papel de parede! Você precisa de \`${toBRL(600 - money)}\` a mais...`)
      }
      }else{
          db.set(`papel_${message.author.id}`, `4a`)
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você setou o papel de parede 4 (madeira) com sucesso.`)
      }
    }else if (args[0] == "5") {
      if (!/5a/.test(papeis)) {
      if (money >= 700) {
        if(papeis == null) {
          db.set(`papeis_${message.author.id}`, `5a`)
          db.set(`papel_${message.author.id}`, `5a`)
          db.set(`money_${message.author.id}`, (money - 700))
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você comprou o papel de parede 5 (esverdeado) com sucesso por \`R$ 700,00\` da conta Aaron.`)
        } else {
          db.set(`papeis_${message.author.id}`, (papeis+`5a`))
          db.set(`papel_${message.author.id}`, `5a`)
          db.set(`money_${message.author.id}`, (money - 700))
          message.inlineReply(`Parabéns, ${message.author} :smile: - Você comprou o papel de parede 5 (esverdeado) com sucesso por \`R$ 700,00\` da conta Aaron.`)
        }
      } else {
        message.inlineReply(`:confused: | Ops, ${message.author}! Você não tem dinheiro suficiente na conta Aaron para comprar esse papel de parede! Você precisa de \`${toBRL(700 - money)}\` a mais...`)
      }
    } else {
      message.inlineReply(`Parabéns, ${message.author}! Você setou o papel de parede 5 - esverdeado - com sucesso! :smile:`)
    }
    }
  } else if(/1|reset/.test(message.content)) {
    if (papel != "1a"){
      message.inlineReply(`${message.author}, esse papel de parede é grátis, e ele já foi aplicado por padrão :wink:`)
    } else {
      db.set(`papel_${message.author.id}`, `1a`)
      message.inlineReply(`${message.author}, o papel de parede 1, padrão, foi aplicado com sucesso :wink:`)
    }
  } else {
    message.inlineReply(embed)
  }
}