exports.run = async (client, message, args) => {
  let sayMessage = args.join(" ")

  message.delete().catch(O_o => {})

  if (/\sbo(s|z)ta|\sb(o|u)(s|c)(e|ê)t|\spi((n|m)to|ru)|\smerd(a|inh)|\smierd(a|inh)|\sp(@|a|á|à)(l|u)\s|\se(z|s)t(r|)up(|r)ar|id(i|e)ot|filh(a|o) d(a|á) p(u|o)t(@|a)|p(u|o|oo|ooo)t(@|a|inha)|\spu(m|n)het(a|á|à|inha)|\ssex\s|\sba(i|y)tol|\sg(a|@)y|\sc(ool|oool)/gmi.test(message.content)) {
    message.reply("ops! Parece que sua mensagem contém termos ofensivos/obscenos! Isso não é permitido no meu uso, pois é feio e desrespeitoso!\n\nPor favor, trate melhor as pessoas ao seu redor e não use mais esses termos, obrigado :smile:")
  } else {
  message.channel.send(sayMessage + `\n\n*Messagem enviada por ${message.author}*`)
  }
}