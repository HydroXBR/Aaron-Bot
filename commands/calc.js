const { MessageEmbed } = require('discord.js'),
math = require('mathjs')

exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send('Por favor, forneça uma pergunta');

  let resp
	try {
    	resp = math.evaluate(args.join(" "))
	}catch(error){
        return console.error(error) || message.inlineReply('Por favor, forneça uma pergunta **válida**')
    }

  const embed = new MessageEmbed()
    .setColor("#00EEEE")
    .setTitle('Calculadora')
    .addField('Questão', "```css\n" + args.join(" ") + "```")
    .addField('Resposta', "```css\n" + resp + "```")

message.inlineReply(embed);
}