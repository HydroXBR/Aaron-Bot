const { MessageEmbed } = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {
  const prefixx = db.get(`prefix_${message.guild.id}`);
  const pp = prefixx == null ? `-` : prefixx;
  let gemap = db.get(`gemas_${message.author.id}`);
  let gema = gemap == null ? `0` : gemap;
  let dinheiro = db.get(`money_${message.author.id}`);
  let money = dinheiro == null ? "0" : dinheiro;
  let car = db.get(`carros_${message.author.id}`);
  let carro = car == null ? `` : car;
  const toBRL = value => Number(value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

  let carros = new MessageEmbed()
    .setTitle("Loja - Carros")
    .setColor("#00EEEE")
    .setDescription(`Aqui, você pode comprar um carrinho... Sabe né, ficar andando a pé, ônibus ou pegando muito Uber/99 não dá muito certo...\n\nEscolha, e reaja de acordo com o item que desejar comprar.`)
    .addField(`1️⃣ <:kombi:843972602179616770> - Kombi Volkswagen - Branca`, `R$ 4.500`)
    .addField(`2️⃣ <:fusca:843971646359994399> - Fusca Volkswagen - Azul claro`, `R$ 5.000`)
    .addField(`3️⃣ <:siena:843971016040120370> - Carro Fiat Siena Vermelho`, `R$ 10.000`)
    .addField(`4️⃣ <:sedan:843969401291145257> - Chevrolet Sedan - Vermelho`, `R$ 15.000`)
    .addField(`5️⃣ <:4x4:843970480317792276> - Caminhonete Hilux 4x4 - Branca`, `R$ 20.000`)
    .addField(`6️⃣ <:landrover:843975759735554078> - Ranger Rover - Preta`, `R$ 35.000`)
    .addField(`7️⃣ <:ferrari:843976271709077564> - Ferrari - Vermelha`, `R$ 100.000`)
    .addField(`8️⃣ <:lamborghini:843976651040882698> - Lamborghini Aventador - Branca`, `R$ 101.000`)

  let i = "1️⃣", ii = "2️⃣", iii = "3️⃣", iv = "4️⃣", v = "5️⃣", vi = "6️⃣", vii = "7️⃣", viii = "8️⃣"

  let msg = await message.inlineReply(carros)
  msg.react(i)
  msg.react(ii)
  msg.react(iii)
  msg.react(iv)
  msg.react(v)
  msg.react(vi)
  msg.react(vii)
  msg.react(viii)
  
  const filter = (reaction, user) => {
	  return [i, ii, iii, iv, v, vi, vii, viii].includes(reaction.emoji.name) && user.id == message.author.id
    }; msg.awaitReactions(filter, { max: 1, time: 100000000, errors: ['time'] })
	  .then(collected => {
		  const reaction = collected.first();
		  if (reaction.emoji.name === i) {
      if (money < 4500) {
        message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
      } else {
        let newsaldo = (money - 4500);
        db.set(`money_${message.author.id}`, newsaldo);
        let nc = carro + `\n<:kombi:843972602179616770> - Kombi Volksvagen - Branca`;
        db.set(`carros_${message.author.id}`, nc);
        let embed = new MessageEmbed().setTitle("Kombi Volkswagen Branca comprada com sucesso!").setColor("#00EEEE").setDescription(`Parabéns! Agora a Uber ganhou um cliente a menos, você tem uma kombi básica pra quebrar aquele galho :joy:...\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://www.instacarro.com/uploads/veiculos/fotos-modelos/volkswagen-kombi.png").setColor("#00FF00");
			  msg.edit(embed);
		    }
      } else if (reaction.emoji.name === ii) {
        if (money < 5000) {
          message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
        } else {
          let newsaldo = (money - 5000);
          db.set(`money_${message.author.id}`, newsaldo);
          let nc = carro + `\n<:fusca:843971646359994399> - Fusca Volkswagen - Azul claro`;
          db.set(`carros_${message.author.id}`, nc);
          db.set(`money_${message.author.id}`, newsaldo)
          let embed = new MessageEmbed().setTitle("Fusca Wolksvagen Azul Claro comprado com sucesso!").setColor("#00EEEE").setDescription(`Parabéns! Agora a Uber ganhou um cliente a menos, você tem um fusquinha básico pra quebrar aquele galho, já que parece que sua kombi deu pau :joy:...\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://www.instacarro.com/uploads/veiculos/fotos-modelos/volkswagen-fusca.png");
			    msg.edit(embed);
		      }
        } else if (reaction.emoji.name === iii) {
          if (money < 10000) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 10000);
            let nc = carro + `\n<:siena:843971016040120370> - Fiat Siena Vermelho`;
            db.set(`carros_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("Carro Fiat Siena Vermelho comprado com sucesso!").setColor("#00EEEE").setDescription(`Parabéns! Você, ao que parece, trabalhou bem e conseguiu uma grana pra comprar um carrinho!\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://seminovoscarros.com.br/wp-content/uploads/2016/09/Fiat-Siena.png");
			      msg.edit(embed);
		      }
        } else if (reaction.emoji.name === iv) {
          if (money < 15000) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 15000);
            let nc = carro + `\n<:sedan:843969401291145257> - Chevrolet Sedan - Vermelho`;
            db.set(`carros_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("Carro Chevrolet Sedan Vermelho comprado com sucesso!").setColor("#00EEEE").setDescription(`Parabéns! Você, ao que parece, trabalhou bem e conseguiu uma grana pra comprar um carro bom!\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`);
			      msg.edit(embed);
		      }
        } else if (reaction.emoji.name === v) {
          if (money < 20000) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 20000);
            let nc = carro + `\n<:4x4:843970480317792276> - Caminhonete Hilux 4x4 - Branca`;
            db.set(`carros_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("Caminhonete Hilux 4x4 comprada com sucesso!").setColor("#00EEEE").setDescription(`Parabéns! Você, ao que parece, trabalhou bem e conseguiu uma grana pra comprar uma caminhonete daora!\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`);
			      msg.edit(embed);
		      }
        } else if (reaction.emoji.name === vi) {
          if (money < 35000) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 35000);
            let nc = carro + `\n<:landrover:843975759735554078> - Ranger Rover - Preta`;
            db.set(`carros_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("Ranger Rover Preta comprada com sucesso!").setColor("#00EEEE").setDescription(`Parabéns! Você conseguiu comprar um carro muito daora, cuidado com ele, é caro!\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`);
			      msg.edit(embed);
		      }
        } else if (reaction.emoji.name === vii) {
          if (money < 100000) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 100000);
            let nc = carro + `\n<:ferrari:843976271709077564> - Ferrari - Vermelha`;
            db.set(`carros_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("Ferrari Vermelha comprada com sucesso!").setColor("#00EEEE").setDescription(`Parabéns! Você conseguiu comprar um carro muito, mas muito daora, cuidado com ele, é muito caro!\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`);
			      msg.edit(embed);
		      }
        } else if (reaction.emoji.name === viii) {
          if (money < 101000) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 101000);
            let nc = carro + `\n<:lamborghini:843976651040882698> - Lamborghini Aventador - Branca`;
            db.set(`carros_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("Lamborghini Aventador Branca comprada com sucesso!").setColor("#00EEEE").setDescription(`Parabéns! Você conseguiu comprar o carro mais caro da loja do Aaron!\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`);
			      msg.edit(embed);
		      }
        }
	    })
}