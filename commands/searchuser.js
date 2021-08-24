const { MessageEmbed } = require('discord.js'),
fetch = require("node-fetch"),
jsdom = require("jsdom"),
replaceAll = require("string.prototype.replaceall"),
fs = require("fs")

exports.run = async (client, message, args) => {
  const pp = require("quick.db").get(`prefix_${message.guild.id}`) || `-`;
 
	let nonAuthorizedChars = [
		"/",
		":",
		"\\",
		"-",
		".",
		"\"",
		"'"
	]

	try{
		if(
			!args.length ||
			args.length > 1
		){
			throw [`O usuário utilizou a sintaxe incorreta.\n\tComando: searchuser\n\tMensagem: ${args.join(" ") || `"Mensagem vazia"`}`, `a sintaxe correta para este comando é \`${pp}searchuser <nickname>\``]
		}

		nonAuthorizedChars.forEach(char => {
			if(args[0].includes(char)) throw [`O usuário utilizou a sintaxe incorreta.\n\tComando: searchuser\n\tMensagem: ${args.join(" ") || `"Mensagem vazia"`}`, "a sua mensagem contém caracteres especiais."]
		})

		const origin = "https://brainly.com.br"

		fetch(`${origin}/users/search/${args[0]}?client=moderator-extension`, {
			"headers": {
				"sec-fetch-site": "same-origin",
				"x-b-token-long": process.env.fakeToken
			},
			"method": "GET"
		}).then(response => response.text().then(text => {
			let htmlResponse = new jsdom.JSDOM(replaceAll(text, "\n", "").substr(15).trim()), // To remove the DocType tag
			table = htmlResponse.window.document.querySelector("div#content-old")

			let users = table.children[0].children[1].querySelectorAll("div.user-data")
			users.forEach(current => {
				let nick = current.querySelector(".user-nick > a.nick").innerHTML,
				image = current.querySelector(":scope > a > img[src]").getAttribute("src"),
				src = image.includes(".") ? (image.includes("http") ? image : origin + image) : origin + "/img/avatars/100-ON.png", 
				ranks = new Array,
				ranksSpan = current.querySelectorAll(".user-nick > span[style]"),
				ranksA = current.querySelectorAll(".user-nick > br ~ a[style]")

				if(ranksSpan && ranksSpan.length) ranksSpan.forEach(currentSpan => ranks.push(currentSpan.innerHTML))
				if(ranksA && ranksA.length) ranksA.forEach(currentLink => ranks.push(currentLink.innerHTML))

				const embed = new MessageEmbed()
					.setTitle(nick)
					.setURL(origin + current.querySelector(":scope > a[href]").href)
					.setAuthor("Brainly", "https://styleguide.brainly.com.br/images/favicons/brainly/favicon-hd-0865c7f19f.png", origin)
					.setColor("#66CDAA")
					.setDescription(ranks.length ? "**Ranks:**\n" + ranks.join("\n") : "Este usuário provavelmente não possui ranks/tags ou optou por não exibí-los no perfil.")
					.setThumbnail(src, {dynamic: true, format: "png/gif/jpg", size: 200})
					.setTimestamp()
					.setFooter(`Busca pelo nick "${args[0]}"`, "https://media4.giphy.com/media/J5G9LaVDOHjPXWiPpM/giphy.gif?cid=6c09b95247yickexv8ym9oysyot1a0kh5fxn9hyuv1emnavs&rid=giphy.gif&ct=s")

				message.inlineReply(embed)
			})
		})).catch(console.error)
	}catch(error){
		if(error instanceof Array && error.length === 2){
			return console.error(error[0]) || error[1].length && message.inlineReply(`An error ocurred. Please contact the bot's admins.`)
		}
		console.error(error)
	}
}