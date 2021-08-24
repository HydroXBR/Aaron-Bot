const { MessageEmbed } = require("discord.js"),
fetch = require("node-fetch"),
db = require("quick.db"),
replace = require("string.prototype.replaceall")

exports.run = async (client, message, args) => {
  let prefixx = db.get(`prefix_${message.guild.id}`);
  let pp = prefixx == null ? `-` : prefixx;

  let cep = /-/gmi.test(args.join("")) ? args.join("").replace("-", "") : args.join("");

  return fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json().then(res => {
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
          message.inlineReply(embed)
        } else if (res.cep == undefined || res.cep == "undefined") {
          message.inlineReply(`Ops, ${message.author}! Houve um erro. Por favor, verifique o CEP digitado, talvez ele não exista! Obrigado :wink:`)
        } else {
          message.inlineReply(embed)
        }
    }).catch(error => message.inlineReply(`Ops, ${message.author}! Houve um erro. Por favor, verifique o CEP digitado, talvez ele não exista, ou você não digitou um CEP... Obrigado :wink:`)).catch(error => message.inlineReply(`Ops, ${message.author}! Houve um erro. Por favor, verifique o CEP digitado, talvez ele não exista, ou você não digitou um CEP... Obrigado :wink:`))).catch(error => message.inlineReply(`Ops, ${message.author}! Houve um erro. Por favor, verifique o CEP digitado, talvez ele não exista, ou você não digitou um CEP... Obrigado :wink:`))
}