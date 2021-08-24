const { MessageEmbed } = require(`discord.js`),
db = require("quick.db")

exports.run = async (client, message, args) => {
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;
  let gemap = db.get(`gemas_${message.author.id}`);
  let gema = gemap == null ? `0` : gemap;
  let dinheiro = db.get(`money_${message.author.id}`);
  let money = dinheiro == null ? "0" : dinheiro;
  let obj = db.get(`objetos_${message.author.id}`);
  let objeto = obj == null ? `` : obj;
  const toBRL = value => Number(value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

  let carros = new MessageEmbed()
    .setTitle("Loja - Objetos")
    .setColor('#00EEEE')
    .setDescription(`Aqui, você pode comprar um objeto de sua escolha. A loja Aaron está crescendo, não temos muitos itens, mas dá pra comprar, rs.\n\nEscolha, e reaja de acordo com o item que desejar comprar.`)
    .addField(`1️⃣ <:violao:844060020291272724> - Violão Di Giorgio`, `R$ 1.000`)
    .addField(`2️⃣ :guitar: - Guitarra Fender`, `R$ 3.000`)
    .addField(`3️⃣ <:jbl:844423641960546314> - Caixinha de som - JBL`, `R$ 650,00`)
    .addField(`4️⃣ <:iphone:844424383647842365> - iPhone 12 Pro`, `R$ 9.000`)
    .addField(`5️⃣ <:galaxyA71:844425394048204842> - Samsung Galaxy A71`, `R$ 3.999`)
    .addField(`6️⃣ <:pcgamer:844426174816845831> - PC Gamer Samsung - Completo`, `R$ 14.300`)
    .addField(`7️⃣ :bike: - Bike Caloi`, `R$ 800`)
    .addField(`8️⃣ <:drone:844429166991769621> - Drone AirLink`, `R$ 1.000`)
    .addField(`HEY! ESPERA TODAS AS REAÇÕES CARREGAREM, ATÉ A ÚLTIMA!`, `(...............)`)

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
      if (money < 1000) {
        message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
      } else {
        let newsaldo = (money - 1000);
        db.set(`money_${message.author.id}`, newsaldo);
        let nc = objeto + `\n<:violao:844060020291272724> - Violão Di Giorgio`;
        db.set(`objetos_${message.author.id}`, nc);
        let embed = new MessageEmbed().setTitle("Violão Di Giorgio comprado com sucesso!").setColor('#00EEEE').setColor('#00EEEE').setDescription(`Parabéns! Agora você não precisa mais de playbacks/karaokês para cantar suas músicas :joy:...\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://pa1.narvii.com/6501/d40febfecfe7885603b0922d764339311f91c32d_hq.gif").setColor("#00FF00");
			  msg.edit(embed);
		    }
      } else if (reaction.emoji.name === ii) {
        if (money < 3000) {
          message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
        } else {
          let newsaldo = (money - 3000);
          db.set(`money_${message.author.id}`, newsaldo);
          let nc = objeto + `\n:guitar: - Guitarra Fender Stratocast`;
          db.set(`objetos_${message.author.id}`, nc);
          db.set(`money_${message.author.id}`, newsaldo)
          let embed = new MessageEmbed().setTitle("Guitarra Fender Stratocast comprada com sucesso!").setDescription(`Parabéns! Agora dá pra fazer aquele solo bacana!\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://i.gifer.com/WwaO.gif");
			    msg.edit(embed);
		      }
        } else if (reaction.emoji.name === iii) {
          if (money < 650) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 650);
            let nc = objeto + `\n<:jbl:844423641960546314> - Caixinha de som - JBL`;
            db.set(`objetos_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("Caixinha de som JBL comprada com sucesso!").setDescription(`Parabéns! Agora dá pra colocar aquele som bom enquanto varre a casa, né?\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://media2.giphy.com/media/3ohhwsU0SA7rR4w6VW/giphy.gif");
			      msg.edit(embed);
		      }
        } else if (reaction.emoji.name === iv) {
          if (money < 9000) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 9000);
            let nc = objeto + `\n<:iphone:844424383647842365> - iPhone 12 Pro`;
            db.set(`objetos_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("iPhone 12 Pro comprado com sucesso!").setColor('#00EEEE').setDescription(`Parabéns! Agora sim, um celular de qualidade!\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://i.pinimg.com/originals/a7/ab/72/a7ab72b9e682ccda79bea599ffd8d3c9.gif");
			      msg.edit(embed);
		      }
        } else if (reaction.emoji.name === v) {
          if (money < 3999) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 3999);
            let nc = objeto + `\n<:galaxyA71:844425394048204842> - Samsung Galaxy A71`;
            db.set(`objetos_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("Samsung Galaxy A71 comprado com sucesso!").setColor('#00EEEE').setDescription(`Parabéns! Agora você tem um celular top de linha, muito melhor que iPhone 12 :face_with_hand_over_mouth:\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://mspoweruser.com/wp-content/uploads/2020/04/Samsung-Galaxy-A21-rot.gif");
			      msg.edit(embed);
		      }
        } else if (reaction.emoji.name === vi) {
          if (money < 14300) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 14300);
            let nc = objeto + `\n<:pcgamer:844426174816845831> - PC Gamer Samsung - Completo`;
            db.set(`objetos_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("PC Gamer Samsung Completo comprado com sucesso!").setColor('#00EEEE').setDescription(`Parabéns! Você conseguiu comprar um objeto muito daora, cuidado com ele, é caro!\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://steamuserimages-a.akamaihd.net/ugc/929298290927197082/6CC016960C6AB57D74D3F59B941AF831D5256D89/");
			      msg.edit(embed);
		      }
        } else if (reaction.emoji.name === vii) {
          if (money < 800) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 800);
            let nc = objeto + `\n:bike: - Bike Caloi`;
            db.set(`objetos_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle(":Bike Caloi comprada com sucesso!").setDescription(`Parabéns! Agora dá pra fazer aquela pedalada e emagrecer uns quilinhos\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://i.pinimg.com/originals/25/05/16/25051662be929d78194985190aeee50a.gif");
			      msg.edit(embed);
		      }
        } else if (reaction.emoji.name === viii) {
          if (money < 1000) {
            message.reply(`ops! Você não tem dinheiro suficiente! Você tem apenas R$ ${money},00. =/`)
          } else {
            let newsaldo = (money - 1000);
            let nc = objeto + `\n<:drone:844429166991769621> - Drone AirLink`;
            db.set(`objetos_${message.author.id}`, nc);
            db.set(`money_${message.author.id}`, newsaldo)
            let embed = new MessageEmbed().setTitle("Drone AirLink comprado com sucesso!").setColor('#00EEEE').setDescription(`Parabéns! Você conseguiu comprar um ótimo drone para se divertir e fazer belas filmagens!\n\nSeu novo saldo: \`${toBRL(newsaldo)}\`.`).setThumbnail("https://media.giphy.com/media/vfZ7EwPyLnnRm/giphy.gif");
			      msg.edit(embed);
		      }
        }
	    })
}