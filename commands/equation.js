const { MessageEmbed } = require('discord.js'),
replace = require("string.prototype.replaceall")

exports.run = async (client, message, args) => {
  try{
  if (/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gmi.test(args.join(" "))) return  message.inlineReply(`Ops, ${message.author}! A sintaxe correta é \`${pp}equation A B C\`, substituindo as letras pelos coeficientes da equação, e não inserindo nenhuma incógnita, como \"x\". :wink:`);

  let a = Number(args[0]), b = Number(args[1]), c = Number(args[2]);
  console.log(`${a} ${b} ${c}`);

  let delta = Number((b**2)-(4*a*c));
  console.log(delta);

  if (delta < 0) return (message.inlineReply(new MessageEmbed().setTitle(`Resultado da Equação`).setDescription(`A equação não possui raízes reais, pois o valor do discriminante é menor que zero (${delta}).`).setColor('#00FF00')));

  let x1 = (((-b)+(delta**0.5))/(2*a));
  console.log(x1);
  let x2 = (((-b)-(delta**0.5))/(2*a));
  console.log(x2);

  message.inlineReply(new MessageEmbed().setTitle("Resultado da equação").setDescription(`Aee! Aqui o resultado da equação \`${a}x² ${b < 0 ? `- ${b.toString().replace("-", "")}` : `+ ${b}`}x ${c < 0 ? `- ${c.toString().replace("-", "")}` : `+ ${c}`} = 0\`...\n\nx':\n\`\`\`${x1}\`\`\`\n\nx'':\n\`\`\`${x2}\`\`\``).setColor("#00EEEE"));
  }catch(error){
    message.inlineReply("Ops, desculpe, mas houve um erro ao calcular :confused:")
    console.log(error)
    }
}






