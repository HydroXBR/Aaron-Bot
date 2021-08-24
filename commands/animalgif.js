const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  let mp1 = `Ops, ${message.author}! Você precisa da permissão **Anexar arquivos**  para executar este comando.`;
  let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");

  if (!message.member.hasPermission("ATTACH_FILES")) return message.inlineReply(embederr(mp1));

  var list = [
    "https://i.gifer.com/Ghfu.gif",
    "https://gifcontent.com/wp-content/uploads/2020/02/cabra-fazenda-gif.gif",
    "https://www.petlove.com.br/dicas/wp-content/uploads/2017/06/filhotes-fofos-11.gif",
    'https://catracalivre.com.br/wp-content/uploads/2015/12/gifs-gatinhos-08.gif',
    'https://mensagenseatividades.com/wp-content/uploads/2017/05/gifs-com-gatos.gif',
    "http://blogdetec.blogfolha.uol.com.br/files/2014/03/animais-pugs.gif",
    "https://www.petlove.com.br/dicas/wp-content/uploads/2017/06/filhotes-fofos-3.gif",
    "https://mensagenseatividades.com/wp-content/uploads/2017/05/gifs-com-animais-divertidos.gif",
    "https://catracalivre.com.br/wp-content/thumbnails/fIAGYMXO5mEKpzaQDTAegtrqWP0=/wp-content/uploads/2015/12/gifs-gatinhos-09.gif",
    "https://catracalivre.com.  br/wp-content/uploads/2015/12/gifs-gatinhos-04.gif",
    "https://www.petlove.com.br/dicas/wp-content/uploads/2017/06/filhotes-fofos-5.gif",
    "https://catracalivre.com.br/wp-content/thumbnails/RKUjs2tlq2_3AJJ6U9jKIX9Hios=/wp-content/uploads/2015/12/gifs-gatinhos-10.gif",
    "https://catracalivre.com.br/wp-content/thumbnails/DcG6bM3g-jNXXuFZH3kOlBGHF0s=/wp-content/uploads/2015/12/gifs-gatinhos-11.gif",
    "https://cdn.dicionariopopular.com/imagens/numero-sete.gif",
    "https://i.makeagif.com/media/10-15-2015/FD96ut.gif"
    ]

  var rand = list[Math.floor(Math.random() * list.length)]

  const embed = new MessageEmbed()
    .setTitle('Gifs de animais ♥')
    .setColor('#00EEEE')
    .setDescription(`É um gif fofo (ou engraçado) de animais que você quer? Temos!`)
    .setImage(rand)
    .setTimestamp()
    .setFooter('Rsrsrs')
  await message.inlineReply(embed);
}