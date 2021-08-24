const jimp = require("jimp"),
db = require("quick.db")

exports.run = async (client, message, args) => {
  const pp = db.get(`prefix_${message.guild.id}`)

  try{
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || client.users.cache.find(user => user.id == args[0]) || message.author;
    let img = jimp.read(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
 
  img.then(image => {
    image.invert()
    image.getBuffer(jimp.MIME_PNG, (err, i) => {
    message.channel.send({files: [{ attachment: i, name: "inverted-image.png"}]})
    })
    })
  }catch(error){
    console.log(error)
  }
}