const { MessageEmbed } = require('discord.js')
const db = require("quick.db")

exports.run = async(client, message, args) => {
  const prefixx = db.get(`prefix_${message.guild.id}`)
  const pp = prefixx == null ? `-` : prefixx
   const embed = new MessageEmbed()
    .setTitle(`Bot Info - Aaron Bot`)
    .setColor("#00EEEE")
    .setThumbnail("https://i.ibb.co/JjGRPwV/Bot.png")
    .setImage(`https://i.ibb.co/V3sDH1K/Aaron-Banner.png`)
    .setDescription(`**Olá!**\n
    Sou o <@800510988973506601>, um simples bot de **administração**, **informação** e **diversão**, para fazer com que sua comunidade se divirta bastante e tornar processos mais práticos! :smile:\n
    > :scroll: Ao me utilizar, você concorda com meus **[Termos de Uso](https://sites.google.com/view/aaronbotsite/termos-de-uso)**\n\n
    > :robot: **[Me adicione no seu servidor](https://abre.ai/aaronbot-)**\n> :incoming_envelope: **[Contato](https://forms.gle/mu7LYabhNd6E1fFZ8)**\n\n**Dados básicos**\n> :mag_right: **Minha ID:** \`800510988973506601\`\n> :radio_button: **Prefixo no servidor:** \`${pp}\` (altere usando \`${pp}prefix\`)\n> :newspaper: **Para ver meus comandos:** \`${pp}ajuda\` ou \`${pp}help\`\n> :bust_in_silhouette: **Nickname Discord:** \`Aaron (-)#5209\`\n\n**Links úteis**\n> :globe_with_meridians: [Aaron Site](https://abre.ai/aaronbotsite)\n> ${client.emojis.cache.get('863048436601585696')} [GitBook Aaron](https://abre.ai/aarongitbook)\n> **:love_letter: [Servidor de suporte](https://discord.gg/chnhwPBVxX)**\n\n**Estatísticas**\n> :satellite: **Servidores:** ${client.guilds.cache.size}\n> :speech_balloon: **Canais:** ${client.channels.cache.size}\n> :open_file_folder: **Comandos:** 118\n> :floppy_disk:  **Memória RAM**: ${(process.memoryUsage().heapUsed / 1e6).toFixed(3) + "MB"}\n\n**Dados técnicos**\n> ${client.emojis.cache.get('863487572356366337')} **Programado em:** JavaScript, Node.js
    > ${client.emojis.cache.get('863487927946444802')} **Programado por:** \`Psy#1518\`, com o apoio de \`Alphka#5575\`
    > ${client.emojis.cache.get('863488146893439017')} **Livraria:** Discord.js`)
    .setFooter('Jesus loves you ♥')
  message.inlineReply(embed);
}