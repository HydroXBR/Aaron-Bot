const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  let xp = db.get(`xp_${message.author.id}`) || 0;
  let cmds = db.get(`cmds`) || 0;
  db.set(`xp_${message.author.id}`, xp + 1);
  db.set(`cmds`, cmds + 1);
  let embed = new MessageEmbed()
    .setTitle("Doe :heart:")
    .setThumbnail(`https://i.pinimg.com/originals/65/a1/34/65a134a915c1bcc0f217822df555ff70.gif`)
    .setDescription(`:right_facing_fist: **Ajude o bot a ficar online!** :left_facing_fist:\n\nPara me ajudar a ficar online, e os adms (hehe :kissing_closed_eyes:), você pode fazer um **PIX** e mandar o comprovante no canal <#849151083333812245> do meu [Servidor Oficial](https://discord.gg/A85ZWjFbqm) ou no email do PIX, e aparecer no comando \`-helpers\`, neste comando (\`-donate\`) e talvez até no meu status por alguns dias, caso decidido pelos meus técnicos, além de ganhar um dinheiro no meu sistema em agradecimento... :star_struck:\n\n**#FazOPIX:**\n> \`aaronbotjs@gmail.com\`\n\n*Qualquer valor é bem-vindo, muito obrigado!* :hugging:\n\n**Pessoas que doaram e me amam demais ♥:**\nMarco Aurélio ♥ :cry:`)
    .setFooter("Muito obrigado ♥")
    .setColor("#00EEEE")

  message.inlineReply(embed)
}