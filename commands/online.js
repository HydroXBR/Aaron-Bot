const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

  const embed = new MessageEmbed()
    .setTitle(`Tempo de atividade 🕰️`)
    .setThumbnail("https://img.webme.com/pic/u/ufovisitors/robotgifs2.gif")
    .setColor("#00FFFF")
    .setDescription(`**Estou online há:**\n${uptime}`)
    .setFooter(`"Porque Deus tanto amou o mundo\nque deu o seu Filho Unigênito,\npara que todo o que nele crer\nnão pereça, mas tenha a vida eterna."\nJoão 3.16 💓`)

  message.inlineReply(embed);
};