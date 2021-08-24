const { MessageEmbed } = require('discord.js')
const num_conv = require('number-to-words');
const db = require("quick.db")

exports.run = async (client, message, args) => {
  let prefixx = db.get(`prefix_${message.guild.id}`);
  let pp = prefixx == null ? `-` : prefixx;
  let output = args.join(' ');
  if (!output) return message.inlineReply(new MessageEmbed().setTitle('Uso incorreto do comando.').setDescription(`Use este comando assim:\n\n\`${pp}bigtxt TEXTO\``).setColor(`#00EEEE`));

  let bigtext_arr = new Array();
    for (let i = 0; i < output.length; i++) {
      let isnumber = await parseInt(output[i]);
      if (isnumber >= 0 && isnumber <= 9) {
        bigtext_arr.push(`:${num_conv.toWords(output[i])}:`)
      } else {
        if (output[i] !== ' ') {
          if (!output[i].match(/^[a-zA-Z]+$/)) {
          bigtext_arr.push(`:question:`)
          } else {
          bigtext_arr.push(`:regional_indicator_${output[i].toLowerCase()}:`)
          }
        } else {
          bigtext_arr.push('   ');
        } 
      }
    }

    try {
        await message.inlineReply(bigtext_arr.join(''));
        return;
    } catch (e) {
        return message.inlineReply(new MessageEmbed().setTitle('Ocorreu um erro ao enviar a mensagem.').setColor(`#FF0000`).setFooter(message.author.tag, message.author.avatarURL));
    }
}