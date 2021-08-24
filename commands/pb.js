const jimp = require("jimp"),
ms = require("ms"),
db = require("quick.db"),
cooldowns = {}

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ATTACH_FILES")) return message.inlineReply("Ops! Você precisa da permissão de **anexar arquivos** para utilizar este comando!");
  
  let prefixx = db.get(`prefix_${message.guild.id}`) || `-`;
  
  try{
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || client.users.cache.find(user => user.id == args[0]) || message.author;
    let img = jimp.read(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
 
  img.then(image => {
    image.greyscale()
    image.getBuffer(jimp.MIME_PNG, (err, i) => {
    message.channel.send({files: [{ attachment: i, name: "pb-image.png"}]})
    })
    })
  }catch(error){
    console.log(error)
  }
}