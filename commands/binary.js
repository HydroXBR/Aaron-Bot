const { MessageEmbed } = require('discord.js'),
axios = require("axios"),
db = require("quick.db")

exports.run = async (client, message, args) => {
  let prefixx = db.get(`prefix_${message.guild.id}`);
  let pp = prefixx == null ? `-` : prefixx;
  const url = `http://some-random-api.ml/binary?text=${args}`;

  let response, data;
  try {
        response = await axios.get(url);
        data = response.data;
      } catch (e) {
        return message.inlineReply(`Ops... tente novamente usando ${pp}binary <texto>`)
      }

  const embed = new MessageEmbed()
    .setTitle('Texto traduzido para binário')
    .setDescription(data.binary)
    .setColor("#00EEEE")
    .setThumbnail("https://3.bp.blogspot.com/-R7JYNwZn6h4/W-6z8rDgEmI/AAAAAAAAApE/8BCVNAIKrQ4B1rIgDTKgnINUVygPe-lIwCLcBGAs/s320/eada9829a322f74ee79247528c30e161941e7e60_00.gif")
    .setFooter(`Para decodificar, use o comando ${pp}unbinary`)

  await message.inlineReply(embed)
}