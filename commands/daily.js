const { MessageEmbed } = require("discord.js"),
db = require("quick.db")

exports.run = async (client, message, args) => {
	const databaseDate = db.get(`datetime_${message.author.id}`),
	datetime = new Date().toISOString().split("T")[0].split("-").reverse().join("/"),
  toBRL = value => Number(value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

  const svoficial = client.guilds.cache.get("831379807673253888")
	
	if(databaseDate == datetime && message.author.id !== "793906258913918998") return (message.channel.send("❌ | Ops! Parece que você já pegou seu saldo diário! Por favor, volte amanhã para pegar novamente :wink:"))

	const moneyAmmount = db.get(`money_${message.author.id}`) || "0";
	const minimumAmmount = 1e3;
	const maximumAmmount = 5e3;
	const dailyValue = Math.floor(Math.random() * (maximumAmmount - minimumAmmount)) + minimumAmmount;

  let dailyammount = Number(moneyAmmount) + dailyValue;
  let newmoney = svoficial.members.cache.get(message.author.id) ? (dailyammount + (dailyValue / 10)) : dailyammount;
  let atualdaily = svoficial.members.cache.get(message.author.id) ? (dailyValue + (dailyValue/10)) : dailyValue

	db.set(`money_${message.author.id}`, newmoney);
	db.set(`datetime_${message.author.id}`, datetime);
  let embed = new MessageEmbed()
    .setTitle("Daily")
    .setColor("#00EEEE")
    .setDescription(`Parabéns, você pegou o seu saldo diário e conseguiu ${toBRL(atualdaily)}!\n\nSaldo atual: \`${toBRL(db.get(`money_${message.author.id}`))}\`\n\n${svoficial.members.cache.get(message.author.id) ? `**Aee, você ganhou 10% a mais que iria ganhar** porque está no meu [servidor oficial](https://discord.gg/chnhwPBVxX) :partying_face:` : `**Sabia que você pode ganhar 10% a mais todos os dias se entrar no meu servidor? [Clique aqui para entrar](https://discord.gg/chnhwPBVxX)**`}`)

	message.inlineReply(embed);
}