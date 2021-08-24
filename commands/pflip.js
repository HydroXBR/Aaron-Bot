exports.run = async (client, message, args) => {
	let commands = [
		{
			name: "pedra",
			emoji: "🪨",
			id: 1
		},
		{
			name: "papel",
			emoji: "📜",
			id: 2
		},
		{
			name: "tesoura",
			emoji: "✂️",
			id: 3
		}
	]
	let data = {
		length: commands.length,
		random(){
			return Math.floor(Math.random() * this.length)
		},
		reply(){
			let localRandom = this.random()
			let currentObject = commands[localRandom]
			let result
			let userId

			for(let i = 0; i < commands.length; i++) if(commands[i].name == args[0]) userId = commands[i].id

			if(currentObject.id == 1 && userId == 2) result = "ganhou"
			if(currentObject.id == 1 && userId == 3) result = "perdeu"
			if(currentObject.id == 2 && userId == 1) result = "perdeu"
			if(currentObject.id == 2 && userId == 3) result = "ganhou"
			if(currentObject.id == 3 && userId == 1) result = "ganhou"
			if(currentObject.id == 3 && userId == 2) result = "perdeu"
			if(currentObject.id == userId) return `Deu **${currentObject.name} ${currentObject.emoji}**, houve um empate! Que tal uma revanche? :grin:`

			return `Deu **${currentObject.name} ${currentObject.emoji}**, você **${result}** dessa vez!`
		}
	}

	let allCommands = new Array
	let replyNoCommand = new String
	for(let i = 0; i < commands.length; i++){
		let current = commands[i].name
		allCommands.push(current)

		if(i + 1 == commands.length){
			replyNoCommand += `ou **${current}**`
			break
		}
		replyNoCommand += `**${current}**, `
	}

	if(!args[0] || !allCommands.includes(args[0])) return message.inlineReply(`Ops! Por favor, insira ${replyNoCommand} na frente do comando.`)
	message.inlineReply(data.reply())
}