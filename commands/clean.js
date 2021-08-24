const db = require("quick.db")

exports.run = async (client, message, args) => {
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;
  let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");
  let mp1 = `Ops, ${message.author}! Parece que você não tem permissões necessárias para utilizar esse comando...\n👮 | **Permissão necessária:** *Gerenciar mensagens*`;
  let mp2 = `Ops, ${message.author}! Parece que **eu** não tenho permissões necessárias para executar esse comando...\n👮 | **Permissão necessária:** *Gerenciar mensagens*`;
  if(!message.member.hasPermission('MANAGE_MESSAGES') && message.author.id !== "755162323026706583") return message.inlineReply(embederr(mp1));
  if(!message.guild.me.hasPermission('MANAGE_MESSAGES') && message.author.id !== "755162323026706583") return message.inlineReply(embederr(mp2));


	if(args[0] == "easterEgg" && message.author.id == "755162323026706583"){
		for(let i = 0; i < Number(args[1]); i++) {
      message.inlineReply(i + 1)
    }
	} else {

	let deleteCount = Number(args[0]),
	timeSleep = ms => new Promise(resolve => setTimeout(resolve, ms))

	if(args.length > 1) return message.inlineReply(`Ops, ${message.author}! A sintaxe correta é: \`${pp}clean <número de mensagens>\``)
	if(!deleteCount || isNaN(deleteCount) || !isFinite(deleteCount)) return message.inlineReply("Ops! Por favor, forneça um número válido.")
	if(deleteCount % 1 !== 0) return mmessage.inlineReply("Ops! Por favor, forneça um número **inteiro**.")
	if(deleteCount < 2) return message.inlineReply("Ops! Por favor, forneça um número maior que 2.")

	message.delete()

  try{
	let isFirstTime = true,
	maxFetch = 100
	while(deleteCount > 0){
		if(!isFirstTime) await timeSleep(1e3)
		isFirstTime = false

		let numberToDelete = deleteCount > maxFetch ? maxFetch : deleteCount;
		const fetched = await message.channel.messages.fetch({limit: numberToDelete})
		
		await message.channel.bulkDelete(fetched).then(() => console.log(`Deleted: ${numberToDelete} messages`))
		deleteCount -= maxFetch
	}
  }catch(error){message.inlineReply(`Ops, ${message.author}! Desculpe, mas não consegui apagar as mensagens que você pediu :confused:... Verifique as permissões, por favor. Obrigado :wink:`)}

  try{
	let mss = await message.channel.send(`${args[0]} mensagens foram deletadas por: ${message.author}`);
  mss.delete({timeout: 20000})
  }catch(error){console.log(`Erro no clean - mensagem apagada anteriormente`)}
  }
}