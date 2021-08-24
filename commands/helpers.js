const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  let pp = db.get(`prefix_${message.guild.id}`) || `-`

  let embed = new MessageEmbed()
    .setTitle(`Pessoas que doaram e me ajudaram :heart:`)
    .setColor("#00EEEE")
    .setDescription(`Marco Aurélio ♥\n\nDoe e apareça aqui, use o comando \`${pp}donate\` e saiba mais sobre o que você ganha ao doar qualquer quantia :hugging:`)
    .setThumbnail("https://i.pinimg.com/originals/65/a1/34/65a134a915c1bcc0f217822df555ff70.gif")
    .setFooter("Muito obrigado ♥")

  message.inlineReply(embed)
}