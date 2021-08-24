const { MessageEmbed } = require('discord.js')

exports.run = async(client, interaction)=>{
  const messager = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {content: s}}});
  const channelc = client.channels.cache.get("853491913193029682");

  const embed = new MessageEmbed()
    .setTitle("Solicitação - news")
    .setColor("#00FFFF")
    .addField("Autor da solicitação", `${interaction.member.user.username + `#` + interaction.member.user.discriminator} - <@${interaction.member.user.id}>`)
    .addField("Servidor", `${client.guilds.cache.get(interaction.guild_id).name} - ${interaction.guild_id}`)
    .addField("Canal", `${client.channels.cache.get(interaction.channel_id).name} - ${interaction.channel_id}`)
    .addField("Canal solicitado", `${interaction.data.options[0].value}`)
    .addField("Tipo de notícias", `${interaction.data.options[1].value ? interaction.data.options[1].value : `Não especificado`}`)
  channelc.send(`<@755162323026706583>`, embed)

  messager(`Ok, ${interaction.member.user.username}! Sua solicitação foi recebida com sucesso! Em breve irei enviar notícias! :wink:`)
}