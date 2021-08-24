const { MessageEmbed } = require("discord.js"),
  db = require("quick.db")

module.exports.run = async (client, message, args) => {
  const prefixx = db.get(`prefix_${message.guild.id}`);
  const pp = prefixx == null ? `-` : prefixx;
  const ctest = client.channels.cache.get('831211318081618010');
  const dm = client.channels.cache.get('853491913193029682')
  
  if (message.author.id === "755162323026706583" && message.channel.id == "831211318081618010") {
    //-----------------image news and colors--------------------
    let jp = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Jovem_Pan_logo_2018.svg/1280px-Jovem_Pan_logo_2018.svg.png", jpc = "#CD0000"
    let dp = "https://scontent.fpll8-1.fna.fbcdn.net/v/t1.18169-9/10390115_1494620537420814_5891908702348014095_n.png?_nc_cat=109&ccb=1-3&_nc_sid=7aed08&efg=eyJpIjoidCJ9&_nc_eui2=AeFR9d1kgtNoJqUvkkNwbyf0vPV_fTweNBm89X99PB40GVBqdPWKgmXrmlgPIAqGdA2UtKD_HscHx1PDlQoGF3Xl&_nc_ohc=7VVAxpqXVrcAX-ycFSO&_nc_ht=scontent.fpll8-1.fna&oh=b2960fd01179fdd44e9698d29186f2f8&oe=60B8DF8C", dpc = "#FF0000"
    let band = "https://logodownload.org/wp-content/uploads/2014/02/band-logo-tv-3.png", bandc = "#32CD32"
    let g1 = "https://logodownload.org/wp-content/uploads/2016/10/g1-logo.png", g1c = "#FF0000"
    let r7 = "https://logodownload.org/wp-content/uploads/2017/11/r7-logo.png", r7c = "#4682B4"
    let pd360 = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Poder360_Avatar_laranja.png", pd360c = "#FF4500"
    let tw = "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png", twc = "#00BFFF"
    let veja = "https://logodownload.org/wp-content/uploads/2017/04/veja-logo-8.png", vejac = "#8B0000"
    let istoe = "https://danielbydlowski.com/wp-content/uploads/2017/02/logo-istoe.png", istoec = "#EE0000"
    let uol = "https://i.pinimg.com/originals/56/39/ac/5639aca8a7c6ffdb2565cc0fc0d60c85.png", uolc = "#FF7F24"
    let jco = "https://pbs.twimg.com/profile_images/994303995467501568/lgtYfbKy.jpg", jcoc = "#3A5FCD"
    let ge = "https://s2.glbimg.com/qAiq9Ny0KA4EmGK-aiRLQ8-y3-s=/0x0:2048x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/f/1/ctmjQ9SOypbLkmmJyMuw/ge.png", gec = "#32CD32"
    let tl = "https://1.gravatar.com/avatar/1dfd4125acb8a6c6bda0eecc57491b52?s=300&d=identicon&r=G", tlc = "#006400"
    let tt = "https://yt3.ggpht.com/ytc/AAUvwnhM_YKjjUTznaHDxA5rX0tOCxcOVB5GbZkFi8PLV-4=s900-c-k-c0x00ffffff-no-rj", ttc = "#FF7F00"
    let cp = "https://i2.wp.com/conexaopolitica.com.br/wp-content/uploads/2019/02/site-conexao-politica-card-logo-e1616548307381.png", cpc = "#000080"
    let aaron = "https://i.ibb.co/JjGRPwV/Bot.png", aaronc = "#48D1CC"
    let metro = "https://educador.art.br/uploads/0db75-11880443_1525178797772098_320929276549507197_n.png", metroc = "#FF4040"
    let cnn = "https://logosmarcas.net/wp-content/uploads/2020/11/CNN-Logo.png", cnnc = "#FF0000";
    let terra = "https://piolholess.com.br/wp-content/uploads/2019/01/terra-logo-white-bg-v3.jpg", terrac = "#FF8C69"
    let ebc = "https://www.navecriativa.com/wp-content/uploads/2020/07/b7tGNbLK_400x400.jpg", ebcc = "#008B45";
    let sbt = "https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/1200px-Logotipo_do_SBT.svg.png", sbtc = "#FF7F50"
    let ctech = "https://img.canaltech.com.br/canaltech-512.png", ctechc = "#00B2EE"
    let tcm = "https://play-lh.googleusercontent.com/R53ESBaxFIvWC6wX0dDVYLlu0xV5zS6wijC3EnL-a04qS1W6dhERahaO0bF_gWFOEsg", tcmc = "#00B2EE"

    //-----------------embed content--------------------

    let title = "Processo de Jeff Bezos deve atrasar (mais) o retorno da humanidade à Lua"
    let subtitle = "Blue Origin processou a NASA após a agência espacial anunciar a SpaceX como a única vencedora do contrato para o desenvolvimento do novo lander lunar"
    let content = "Na semana passada, a Blue Origin, empresa fundada por Jeff Bezos, processou a NASA devido ao contrato para o desenvolvimento do novo lander lunar para o programa Artemis. Contudo, Bill Nelson, administrador da NASA, afirma que esse novo desdobramento deverá, sim, resultar em ainda “mais atrasos” para cumprir o objetivo de levar astronautas novamente para a superfície lunar, que estava estimado para 2024.\n\nEm sua fala, Nelson explicou que os advogados do Departamento de Justiça são responsáveis pelo caso, e não a NASA. “Mas o meu entendimento dos nossos advogados, que estão em contato com os do Departamento de Justiça, é que eles devem ter uma ideia do cronograma avançando nas próximas duas semanas”, disse ele, em entrevista.\n\nA Blue Origin processou a NASA após a agência espacial anunciar a SpaceX como a única vencedora do contrato para o desenvolvimento do novo lander lunar, sendo que a disputa contava também com a empresa Dynetics. A empresa de Bezos não gostou do resultado e, desde então, vem lutando para mudar a decisão da NASA — e o capítulo mais recente do conflito surgiu com o processo da Blue Origin contra a agência espacial.\n\nComo resultado, o contrato para o desenvolvimento do lander lunar foi pausado pela segunda vez — a primeira aconteceu quando a Blue Origin e a Dynetics apresentaram protestos contra a escolha, que acabaram rejeitados por parte do órgão responsável —, e deverá ficar suspenso até o dia 1º de novembro. Nelson ressaltou que, agora, a questão não está mais nas mãos da NASA, “mas sim no sistema legal e no Departamento de Justiça”."
    let link = "https://canaltech.com.br/espaco/processo-de-jeff-bezos-deve-atrasar-mais-o-retorno-da-humanidade-a-lua-193481/";
    let leiamais = `\n\n[Leia mais clicando aqui](${link})`
    let image = "https://t.ctcdn.com.br/SCL3_MQaC8IpFkOiWH4zBUkhVhA=/660x0/smart/i442525.jpeg"
    let footer = `\n\n\n*Hey! Se quiser que eu envie notícias no seu servidor, me adicione nele [CLICANDO AQUI](https://abre.ai/aaronbot-) e depois, digite: \`-addnews (marque o canal ou forneça a ID)\` → para saber mais, acesse a página News no meu site, [CLICANDO AQUI](https://abre.ai/aaronnews)*`

    //-----------------------embed----------------------

    const embed = new MessageEmbed()
      .setTitle(title)
      .setThumbnail(ctech)
      .setColor(ctechc)
      .setImage(image)
      .setDescription(`*${subtitle}*\n\n` + content + leiamais + footer)
      .setTimestamp()
      .setFooter(`Para desativar, use -addnews CANAL off`)

  //-----------------------ids----------------------
    const ids = [
      '830894076366422033',
      '831211318081618010',
      '834226860966543380',
      '839265612491522048',
      '850468062393532516',
      '853816647042990100',
      '858333125536251925',
      '866347540177092628',
      '867013042432376832',
      '867449721195069450',
      '867513583410741268',
      '862541688551112706',
      '831586982420545596',
      '869246300695179284',
      '860494939826028544',
      '869903581682229318',
      '870032869211389985',
      '870170370047610961',
      '870170008381161473',
      '870032869211389985',
      '870778315424804906',
      '871202460369293312',
      '791834940865249340',
      '871202460369293312',
      '872186629132021771',
      '871477240804827256',
      '873060679681212476',
      '873246482671747132',
      '874456528671883344',
      '874421376218456125',
      '874287568236212234',
      '773927699940114482',
      '874834969074217010',
      '875352675988955147',
      '877246613591031888',
      '877174665989226576',
      '877005487630073917',
      '876989431763062819',
      '853805805089980466',
      '876976219478949919',
      '876954815039672321',
      '877005487630073917',
      '877174665989226576',
      '877246613591031888',
      '836359755156291633',
      '877323073764872248',
      '877576132021604372',
      '869919683065815060',
      '877515847109857336'/
      '878391403917488158',
      '878062383220801656',
      '878015363651104768',
      '874955680182833202',
      '878748941276041226',
      '879039246172819457',
      '879360869354594314'
    ];

    const tech = [
      '869259854630506527',
      '870666680345440286',
      '871944652150931457',
      '874176245225639967',
      '820262038910533642',
      '879487683087466496'
    ];

  // ENVIO DAS NOTÍCIAS

    const test = new MessageEmbed().setTitle("Publicar notícia").setDescription(`Analise a notícia e verifique se tudo está correto, reaja à essa mensagem com um ✅\n\n${/tech/gmi.test(args[0]) ? `Atenção: será enviado para os canais de notícias **tecnológicas** e normais` : `A notícia será enviada apenas para canais normais`}`).setColor('#00EEEE');

    if(!args[0]){
      await ctest.send(embed)
      let msg = await message.inlineReply(test)
      msg.react('✅')

      const filter = (reaction, user) => {
	      return ['✅'].includes(reaction.emoji.name) && user.id == "755162323026706583"
      };
      
      msg.awaitReactions(filter, { max: 1, time: 15000, errors: ['time'] })
	      .then(collected => {
	        const reaction = collected.first();

	        if (reaction.emoji.name === '✅') {
		        for(var i = 0; i < ids.length; i++){
              try{
                let chann = client.channels.cache.get(ids[i])
                chann.send(embed)
                console.log(`Enviado para o canal ${ids[i]} - OK`)
              }catch(error){
                console.log(`O canal de ID ${ids[i]} está com problema!`)
              }
            }
	        }
        }).catch(e => console.log(e))
    } else if (/tech/i.test(args[0])) {
      await ctest.send(embed)
      let msg = await message.inlineReply(test)
      msg.react('✅')

      const filter = (reaction, user) => {
	      return ['✅'].includes(reaction.emoji.name) && user.id == "755162323026706583"
      };

      msg.awaitReactions(filter, { max: 1, time: 15000, errors: ['time'] })
	      .then(collected => {
	        const reaction = collected.first();

	        if (reaction.emoji.name === '✅') {
		        for(var i = 0; i < ids.length; i++){
              try{
                let chann = client.channels.cache.get(ids[i])
                chann.send(embed)
                console.log(`Enviado para o canal ${ids[i]} - OK`)
              }catch(error){
                console.log(`O canal de ID ${ids[i]} está com problema!`)
              }
            }
            for(var i = 0; i < tech.length; i++){
              try{
              let chann = client.channels.cache.get(tech[i])
              chann.send(embed)
              console.log(`Enviado para o canal ${tech[i]} - OK`)
              }catch(error){
                console.log(`O canal de ID ${tech[i]} - tech - está com problema!`)
              }
            }
	        }
        }).catch(e => console.log(e))
    }
  } else {
  dm.send(`Comando \`-new\` utilizado pelo usuário: <@${message.author.id}>`)
  }
}