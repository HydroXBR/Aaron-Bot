exports.run = async (client, message, args) => {
	try{
		if(!args || !args.length) throw("A mensagem nรฃo contรฉm argumentos")
		let data = {
			userText: args.join(" "),
			alphaLength: 2
		}
		let randomNumber = Math.floor(Math.random() * Math.floor(data.alphaLength))

		let latinAlpha = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z"
		let customAlpha = new String
		if(randomNumber == 1) customAlpha = "๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐"
		else customAlpha = "๐ฌ๐ญ๐ฎ๐ฏ๐ฐ๐ฑ๐ฒ๐ณ๐ด๐ต๐ถ๐ท๐ธ๐น๐บ๐ป๐ผ๐ฝ๐พ๐ฟ๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐"

		for(let i = 0; i < latinAlpha.length;){
			let regex = new RegExp(latinAlpha[i], "gm")
			data.userText = data.userText.replace(
				regex,
				customAlpha.substring(i, i + 2)
			)
			i += 2
		}


		message.inlineReply(data.userText)
	}catch(err){
		let text = `Erro:`
		console.error(text, err)
		message.inlineReply(`${text} ${err}`)
	}
}