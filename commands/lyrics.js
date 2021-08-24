const Discord = require("discord.js"),
fetch = require("node-fetch"),
jsdom = require("jsdom")

exports.run = async (client, message, args) => {
  fetch(`https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=${args[1]}&mus=${args[0]}`).then(response => response.json().then(json => {
    json.mus.forEach(song => {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${args[0]}`)
        .setDescription(song.text)
        .setColor("#FF0000")
        .setFooter(`${args[1]}`)
        message.inlineReply(embed)
    })
}))
}