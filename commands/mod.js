const { MessageEmbed } = require('discord.js'),
  replace = require('string.prototype.replaceall'),
  db = require('quick.db'),
  json = require('../mods.json')
  fetch = require('node-fetch')

exports.run = async(client, message, args) => {
  let embederr = msg => new MessageEmbed().setTitle(`Ops!`).setDescription(msg).setThumbnail("https://media2.giphy.com/media/xT9Igpm06uM5OJ5lVS/source.gif").setColor("#FF0000");
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;
  const ee = `Ops! Desculpe, não consegui executar o comando. Lembre-se que, ao executar um comando, como aparece no menu do comando \`${pp}mod\`, substitua \"LINK\" pelo link do perfil do usuário.`;

  let id = message.author.id
  
  for (var i = 0; i < json.mods.length; i++){
    if (json.mods[i].idDiscord == id){
    const embed = new MessageEmbed()
      .setTitle('Moderação - BrainlyBR')
      .setColor('#00EEEE')
      .setThumbnail(json.mods[i].avatar)
      .setTimestamp()
      .setFooter(`Criado com ♥ para usuários moderadores no Brainly Brasil`)
       
    if(!args[0]){
      message.inlineReply(embed.setDescription(`Olá, moderador **${json.mods[i].nick}**! Aqui, tenho algumas ferramentas para te auxiliar ou te ajudar em alguns processos de moderação, como tornar prática a visualização entre modos de perfis, etc. Observe como usar minhas ferramentas para obter tipos de conteúdo:`).addField(`Perfil modelo antigo`, `\`${pp}mod old LINK\``, false).addField(`Perfil modelo atual`, `\`${pp}mod new LINK\``, false).addField(`Content - Perguntas`, `\`${pp}mod tarefas LINK\``, false).addField(`Content - Respostas`, `\`${pp}mod respostas LINK\``, false).addField(`Content - Comentários`, `\`${pp}mod com LINK\``, false).addField(`Advertências do perfil`, `\`${pp}mod adv LINK\``, false))
    } else if (/old|new|tarefa|res?posta|com/gmi.test(args[0]) && !args[1]){
      message.inlineReply(`Ops, ${json.mods[i].nick}! Faltou adicionar o link após a declaração \`${args[0]}\` :confused:`)
    } else if (/old/gmi.test(args[0])){
      if(/\/perfil/i.test(args[1])) return message.inlineReply(embederr(`Ops, ${json.mods[i].nick}! Você precisa fornecer um link de um perfil no modelo **novo** para eu te dar o link do perfil no modo antigo de visualização. Para fazer o contrário (obter o link do modelo **novo**), use o comando \`${pp}mod new LINK\` :wink:`));

      try{
      let c = args[1].replace('answers', '').replace('questions', '').replace('submitted', '').replace('solved', '')

      let r = c.match(/\/\d+/gmi)[0].replace('/', '')
      const f = await fetch(`https://brainly.com.br/users/redirect_user/${r}`);
      const url = f.url

      message.inlineReply(embed.addField(`Link perfil no modelo antigo`, `> ${url ? url : `Ops! Erro!`}`))
      }catch(e){message.inlineReply(ee)}
    } else if (/new/gmi.test(args[0])){
      if(/\/app\/profile/i.test(args[1])) return message.inlineReply(embederr(`Ops, ${json.mods[i].nick}! Você precisa fornecer um link de um perfil no modelo **antigo** para eu te dar o link do perfil no modo novo de visualização. Para fazer o contrário (obter o link do modelo **antigo**), use o comando \`${pp}mod old LINK\` :wink:`));

      try{
      let c = "/" + args[1].replace('answers', '').replace('questions', '').replace('submitted', '').replace('solved', '').replace('https://brainly.com.br/perfil/', '')

      let r = c.match(/-\d+/gmi)[0].replace('-', '')

      message.inlineReply(embed.addField(`Link do novo perfil:`, `https://www.brainly.com.br/app/profile/${r}/`))
      }catch(e){message.inlineReply(ee)}
    } else if (/tarefa|pergunta|question/i.test(args[0])){
      if(/profile/i.test(args[1])){
        try{
        let c = args[1].replace('answers', '').replace('questions', '').replace('submitted', '').replace('solved', '')

        let r = c.match(/\/\d+/gmi)[0].replace('/', '')

        message.inlineReply(embed.addField(`Página de conteúdos do perfil solicitado - tarefas`, `https://brainly.com.br/users/user_content/${r}`))
        }catch(e){message.inlineReply(ee)}
      }else if(/perfil/i.test(args[1])){
        try{
        let c = "/" + args[1].replace('answers', '').replace('questions', '').replace('submitted', '').replace('solved', '').replace('https://brainly.com.br/perfil/', '')

        let r = c.match(/-\d+/gmi)[0].replace('-', '')

        message.inlineReply(embed.addField(`Página de conteúdos do perfil solicitado - tarefas`, `https://brainly.com.br/users/user_content/${r}/`))
        }catch(e){message.inlineReply(ee)}
      }
    } else if (/re[sz]postas?|answers?/i.test(args[0])){
      try{
      if(/profile/i.test(args[1])){
        let c = args[1].replace('answers', '').replace('questions', '').replace('submitted', '').replace('solved', '')

        let r = c.match(/\/\d+/gmi)[0].replace('/', '')

        message.inlineReply(embed.addField(`Página de conteúdos do perfil solicitado - respostas`, `https://brainly.com.br/users/user_content/${r}/responses/`))
      }else if(/perfil/i.test(args[1])){
        let c = "/" + args[1].replace('answers', '').replace('questions', '').replace('submitted', '').replace('solved', '').replace('https://brainly.com.br/perfil/', '')

        let r = c.match(/-\d+/gmi)[0].replace('-', '')

        message.inlineReply(embed.addField(`Página de conteúdos do perfil solicitado - repostas`, `https://brainly.com.br/users/user_content/${r}/responses/`))
      }
      }catch(e){message.inlineReply(ee)}
    } else if (/comm?ent[aáàãä]ri[ou]|com/i.test(args[0])){
      try{
      if(/profile/i.test(args[1])){
        let c = args[1].replace('answers', '').replace('questions', '').replace('submitted', '').replace('solved', '')

        let r = c.match(/\/\d+/gmi)[0].replace('/', '')

        message.inlineReply(embed.addField(`Página de conteúdos do perfil solicitado - comentários`, `https://brainly.com.br/users/user_content/${r}/comments_tr/`))
      }else if(/perfil/i.test(args[1])){
        let c = "/" + args[1].replace('answers', '').replace('questions', '').replace('submitted', '').replace('solved', '').replace('https://brainly.com.br/perfil/', '')

        let r = c.match(/-\d+/gmi)[0].replace('-', '')

        message.inlineReply(embed.addField(`Página de conteúdos do perfil solicitado - comentários`, `https://brainly.com.br/users/user_content/${r}/comments_tr/`))
      }
      }catch(e){message.inlineReply(ee)}
    } else if (/adv|adver?t/i.test(args[0])){
      try{
      if(/profile/i.test(args[1])){
        let c = args[1].replace('answers', '').replace('questions', '').replace('submitted', '').replace('solved', '')

        let r = c.match(/\/\d+/gmi)[0].replace('/', '')

        message.inlineReply(embed.addField(`Advertências do perfil`, `https://brainly.com.br/users/view_user_warns/${r}/`))
      }else if(/perfil/i.test(args[1])){
        let c = "/" + args[1].replace('answers', '').replace('questions', '').replace('submitted', '').replace('solved', '').replace('https://brainly.com.br/perfil/', '')

        let r = c.match(/-\d+/gmi)[0].replace('-', '')

        message.inlineReply(embed.addField(`Advertências do perfil`, `https://brainly.com.br/users/view_user_warns/${r}/`))
      }
      }catch(e){message.inlineReply(ee)}
    }
  }
  }
}