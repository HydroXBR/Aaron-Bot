exports.run = async (client, message, args) => {
  
  
  const avatar = {avatar: "https://static1.purepeople.com.br/articles/6/31/56/06/@/3564156-aos-18-anos-jean-paulo-campos-o-cirilo-624x600-1.jpg"}
  const name = ("Cirilão 😎")

  var list = [
    'Hm... não sei... mas parece que sim!',
    'Não quero falar sobre isso.',
    'NUNCA, NUNCA MESMO!',
    'Acho que não!',
    'Claro que não! :angry:',
    'Claro que sim!!!',
    'Meus técnicos disseram que... sim',
    'Me pergunte sobre isso mais tarde.',
    'Que feio, menin@! Claro que não! :angry:',
    'Não acredito. Claro que sim!',
    'Olha... eu não queria responder, mas... sim.',
    'CLARO, hehe :smirk:'
  ]

  var rand = list[Math.floor(Math.random() * list.length)];

  var rr = [
    'Man@, você sabe fazer uma pergunta???',
    'Isso é uma afirmação? Ou uma pergunta, mesmo?',
    'Isso não é uma pergunta, pelo menos, eu acho!',
    'Você sabe fazer perguntas?'
  ]

  var como = [
    'Só vai na fé :sunglasses:',
    'E se eu te falar que não faço a mínima ideia do que te responder?',
    'Será que dá certo? Talvez sim, e talvez não. Tenta, man. (CONFIA)',
    `CONFIA. ${client.emojis.cache.get("855510407188054036")}`
  ]

  var qual = [
    'Desculpa, mas só respondo perguntas objetivas, tipo, sim ou não.',
    'E se eu te falar que não faço a mínima ideia do que te responder?',
    'Chuta você! :sunglasses:'
  ]

  var c = como[Math.floor(Math.random() * como.length)];
  var q = qual[Math.floor(Math.random() * qual.length)];
  var p = rr[Math.floor(Math.random() * rr.length)];
 
  if(!args[0]){
    message.inlineReply("Ops! Parece que **você não perguntou nada...**\n❌ | Tente novamente :)")
  }else if(!args[1] || !/\?/.test(message.content)){
      message.channel.createWebhook(name, avatar).then(w => { 
        w.send(p).then((
      ) => w.delete())}).catch(error => message.inlineReply(p))
  }else if(/como/.test(message.content)){
      message.channel.createWebhook(name, avatar).then(w => { 
        w.send(c).then((
      ) => w.delete())}).catch(error => message.inlineReply(c))
  }else if(/qua(is|l)|quem|p(or\sque|q|orque)/.test(message.content)){
      message.channel.createWebhook(name, avatar).then(w => { 
        w.send(q).then((
      ) => w.delete())}).catch(error => message.inlineReply(q))
  }else{
      message.channel.createWebhook(name, avatar).then(w => { 
        w.send(rand).then((
      ) => w.delete())}).catch(error => message.inlineReply(rand))
  }
}
