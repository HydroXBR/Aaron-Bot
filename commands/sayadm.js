exports.run = async (client, message, args) => {
  let sayMessage = args.join(" ")
  let progpsyId = "755162323026706583"

  message.delete().catch(O_o => {})

  if(!message.member.permissions.has('MANAGE_MESSAGES') && message.author.id !== progpsyId) {
    message.reply("ops! Parece que você não tem permissões necessárias para utilizar esse comando...\nPermissão necessária: Gerenciar mensagens")
  } else {
  message.channel.send(sayMessage)
  }
}