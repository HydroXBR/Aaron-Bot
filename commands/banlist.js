const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
  const embed = new MessageEmbed()
    .setTitle("Usuários banidos")
    .setDescription("Lista de usuários banidos do servidor")
    .setColor("#00EEEE")

  const embed2 = new MessageEmbed()
    .setDescription("Continuação...")
    .setColor("#00EEEE")

  const embed3 = new MessageEmbed()
    .setDescription("Continuação...")
    .setColor("#00EEEE")

  const embed4 = new MessageEmbed()
    .setDescription("Continuação...")
    .setColor("#00EEEE")


  message.guild.fetchBans()
  .then(banned => {
    let list = banned.array()

    if (list.length > 25 && list.length < 100){
      for(var i = 0; i < 25; i++){
        try{
          embed.addField(`\`${list[i].user.username}#${list[i].user.discriminator}\``, `ID: \`${list[i].user.id}\``)
        }catch(error){
          ``
        }
      }
      message.channel.send(embed);

      for (var i = 26; i > 25 && i < 50; i++){
        try{
          embed2.addField(`\`${list[i].user.username}#${list[i].user.discriminator}\``, `ID: \`${list[i].user.id}\``)
        }catch(error){
          ``
        }
      }
      message.channel.send(embed2);

    for (var i = 51; i > 50 && i < 75; i++){
        try{
          embed3.addField(`\`${list[i].user.username}#${list[i].user.discriminator}\``, `ID: \`${list[i].user.id}\``)
        }catch(error){
          ``
        }
      }
      message.channel.send(embed3);

    for (var i = 76; i > 75 && i < 100; i++){
        try{
          embed4.addField(`\`${list[i].user.username}#${list[i].user.discriminator}\``, `ID: \`${list[i].user.id}\``)
        }catch(error){
          ``
        }
      }
    
      message.channel.send(embed4);

     }else if(list.length <= 25){
       for(var i = 0; i < list.length; i++){
        try{
          embed.addField(`\`${list[i].user.username}#${list[i].user.discriminator}\``, `ID: \`${list[i].user.id}\``)
        }catch(error){
          ``
        }
      }

      message.channel.send(embed);
     }else if (list.length > 50 && list.length > 100){
      for(var i = 0; i < 25; i++){
        try{
          embed.addField(`\`${list[i].user.username}#${list[i].user.discriminator}\``, `ID: \`${list[i].user.id}\``)
        }catch(error){
          ``
        }
      }
      message.channel.send(embed);

      for (var i = 26; i > 25 && i < 50; i++){
        try{
          embed2.addField(`\`${list[i].user.username}#${list[i].user.discriminator}\``, `ID: \`${list[i].user.id}\``)
        }catch(error){
          ``
        }
      }

      embed2.setFooter(`E mais ${list.length - 50} usuários.`)
      message.channel.send(embed2);
    
     }
  })
  .catch(console.error);
}