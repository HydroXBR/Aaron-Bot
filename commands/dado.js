const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  if (args[0]) {
    if (args[0] < 1) return message.inlineReply('Numero de dados inválido.');
    var dices = new Array();
    try {
      dices.length = parseInt(args[0]);
    } catch (e) {
      return message.inlineReply('Numero de dados inválido.');
    }

    if (dices.length > 5) return message.inlineReply('Você só pode jogar no máximo 5 dados por vez.');

    var dice_string = '';
    for (let i = 0; i < dices.length; i++) {
        dices[i] = Math.floor(Math.random() * 6) + 1;
        dice_string += `Dado ${i + 1}: **${dices[i]}**\n`;
    }

    return message.inlineReply(new MessageEmbed().addField('Resultado dos dados jogados', dice_string).setColor("#00EEEE"));

    } else {
      var dice = Math.floor(Math.random() * 6) + 1;
      return message.inlineReply(`<@${message.author.id}> jogou o dado e parou em **${dice}**`);
    }
}