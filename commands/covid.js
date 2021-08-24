const { MessageEmbed } = require("discord.js"),
fetch = require("node-fetch"),
db = require("quick.db")


String.prototype.replaceAll = function(find, replace){
	return this.split(find).join(replace)
}

exports.run = async (client, message, args) => {
  let pp = db.get(`prefix_${message.guild.id}`) || `-`;
  
	if(!args[0]){
		let embed = new MessageEmbed()
			.setTitle('Dados ausentes')
			.setColor("#00EEEE")
			.setDescription(`Você não especificou nada. Especifique um país ou o mundo: (Ex: ${pp}covid all, ${pp}covid brazil`)
			.setTimestamp()

		return message.inlineReply(embed)
	}

	let countryName = args[0],
	countriesNames = message.content.split(" ").slice(1).join(" "),
	apiUrl = "https://covid19.mathdro.id/api/countries/",
	isEqual = (regexp, isEntireMessage) => {
		if(!isEntireMessage) return new RegExp(regexp, "i").test(countryName)
		return new RegExp(regexp, "i").test(countriesNames)
	},
	handleResponse = async (response, title) => {
		if(!response.headers.get("content-type").includes("application/json") || !response.ok) return message.inlineReply("❌ | Algo deu errado. Desculpe o inconveniente, tente novamente :wink:")

		const json = await response.json(),
		confirmed = json.confirmed.value.toLocaleString(),
		recovered = json.recovered.value.toLocaleString(),
		deaths = json.deaths.value.toLocaleString(),
		embed = new MessageEmbed()
			.setTitle(`Status da COVID-19 ${title}`)
      .setColor("#00EEEE")
			.addField("Casos confirmados", confirmed)
			.addField("Recuperados", recovered)
			.addField("Mortes", deaths)

		await message.inlineReply(embed)
	}

	if(isEqual("all")) fetch(apiUrl.split("/").splice(0, 4).join("/")).then(e => handleResponse(e, "no mundo :earth_americas:"))
	else if(isEqual("bras[iy][lu]")) fetch(apiUrl + "brazil").then(e => handleResponse(e, "no **Brasil**"))
	else if(isEqual("fran[cç][ea]")) fetch(apiUrl + "france").then(e => handleResponse(e, "na **França**"))
	else if(isEqual("espa[nñ]h?a|spain")) fetch(apiUrl + "spain").then(e => handleResponse(e, "na **Espanha**"))
	else if(isEqual("eua|estados unidos|united states|usa", true)) fetch(apiUrl + "usa").then(e => handleResponse(e, "nos **Estados Unidos**"))
	else if(isEqual("[kc]an+ad[aá]")) fetch(apiUrl + "canada").then(e => handleResponse(e, "no **Canadá**"))
	else fetch(apiUrl + encodeURIComponent(countriesNames)).then(e => handleResponse(e, `no **${countriesNames}**`))
}