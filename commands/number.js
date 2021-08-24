exports.run = async (client, message, args) => {
	let commands = [
		"1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
	]

	let random = Math.floor(Math.random() * commands.length)
	let reply = function(str){
		return `Pensei no número **${commands[random]}**, você **${str}** dessa vez!`
	}

	if (
		!args[0] ||
		!commands.includes(args[0].toLowerCase())
	) return message.reply(`Pense em um número de **${commands[0]}** até **${commands[commands.length - 1]}**, e insira-o na frente do comando.`)

	else if(
		args[0].toLowerCase() != commands[random]
	) return message.inlineReply(reply("perdeu"))

	return message.inlineReply(reply("ganhou"))
}