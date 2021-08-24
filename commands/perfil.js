const { MessageEmbed } = require('discord.js'),
jimp = require("jimp"),
db = require("quick.db")

exports.run = async (client, message, args) => {
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;
  const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || client.users.cache.find(user => user.id == args[0]) || message.author;

  let papel;
  switch(db.get(`papel_${user.id}`)){
    case null:
    papel = "https://i.ibb.co/CMYGCqn/1a.png"
    break
    case "1a":
    papel = "https://i.ibb.co/CMYGCqn/1a.png"
    break
    case "2a":
    papel = "https://i.ibb.co/vV7Gfrx/2a.png"
    break
    case "3a":
    papel = "https://i.ibb.co/N72Kp83/3a.png"
    break
    case "4a":
    papel = "https://i.ibb.co/Stg23tz/4a.png"
    break
    case "5a":
    papel = "https://i.ibb.co/bWzS4R5/5a.png"
    break
  }

  let a;
  switch(db.get(`papel_${user.id}`)){
    case null:
    a = "Padrão"
    break
    case "2a":
    a = "Céu"
    break
    case "3a":
    a = "Universo"
    break
    case "4a":
    a = "Amadeirado"
    break
    case "5a":
    a = "Paisagem"
    break
  }

  try{
  let img = jimp.read(papel)
  let dinheiro = db.get(`money_${user.id}`);
  let money = dinheiro == null ? "0" : dinheiro;
  let profissão = db.get(`work_${message.guild.id}_${user.id}`);
  let work = profissão == null ? "Nenhuma" : profissão;
  let especialidadep = db.get(`especialidade_${message.guild.id}_${user.id}`);
  let especialidade = especialidadep == null ? "Nenhuma" : especialidadep;
  let gemap = db.get(`gemas_${user.id}`);
  let gema = gemap == null ? `0` : gemap;
  let emojiwork = db.get(`emojiwork_${message.guild.id}_${user.id}`);
  let ew = emojiwork == null ? `` : emojiwork;
  let car = db.get(`carros_${user.id}`);
  let carro = car == null ? `` : car;
  let obj = db.get(`objetos_${user.id}`);
  let objeto = obj == null ? `` : obj;

  let addZero = num => num < 10 ? "0" + num : num
  let d = new Date(user.createdAt)
  let datetime = addZero(d.getDate()) + "/" + addZero((d.getMonth()+1))  + "/" + d.getFullYear()
  const toBRL = value => Number(value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
  let emoji = e => client.emojis.cache.get(e);

  let embed = new MessageEmbed()
    .setTitle(`Perfil de ${user.tag}`)
    .setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setColor('#00EEEE')
    .setDescription(`${emoji("844048667299020850")} **Dinheiro:** ${toBRL(money)}\n${emoji("843922568386052117")} **Gemas:** ${gema} gemas\n${emoji("844049802165878794")} **Profissão:** ${ew} ${work}\n:bulb: **Especialidade:** ${especialidade}\n:park: **Papel de parede:** ${a} (para alterar, use \`${pp}papel\`)\n\n**Itens:**${carro}\n${objeto}\n------------`).setFooter(`Para deixar seu perfil mais bonito e moderno, compre coisas usando o comando ${pp}loja e pegue seu saldo diário usando ${pp}daily, altere também a especialidade e profissão no servidor usando ${pp}especialidade e ${pp}profissao, respectivamente :)`);
 
  img.then(image => {
    jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
    image.print(font, 30, 57, user.tag, 400)
    image.print(font, 153, 190, `${toBRL(money)}`, 400)
    image.print(font, 35, 342, datetime, 4000)
    image.print(font, 310, 342, work, 4000)
    image.print(font, 35, 485, especialidade, 4000)
    image.print(font, 444, 485, gema, 4000)
    image.getBuffer(jimp.MIME_PNG, (err, i) => {
    message.inlineReply(embed)
    message.channel.send({files: [{ attachment: i, name: "perfil.png"}]})
    })
    })
  })
  }catch(error){
    console.log(error)
  }
}