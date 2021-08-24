const { MessageEmbed } = require('discord.js'),
replace = require('string.prototype.replaceall'),
weather = require('weather-js')

exports.run = async(client, interaction) => {
  const messager = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {content: s}}});

  const arg = interaction.data.options[0].value;
  weather.find({search: arg, degreeType: 'C'}, 
  
  function (error, result){
  if(result === undefined || result.length === 0) return messager('❌ | Você enviou uma localização inválida. Por favor, tente novamente e verifique a escrita. Obrigado!');

  let current = result[0].current;
  let location = result[0].location;
  let bra = current.observationpoint.replace('Brazil', 'Brasil')
  let vento = current.winddisplay.replace("Southweast", "Sudoeste").replace("Northwest", "Noroeste").replace("Southeast", "Sudeste").replace("Northeast", "Nordeste").replace("Norteeast", "Nordeste").replace("South", "Sul").replace("North", "Norte").replace("West", "Oeste").replace("East", "Leste")

  const weatherinfo = new MessageEmbed()
    .setDescription(`**${current.skytext}**`)
    .setTitle(`Previsão do tempo para ${/brazil/i.test(current.observationpoint) ? bra : current.observationpoint}`)
    .setThumbnail("https://i.ibb.co/104ZyGV/pngwing.png")
    .setTimestamp()
    .setColor("#00EEEE")
    .addField(':alarm_clock: Fuso horário', `UTC ${location.timezone}`, true)
    .addField(':radio_button: Tipo de grau', 'Celsius', true)
    .addField(':thermometer: Temperatura', `${current.temperature}°`, true)
    .addField(':dash: Vento', vento, true)
    .addField(':heavy_plus_sign: Máxima', `${current.feelslike}°`, true)
    .addField(':droplet: Umidade', `${current.humidity}%`, true)

    if (/Mostly Cloudy/i.test(current.skytext)) {
      weatherinfo.setDescription("**Predominantemente nublado** :cloud:")
    } else if (/Mostly Clear/i.test(current.skytext)) {
      weatherinfo.setDescription("**Predominantemente limpo** :sparkles:")
    } else if (current.skytext == "Clear") {
      weatherinfo.setDescription("**Limpo** :sparkles:")
    } else if (current.skytext == "Cloudy") {
      weatherinfo.setDescription("**Nublado** :cloud:")
    } else if (current.skytext == "Partly Cloudy") {
      weatherinfo.setDescription("**Parcialmente nublado** :cloud:")
    } else if (current.skytext == "Partly Sunny") {
      weatherinfo.setDescription("**Parcialmente ensolarado** :partly_sunny:")
    } else if (current.skytext == "Sunny") {
      weatherinfo.setDescription("**Ensolarado** :sunny:")
    } else if (current.skytext == "Light Rain") {
      weatherinfo.setDescription("**Chuva leve** :cloud_rain:")
    } else if (current.skytext == "Fair") {
      weatherinfo.setDescription("**Tempo ótimo** :white_sun_cloud:")
    } else if (current.skytext == "Mostly Sunny") {
      weatherinfo.setDescription("**Predominantemente ensolarado** :sunny:")
    }

    client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          embeds: [weatherinfo.toJSON()]
          }
        }
    });
    }
  )

}