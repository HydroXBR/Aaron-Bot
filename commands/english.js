const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  if (message.author.id === "755162323026706583") {
  
    let dl = "https://i.ibb.co/HBcsVBS/image.png"
    let image = "https://static.wixstatic.com/media/d6ec41_2e8114eddae64c4a9ec257a761fa0786.jpg/v1/fill/w_678,h_577,al_c,q_90/d6ec41_2e8114eddae64c4a9ec257a761fa0786.jpg"

    let embed = new MessageEmbed()
      .setTitle("Home x House")
      .setColor(`RANDOM`)
      .setImage(image)
      .setThumbnail(dl)
      .setDescription(`Hoje vamos esclarecer a diferença entre duas palavrinhas que geram muita confusão: *HOME* e *HOUSE*. Você sabe o que significa cada uma delas?\n\n*HOUSE* significa “casa”, um lugar concreto onde pessoas vivem e que geralmente tem cozinha, banheiro, sala e quarto. Normalmente não há emoção ou um sentimento envolvido, se refere à construção.\n\n*HOME* também configura um lugar onde pessoas vivem, mas pode ser um barco, um apartamento ou um trailer, por exemplo. Essa palavra está mais relacionada a aconchego, amparo; um lugar em que você sinta-se protegido, confortável e de alguma forma conectado. É o seu “lar”.\n\nMuitos compositores fazem uso dessa palavra em suas canções com o intuito de demonstrar esse lado mais subjetivo.\n\n\n**Material por [Inamara](https://inamara.com/qual-a-diferenca-entre-home-x-house-em-ingles-what-is-the-difference/)**.`)
      .setFooter("Espero ter ajudado em algo :)")

  let channel = client.channels.cache.find(u => u.id == "800740305317527622")
  message.delete()

  channel.send(embed)
  } else {
    console.log("Comando English utilizado")
  }
}