const { MessageEmbed } = require('discord.js')
const db = require("quick.db")

exports.run = async (client, message, args) => {
  let mp1 = `Ops, ${message.author}! Você precisa da permissão **Administrador**  para executar este comando.`;
  let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(embederr(mp1));

  let prefixx = db.get(`prefix_${message.guild.id}`);
  let pp = prefixx == null ? `-` : prefixx;
	let user = message.author
	let roleA = message.guild.roles.cache.find(role => role.id == args[0]) || message.mentions.roles.first()


  try{
  let embedon = new MessageEmbed()
    .setTitle("Antiraid ligado com sucesso")
    .setColor('#00EEEE')
    .setThumbnail("https://media.tenor.com/images/cbae2dfd31aa5ec2fcb7f46b65e1550f/tenor.gif")
    .setDescription(`**A pedido de:** ${user}\n**Para o cargo:** ${args[1]}\n\nPara desligar, use: -antiraid <@cargo ou ID do cargo> off`)
    .setFooter("Espero ter ajudado :)")
    .setImage("https://endomarketing.tv/wp-content/uploads/2016/02/endomarketing-seguranca-informacao-comunicacao-interna-712x350.gif")
  let embedoff = new MessageEmbed()
      .setTitle("Antiraid desligado com sucesso")
      .setColor("#00FA9A")
      .setThumbnail("https://media.tenor.com/images/cbae2dfd31aa5ec2fcb7f46b65e1550f/tenor.gif")
      .setDescription(`**A pedido de:** ${user}\n**Para o cargo:** ${args[1]}\n\nPara ligar, use: -antiraid <@cargo ou ID do cargo> on`)
      .setFooter("Espero ter ajudado :)")
      .setImage("https://endomarketing.tv/wp-content/uploads/2016/02/endomarketing-seguranca-informacao-comunicacao-interna-712x350.gif")
  let raidembed = new MessageEmbed()
      .setTitle("Antiraid - Como usar?")
      .setColor("#00FFFF")
      .setThumbnail("https://checkout.xekout.app/img/gifs/loading-cart.gif")
      .setDescription(`O antiraid é uma ótima ferramenta para o servidor. Ele aumenta a segurança, e, quando for necessário, por exemplo, quando seu servidor sofrer SPAM de alguém, ou um início de hackeamento, só é ativar e ele alterará as permissões do cargo selecionado.\n\n**Ao ativar, o que ele fará?\nO cargo marcado irá ter permissões apenas para:**\n• Ler mensagens\n• Visualizar histórico de mensagens\n• Ver o canal\n\n**Ao desativar, as seguintes permissões serão concedidas:**\n• Ler mensagens\n• Enviar mensagens\n• Visualizar histórico de mensagens\n• Criar convite\n• Alterar o próprio nickname\n• Anexar arquivos\n• Conectar, falar e apresentar\n• Usar emojis externos e adicionar reações\n\n**Importante:**\nPara que o comando funcione corretamente, não dê e nem remova nenhuma permissão de todos os cargos que não seja da staff em cada CANAL OU CATEGORIA. Se alguma permissão estiver concedida ou negada para o cargo, o comando não funcionará.\n\n**COMO UTILIZAR?**\nPara ligar, utilize:\n*-antiraid @cargo (ou a ID do cargo) on*\nPara desligar, utilize:\n*-antiraid @cargo (ou a ID do cargo) off*`)
      .setFooter("Espero ter ajudado :)")
      .setImage("https://endomarketing.tv/wp-content/uploads/2016/02/endomarketing-seguranca-informacao-comunicacao-interna-712x350.gif")


   if (!message.content.includes("@")){
    embedon.setDescription(`**A pedido de:** ${user}\n**Para o cargo:** <@&${args[1]}>\n\nPara desligar, use: -antiraid <@cargo ou ID do cargo> off`)
    embedoff.setDescription(`**A pedido de:** ${user}\n**Para o cargo:** <@&${args[1]}>\n\nPara ligar, use: -antiraid <@cargo ou ID do cargo> on`)
  }

	if(message.content.includes("on" || "On")){
		await roleA.setPermissions(66560);
    message.inlineReply(embedon)
	}
		
	if(message.content.includes("off") || message.content.includes("Off")) {
		await roleA.setPermissions(70639169);
    message.inlineReply(embedoff)
	}
  
	
	if (!args [0] || !args[1]) {
    message.inlineReply(raidembed)
  }
  }catch(error){
    if (/Missing permissions/.test(error)) {
      message.inlineReply(`Ops, ${message.author}! Não consegui fazer nada, verifique se o cargo que você mencionou é maior que o meu ou que o seu... :wink:`)
    } else {
    message.inlineReply(`Ops, ${message.author}! Não consegui fazer nada, verifique minhas permissões e se a sintaxe da mensagem está correta (${pp}antiraid @cargo/ID on/off) :wink:`)
    console.log(error)
    }
  }
}