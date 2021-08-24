const { MessageEmbed } = require(`discord.js`);
const db = require("quick.db")
const json = require("../config.json")

exports.run = async (client, interaction) => {
  try{
  const pp = db.get(`prefix_${interaction.guild_id}`) || `-`;
  const messager = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {content: s}}}),
  embedder = s => client.api.interactions(interaction.id, interaction.token).callback.post({data: {type: 4,data: {embeds: [s.toJSON()]}}});
  const group = interaction.data.options ? interaction.data.options[0].value : false;
  const categoria = /adm|diver?[scç][aàáãâ]o|fun|brink|bri[nm]cadei?ra|i(m|n)fo|txt|texto|eco/gmi.test(group) && !/serv/gmi.test(group) ? true : false;

  let embed = new MessageEmbed()
    .setTitle(`Help - Aaron`)
    .setColor("#00EEEE")
    .setImage(`https://i.ibb.co/V3sDH1K/Aaron-Banner.png`)
    .setDescription(`😊 Oi, tudo bem?
    Sou o bot <@800510988973506601>, tenho comandos de diversão, informação, administração e muito mais :) 

    **VEJA MEUS COMANDOS POR CATEGORIA:**
    > :briefcase: **ADMINISTRAÇÃO, INFORMAÇÕES DO SERVIDOR:** Digite \`${pp}help adm\`
    > :soccer: **DIVERSÃO, ETC:** Digite \`${pp}help diversão\` ou \`${pp}help fun\`
    > :newspaper: **INFORMAÇÕES, PESQUISA:** Digite \`${pp}help info\`
    > :dollar: **ECONOMIA** Digite \`${pp}help eco\` ou \`${pp}help economy\`

    **PARA VER AJUDA SOBRE UM ÚNICO COMANDO:**
    > Digite \`${pp}help comando\`
    > Use o Slash: \`\/help <command>\`

    **VEJA INFORMAÇÕES DETALHADAS DE CADA COMANDO:**
    > Acesse https://app.gitbook.com/@aaronteam/s/aaron-bot/

    **Prefixo:**
    > Meu prefixo neste servidor é \`${pp}\`. Para alterá-lo, use \`${pp}prefix\`.

    **Me adicione no seu servidor:**
    > [Clique aqui](https://abre.ai/aaronbot-) ou acesse https://abre.ai/aaronbot-

    **Mais**
    > **PARA SABER COMO CONFIGURAR O SISTEMA DE NOTÍCIAS**, use o comando ${pp}news
    > Para mais informações, use ${pp}botinfo
    > Dúvidas? Sugestões? Críticas? Visite meu site [clicando aqui](https://abre.ai/aaronbotsite).
    > Ao me utilizar, você concorda com meus [Termos de uso](https://sites.google.com/view/aaronbotsite/termos-de-uso)
    > Doe e me ajude ♥ → use o comando \`${pp}donate\`

    > **\`Porque Deus amou o mundo de tal maneira que deu seu Filho unigênito, para que todo aquele que nele crer não pereça, mas tenha a vida eterna.\`**\n> João 3.16 :heart:
    `)
    .setFooter('Espero ter ajudado :D')

  let admembed = new MessageEmbed()
    .setTitle(`Comandos - Administração e moderação, informações do servidor`)
    .setColor(`#00EEEE`)
    .setImage(`https://i.ibb.co/Df48jN8/admbanner.png`)
    .addField(`${pp}news`, `Configure meu sistema de notícias no seu servidor`)
    .addField(`${pp}creatchannel <tipo> <nome>`, `Cria um canal no server`)
    .addField(`${pp}deletechannel`, `Deleta um canal do servidor. Você pode colocar a ID, mencionar o canal ou não colocar nada se executar o comando no mesmo canal que quiser deletar.`)
    .addField(`${pp}membercount on/off OU ${pp}contador on/off`,  `Cria um canal para contar os membros do seu servidor`)
    .addField(`${pp}warn <user> <motivo>`,  `Adverte o user, mandando mensagem no privado.`)
    .addField(`${pp}mute <@user, motivo>`,  `Muta users`)
    .addField(`${pp}unmute <@user>`,  `Desmuta users`)
    .addField(`${pp}ban / ${pp}unban <@user, motivo>`,  `(Des)bane users`)
    .addField(`${pp}kick <@user, motivo>`,  `Expulsa users`)
    .addField(`${pp}clean <n°>`,  `Limpa mensagens do chat, incluindo fixadas.`)
    .addField(`${pp}dm <user> <mensagem>`,  `Envia uma mensagem direta ao usuário`)
    .addField(`${pp}antiraid`,  `Ligando o antiraid`)
    .addField(`${pp}poll <assunto> <mencione canal>`,  `Abra uma votação`)
    .addField(`${pp}modolento <tempo (ex: 2s)>`,  `Ativa o modo lento`)
    .addField(`${pp}servinfo`,  `Informações do servidor`)
    .addField(`${pp}servicon`,  `Ícone do servidor`)
    .addField(`${pp}name <@user> <nick>`,  `Altera nick do usuário`)
    .addField(`${pp}id <@user>`,  `Mostra a ID do Discord de alguém, para mostrar o seu, use apenas ${pp}id`)
    .addField(`Suporte?`, `Visite meu site: https://abre.ai/aaronbotsite`)
    .addField(`ㅤ`, `ㅤ`)
    .addField(`**\`Porque Deus amou o mundo de tal maneira que deu seu Filho unigênito, para que todo aquele que nele crer não pereça, mas tenha a vida eterna.\`**`, `João 3.16 :heart:`)
    .setFooter(`Espero ter ajudado :D | Hey, lembra de usar de novo o comando ${pp}ajuda se quiser ver as outras categorias...`)


  let brembed = new MessageEmbed()
    .setTitle(`Comandos - diversão, miscelânea`)
    .setImage(`https://i.ibb.co/g4LqLf9/divbanner.png`)
    .setColor(`#00EEEE`)
    .addField(`${pp}av <user>`, `Exibe o avatar do user mencionado`)
    .addField(`${pp}invert @user`, `Inverte as cores do avatar do usuário ou do seu, se não mencionar ninguém`)
    .addField(`${pp}sepia @user`, `Aplica efeitos de sépia ao avatar do usuário ou do seu, se não mencionar ninguém`)
    .addField(`${pp}pb @user / ${pp}pretoebranco @user`, `Aplica escala de cinza ao avatar do usuário ou do seu, se não mencionar ninguém`)
    .addField(`${pp}joken`, `Cara ou coroa`)
    .addField(`${pp}pflip`, `Pedra, papel, tesoura`)
    .addField(`${pp}number <número de 1 a 10>`, `Tente acertar o n° que estou pensando!`)
    .addField(`${pp}niver <@user> ou ID`, `Deseje um feliz aniversário abençoado por Deus a alguém :)`)
    .addField(`${pp}hi <user>`, `Dê um oi para o user`)
    .addField(`${pp}ship <mencione 2 users>`, `Shippe users`)
    .addField(`${pp}hug <user>`, `Abrace um user`)
    .addField(`${pp}kiss <user>`, `Beije um user`)
    .addField(`${pp}love <user>`, `Diga a um user que você o ama!`)
    .addField(`${pp}tap <user>`, `Dê um tapinha no user`)
    .addField(`${pp}chok <user>`, `Choacalhe um user`)
    .addField(`${pp}tok <user>`, `Toca aqui com o user`)
    .addField(`${pp}caf <user>`, `Faça cafuné no user`)
    .addField(`${pp}poke <user>`, `Cutuque um user`)
    .addField(`${pp}sev <user>`, `Olhe sério para um user`)
    .addField(`${pp}laranjo <texto>`, `Escreva um texto com o laranjo (rs)`)
    .addField(`${pp}kk`, `Demonstre que está rindo bastante`)
    .addField(`${pp}animalgif`, `Veja alguns gifs fofos (ou engraçados) de animais`)
    .addField(`${pp}dado`, `Jogue o dado!`)
    .addField(`${pp}ideia <ideia>`, `Sugestão aos adms no canal de sugestões`)
    .addField(`${pp}ticket`, `Abrir um ticket de suporte no servidor`)
    .addField(`Suporte?`, `Visite meu site: https://abre.ai/aaronbotsite`)
    .addField(`**\`Porque Deus amou o mundo de tal maneira que deu seu Filho unigênito, para que todo aquele que nele crer não pereça, mas tenha a vida eterna.\`**`, `João 3.16 :heart:`)
    .setFooter(`Espero ter ajudado :D | Hey, lembra de usar de novo o comando ${pp}ajuda se quiser ver as outras categorias...`)

  let economyembed = new MessageEmbed()
    .setTitle("Comandos - Economia")
    .setThumbnail("https://i.gifer.com/DhIG.gif")
    .setImage("https://i.ibb.co/nc4Lzg4/ecobanner.png")
    .setColor(`#00EEEE`)
    .addField(`${pp}perfil / ${pp}profile`, `Acesse seu perfil Aaron (se você mencionar alguém, aparecerá o perfil do mencionado)`)
    .addField(`${pp}daily`, `Pegue seu dinheiro diário para seu perfil, e também para comprar objetos, carros, etc.`)
    .addField(`${pp}atm / ${pp}saldo`, `Consulte o saldo da sua conta Aaron`)
    .addField(`${pp}carros`, `Compre carros, eles aparecem no seu perfil Aaron`)
    .addField(`${pp}objetos`, `Compre objetos, eles aparecem no seu perfil Aaron`)
    .addField(`${pp}gemas`, `Troque dinheiro por gemas no seu perfil`)
    .addField(`${pp}pay <@user/ID> <quantidade>`, `Transfira dinheiro da sua conta para outros usuários`)
    .addField(`${pp}especialidade`, `Altere sua especialidade no servidor, e ela aparecerá no comando ${pp}perfil`)
    .addField(`${pp}profissao`, `Altere sua profissão no servidor, e ela aparecerá no comando ${pp}perfil`)
    .addField(`${pp}papel`, `Altere o papel de parede exibido no comando ${pp}perfil`)
    .addField(`${pp}level <@user/ID>`, `Veja o level do usuário`)
    .addField(`${pp}xp <@user/ID>`, `Veja o xp do usuário`)
    .addField(`${pp}trabalhar`, `Receba o salário diário`)
    

  let txembed = new MessageEmbed()
    .setTitle(`Comandos - textos, info`)
    .setImage(`https://i.ibb.co/x2663t2/infobanner.png`)
    .setColor(`#00EEEE`)
    .addField(`${pp}donate`, `Saiba como doar e me ajudar ♥`)
    .addField(`${pp}helpers`, `Veja as pessoas que doaram e me ajudaram ♥`)
    .addField(`${pp}cep <CEP>`, `Exibe dados sobre o CEP fornecido`)
    .addField(`${pp}covid <all>`, `Dados do COVID-19 no mundo`)
    .addField(`${pp}covid <país em inglês>`, `Dados do COVID-19 no país solicitado`)
    .addField(`${pp}clima <Cidade>`, `Clima da cidade solicitada`)
    .addField(`${pp}ping`, `Veja a latência da API e do Servidor`)
    .addField(`${pp}online`, `Veja há quanto tempo estou online`)
    .addField(`${pp}bigtxt <texto>`, `Escreva em emojis`)
    .addField(`${pp}calculate <número, operação>`, `+, -, cálculos`)
    .addField(`${pp}binary <texto>`, `Codifique o texto em binário`)
    .addField(`${pp}morse <texto>`, `Codifique o texto em código morse`)
    .addField(`${pp}unbinary <binário>`, `Decodifique o texto binário`)
    .addField(`${pp}searchyt <pesquisa>`, `Faça uma rápida pesquisa no YouTube`)
    .addField(`${pp}token`, `Faça com que eu gere duas senhas aleatórias para você usar em qualquer plataforma`)
    .addField(`Suporte?`, `Visite meu site: https://abre.ai/aaronbotsite`)
    .addField(`**\`Porque Deus amou o mundo de tal maneira que deu seu Filho unigênito, para que todo aquele que nele crer não pereça, mas tenha a vida eterna.\`**`, `João 3.16 :heart:`)
    .setFooter(`Espero ter ajudado :D | Hey, lembra de usar de novo o comando ${pp}ajuda se quiser ver as outras categorias...`)

  if(!interaction.data.options){
    embedder(embed)
  }else if(categoria){
    if (/adm/i.test(group)) {
      admembed.setFooter(`Espero ter ajudado :)`)
      embedder(admembed)
    } else if (/diver?[scç][aàáãâ]o|fun|brink|bri[nm]cadei?ra/i.test(group)) {
      brembed.setFooter(`Espero ter ajudado :)`)
      embedder(brembed)
    } else if (/i(m|n)fo|txt|texto/i.test(group) && !/serv/i.test(group)) {
      txembed.setFooter(`Espero ter ajudado :)`)
      embedder(txembed)
    } else if (/eco/gmi.test(group)) {
      embedder(economyembed)
    } else {
    embedder(embed)
    }
  } else if (!categoria) {
    try{
      for (var i = 0; i < json.commands.length; i++){
        let e = [];
        if (json.commands[i].name == group){
          let info = json.commands[i].info
          let similares = json.commands[i].similar
          let ddembed = new MessageEmbed()
            .setTitle(`Ajuda - Comando ${group}`)
            .setColor(`#A020F0`)
            .setThumbnail("https://media2.giphy.com/media/4ZnPYsAxJpau2r8v9e/200w.gif")
            .addField(`O que ele faz?`, `\`\`\`${json.commands[i].description}\`\`\``)
            .addField(`Sintaxe do comando:`, `\`\`\`${pp}${json.commands[i].sintax}\`\`\``)
            .addField(`Mais informações:`, `\`\`\`${/Nenhuma i/.test(info) ? `Nenhuma` : info}\`\`\``)
            .addField(`Comandos similares`, `\`\`\`${/Nenhuma i/.test(similares) ? `Nenhum` : similares}\`\`\``)
          embedder(ddembed)
        }
        /*if (e.length < 1) return messager(`❌ | Ops, <@${interaction.member.user.id}>!! Você me pediu ajuda para um comando, mas parece que o comando não existe! Verifique a ortografia e se o comando existe na lista, digitando \`${pp}help\` :wink:`);*/
      }
    }catch(error){
      messager(`❌ | Ops, <@${interaction.member.user.id}>! Você me pediu ajuda para um comando, mas parece que o comando não existe! Verifique a ortografia e se o comando existe na lista, digitando \`${pp}help\` :wink:`)
      console.log(error)
    }
  } else {
    embedder(embed)
  }
  }catch(e){
    console.log(e)
  }
}