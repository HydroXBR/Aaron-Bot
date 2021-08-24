const { MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {
  const chan = [
    "830894076366422033",
    "831211318081618010",
    '831545144871223346',
    '834226860966543380',
    '839265612491522048',
    '850468062393532516',
    '853816647042990100',
    '858333125536251925',
    '866347540177092628',
    '867013042432376832',
    '866226873390333995',
    '866147111228407828'
  ];

  if(message.author.id == "755162323026706583" || message.author.id == "339610920969830401"){
    const embed = new MessageEmbed()
      .setTitle("Canais para envio de notícias")
      .setColor("#00EEEE");

    for(var i = 0; i < chan.length; i++){
      const c = client.channels.cache.get(chan[i]);
      try{
        embed.addField(`:white_check_mark: \`${c.name}\` - \`${c.id}\``, `<#${chan[i]}>`, false)
      }catch(error){
        embed.addField(`:warning: O canal de ID \`${chan[i]}\` não existe`, `Erro...`, false)
      }
    }

    message.inlineReply(embed)
  } else {
    for(var i = 0; i < chan.length; i++){
      const c = client.channels.cache.get(chan[i]);
      try{
        console.log(c.name+` - `+c.id)
      }catch(error){console.log(`Canal ${chan[i]} não encontrado!`)}
    }
  }
}