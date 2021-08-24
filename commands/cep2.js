const { MessageEmbed } = require('discord.js'),
fetch = require('node-fetch')

module.exports.run = async(client, interaction) => {
  const embedder = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {embeds: [s.toJSON()]}}});

  let datacep = interaction.data.options[0].value
  let cep = /-/gmi.test(datacep) ? datacep.replace("-", "") : datacep;
  const messagee = ``

  fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json().then(res => {
      let estado;
        switch (res.uf) {
          case "AC":
          estado = "Acre (AC)"
          break
          case "AL":
          estado = "Alagoas (AL)"
          break
          case "AP":
          estado = "Amapá (AP)"
          break
          case "AM":
          estado = "Amazonas (AM)"
          break
          case "BA":
          estado = "Bahia (BA)"
          break
          case "CE":
          estado = "Ceará (CE)"
          break
          case "DF":
          estado = "Distrito Federal (DF)"
          break
          case "ES":
          estado = "Espírito Santo (ES)"
          break
          case "GO":
          estado = "Goiás (GO)"
          break
          case "MA":
          estado = "Maranhão (MA)"
          break
          case "MT":
          estado = "Mato Grosso (MT)"
          break
          case "MS":
          estado = "Mato Grosso do Sul (MS)"
          break
          case "MG":
          estado = "Minas Gerais (MG)"
          break
          case "PA":
          estado = "Pará (PA)"
          break
          case "PB":
          estado = "Paraíba (PB)"
          break
          case "PR":
          estado = "Paraná (PR)"
          break
          case "PE":
          estado = "Pernambuco (PE)"
          break
          case "PI":
          estado = "Piauí (PI)"
          break
          case "RJ":
          estado = "Rio de Janeiro (RJ)"
          break
          case "RN":
          estado = "Rio Grande do Norte (RN)"
          break
          case "RS":
          estado = "Rio Grande do Sul (RS)"
          break
          case "RO":
          estado = "Rondônia (RO)"
          break
          case "RR":
          estado = "Roraima (RR)"
          break
          case "SC":
          estado = "Santa Catarina (SC)"
          break
          case "SP":
          estado = "São Paulo (SP)"
          break
          case "SE":
          estado = "Sergipe (SE)"
          break
          case "TO":
          estado = "Tocantins (TO)"
          break
        }

      let embed = new MessageEmbed()
        .setTitle(`:map: Dados do local - Consulta por CEP`)
        .setColor("#00EEEE")
        .setThumbnail("https://campeamudancas.com.br/wp-content/uploads/2017/05/Mudan%C3%A7a-local.gif")
        .addField(`:round_pushpin: CEP`, res.cep)
        .addField(`:motorway: Logradouro`, `${res.logradouro == "" ? "Não fornecido" : res.logradouro}`)
        .addField(`:busstop: Complemento`, `${res.complemento == "" ? "Não fornecido" : res.complemento}`)
        .addField(`:homes: Bairro`, `${res.bairro == "" ? "Não fornecido" : res.bairro}`)
        .addField(`:cityscape: Cidade/município`, res.localidade)
        .addField(`:globe_with_meridians: Estado`, `${res.uf == "" ? "Não fornecido" : estado}`)
        .addField(`<:ibge:845545085705388042> Código IBGE`, `${res.ibge == "" ? "Não fornecido" : res.ibge}`)
        .addField(`:telephone_receiver: DDD Local`, `${res.ddd == "" ? "Não fornecido" : res.ddd}`)
        .addField(`<:siafi:845546243890610206> Código SIAFI`, `${res.siafi == "" ? "Não fornecido" : res.siafi}`)
        .setFooter(`Doe e me ajude a ficar online! Use o comando -donate para saber mais ♥`)

        if (!res.gia == "") {
          embed.addField(`<:gia:845545453419364413> Código GIA`, res.gia)
        } else if (res.cep == undefined || res.cep == "undefined") {
          messagee = `Ops, ${message.author}! Houve um erro. Por favor, verifique o CEP digitado, talvez ele não exista! Obrigado :wink:`
        }

      embedder(embed)

    }).catch(error => console.log(error)))
}