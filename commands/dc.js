const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  try{
  let u = message.guild.members.cache.get("800510988973506601");

  let vc = u.voice.channel;
  vc.leave()
  message.inlineReply("Ok, desconectei com sucesso :)")
  }catch(error){
    console.log(`Erro no disconnect: Bot não estava conectado em nenhum canal.`)
  }
}