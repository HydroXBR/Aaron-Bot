const express = require("express"),
    app = express(),
    Discord = require("discord.js"),
    client = new Discord.Client(),
    json = require("./config.json"),
    db = require('quick.db'),
    botId = "800510988973506601",
    loriId = "297153970613387264",
    carlId = "235148962103951360",
    disbotId = "302050872383242240",
    progpsyId = "755162323026706583",
    assistantId = "807012299041931304",
    svId = "831379807673253888",
    replace = require("string.prototype.replaceall"),
    reply = require("./reply.js"),
    talkedRecently = new Set(),
    functions = require('./functions.js')

    
app.get("/", (request, response) => {
    let ping = new Date()
    ping.setHours(ping.getHours() - 3)
    let addZero = num => num < 10 && `0${num}` || num
    console.info(`Bot online - Ping recebido às ${addZero(ping.getUTCHours())}:${addZero(ping.getUTCMinutes())}:${addZero(ping.getUTCSeconds())}`)
    response.sendStatus(200)
})


client.on("message", message => {
// -------- 001
  const prefixx = message.channel.type == "dm" ? null : db.get(`prefix_${message.guild.id}`)
  const canalbumpp = client.channels.cache.get("857077878083420180");
  const pp = prefixx == null ? `-` : prefixx;
  const lv = db.get(`lv_${message.author.id}`) || 0;
  const xp = db.get(`xp_${message.author.id}`) || 0;
  const cmds = db.get(`cmds`) || 0;
  let argss = message.content.trim().split(/ +/g)
  const chann = client.channels.cache.get("853491913193029682")
  const cc = m => `\`\`\`${m}\`\`\``;
  const mc = m => `<#${m}>`;
  const mu = m => `<@${m}>`;
  const mid = message.channel.type == 'dm' ? `DM` : ((cc(message.channel.id) + mc(message.channel.id)) + `${message.guild.name}`);
  const gid = message.channel.type == 'dm' ? `DM` : cc(message.guild.id);
  const mse = new Discord.MessageEmbed().setTitle(`Erro`).addField(`Message Guild ID:`, gid).addField(`Message Channel ID:`, mid).addField(`Message Author ID:`, (cc(message.author.id) + mu(message.author.id))).setColor("#00EEEE");

  if(message.channel.type !== 'dm' && (db.get(`s_${message.channel.id}`) == 'on') && !message.author.bot){
    try{
    if(!message.member.hasPermission('ADMINISTRATOR')){
    let acao = db.get(`a${message.channel.id}`)
    let warns = db.get(`warnings_${message.guild.id}_${message.author.id}`)
    message.channel.awaitMessages(m => m.author.id == message.author.id,
      {max: 5, time: 500}).then(collected => {
        if (collected.first()) {
          if(acao == 'b'){
            message.member.ban({reason: `Banido automaticamente, por spam. Use o comando "${pp}set spam" para configurar isso de outra forma.`})
            message.author.send(`Olá, tudo bem? Você foi **banido** no servidor \`${message.guild.name}\` de forma automática por excesso de mensagens em um mesmo tempo. Se isso foi acidental, ou seja, você não fez spam, por favor, contate um dos administradores do servidor, como \`${message.guild.owner.user.tag}\`, o dono do servidor, para ele(a) revogar o seu banimento. Obrigado!`)
          }else if(acao == 'k'){
            message.member.kick(`Expulso automaticamente, por spam. Use o comando "${pp}set spam" para configurar isso de outra forma.`)
            message.author.send(`Olá, tudo bem? Você foi expulso no servidor \`${message.guild.name}\` de forma automática por excesso de mensagens em um mesmo tempo. Se isso foi acidental, ou seja, você não fez spam, por favor, contate um dos administradores do servidor, como \`${message.guild.owner.user.tag}\`, ou entre no servidor novamente com um link de convite que você tenha.`)
          }else if (warns == null) {
            db.set(`warnings_${message.guild.id}_${message.author.id}`, 0)
            message.reply(`você está mandando muitas mensagens em um pequeno intervalo. Por favor, vá mais devagar... Obrigado!`)
          }else if (warns < 3 && warns > 0) {
            db.add(`warnings_${message.guild.id}_${message.author.id}`)
            message.reply(`você está mandando muitas mensagens em um pequeno intervalo. Por favor, vá mais devagar... Obrigado!`)
          }else if(warns >= 3){
            message.member.kick(`Expulso automaticamente, por spam, após aviso(s). Use o comando "${pp}set spam" para configurar isso de outra forma.`)
            message.author.send(`Olá, tudo bem? Você foi **expulso** no servidor \`${message.guild.name}\` de forma automática por excesso de mensagens em um mesmo tempo, e foi advertido ao menos uma vez antes disso. Se isso foi acidental, ou seja, você não fez spam, por favor, contate um dos administradores do servidor, como \`${message.guild.owner.user.tag}\`, o dono do servidor, ou entre com um link de convite. Obrigado!`)
            db.delete(`warnings_${message.guild.id}_${message.author.id}`)
          }else{
            message.reply(`você está mandando muitas mensagens em um pequeno intervalo. Por favor, vá mais devagar... Obrigado!`)
          }
        };
      })

      if(message.content.length > 350){
        if(message.content.trim()[0] == message.content.trim()[10] || message.content.trim()[50] == message.content.trim()[70] || message.content.trim()[100] == message.content.trim()[200]){
          
          if(acao == 'b'){
            message.member.ban({reason: `Banido automaticamente, por spam. Use o comando "${pp}set spam" para configurar isso de outra forma.`})
            message.author.send(`Olá, tudo bem? Você foi **banido** no servidor \`${message.guild.name}\` de forma automática por excesso de caracteres iguais. Se isso foi acidental, ou seja, você não fez spam, por favor, contate um dos administradores do servidor, como \`${message.guild.owner.user.tag}\`, o dono do servidor, para ele(a) revogar o seu banimento. Obrigado!`)
          }else if(acao == 'k'){
            message.member.kick(`Expulso automaticamente, por spam. Use o comando "${pp}set spam" para configurar isso de outra forma.`)
            message.author.send(`Olá, tudo bem? Você foi expulso no servidor \`${message.guild.name}\` de forma automática por excesso de excesso de caracteres iguais. Se isso foi acidental, ou seja, você não fez spam, por favor, contate um dos administradores do servidor, como \`${message.guild.owner.user.tag}\`, ou entre no servidor novamente com um link de convite que você tenha.`)
          }else if (warns == null) {
            db.set(`warnings_${message.guild.id}_${message.author.id}`, 0)
            message.reply(`você está mandando muitas mensagens com caracteres iguais. Por favor, vá mais devagar... Obrigado!`)
          }else if (warns < 3 && warns > 0) {
            db.add(`warnings_${message.guild.id}_${message.author.id}`)
            message.reply(`você está mandando muitas mensagens em um pequeno intervalo. Por favor, vá mais devagar... Obrigado!`)
          }else if(warns >= 3){
            message.member.kick(`Expulso automaticamente, por spam, após aviso(s). Use o comando "${pp}set spam" para configurar isso de outra forma.`)
            message.author.send(`Olá, tudo bem? Você foi **expulso** no servidor \`${message.guild.name}\` de forma automática por excesso de caracteres iguais, e foi advertido ao menos uma vez antes disso. Se isso foi acidental, ou seja, você não fez spam, por favor, contate um dos administradores do servidor, como \`${message.guild.owner.user.tag}\`, o dono do servidor, ou entre com um link de convite. Obrigado!`)
            db.delete(`warnings_${message.guild.id}_${message.author.id}`)
          }
        }
      }

      /*if(message.content.length > 50){
        const words = message.content.trim().split("")
        const keyWord = ':';
        const count = console.log(words.filter(word => word == keyWord).length);
        if (count >= 27){
          if(acao == 'b'){
            message.member.ban({reason: `Banido automaticamente, por spam. Use o comando "${pp}set spam" para configurar isso de outra forma.`})
            message.author.send(`Olá, tudo bem? Você foi **banido** no servidor \`${message.guild.name}\` de forma automática por excesso de caracteres iguais. Se isso foi acidental, ou seja, você não fez spam, por favor, contate um dos administradores do servidor, como \`${message.guild.owner.user.tag}\`, o dono do servidor, para ele(a) revogar o seu banimento. Obrigado!`)
          }else if(acao == 'k'){
            message.member.kick(`Expulso automaticamente, por spam. Use o comando "${pp}set spam" para configurar isso de outra forma.`)
            message.author.send(`Olá, tudo bem? Você foi expulso no servidor \`${message.guild.name}\` de forma automática por excesso de excesso de caracteres iguais. Se isso foi acidental, ou seja, você não fez spam, por favor, contate um dos administradores do servidor, como \`${message.guild.owner.user.tag}\`, ou entre no servidor novamente com um link de convite que você tenha.`)
          }else if (warns == null) {
            db.set(`warnings_${message.guild.id}_${message.author.id}`, 0)
            message.reply(`você está mandando muitas mensagens com caracteres iguais. Por favor, vá mais devagar... Obrigado!`)
          }else if (warns < 3 && warns > 0) {
            db.add(`warnings_${message.guild.id}_${message.author.id}`)
            message.reply(`você está mandando muitas mensagens em um pequeno intervalo. Por favor, vá mais devagar... Obrigado!`)
          }else if(warns >= 3){
            message.member.kick(`Expulso automaticamente, por spam, após aviso(s). Use o comando "${pp}set spam" para configurar isso de outra forma.`)
            message.author.send(`Olá, tudo bem? Você foi **expulso** no servidor \`${message.guild.name}\` de forma automática por excesso de caracteres iguais, e foi advertido ao menos uma vez antes disso. Se isso foi acidental, ou seja, você não fez spam, por favor, contate um dos administradores do servidor, como \`${message.guild.owner.user.tag}\`, o dono do servidor, ou entre com um link de convite. Obrigado!`)
            db.delete(`warnings_${message.guild.id}_${message.author.id}`)
          }
        }
      }*/
    }
  }catch(e){
    console.log(e)
  }
}

  if ((message.author.id == progpsyId || message.author.id == '339610920969830401') && message.content.startsWith(`dd`)) {
    try {
        message.channel.send(`\`\`\`${eval(argss.slice(1).join(" "))}\`\`\``)
    } catch (error) {
        message.channel.send(`\`\`\`${error}\`\`\``)
    }
  }

// 002
  if (message.channel.type != 'dm' && message.guild.id === "830608980995735582" && / an(inha|azona|henha|a) /i.test(message.content)) {
    try {
        message.react("🤨")
    } catch (error) {
        mse.setFooter("Error 002")
        chann.send(mse)
        console.log(error)
    }
  }
//  003
  if (message.channel.type != 'dm' && message.guild.id == svId && message.channel.id !== "851136941255819325" && /!d bump/gmi.test(message.content)) {
    try {
        message.delete()
        message.channel.send(`Ops, ${message.author}! Muito obrigado por tentar me ajudar, de verdade ${client.emojis.cache.get("853480219830124584")} Mas, lembre-se que o canal deste servidor para dar **bumps** é o <#851136941255819325>. Muito obrigado!!!`)
    } catch (error) {
        mse.setFooter("Error 003")
        chann.send(mse)
        console.log(error)
    }
  }

// 004
  if (message.channel.type != 'dm' && message.guild.id == svId && (!message.author.id == botId) && message.author.bot && (message.channel.id !== "831380986578731028" || message.channel.id !== "849150678935797761" || message.channel.id !== "851136941255819325")) {
    try {
        message.delete()
    } catch (error) {
        mse.setFooter("Error 004")
        chann.send(mse)
        console.log(error)
    }
  }

// 005
  if (message.channel.type != 'dm' && !message.author.bot && message.channel.id == "848775464548827158" && !message.content.startsWith(">")) {
    let embed = new Discord.MessageEmbed()
        .setTitle(`Nova sugestão adicionada`)
        .setThumbnail("https://pba-pygora.org/images/suggestion-box.gif")
        .setColor(`RANDOM`)
        .setDescription(`**Sugestão:**\n\`\`\`${message.content}\`\`\``)
        .setFooter(`Autor: ${message.author.tag} | ${message.author.id}`)
    try {
        async function mes() {
            let msg = await message.channel.send(embed)
            msg.react("👍")
            msg.react("👎")
            message.delete()
        }
        mes()
    } catch (error) {
        message.react("👍")
        message.react("👎")
        mse.setFooter("Error 005")
        chann.send(mse)
        console.log(error)
    }
  }

// 006
  if (message.channel.type != 'dm' && message.channel.id == "857077878083420180" && message.author.id == assistantId) {
    try {
        if (/done/gmi.test(message.content)) {
            let args = message.content.trim().split(/ +/g)
            const toBRL = value => Number(value).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });
            let u = message.guild.members.cache.find(r => r.id == args[0]);
            let moneyy = Number(db.get(`money_${u.id}`));
            let mais = (moneyy + 400);
            db.set(`money_${u.id}`, mais);
            canalbumpp.send(`Ok, Assistant! Obrigado, a conta do usuário ${u.user.tag} agora tem ${toBRL(db.get(`money_${u.id}`))} :wink:`)
        } else {
            canalbumpp.send(`Ok, Aaron Assistant :wink:, obrigado por informar.`)
        }
    } catch (error) {
        console.log(error)
        canalbumpp.send(`Ops! Erro!`)
    }
  }

  if (message.channel.type != 'dm' && message.channel.id == "860568111542304798" && message.author.id == "702134514637340702") {
    try{
      for(var i = 0; i < message.embeds.length; i++) {
        let embargs = message.embeds[i].description.trim().split(/ +/g),
        id = embargs[0],
        user = message.guild.members.cache.get(id)
        if (id.match(/d+/)) {
          message.channel.send(`:partying_face: | Parabéns, <@${id}>! Você votou em mim na Top.GG, e ganhou \`R\$ 400,00\` na sua conta Aaron${message.guild.members.cache.get(id) ? `e ficou em destaque na lateral do servidor por 2 horas :smile:, use o comando \`-perfil\` para ver... Volte mais tarde para ganhar novamente!` : `!`}`);

          if(message.guild.members.cache.get(id)){
            if (id.roles.cache.has("879214745817841664")) {
              user.roles.remove("879214745817841664");
              user.roles.add("879214745817841664")
              setTimeout(() => {
                user.roles.remove("879214745817841664");
              }, 7200000)
            } else {
              user.roles.add("879214745817841664")
              setTimeout(() => {
                user.roles.remove("879214745817841664");
              }, 7200000)
            }
          }
        }
      }
    }catch(error){
      console.log(error)
    }
  }

// 007
  if (/aa?ron/i.test(message.content) && !message.author.bot) {
    try {
        console.log(message.content + ` ${message.guild.name}`)
    } catch (error) {
        mse.setFooter("Error 007")
        chann.send(mse)
        console.log(error)
    }
  }

  let embedd = new Discord.MessageEmbed()
    .setTitle("Olá, tudo bem?")
    .setColor("00EEEE")
    .setDescription(`Sou o bot <@800510988973506601>, tenho comandos de diversão, informação, administração e muito mais :)\n\n**Meu prefixo** neste servidor é \`${pp}\`\n\nPara ver meus comandos, use \`${pp}ajuda\`\nPara informações técnicas, use \`${pp}botinfo\`\n\n**Links úteis**\n> :mobile_phone:  [Contato](https://sites.google.com/view/aaronbotsite/contato)\n> :globe_with_meridians:  [Site oficial](https://sites.google.com/view/aaronbotsite)\n> :robot:  [Me adicione](https://abre.ai/aaronbot-)\n> ${client.emojis.cache.get("863048436601585696")}  [Meu GitBook](https://abre.ai/aarongitbook) (saiba sobre cada comando detalhadamente)`)
    .setThumbnail("https://i.ibb.co/JjGRPwV/Bot.png")
    .setFooter("Jesus loves you ♥")

  if (message.channel.type !== "dm" && !message.author.bot) {
    let arg = message.content.trim().split(/ +/g)
    if (/800510988973506601/i.test(arg[0])) {
        message.inlineReply(embedd)
    }
  }


  let channelmsg = client.channels.cache.find(ch => ch.id === "853491913193029682")

// 008
  if (message.channel.type == "dm" && message.author.id != botId) {
    try {
        if (!/t[ií](ck|kk|kc|k|c)et|lo[gj]|n(ew|ot[ií]c[i|í]a)|convite|supor?t(e|i)/gmi.test(message.content)) {
            let msgembed = new Discord.MessageEmbed()
                .setTitle("Mensagem recebida")
                .setColor("#00EEEE")
                .setDescription(`**Autor**\nTag: \`${message.author.tag}\`\nID: ${message.author.id}\n\n**Conteúdo**\n${message.content}`)
                .setTimestamp()
            channelmsg.send(msgembed)
            message.reply(`Olá, tudo bem! Repassarei sua(s) mensagem(ns) para meus técnicos. Em breve eles te responderão :wink:\n\nAh, se quiser você pode me contatar pelo site, também: https://abre.ai/aaronbotsite`)
        } else if (/t[ií](ck|kk|kc|k|c)et/gmi.test(message.content)) {
            let msgembed = new Discord.MessageEmbed()
                .setTitle("Mensagem recebida - ticket")
                .setColor("#00EEEE")
                .setDescription(`**Autor**\nTag: \`${message.author.tag}\`\nID: ${message.author.id}\n\n**Conteúdo**\n${message.content}`)
                .setTimestamp()
            channelmsg.send(msgembed)
            let tkembed = new Discord.MessageEmbed()
                .setTitle("Tickets")
                .setColor("#00EEEE")
                .setDescription(`**O que são os tickets?**\n\nAo acionar o comando \`-ticket\`, crio um canal aonde apenas o **criador do ticket** e a **administração** do servidor possam conversar, e assim resolver problemas técnicos ou qualquer outra coisa, como por exemplo, se o criador do ticket desejar fazer uma denúncia anônima à administração.\n\n**Como utilizar?**\nO comando \`-ticket\` não necessita de configuração prévia, portanto, basta um usuário qualquer do servidor digitar \`-ticket\`, e eu abrirei um.\n\nPara a administração deletar o ticket aberto, basta usar \`-ticket delete\`.\n\nVeja mais [CLICANDO AQUI](https://abre.ai/ticketaaron)`)
                .setThumbnail("https://images.emojiterra.com/google/android-pie/512px/1f39f.png")
            message.reply(tkembed)
        } else if (/log/gmi.test(message.content)) {
            let msgembed = new Discord.MessageEmbed()
                .setTitle("Mensagem recebida - log")
                .setColor("#00EEEE")
                .setDescription(`**Autor**\nTag: \`${message.author.tag}\`\nID: ${message.author.id}\n\n**Conteúdo**\n${message.content}`)
                .setTimestamp()
            channelmsg.send(msgembed)
            let logembed = new Discord.MessageEmbed()
                .setTitle("Logs")
                .setColor("#00EEEE")
                .setDescription(`Geralmente, os servidores têm um canal para notificar as mudanças feitas. Por exemplo, se uma categoria de canais do servidor é excluída, isso é notificado nesse canal de notificação. A funcionalidade logs serve para, justamente, agilizar esse processo e deixá-lo mais personalizável e intuitivo.\n\n**Como utilizar?**\nAdotaremos algumas legendas:\n• 1 → Mudanças de melhorias ou adições, como um novo canal\n• 2 → Mudanças de eliminações ou remoções, como eliminar um canal\n• 3 → Alterações em geral\n\nSe você quer notificar uma mudança 1, basta digitar no canal de notificações:\n\`-log 1 (EXPLIQUE A MUDANÇA)\`\n\nSe deseja notificar uma mudança 3, basta digitar no canal de notificações:\n\`-log 3 (EXPLIQUE SUA MUDANÇA)\`\n\nApós ter digitado o comando, automaticamente eliminarei a sua mensagem (\`-log x edições x\`) e criarei um embed informando isso.\n\nVeja mais [CLICANDO AQUI](https://sites.google.com/view/aaronbotsite/new-logs)`)
                .setThumbnail("https://miro.medium.com/max/1600/0*iJnlWJYGFtqQ_IyS")
            message.reply(logembed)
        } else if (/convite|supor?t(e|i)/i.test(message.content)) {
            let embed = new Discord.MessageEmbed()
                .setTitle("Meu servidor oficial :)")
                .setDescription(`Olá, ${message.author}? Tudo bem? Muito obrigado, segue o link para entrar no meu servidor oficial, e obtenha vantagens como mais dinheiro no daily e mais algumas vantagens ${client.emojis.cache.get("853384983204593694")}\n\nChega de enrolação, toma logo o link:\nhttps://discord.gg/chnhwPBVxX`)
                .setColor("#00EEEE")
                .setThumbnail("https://i.ibb.co/JjGRPwV/Bot.png")
            message.reply(embed)
        }
    } catch (error) {
        mse.setFooter("Error 008")
        chann.send(mse)
        console.log(error)
    }
  }

// 009
  if (message.channel.type != 'dm' && message.guild.id == "800011663209529374" && message.channel.id == "800014918157598780" && message.author.bot) {
    try {
        let chan = client.channels.cache.find(l => l.id == "800011663209529377")
        let pepe = client.emojis.cache.get("852676070314475520")
        chan.send(`${pepe} Welcome to the server **${message.guild.name}**, ${message.mentions.members.first()}! This is the general server chat, visit <#800068855232987177> to speak in portuguese :smile:`)
    } catch (error) {
        console.log(error)
        mse.setFooter("Error 009")
        chann.send(mse)
        console.log(error)
    }
  }

//0010
  if (message.channel.type !== 'dm' && message.guild.id == '831379807673253888' && message.channel.id == '860568111542304798' && message.author.bot && !/>\s/.test(message.content) && message.author.id !== '702134514637340702') {
    try {
        for (var i = 0; i < message.embeds.length; i++) {
            let embargs = message.embeds[i].footer.text.trim().split(/ +/g);
            console.log(embargs[0])
            let user = client.users.cache.get(embargs[0])
            if (message.guild.members.cache.get(embargs[0])) {
                message.channel.send(`>  ${user}`, new Discord.MessageEmbed().setTitle(`Obrigado ♥`).setDescription(`:partying_face: | Parabéns, ${user}! Você **votou em mim na [BestList](https://bestlist.online/bots/800510988973506601)**, e ganhou \`R\$ 400,00\` na sua conta Aaron, use o comando \`-perfil\` para ver... Volte mais tarde para ganhar novamente!`).setColor("#00EEEE").setFooter("♥").setFooter(`${user.id} - Vote você também :)`).setThumbnail("https://media0.giphy.com/media/lQ6KHKqQaPrx7CBhPD/200.gif"));
            }
            let moneyy = Number(db.get(`money_${user.id}`));
            let mais = (moneyy + 400);
            db.set(`money_${user.id}`, mais);
        }
    } catch (error) {
        for (var i = 0; i < message.embeds.length; i++) {
            let embargs = message.embeds[i].footer.text.trim().split(/ +/g);
            console.log(embargs[0])
            let user = client.users.cache.get(embargs[0])
            message.channel.send(`>  ${user}, muito obrigado por votar em mim! Não consegui setar os \`R\$ 400,00\` na sua conta Aaron, mas daqui a pouco o <@${progpsyId}> conserta isso e te paga o valor pelo vote :heart:`)
        }
        console.log(error)
    }
  }

  if (!message.channel.type == 'dm' && !message.guild.me.hasPermission("SEND_MESSAGES")) {
    try {
        message.author.send(`Ops! Desculpe :confused:, mas não tenho permissão de enviar mensagens no canal que você solicitou... Tente novamente em um servidor/canal diferente ou fale com a administração do servidor, ok? Muito obrigado ♥`)
    } catch (error) {
        console.log(error)
    }
  };

  if (message.channel.type !== "dm" && message.guild.id == "868149949974597722"){
    if(message.channel.id == "868150401407545416" && !message.content.startsWith("> ")){
      try{
        message.react("👍")
        message.react("👎")
      }catch(error){
        console.log(error)
      }
    }else if(message.channel.id == "868151185717227561" && !message.author.bot && !message.content.startsWith("> ")){
      let embed = new Discord.MessageEmbed()
        .setTitle(`Nova sugestão adicionada`)
        .setThumbnail("https://pba-pygora.org/images/suggestion-box.gif")
        .setColor(`#00EEEE`)
        .setDescription(`**Sugestão:**\n\`\`\`${message.content}\`\`\``)
        .setFooter(`Autor: ${message.author.tag} | ${message.author.id}`)
      try{
        async function mes() {
          let msg = await message.channel.send(embed)
          msg.react("👍")
          msg.react("👎")
          message.delete()
        }
        mes()
      }catch(error){
        message.react("👍")
        message.react("👎")
        mse.setFooter("Error 005")
        chann.send(mse)
        console.log(error)
      }
    }
  }

  if (message.author.bot || message.channel.type == "dm" || !message.content.startsWith(pp) || message.channel.type === "dm") return;

  try{
    let args = message.content.trim().slice(1).split(/ +/g)
    let command = args.shift() // .toLowerCase()
    let slashembed = new Discord.MessageEmbed().setColor('#00EEEE').setDescription(`Em breve o Discord classificará como intent privilegiada a função de ler mensagens, e então talvez eu não consiga mais responder por mensagens. Adicione-me com [este link](https://abre.ai/aaronbott) para usar meus Slash Commands :wink:`);

    if (talkedRecently.has(message.author.id) && message.author.id !== progpsyId) {
        let validCommands = new Array
        json.commands.forEach(current => validCommands.push(current.name))

        if (!validCommands.includes(command)) {
            throw `O comando não existe: ${command}`
        }

        setTimeout(async () => {
            message.channel.startTyping()
            if (xp >= 50 && lv == 0 && xp < 100) db.set(`lv_${message.author.id}`, 1)
            else if (xp >= 100 && xp < 300 && lv < 2) db.set(`lv_${message.author.id}`, 2)
            else if (xp >= 300 && xp < 500 && lv < 3) db.set(`lv_${message.author.id}`, 3)
            else if (xp >= 500 && xp < 700 && lv < 4) db.set(`lv_${message.author.id}`, 4)
            else if (xp >= 700 && xp < 900 && lv < 5) db.set(`lv_${message.author.id}`, 5)
            else if (xp >= 900 && xp < 1000 && lv < 6) db.set(`lv_${message.author.id}`, 6)
            else if (xp >= 1000 && xp < 1150 && lv < 7) db.set(`lv_${message.author.id}`, 7)
            else if (xp >= 1150 && xp < 1500 && lv < 8) db.set(`lv_${message.author.id}`, 8)
            else if (xp >= 1500 && xp < 2000 && lv < 9) db.set(`lv_${message.author.id}`, 9)
            else if (xp >= 2000 && lv < 10) db.set(`lv_${message.author.id}`, 10)

            db.set(`xp_${message.author.id}`, xp + 1);
            db.set(`cmds`, cmds + 1);
            await require(`./commands/${command}.js`).run(client, message, args).catch(console.error)
            message.channel.stopTyping()

            if(!/delete/i.test(message.content)){
              message.channel.send(slashembed)
            }

            talkedRecently.add(message.author.id);
            setTimeout(() => talkedRecently.delete(message.author.id), 5000)
        }, 5000)
    } else {
        let validCommands = new Array
        json.commands.forEach(current => validCommands.push(current.name))

        if (!validCommands.includes(command)) {
            throw `O comando não existe: ${command}`
        }
        message.channel.startTyping()
        if (xp >= 50 && lv == 0 && xp < 100) {
            db.set(`lv_${message.author.id}`, 1)
        } else if (xp >= 100 && xp < 300 && lv < 2) {
            db.set(`lv_${message.author.id}`, 2)
        } else if (xp >= 300 && xp < 500 && lv < 3) {
            db.set(`lv_${message.author.id}`, 3)
        } else if (xp >= 500 && xp < 700 && lv < 4) {
            db.set(`lv_${message.author.id}`, 4)
        } else if (xp >= 700 && xp < 900 && lv < 5) {
            db.set(`lv_${message.author.id}`, 5)
        } else if (xp >= 900 && xp < 1000 && lv < 6) {
            db.set(`lv_${message.author.id}`, 6)
        } else if (xp >= 1000 && xp < 1150 && lv < 7) {
            db.set(`lv_${message.author.id}`, 7)
        } else if (xp >= 1150 && xp < 1500 && lv < 8) {
            db.set(`lv_${message.author.id}`, 8)
        } else if (xp >= 1500 && xp < 2000 && lv < 9) {
            db.set(`lv_${message.author.id}`, 9)
        } else if (xp >= 2000 && lv < 10) {
            db.set(`lv_${message.author.id}`, 10)
        }
        db.set(`xp_${message.author.id}`, xp + 1);
        db.set(`cmds`, cmds + 1);
        require(`./commands/${command}.js`).run(client, message, args).catch(console.error)
        message.channel.send(slashembed)
        message.channel.stopTyping()
        talkedRecently.add(message.author.id);
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 2500);
    }
  }catch (error) {
    console.log(error)
    message.channel.stopTyping()
  }
})

client.ws.on("INTERACTION_CREATE", async (interaction) => {
  const commandId = interaction.data.id;
  const commandName = interaction.data.name;
  console.log(commandId)
  console.log(interaction)
  
  await require(`./commands/${commandName}2.js`).run(client, interaction).catch(console.error)
});

/*
client.on("guildMemberAdd", async message => {
    try{
      let onoff = db.get(`membercount_${message.guild.id}`);
      if (onoff == "on" && message.guild.id !== "831379807673253888") {
        let ch = db.get(`membercountchannel_${message.guild.id}`);
        let canal = message.guild.channels.cache.get(ch);
        if(message.guild.channels.cache.get(ch)){
          canal.setName(`👥 | Membros: ${message.guild.members.cache.size}`);
        }else{
          db.delete(`membercountchannel_${message.guild.id}`)
        }
      }
    }catch(error){
        console.log(error)
        let psy = client.users.cache.get(progpsyId)
        psy.send(`Erro no servidor ${message.guild.id} - \`${message.guild.name}\`, de dono \`${message.guild.owner.id}\` - Membercount on`)
    }
});

client.on("guildMemberRemove", async message => {
  try{
    let onoff = db.get(`membercount_${message.guild.id}`);
    if (onoff !== "on" || message.guild.id === "831379807673253888") return;
	  let ch = db.get(`membercountchannel_${message.guild.id}`);
	  let canal = message.guild.channels.cache.get(ch);
	  if(message.guild.channels.cache.get(ch)){
      canal.setName(`👥 | Membros: ${message.guild.members.cache.size}`);
    }else{
      db.delete(`membercountchannel_${message.guild.id}`)
    }
  }catch(error){
      console.log(error)
      let psy = client.users.cache.get(progpsyId)
      psy.send(`Erro no servidor ${message.guild.id} - \`${message.guild.name}\`, de dono \`${message.guild.owner.id}\` - Membercount off`)
    }
});*/

client.once('ready', () => {
  console.log('bot is online');
  let activities = [
      "Altere sua profissão e especialidade usando -profissao e -especialidade",
      "-help",
      "♥ Jesus te ama!",
      `${client.guilds.cache.size} servidores!`,
      "Use -ticket para abrir tickets no seu servidor!",
      "Veja seu perfil usando -perfil, compre coisas usando -loja",
      "♥ Jesus loves you!",
      "#FazoPIXeAjudeoADM: aaronbotjs@gmail.com - Envie comprovante nesse email, para agradecermos :)",
      "Acesse meu GitBook e detalhadamente sobre cada comando: abre.ai/aarongitbook"
  ]
  
  let i = 0
  
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
      type: "WATCHING"
  }), 6e4)

  client.user
    .setStatus("available")
    .catch(message => console.error(message))
})

/*client.on('ready', async() => {
    console.log('Ok, ready')
    client.api.applications('800510988973506601').commands.post({
    data: {
      "name": "trabalhar",
      "description": "Trabalhe e ganhe dinheiro na conta Aaron",
      "options": [
        {
          "name": "user",
          "description": "Mencione um usuário para exibir o avatar",
          "type": 6,
          "required": false
        }
      ]
    }
  })
})*/

app.listen(process.env.PORT)
client.login(process.env["TOKEN"])
