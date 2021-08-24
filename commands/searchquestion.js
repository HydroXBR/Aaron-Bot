const Discord = require('discord.js')
const fetch = require("node-fetch")
const replaceAll = require("string.prototype.replaceall")
const config = require("../config.json")

exports.run = async (client, message, args) => {
	if(
		!args.length ||
		args.length > 2
	) return message.channel.send(`A síntaxe correta para este comando é \`${config.prefix}searchquestion <query> <quantity:optional>\``)

	let number
	if(args[1]) number = Number(args[1])
	if(isNaN(number) || !isFinite(number) || number == undefined) args[1] = 10
	else if(args[1] > 100) args[1] = 100

	fetch("https://brainly.com.br/graphql/pt", {
		"headers": {
			"accept": "application/json",
			"content-type": "application/json",
			"x-b-token-long": process.env.fakeToken
		},
		"body": `{"operationName":"SearchQuery","variables":{"query":"${replaceAll(args[0], "\n", "\\n")}","after":null,"first":${args[1]}},"query":"query SearchQuery($query: String!, $first: Int!, $after: ID) {\\n  questionSearch(query: $query, first: $first, after: $after) {\\n    count\\n    edges {\\n      node {\\n        id\\n        databaseId\\n        author {\\n          id\\n          databaseId\\n          isDeleted\\n          nick\\n          avatar {\\n            thumbnailUrl\\n            __typename\\n          }\\n          rank {\\n            name\\n            __typename\\n          }\\n          __typename\\n        }\\n        content\\n        answers {\\n          nodes {\\n            thanksCount\\n            ratesCount\\n            rating\\n            __typename\\n          }\\n          hasVerified\\n          __typename\\n        }\\n        __typename\\n      }\\n      highlight {\\n        contentFragments\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}`,
		"method": "POST"
	}).then(response => {
		if(!response.headers.get("content-type").includes("application/json")){
			response.text().then(console.log).catch(console.error)
			return message.channel.send("The response is not type of JSON")
		}

		response.json().then(json => {
			try{
				let questionSearch = json.data.questionSearch,
				edges = questionSearch.edges,
				count = questionSearch.count
				if(!count) return message.reply("esta pesquisa não contém resultados.")

				let string = ""
				message.channel.send(string || "Ocorreu um erro inesperado.") // If the string variable is empty or undefined
			}catch(error){
				error.stack ? message.channel.send(error.stack) : console.error(error)
			}
		}).catch(console.error)
	}).catch(error => message.channel.send(error))
}