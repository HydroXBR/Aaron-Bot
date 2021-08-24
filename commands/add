const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  try{
    const embed = new MessageEmbed()
      .setTitle(`Me adicione no seu servidor :)`)
      .setDescription(`Olá, ${message.author}! Muuito obrigado pela confiança ${client.emojis.cache.get("852676274815107092")}!\n\nAcesse o link abaixo para me adicionar no seu servidor:\nhttps://abre.ai/aaronbot- ${client.emojis.cache.get("853819002619297792")}`)
      .setColor("#00EEEE")
      .setThumbnail("https://i.ibb.co/JjGRPwV/Bot.png")
    message.inlineReply(embed)
  }catch(error){
    console.log(error)
  }
}
