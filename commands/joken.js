exports.run = async (client, message, args) => {
	let commands = [
		"cara",
		"coroa"
	]
	let emojis = [
		"😜",
		"👑"
	]

	let random = Math.floor(Math.random() * Math.floor(commands.length))
	let reply = function(str){
		return `Deu **${commands[random]} ${emojis[random]}**, você **${str}** dessa vez!`
	}

	if (
		!args[0] ||
		!commands.includes(args[0].toLowerCase())
	) return message.inlineReply(`Ops, ${message.author}! Insira **${commands[0]}** ou **${commands[commands.length - 1]}** na frente do comando.`)

	else if(
		args[0].toLowerCase() != commands[random]
	) return message.inlineReply(reply("perdeu"))

	return message.inlineReply(reply("ganhou"))
}