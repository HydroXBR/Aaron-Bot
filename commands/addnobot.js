const { MessageEmbed } = require('discord.js'),
db = require("quick.db")

exports.run = async (client, message, args) => {
  let xp = db.get(`xp_${message.author.id}`) || 0;
  let cmds = db.get(`cmds`) || 0;
  db.set(`xp_${message.author.id}`, xp + 1);
  db.set(`cmds`, cmds + 1)

  let embed = new Discord.MessageEmbed()
    .setTitle("Adiciona no bot")
    .setDescription(`Acessa o conteúdo para adicionar ao AlphkaBot nesse link:\n${args.join(" ")}`)
    .setThumbnail("https://i.ibb.co/V3wWtsG/b4f026ccf490a5b55cafbca28a574528.png")
    .setColor("#00EEEE")
    .setFooter(`Solicitado por ${message.author.tag}`)

  if (!message.content.includes("http")) {
    embed.setDescription(`Conteúdo postado pelo usuário:\n\`${args.join(" ")}\``)
  } 

  try{
    let msg = await message.channel.send("<@339610920969830401>", embed)
    message.delete()
    msg.pin()
    }catch(err){
      console.error("Error:", err)
    }
}