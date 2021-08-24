const { MessageEmbed } = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;

  try{
  const toBRL = value => Number(value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
  let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
  let dinheiro = db.get(`money_${user.id}`);
  let money = dinheiro == null ? 0 : dinheiro;
  let moneyma = db.get(`money_${message.author.id}`);
  let messagemoney = moneyma == null ? 0 : moneyma;
  
  if (user.id == message.author.id) return message.inlineReply(`❌ | Ops, ${message.author}! Você não pode transferir dinheiro para você mesmo(a)! Tente novamente mencionando um user diferente :wink:`)
  if (!args[0] || !args[1] || isNaN(args[1])) return message.inlineReply(`❌ | Ops, ${message.author}! A sintaxe correta desde comando é:\n> \`${pp}pay @USER quantidade\`\n(Lembrando que você pode colocar também apenas a ID do usuário, ao invés de mencionar) :wink:`);
  if (/-|,/gmi.test(args[1]) || (Number(args[1]) < 0)) return message.inlineReply(`❌ | Ops, ${message.author}! Parece que você inseriu um número inválido ou negativo. Por favor, verifique, obrigado :wink:`);

  let d = Number(args[1])
  let mensagem = new MessageEmbed().setTitle(`Transferência realizada com sucesso`).setColor(`#32CD32`).setDescription(`**Rementente:** ${message.author}\n**Destinatário:** ${user}\n**Quantia:** ${toBRL(Number(args[1]))}\n\nParabéns, não esqueça de transferir e usar esse dinheiro do sistema de acordo com as [minhas diretrizes](https://sites.google.com/view/aaronbotsite/termos-de-uso) :wink:`).setThumbnail(`https://cdn.pixabay.com/photo/2018/08/25/21/08/money-3630935_1280.png`);
  let confirm = new MessageEmbed().setTitle(`Confirmação`).setColor(`#FFFF00`).setDescription(`**Rementente:** ${message.author}\n**Destinatário:** ${user}\n**Quantia:** ${toBRL(Number(args[1]))}\n\nPor favor, ${message.author}, reaja à essa mensagem com ☑️ para confirmar a transação.`).setThumbnail(`http://gifmania.com.br/wp-content/uploads/2020/07/gif-interrogacao.gif`);
  let msg = await message.inlineReply(confirm);
  msg.react('☑️')

    const filter = (reaction, e) => {
	    return ['☑️'].includes(reaction.emoji.name) && e.id == message.author.id
    };

    msg.awaitReactions(filter, { max: 1, time: 100000000,       errors: ['time'] })
	    .then(collected => {
		    const reaction = collected.first()

		    if (reaction.emoji.name === '☑️') {
        db.set(`money_${user.id}`, (money + d))
        db.set(`money_${message.author.id}`, (messagemoney - d))
			  message.inlineReply(mensagem);
		    }
	    })
  }catch(error){
    message.inlineReply(`❌ | Ops, ${message.author}! Desculpe, mas não foi possível completar a transação. Verifique se a marcação e a quantidade estão corretas, bem como se usuário está no servidor, mesmo. Lembrando, a sintaxe correta é: \`${pp}pay @USER QUANTIDADE\``)
    console.log(error)
  }
}