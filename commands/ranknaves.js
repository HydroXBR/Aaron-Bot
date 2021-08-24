const { MessageEmbed } = require('discord.js'),
naves = require('../naves.json'),
db = require('quick.db'),
words = require('number-to-words'),
replace = require('string.prototype.replaceall')


exports.run = async(client, message, args) => {
  const pp = db.get(`prefix_${message.guild.id}`) || `-`;
  if(message.guild.id !== '860971590996459540' && message.guild.id !== '876830396074065960' && message.guild.id !== '863615736899436574') return message.inlineReply('Comando restrito!');

  const n = s => words.toWords(s).replace("forty-two", "four::two").replace("thirty-one", "three::one").replace("thirty-two", "three::two").replace("thirty-three", "three::three").replace("thirty-four", "three::four").replace("thirty-five", "three::five").replace("thirty-six", "three::six").replace("thirty-seven", "three::seven").replace("thirty-eight", "three::eight").replace("thirty-nine", "three::nine").replace("twenty-six", "two::six").replace("twenty-seven", "two::seven").replace("twenty-eight", "two::eight").replace("twenty-nine", "two::nine").replace("twenty-one", "two::one").replace("twenty-two", "two::two").replace("twenty-three", "two::three").replace("twenty-four", "two::four").replace("twenty-five", "two::five").replace("forty-one", "four::one").replace("eleven", "one::one").replace("ten", "one::zero").replace("twelve", "one::two").replace("thirteen", "one::three").replace("fourteen", "one::four").replace("fifteen", "one::five").replace("sixteen", "one::six").replace("seventeen", "one::seven").replace("eighteen", "one::eight").replace("nineteen", "one::nine").replace("twenty", "two::zero").replace("thirty", "three::zero").replace("forty", "four::zero");

  const array = [];
  const array2 = [];
  const azul = [];
  const preta = [];
  const marrom = [];
  const violeta = [];
  const safira = [];
  const verde = [];
  const vermelha = [];
  const branca = [];
  const cinza = [];
  const rosa = [];
  const prata = [];
  const ciana = [];
  const lilas = [];
  const amarela = [];
  const azul1 = [];
  const preta1 = [];
  const marrom1 = [];
  const violeta1 = [];
  const safira1 = [];
  const verde1 = [];
  const vermelha1 = [];
  const branca1 = [];
  const cinza1 = [];
  const rosa1 = [];
  const prata1 = [];
  const ciana1 = [];
  const lilas1 = [];
  const amarela1 = [];


  for(var i = 0; i < naves.users.length; i++){
    if(naves.users[i].cor == 'azul'){
      azul.push(naves.users[i].pts)
      azul1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'preta'){
      preta.push(naves.users[i].pts)
      preta1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'marrom'){
      marrom.push(naves.users[i].pts)
      marrom1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'violeta'){
      violeta.push(naves.users[i].pts)
      violeta1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'safira'){
      safira.push(naves.users[i].pts)
      safira1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'verde'){
      verde.push(naves.users[i].pts)
      verde1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'vermelha'){
      vermelha.push(naves.users[i].pts)
      vermelha1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'branca'){
      branca.push(naves.users[i].pts)
      branca1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'cinza'){
      cinza.push(naves.users[i].pts)
      cinza1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'rosa'){
      rosa.push(naves.users[i].pts)
      rosa1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'prata'){
      prata.push(naves.users[i].pts)
      prata1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'ciana'){
      ciana.push(naves.users[i].pts)
      ciana1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'lilás'){
      lilas.push(naves.users[i].pts)
      lilas1.push(naves.users[i].nick)
    }else if(naves.users[i].cor == 'amarela'){
      amarela.push(naves.users[i].pts)
      amarela1.push(naves.users[i].nick)
    }
  }

  const ns = {
    "nave":[
        {
          "cor": "azul",
          "soma": azul[0] + azul[1] + azul[2],
          "nicks": azul1,
          "emoji": ":blue_circle:"
        },
        {
          "cor": "preta",
          "soma": preta[0] + preta[1] + preta[2],
          "nicks": preta1,
          "emoji": "<:black_circle:876702068126146601>"
        },
        {
          "cor": "marrom",
          "soma": marrom[0] + marrom[1] + marrom[2],
          "nicks": marrom1,
          "emoji": ":brown_circle:"
        },
        {
          "cor": "violeta",
          "soma": violeta[0] + violeta[1] + violeta[2],
          "nicks": violeta1,
          "emoji": "<:violet_circle:876700237450846208>"
        },
        {
          "cor": "safira",
          "soma": safira[0] + safira[1] + safira[2],
          "nicks": safira1,
          "emoji": "<:sapphire_circle:876699904368586782>"
        },
        {
          "cor": "verde",
          "soma": verde[0] + verde[1] + verde[2],
          "nicks": verde1,
          "emoji": ":green_circle:"
        },
        {
          "cor": "vermelha",
          "soma": vermelha[0] + vermelha[1] + vermelha[2],
          "nicks": vermelha1,
          "emoji": ":red_circle:"
        },
        {
          "cor": "branca",
          "soma": branca[0] + branca[1] + branca[2],
          "nicks": branca1,
          "emoji": ":white_circle:"
        },
        {
          "cor": "cinza",
          "soma": cinza[0] + cinza[1] + cinza[2],
          "nicks": cinza1,
          "emoji": "<:grey_circle:876700805816795166>"
        },
        {
          "cor": "rosa",
          "soma": rosa[0] + rosa[1] + rosa[2],
          "nicks": rosa1,
          "emoji": "<:pink_circle:876700572085006386>"
        },
        {
          "cor": "prata",
          "soma": prata[0] + prata[1] + prata[2],
          "nicks": prata1,
          "emoji": "<:silver_circle:876701736352493578>"
        },
        {
          "cor": "ciana",
          "soma": ciana[0] + ciana[1] + ciana[2],
          "nicks": ciana1,
          "emoji": "<:cyan_circle:876697660151721994>"
        },
        {
          "cor": "lilás",
          "soma": lilas[0] + lilas[1] + lilas[2],
          "nicks": lilas1,
          "emoji": ":purple_circle:"
        },
        {
          "cor": "amarela",
          "soma": amarela[0] + amarela[1] + amarela[2],
          "nicks": amarela1,
          "emoji": ":yellow_circle:"
        }
      ]
    };
    

    for(var e = 0; e < ns.nave.length; e++){
      const u = {
        nave: {
          color : ns.nave[e].cor,
          pts : ns.nave[e].soma,
          users : ns.nave[e].nicks.join(", "),
          emoji: ns.nave[e].emoji
	      }
      };

      for (var key in u) {
	      array2.push(u[key]);
      }

      array2.sort(function(a, b){
        return b.pts - a.pts;
      });

      for (var i = 0; i < array2.length; i++) {
	      array2[i].rank = i + 1;
      }
    }

    for(var i = 0; i < naves.users.length; i++){
      const b = {
        user: {
          nick: naves.users[i].nick,
          pts: naves.users[i].pts,
          nave: naves.users[i].cor
	      } 
      };

      for (var key in b) {
	      array.push(b[key]);
      }

      array.sort(function(a, b){
        return b.pts - a.pts;
      });

      for(var i = 0; i < array.length; i++){
	      array[i].rank = i + 1;
      }
    }
  console.log(array)
  console.log(array2)

  const embed = new MessageEmbed()
    .setColor('#00EEEE')
    .setThumbnail('https://img.ibxk.com.br/2015/10/programas/143335778.png');
  const embed2 = new MessageEmbed()
    .setColor('#00EEEE')
    .setThumbnail('https://img.ibxk.com.br/2015/10/programas/143335778.png');

  if(!args[0]){
    let desc = `Olá, ${message.author}! Tudo bem? Então, este é o meu comando para visualização do ranking e informação sobre naves.`
    message.inlineReply(embed.setDescription(desc).addField(`Para visualizar o ranking de naves:`, `Digite: \`${pp}ranknaves naves\``).addField(`Para visualizar o ranking de usuários (pontos):`, `Digite: \`${pp}ranknaves users\``).addField(`Para visualizar as naves e seus integrantes:`, `Digite: \`${pp}ranknaves info\``))
  }else if(/nave/i.test(args[0])){
    for(var i = 0; i < array2.length; i++){
      embed.addField(`:${n(array2[i].rank)}: - ${array2[i].emoji} Nave ${array2[i].color}`, `Total de pontos: \`${array2[i].pts}\``).setTitle(`Ranking de naves - pontuação`).setFooter(`Última atualização: ${naves.refresh[0].date} - ${naves.refresh[0].hour}`)
    }
    message.inlineReply(embed)
  }else if(/users/i.test(args[0])){
    for(var i = 0; i < array.length; i++){
      embed.addField(`:${n(array[i].rank)}: - ${array[i].nick}`, `Pontos: \`${array[i].pts}\` | Nave: \`${array[i].nave}\``).setTitle(`Ranking de naves - pontuação`).setFooter(`Última atualização: ${naves.refresh[0].date} - ${naves.refresh[0].hour}`)
    }
    for(var i = 25; i < array.length; i++){
      embed2.addField(`:${n(array[i].rank)}: - ${array[i].nick}`, `Pontos: \`${array[i].pts}\` | Nave: \`${array[i].nave}\``).setTitle(`Ranking de naves - pontuação`).setFooter(`Última atualização: ${naves.refresh[0].date} - ${naves.refresh[0].hour}`)
    }

    message.inlineReply(embed.setTitle('Ranking de usuários'))
    message.channel.send(embed2)
  }else if(/info/i.test(args[0])){
    for(var i = 0; i < array2.length; i++){
      embed.addField(`${array2[i].emoji} Nave ${array2[i].color}`, `Tripulantes: \`${array2[i].users}\``).setTitle(`Informações das naves`).setFooter(`Última atualização: ${naves.refresh[0].date} - ${naves.refresh[0].hour}`)
    }
    message.inlineReply(embed)
  }
}