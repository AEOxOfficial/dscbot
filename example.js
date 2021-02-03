const Discord = require('discord.js');
const client = new Discord.Client(); 
const prefix = "?"



client.on('message', message => {
    var prefix = '?';
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
       message.channel.send('**تم ارسالك في الخاص**');
       if(!message.channel.guild) return message.reply('** هذا الأمر فقط في السيرفرات**');
      if(!message.member.hasPermission('SEND_MESSAGES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `SEND_MESSAGES`' );
  
  
  
  
  message.author.sendMessage(`
  **__[❖═════════════════════════════❖]__**
         __لماذا ايتيزلج بوت ؟__
**  1- :rocket: سرعه اتصال ممتازه
  2- :beginner: سهل الاستخدام
  3- :warning: اعادة تفتيش يومية
  4- :money_with_wings: مجاني بالكامل
  __[❖═════الأوامر العامة═════❖]__**
  **🔰-| +id |** ل معرفة هويتك
  **🔰-| +embed |** ل جعل البوت يردد كلامك ب طريقة حلوة
  **🔰-| +bots |** ل معرفة كل البوتات الموجودة ب السيرفر
  **🔰-| +contact |** ل ارسال رسالة ل أصحاب البوت
  **🔰-| +avatar |** ل جعل البوت يعطيك صورتك الشخصية
  **🔰-| +image |** ل جعل البوت يعطيك صورة السيرفر
  **🔰-| +count |** ل معرفة عدد الأعضاء الموجودين ب السيرفر
  **🔰-| +ping |** ل معرفة ترددات البوت
  **🔰-| +premium |** ل رؤية عروض النسخة الأصلية للبوت
  **🔰-| +buy |** ل الطلب من متجر البوت
  **🔰-| +new |** ل انشاء تذكرة أو تيكيت
  **__[❖═════الأوامر الادارية═════❖]__**
  **🔰-| +channel |** ل إنشاء أي نوع من الرومات
  **🔰-| +moveall |** ل سحب كل شخص موجود ب روم صوتي الى رومك
  **🔰-| +role |**  ل اعطاء شخص معين رتبة معينة
  **🔰-| +role all |**ل اعطاء كل شيء موجود ب السيرفر رتبة معينة
  **🔰-| +role bots |** ل اعطاء كل البوتات رتبة معينة
  **🔰-| +role humans |** ل اعطاء كل الأشخاص رتبة معينة
  **🔰-| +roleremove |** ل نزع رتبة عن شخص معين
  **🔰-| +kick |** ل عمل طرد ل شخص معين
  **🔰-| +ban |** ل نفي شخص معين
  **🔰-| +mute |** ل اسكات شخص معين
  **🔰-| +unmute |** ل فك الميوت عن شخص معين
  **🔰-| +mutechannel|** ل اقفال المحادثة في روم معين
  **🔰-| +unmutechannel |** ل فتح المحادثة في روم معين
  **🔰-| +hchannel |** ل اخفاء روم معين
  **🔰-| +schannel |** ل اضهار روم معين
  **🔰-| +dc |** ل حذف جميع الرومات الموجودة ب السيرفر
  **🔰-| +dr |** ل حذف جميع الرتب الموجودة ب السيرفر
  **🔰-| +clear |** ل مسح الرسائل
  **🔰-| +bc |** ل ارسال رسالة جماعية ل كل أعضاء السيرفر
  **🔰-| +server |** ل رؤية معلومات السيرفر
  **__[❖═════أوامر اخرى═════❖]__**
  **🔰-| +invite |** ل دعوة البوت ل سيرفرك
  **🔰-| +inv |** ل دعوة البوت ل سيرفرك
  **🔰-| +support |** ل دخول سيرفر الدعم الفني

  **ItzLG Bot**`);
  
    }
  });



client.on('message', msg => {
var prefix = "+";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'channel')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let eyadandr3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`** ✏ = انشاء روم كتابي
 📝 = انشاء مستند 
 🎤 = إنشاء روم صوتي**`)
.setFooter(' لديك دقيقه للاختيار و رجاءا اكتب اسم الروم الذي تريد إنشاءه')
msg.channel.send(eyadandr3d).then(message => {
   
   
 message.react('✏').then(r=>{
 message.react('🎤').then(r=>{
           
 message.react('📝').then(r=>{
                                   
                             
   
let Category = (reaction, user) => reaction.emoji.name === '📝' && user.id === msg.author.id;
let Text = (reaction, user) => reaction.emoji.name === '✏' && user.id === msg.author.id;
 let Voice = (reaction, user) => reaction.emoji.name === '🎤' && user.id === msg.author.id;
 
let cy = message.createReactionCollector(Category, { time: 60000 });
let tt = message.createReactionCollector(Text, { time: 60000 });
 let ve  = message.createReactionCollector(Voice, { time: 60000 });
 
ve.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'voice');
    msg.channel.send(`☑ تم انشاء روم صوتي بنجاح : \`${args}\``)
    msg.delete();
})
tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'text');
    msg.channel.send(`☑ تم انشاء شات كتابي بنجاح : \`${args}\``)
    msg.delete();
})
cy.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'category');
    msg.channel.send(`☑ تم انشاء المستند بنجاح : \`${args}\``)
    msg.delete();
})
})
})
})
})
}
});



client.on("message", function(message) {
    var prefix = "+";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - حجرة**','**# - ورقة**','**# - مقص**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("حجرة","🇷",true)
    .addField("ورقة","🇵",true)
    .addField("مقص","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})
 
    })
}
});



client.on('message', message => {
    var prefix = '+';
    if (message.author.bot) return;
     if (message.content === prefix + "premium") {
       message.channel.send('**تم ارسالك في الخاص**');
       if(!message.channel.guild) return message.reply('** هذا الأمر فقط في السيرفرات**');
      if(!message.member.hasPermission('SEND_MESSAGES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `SEND_MESSAGES`' );
  
  
  
  
  message.author.sendMessage(`
  **__ItzLG Bot Premium :robot: :zap:__**

       **:beginner:   خواص النسخة الأصلية  :beginner:**

  *1- تغيير اسم و صورة و حالة البوت ب أي وقت ب أمر سري :ideograph_advantage:*
  *2- استطاعة اعضاء سيرفرك ارسال لك رسالة عن طريق البوت :mailbox_with_mail:*
  *3- دعم فني متواجد ل أصلاح مشاكل بوتك :gem:*
  *4- إعطاء رتبة تلقائيا من قبل البوت لكل من يدخل السيرفر :closed_lock_with_key:*
  *5- عدم حذف البوت عن انتهاء فترة الدفع بل ايقافه عن العمل :construction_worker:*

       **:beginner:   أسعار النسخة الأصلية  :beginner:**

  **| __100K probot__ | __0.30$__ | شهر كامل :dollar:**
  **| __170K probot__ | __0.70$__ | شهرين كاملين :dollar:**
  **| __300K probot__ | __1.40$__ | خمسة أشهر كاملة :dollar:**
  **| __600K probot__ | __3.00$__ | سنة كاملة :dollar:*
         **:beginner: يمكنك اختيار مدة معينة مع تغير السعر اثناء الشراء :beginner:**

**: للشراء استخدم الأمر التالي **:moneybag:
+buy [تفاصيل البوت الي تبيه]

                      :warning: تحذير! :warning:
                     هذا الأمر لا يستخدم ل العبث ب أصحاب البوت إذا الرجاء عدم الإزعاج
  `);
  
    }
  });



client.on('message', msg => {

  if (msg.content.startsWith("+support")) {
    msg.channel.send(`**:gear: __Support__ :gear:** | **https://discord.gg/53r3qHc**`)

  }
})



client.on('message', msg => {

  if (msg.content.startsWith("+shop")) {
    msg.channel.send(`**...قريبا**`)

  }
})



client.on('message', msg => {

  if (msg.content.startsWith("+invite")) {
    msg.channel.send(`**:space_invader: __Invite Link__ :space_invader:** | **https://discordapp.com/oauth2/authorize?client_id=555842577765629954&permissions=1845886145&scope=bot**`)

  }
})



client.on('message', msg => {

  if (msg.content.startsWith("+inv")) {
    msg.channel.send(`**:space_invader: __Invite Link__ :space_invader:** | **https://discordapp.com/oauth2/authorize?client_id=555842577765629954&permissions=1845886145&scope=bot**`)

  }
})



        client.on('message', message => {
            if (message.content.startsWith("+id")) {
                         if(!message.channel.guild) return message.reply('** هذا الأمر فقط في السيرفرات**');
         
                        var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
            let embed = new Discord.RichEmbed()
           .setColor("RANDOM")
            .setThumbnail(`${mentionavatar.avatarURL}`)
           .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
           .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
            .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
           .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
              
              
           message.channel.sendEmbed(embed);
           console.log('[id] Send By: ' + message.author.username)
             }
         });



         client.on("message", message => {
            var prefix = "+";
            if(message.content.startsWith(prefix + "embed")) {
              
          
          var color = message.content.split(" ")[1];
            var text = message.content.split(" ").slice(2);
              var tt = text.join(" ")
            if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");
              if(!tt) return message.reply("يجب كتابة كلام لتكراره");
            let embed = new Discord.RichEmbed()
            .setColor(color)
            .setDescription(tt)
            message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
          message.channel.send("`Error`:" + Julian)
              })
            }
            });



            client.on('message', message => {
                if(!message.channel.guild) return;
           var prefix = "+";
                           if(message.content.startsWith(prefix + 'bots')) {
           
               
               if (message.author.bot) return;
               let i = 1;
                   const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
                     const embed = new Discord.RichEmbed()
                     .setAuthor(message.author.tag, message.author.avatarURL)
                     .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
           ${botssize.join('\n')}`)
           .setFooter(client.user.username, client.user.avatarURL)
           .setTimestamp();
           message.channel.send(embed)
           
           }
           
           
           });



           client.on('message', message => {
            if (message.content.startsWith("+bot")) {
            message.channel.send({
                embed: new Discord.RichEmbed()
                    .setAuthor(client.user.username,client.user.avatarURL)
                    .setThumbnail(client.user.avatarURL)
                    .setColor('RANDOM')
                    .setTitle('``Informations Of ItLG Bot`` ')
                    .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                    .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                    .addField('``servers``', [client.guilds.size], true)
                    .addField('``Users``' ,`[ ${client.users.size} ]` , true)
                    .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
                    .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                          .addField('``My Prefix``' , `[ + ]` , true)
                          .addField('``My Language``' , `[ Java Script ]` , true)
                          .setFooter('By | RayGamerMC , Texo')
            })
        }
        });



         client.on('message', message => {
            if (!message.channel.guild) return;
    if(message.content =='+count')
    var IzRo = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTitle('🌍| معلومات الأعضاء')
    .addBlankField(true)
    .addField('عدد الأعضاء',`__${message.guild.memberCount}__`)
    message.channel.send(IzRo);
  });



  client.on("message", message => {
	var prefix = "+";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك خاصية اعطاء الرتب__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: منشن شخص**' );
		if( !args[1] ) return message.reply( '**:x: اكتب اسم الرتبة ل نزعها عن الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: منشن رتبة ل نزعها عن الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+args[0]+' ] من [ '+role1.name+' ] تم نزع الرتبة **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: من كل الموجودين ب السيرفر [ '+role1.name+' ] تم نزع الرتبة **');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: من جميع البوتات الموجودة ب السيرفر [ '+role1.name+' ] تم نزع الرتبة **');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: من جميع الأشخاص الموجودين ب السيرفر [ '+role1.name+' ] تم نزع الرتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: منشن الشخص **' );
		if( !args[1] ) return message.reply( '**:x:اكتب اسم الرتبة ل اعطاءها ل الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: اكتب اسم الرتبة ل اعطاءها ل الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+args[0]+' ] من  [ '+role1.name+' ] تم اعطاء الرتبة**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل الرتبة **');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء كل البوتات الرتبة  **');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء كل الأشخاص الرتبة **');
		} 
	} 
});



client.on('message', message => {
	var prefix = "+";
    if(message.content.startsWith(prefix + 'moveall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: `MOVE_MEMBERS` ليس عندك خاصية **');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: `MOVE_MEMBERS` البوت لا يملك خاصية **");
    if (message.member.voiceChannel == null) return message.channel.send(`**يجب عليك أن تكون في روم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: تم سحب الجميع ل رومك الصوتي ب نجاح**`)


     }
       });



       client.on('message' , message => {
        var prefix = "+"
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "contact")) {
        if (!message.channel.guild) return message.reply("هذا الأمر فقط في السيرفرات");
        let args = message.content.split(" ").slice(1).join(" ");
        client.users.get("452206363066761216").send("\n" + "" + args + "")

        let embed = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .setDescription(':mailbox_with_mail: <@452206363066761216> تم ارسال الرسالة ل ')
             .setThumbnail(message.author.avatarURL)
             .setFooter("ItzLG Bot")
                                                        
        
        message.channel.send(embed);
        
        
        }
            
        });



            client.on('message', message => {
                var prefix = "+"
              if (message.author.x5bz) return;
              if (!message.content.startsWith(prefix)) return;
            
              let command = message.content.split(" ")[0];
              command = command.slice(prefix.length);
            
              let args = message.content.split(" ").slice(1);
            
              if (command == "ban") {
                           if(!message.channel.guild) return message.reply('** هذا الأمر شغال فقط في السيرفرات**');
                     
              if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("** ` BAN_MEMBERS ` انت ليس لديك خاصية **");
              if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("** ` BAN_MEMBERS ` البوت لا يملك خاصية**");
              let user = message.mentions.users.first();
              let reason = message.content.split(" ").slice(2).join(" ");
              if (message.mentions.users.size < 1) return message.reply("**منشن الضحية**");
              if(!reason) return message.reply ("**اكتب السبب**");
              if (!message.guild.member(user)
              .bannable) return message.reply("**لا يمكنني عمل باند ل شخص رتبته أعلى من رتبتي**");
            
              message.guild.member(user).ban(7, user);
            
              const banembed = new Discord.RichEmbed()
              .setAuthor(`BANNED!`, user.displayAvatarURL)
              .setColor("RANDOM")
              .setTimestamp()
              .addField("**الضحية:**",  '**[ ' + `${user.tag}` + ' ]**')
              .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
              .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
              message.channel.send({
                embed : banembed
              })
            }
            });
            
            client.on('message', message => {
                var prefix = "+"
              if (message.author.x5bz) return;
              if (!message.content.startsWith(prefix)) return;
            
              let command = message.content.split(" ")[0];
              command = command.slice(prefix.length);
            
              let args = message.content.split(" ").slice(1);
            
              if (command == "kick") {
                           if(!message.channel.guild) return message.reply('** هذا الأمر شغال فقط في السيرفرات**');
                     
              if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("** ` KICK_MEMBERS ` انت ليس عندك خاصية **");
              if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("** ` KICK_MEMBERS ` البوت لا يملك خاصية **");
              let user = message.mentions.users.first();
              let reason = message.content.split(" ").slice(2).join(" ");
              if (message.mentions.users.size < 1) return message.reply("**منشن الضحية**");
              if(!reason) return message.reply ("**اكتب سبب الكيك**");
              if (!message.guild.member(user)
              .kickable) return message.reply("**لا يمكنني عمل كيك ل شخص رتبته اعلى من رتبتي**");
            
              message.guild.member(user).kick();
            
              const kickembed = new Discord.RichEmbed()
              .setAuthor(`KICKED!`, user.displayAvatarURL)
              .setColor("RANDOM")
              .setTimestamp()
              .addField("**الضحية:**",  '**[ ' + `${user.tag}` + ' ]**')
              .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
              .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
              message.channel.send({
                embed : kickembed
              })
            }
            });



            client.on('message', message => {
                var prefix = "+";
                       if(message.content === prefix + "mutechannel") {
                                           if(!message.channel.guild) return message.reply('** هذا الأمر شغال فقط في السيرفرات **');
                
                   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **أنت ليس لديك خواص كافية**');
                              message.channel.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false
                
                              }).then(() => {
                                  message.reply("**:white_check_mark: تم اغلاق الروم بنجاح **")
                              });
                                }
                    if(message.content === prefix + "unmutechannel") {
                                        if(!message.channel.guild) return message.reply('** هذا الأمر شغال فقط في السيرفرات**');
                
                   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**أنت ليس لديك خواص كافية**');
                              message.channel.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: true
                
                              }).then(() => {
                                  message.reply("**:white_check_mark: تم فتح الروم بنجاح**")
                              });
                    }
                       
                });



           client.on('message', message => {
            if (message.content.startsWith("+avatar")) {
        if(!message.channel.guild) return;
                var mentionned = message.mentions.users.first();
            var client;
              if(mentionned){
                  var client = mentionned; } else {
                  var client = message.author;
              }
                const embed = new Discord.RichEmbed()
                                   .addField('Requested by:', "<@" + message.author.id + ">")
                .setColor(000000)
                .setImage(`${client.avatarURL}`)
              message.channel.sendEmbed(embed);
            }
        });



        client.on('message', message => {
            var prefix = "+";
            if(message.content.split(' ')[0] == prefix + 'dc') {
            if (!message.channel.guild) return;
            if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.reply("** ` MANAGE_CHANNELS ` أنت ليس لديك خاصية **");
            if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("** ` MANAGE_CHANNELS ` البوت لا يملك خاصية **");
            message.guild.channels.forEach(m => {
            m.delete();
            });
            message.reply("✅ `تم حذف جميع الرومات ب نجاح`")
            }
            if(message.content.split(' ')[0] == prefix + 'dr') { 
            if (!message.channel.guild) return;
            if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("** ` MANAGE_ROLES ` أنت ليس لديك خاصية **");
            if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("** ` MANAGE_ROLES ` البوت لا يملك خاصية **");
            message.guild.roles.forEach(m => {
            m.delete();
            });
            message.reply("✅ `تم حذف جميع الرتب بنجاح`")
            }
            });



            client.on('message', message => {  
                var prefix = "+";
                if (message.author.bot) return;
            if (message.content.startsWith(prefix + 'clear')) { 
                if(!message.channel.guild) return message.reply('هذا الأمر شغال في السيرفرات فقط'); 
                    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | ! انت لا تحمل خاصية **MANAGE_MESSAGES**');
                    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ |! البوت لا يحمل خاصية **MANAGE_MESSAGES**');
             let args = message.content.split(" ").slice(1)
                let messagecount = parseInt(args);
                if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
                if(!messagecount) args = '100';
                message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
                message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
              }
              });  
              
              

            client.on('message', message => {
                var prefix = "+";
                      if(message.content === prefix + "hchannel") {
                      if(!message.channel.guild) return;
                      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليس لديك الخواص الكافية');
                             message.channel.overwritePermissions(message.guild.id, {
                             READ_MESSAGES: false
                 })
                              message.channel.send(':white_check_mark: تم اخفاء الرومات ب نجاح ')
                 }
                });
                
                
                client.on('message', message => {
                var prefix = "+";
                      if(message.content === prefix + "schannel") {
                      if(!message.channel.guild) return;
                      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('ليس لديك الخواص الكافية ');
                             message.channel.overwritePermissions(message.guild.id, {
                             READ_MESSAGES: true
                 })
                              message.channel.send(':white_check_mark: تم اضهار الرومات ب نجاح')
                 }
                });



client.on('message', async message =>{

  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('** هذا الأمر شغال في السيرفرات فقط  **').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_ROLES'));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("** `MANAGE_ROLES` البوت لا يملك خاصية **").then(msg => msg.delete(6000))
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
    if(command == "mute") {
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply(":information_source: `#mute @RayGamerMC` يجب تحديد شخص ") .then(m => m.delete(5000));
      if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('** `MANAGE_MASSAGES` البوت لا يملك خاصية**');
      let muterole = message.guild.roles.find(`name`, "Muted");
  
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "Muted",
            color: "#000000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }

      await(tomute.addRole(muterole.id));
      message.channel.send(`** :white_check_mark: ب نجاح  <@${tomute.id}> تم عمل ميوت ل **`);
        message.delete();

    }
  });
  
  const mmss = require('ms');
  client.on('message', async message => {
    let muteembed = new Discord.RichEmbed()
    .setImage('https://c.top4top.net/p_1029o1te41.png')
      let muteReason = message.content.split(" ").slice(3).join(" ");
      let mutePerson = message.mentions.users.first();
      let messageArray = message.content.split(" ");
      let muteRole = message.guild.roles.find("name", "Muted");
      let time = messageArray[2];
      if(message.content.startsWith(prefix + "tempmute")) {
          if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send('** `MUTE_MEMBERS` أنت لا تملك خاصية **' );
          if(!mutePerson) return message.channel.sendEmbed(muteembed)
          if(mutePerson === message.author) return message.channel.send('**- ماتقدر تعطي نفسك ميوت**');
          if(mutePerson === client.user) return message.channel.send('**- ماتقدر تعطي البوت ميوت :)**');
          if(message.guild.member(mutePerson).roles.has(muteRole.id)) return message.channel.send('**- هذا الشخص لديه ميوت ب الفعل**');
          if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
          if(!time) return message.channel.send("**- اكتب الوقت**");
          if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**- ربما هذا الوقت الذي كتبته ليس صحيح**');
          if(!muteReason) return muteReason = "**Null**";
          message.guild.member(mutePerson).addRole(muteRole);
          message.channel.send(`**:white_check_mark: ب نجاح ${mutePerson} تم عمل ميوت ل  **`)
          message.delete()
          mutePerson.send(`** ${muteReason} ب سبب  ${message.guild.name} تم عمل ميوت لك في سيرفر**`)
          .then(() => { setTimeout(() => {
             message.guild.member(mutePerson).reRole(muteRole);
         }, mmss(time));
      });
      }
  });



                  client.on('message', message => {
                     var prefix = '+';
                    if(message.author.bot) return;
                    if(message.channel.type === 'dm') return;
                        if(message.content.startsWith(prefix + 'bc')) {
                         	if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(' **`ADMINISTRATOR` أنت لا تملك خاصية **');
                         let filter = m => m.author.id === message.author.id;
                     
                     let recembed = new Discord.RichEmbed()
                     .setTitle(`${client.user.username}`)
                     .setDescription(`
                     -=-=-=-=-=-=-=-=-=-=
                     🎖 ارسال البرودكاست ل رتبة معينة بدون امبيد 
                      [__اكتب اسم الرتبة ب شكل صحيح و بدون منشنها__]

                     🏅 ارسال البرودكاست ل رتبة معينة مع امبيد
                      [__اكتب اسم الرتبة ب شكل صحيح و بدون منشنها__]

                     📭 ارسال البرودكاست ل كل الأعضاء مع امبيد
                     
                     📧 ارسال البرودكاست ل كل الأعضاء بدون امبيد
                     
                     🔵 ارسال البرودكاست ل الاونلاين فقط بدون امبيد
                     
                     🔷 ارسال البرودكاست ل الاونلاين فقط مع امبيد

                     🔴 ارسال البرودكاست ل الي عندهم العلامة الحمراء فقط بدون امبيد

                     ♦ ارسال البرودكاست ل الي عندهم العلامة الحمراء فقط مع امبيد
                     
                     ❌ إلغاء البرودكاست
                     -=-=-=-=-=-=-=-=-=-=
                     `)
                     
                     message.channel.sendEmbed(recembed).then(msg => { 
                         msg.react('🎖')
                         .then(() => msg.react('🏅'))
                         .then(() => msg.react('📭'))
                         .then(() =>  msg.react('📧'))
                         .then(() => msg.react('🔵'))
                         .then(() => msg.react('🔷'))
                         .then(() => msg.react('🔴'))
                         .then(() => msg.react('♦'))
                         .then(() => msg.react('❌'))
                    
                     
                                 let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
                                 
                                 let dndonlyFilter = (reaction, user) => reaction.emoji.name === '🔴' && user.id === message.author.id;

                                 let embeddndonlyFilter = (reaction, user) => reaction.emoji.name === '♦' && user.id === message.author.id;
                     
                                 let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
                     
                                 let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                     
                                 let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
                     
                                 let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8
                    
                                 let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8
                    
                                 let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
                     
                                 let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });

                                 let dndonly = msg.createReactionCollector(dndonlyFilter, { time: 0 });

                                 let embeddndonly = msg.createReactionCollector(embeddndonlyFilter, { time: 0 });
                     
                                 let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
                         
                                 let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
                     
                                 let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });
                    
                                 let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                                     
                                 let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });
                    
                                 let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
                    embeddndonly.on('collect', r => {
                    
                        let msge;
                        message.channel.send(':pencil: **| الأن اكتب الرسالة التي تريد ارسالها :pencil2: **').then(msg => {
                        
                               message.channel.awaitMessages(filter, {
                                 max: 1,
                                 time: 90000,
                                 errors: ['time']
                               })
                               .then(collected => {
                                   collected.first().delete();
                                   msge = collected.first().content;
                                   msg.edit('✅ **|  هل تريد منشن في البرودكاست ؟ اكتب نعم أو لا **').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                       max: 1,
                                       time: 90000,
                                       errors: ['time']
                                     })
                                     .then(collected => {
                                       if(collected.first().content === 'نعم') {
                       message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                       
                       
                       message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`:mega: رسالة جديدة`)
                               .addField('🔰السيرفر🔰', message.guild.name)
                               .addField('🚩صاحب الرسالة🚩', message.author.username)
                               .addField('📜الرسالة📜', `${msge}`)
                               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                               .setFooter(client.user.username, client.user.avatarURL);
                               m.send({ embed: bc })
                               m.send(`${m}`)
                               
                           })
                       }})
                       if(collected.first().content === 'لا') {
                       message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                       message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`:mega: رسالة جديدة`)
                               .addField('🔰السيرفر🔰', message.guild.name)
                               .addField('🚩صاحب الرسالة🚩', message.author.username)
                               .addField('📜الرسالة📜', `${msge}`)
                               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                               .setFooter(client.user.username, client.user.avatarURL);
                               m.send({ embed: bc })
                               
                           })
                       }
                                     
                       })
                                   })
                               })
                           })


                     dndonly.on('collect', r => {
                        let msge;
                        message.channel.send(':pencil: **| الأن اكتب الرسالة التي تريد ارسالها :pencil2: **').then(msg => {
                     
                            message.channel.awaitMessages(filter, {
                              max: 1,
                              time: 90000,
                              errors: ['time']
                            })
                            .then(collected => {
                                collected.first().delete();
                                msge = collected.first().content;
                                msg.edit('✅ **|  هل تريد منشن في البرودكاست ؟ اكتب نعم أو لا **').then(msg => {
                                  message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 90000,
                                    errors: ['time']
                                  })
                                  .then(collected => {
                    
                                    if(collected.first().content === 'نعم') {
                    message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                                    
                    
                    message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        m.send(`${msge}`) 
                    m.send(`${m}`)       
                            
                        })
                    }
                    if(collected.first().content === 'لا') {
                    message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                    message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        m.send(`${msge}`) 
                                    
                        })}
                    })
                    })
                            })
                        })
                    })

                     
                     embedonlineonly.on('collect', r => {
                    
                        let msge;
                        message.channel.send(':pencil: **| الأن اكتب الرسالة التي تريد ارسالها :pencil2: **').then(msg => {
                        
                               message.channel.awaitMessages(filter, {
                                 max: 1,
                                 time: 90000,
                                 errors: ['time']
                               })
                               .then(collected => {
                                   collected.first().delete();
                                   msge = collected.first().content;
                                   msg.edit('✅ **|  هل تريد منشن في البرودكاست ؟ اكتب نعم أو لا **').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                       max: 1,
                                       time: 90000,
                                       errors: ['time']
                                     })
                                     .then(collected => {
                                       if(collected.first().content === 'نعم') {
                       message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                       
                       
                       message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`:mega: رسالة جديدة`)
                               .addField('🔰السيرفر🔰', message.guild.name)
                               .addField('🚩صاحب الرسالة🚩', message.author.username)
                               .addField('📜الرسالة📜', `${msge}`)
                               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                               .setFooter(client.user.username, client.user.avatarURL);
                               m.send({ embed: bc })
                               m.send(`${m}`)
                               
                           })
                       }})
                       if(collected.first().content === 'لا') {
                       message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                       message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`:mega: رسالة جديدة`)
                               .addField('🔰السيرفر🔰', message.guild.name)
                               .addField('🚩صاحب الرسالة🚩', message.author.username)
                               .addField('📜الرسالة📜', `${msge}`)
                               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                               .setFooter(client.user.username, client.user.avatarURL);
                               m.send({ embed: bc })
                               
                           })
                       }
                                     
                       })
                                   })
                               })
                           })
                     
                           
                     onlineonly.on('collect', r => {
                        let msge;
                        message.channel.send(':pencil: **| الأن اكتب الرسالة التي تريد ارسالها :pencil2: **').then(msg => {
                     
                            message.channel.awaitMessages(filter, {
                              max: 1,
                              time: 90000,
                              errors: ['time']
                            })
                            .then(collected => {
                                collected.first().delete();
                                msge = collected.first().content;
                                msg.edit('✅ **|  هل تريد منشن في البرودكاست ؟ اكتب نعم أو لا **').then(msg => {
                                  message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 90000,
                                    errors: ['time']
                                  })
                                  .then(collected => {
                    
                                    if(collected.first().content === 'نعم') {
                    message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                                    
                    
                    message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        m.send(`${msge}`) 
                    m.send(`${m}`)       
                            
                        })
                    }
                    if(collected.first().content === 'لا') {
                    message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                    message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        m.send(`${msge}`) 
                                    
                        })}
                    })
                    })
                            })
                        })
                    })
                    
                     embedmsg.on('collect', r => {
                         let msge;
                      message.channel.send(':pencil: **| الأن اكتب الرسالة التي تريد ارسالها :pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                 msg.edit('✅ **|  هل تريد منشن في البرودكاست ؟ اكتب نعم أو لا **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                                     if(collected.first().content === 'نعم') {
                     message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                     
                     
                         message.guild.members.forEach(m => {
                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`:mega: رسالة جديدة`)
                             .addField('🔰السيرفر🔰', message.guild.name)
                             .addField('🚩صاحب الرسالة🚩', message.author.username)
                             .addField('📜الرسالة📜', `${msge}`)
                             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                             .setFooter(client.user.username, client.user.avatarURL);
                             m.send({ embed: bc })
                             m.send(`${m}`)
                             
                         })
                     }})
                     if(collected.first().content === 'لا') {
                     message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                         message.guild.members.forEach(m => {
                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`:mega: رسالة جديدة`)
                             .addField('🔰السيرفر🔰', message.guild.name)
                             .addField('🚩صاحب الرسالة🚩', message.author.username)
                             .addField('📜الرسالة📜', `${msge}`)
                             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                             .setFooter(client.user.username, client.user.avatarURL);
                             m.send({ embed: bc })
                             
                         })
                     }
                                   
                     })
                                 })
                             })
                         })
                     
                     
                        
                     
                     
                     
                     normalmsg.on('collect', r => {
                         let msge;
                         message.channel.send(':pencil: **| الأن اكتب الرسالة التي تريد ارسالها :pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                 msg.edit('✅ **|  هل تريد منشن في البرودكاست ؟ اكتب نعم أو لا **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                     
                                     if(collected.first().content === 'نعم') {
                     message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                                     
                     
                         message.guild.members.forEach(m => {
                     m.send(`${msge}`) 
                     m.send(`${m}`)       
                             
                         })
                     }
                     if(collected.first().content === 'لا') {
                     message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                         message.guild.members.forEach(m => {
                             m.send(`${msge}`) 
                                     
                         })}
                     })
                     })
                             })
                         })
                     })
                     
                     onlyrole.on('collect', r => {
                         let msge;
                         let role;
                         message.channel.send(':pencil: **| الأن اكتب الرسالة التي تريد ارسالها :pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                     
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                     msg.edit('✅ **| الأن الرجاء كتابة اسم الرتبة**').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                         max: 1,
                                         time: 90000,
                                         errors: ['time']
                                       })
                             
                             .then(collected => {
                                 collected.first().delete();
                                 role = collected.first().content;
                                     let rolecheak = message.guild.roles.find('name', `${role}`)
                                 msg.edit('✅ **|  هل تريد منشن في البرودكاست ؟ اكتب نعم أو لا **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                     
                                     if(collected.first().content === 'نعم') {
                     message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                                     
                     
                                 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                     
                     m.send(`${msge}`) 
                     m.send(`${m}`)       
                             
                         })
                     }
                     if(collected.first().content === 'لا') {
                     message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                     
                             m.send(`${msge}`) 
                                     
                         })}
                     })
                     })
                             })
                         })
                     })
                     })
                     });
                     
                     
                     
                     embedonlyrole.on('collect', r => {
                         let msge;
                         let role;
                         message.channel.send(':pencil: **| الأن اكتب الرسالة التي تريد ارسالها :pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                     
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                     msg.edit('✅ **| الأن الرجاء كتابة اسم الرتبة**').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                         max: 1,
                                         time: 90000,
                                         errors: ['time']
                                       })
                             
                             .then(collected => {
                                 collected.first().delete();
                                 role = collected.first().content;
                                     let rolecheak = message.guild.roles.find('name', `${role}`)
                                 msg.edit('✅ **|  __هل تريد منشن في البرودكاست ؟ __اكتب نعم أو لا **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                     
                                     if(collected.first().content === 'نعم') {
                     message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                                     
                     
                                         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`:mega: رسالة جديدة`)
                             .addField('🔰السيرفر🔰', message.guild.name)
                             .addField('🚩صاحب الرسالة🚩', message.author.username)
                             .addField('📜الرسالة📜', `${msge}`)
                             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                             .setFooter(client.user.username, client.user.avatarURL);
                             m.send({ embed: bc })
                     m.send(`${m}`)       
                             
                         })
                     }
                     if(collected.first().content === 'لا') {
                     message.channel.send(`**:white_check_mark: تم ارسال البرودكاست ب نجاح :loudspeaker:**`);
                     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`:mega: رسالة جديدة`)
                             .addField('🔰السيرفر🔰', message.guild.name)
                             .addField('🚩صاحب الرسالة🚩', message.author.username)
                             .addField('📜الرسالة📜', `${msge}`)
                             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                             .setFooter(client.user.username, client.user.avatarURL);
                             m.send({ embed: bc })
                             
                                     
                         })}
                     })
                     })
                             })
                         })
                     })
                     })
                     })
                         cancel.on('collect', r => {
                             let cancelembed = new Discord.RichEmbed()
                             .setTitle('تم حذف البرودكاست ب نجاح :x:')
                          message.channel.sendEmbed(cancelembed)
                             embedmsg.stop();
                             normalmsg.stop();
                             onlyrole.stop();
                             embedonlyrole.stop();
                             embedonlineonly.stop()
                             onlineonly.stop()
                             cancel.stop();
                         })
                     })
                        }});



                        client.on('guildCreate', guild => {
                            client.channels.get("556466859462098990").send(`✅ **${client.user.tag} دخل سيرفر جديد
                            Server name: __${guild.name}__
                            Server owner: __${guild.owner}__
                            Server id: __${guild.id}__ 
                            Server Count: __${guild.memberCount}__**`)
                            }); 
                            client.on('guildDelete', guild => {
                              client.channels.get("556466859462098990").send(`❎ **${client.user.tag} طلع من سيرفر
                            Server name: __${guild.name}__
                            Server owner: __${guild.owner}__
                            Server id: __${guild.id}__ 
                            Server Count: __${guild.memberCount}__**`)
                            });



                            client.on('message' , message => {
                                var prefix = '+'
                                if(message.author.bot) return;
                                if(message.content.startsWith(prefix + "ping")) {
                               message.channel.send('pong').then((msg) => {
                              var PinG = `${Date.now() - msg.createdTimestamp}`
                              var ApL = `${Math.round(client.ping)}`
                                    msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
                               })
                                }  
                               });



                               client.on('message', function(msg) {
                                if(msg.content.startsWith (prefix  + 'server')) {
                                 let embed = new Discord.RichEmbed()
                                 .setColor('RANDOM')
                                 .setThumbnail(msg.guild.iconURL)
                                 .setTitle(`Showing Details Of  **${msg.guild.name}*`)
                                 .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
                                 .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
                                 .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
                                 .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
                                 .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
                                 .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
                                 .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
                                 .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
                                 .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
                                 msg.channel.send({embed:embed});
                                }
                                });



                                client.on('message', function(message) {
                                    if (message.channel.type === "dm") {
                                        if (message.author.id === client.user.id) return;
                                        var Dark = new Discord.RichEmbed()
                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .setTitle(':love_letter: لقد تلقيت رسالة جديدة في الخاص ')
                                        .setThumbnail(`${message.author.avatarURL}`)
                                        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
                                        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
                                    client.channels.get("556466859462098990").send({embed:Dark});
                                    }
                                });



                                const devs = ['411255565499629579' , '480114808444682271' , '473920765948067843'];

                                client.on('message', message => {
                                    var prefix = '+';
                                    let argresult = message.content.split(` `).slice(1).join(' ');
                                    if (message.content.startsWith(prefix + 'sets')) {
                                      if (!devs.includes(message.author.id)) return message.channel.send("<@429972030092476437> only this guy can do restart the bot so don't try again :wink:.");
                                      message.delete();
                                      client.user.setGame(argresult, 'https://twitch.tv/DynastyShop');
                                
                                    } else if(message.content.startsWith(prefix + 'setw')) {
                                        client.user.setActivity(argresult,{type: 'WATCHING'});
                                
                                      } else if(message.content.startsWith(prefix + 'setl')) {
                                        client.user.setActivity(argresult,{type: 'LISTENING'});
                                
                                      } else if(message.content.startsWith(prefix + 'setp')) {
                                        client.user.setActivity(argresult,{type: 'PLAYING'});
                                
                                      } else if(message.content.startsWith(prefix + 'setn')) {
                                        client.user.setUsername(argresult);
                                
                                      } else if(message.content.startsWith(prefix + 'setavatar')) {
                                        client.user.setAvatar(argresult);
                                
                                
                                      } else if(message.content.startsWith(prefix + 'setstatus')) {
                                        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
                                        client.user.setStatus(argresult);
                                
                                
                                    }
                                
                                  });



                                    client.on("message", message => {
                                        const prefix = "+"
                                                  
                                              if(!message.channel.guild) return;
                                       if(message.author.bot) return;
                                          if(message.content === prefix + "image"){ 
                                              const embed = new Discord.RichEmbed()
                                      
                                          .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
                                      .setAuthor(message.author.username, message.guild.iconrURL)
                                        .setColor(0x164fe3)
                                        .setImage(message.guild.iconURL)
                                        .setURL(message.guild.iconrURL)
                                                        .setTimestamp()
                                    
                                       message.channel.send({embed});
                                          }
                                      });



const giftKeys = {};



client.on("message", msg =>{
  let args = msg.content.split(" ").slice(1)[0];
  let cmd = msg.content.split(' ')[0]
  if(cmd === `${prefix}getrole`){
  let roleW = msg.mentions.roles.first();
  if(!devs.includes(msg.author.id)){
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - انت لاتمتلك الصلاحية`);
    msg.reply(embed).then( z => z.delete(3000));
     return
  }
  if(!roleW) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - منشن الرتبة \`${prefix}getrole <@admin-role>\``);
    msg.reply(embed).then( z => z.delete(3000)); return
  };
  let role = msg.guild.roles.find(`name`, roleW.name);
  if(!role) {
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - Could't find \`${roleW.name}\` role.`);
  msg.reply(embed).then( msgs => msgs.delete(3000));
  return
  }
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  giftKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",giftKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
};
if( cmd === `${prefix}use`){
 
  if(!args) {  
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(giftKeys[args]){
    let hav = msg.member.roles.find(`name`, giftKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${giftKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(giftKeys[args]);
    delete giftKeys[args]
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
};
});



client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+msgall')){
 if(!message.author.id === '411255565499629579') return;
message.channel.sendMessage(' جار ارسال الرسالة | ✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  ولكم نورت السيرفر :rose: 

  :crown: اسم العضو  ${member} :crown:

  :bust_in_silhouette:  انت العضو رقم ${member.guild.memberCount} 
  
  
  :space_invader: ItzLG Bot :space_invader:`) 
  }).catch(console.error)
  })



client.on("message", (message) => {
 
   if (message.content.startsWith("+new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`أنت لديك تذكرة مفتوحة ب الطبع`);
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("+close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
      message.channel.send(` __+close__ هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب`)
          .then((m) => {
              message.channel.awaitMessages(response => response.content === '+close', {
                      max: 1,
                      time: 10000,
                      errors: ['time'],
                  })  
                  .then((collected) => {
                      message.channel.delete();
                  })  
                  .catch(() => {
                      m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                          m2.delete();
                      }, 3000);
                  });
          });
  }
 
});



client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix+"top-servers")) {
        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
     let tl = "";
      for (let i=0;i<=25;i++) {
          if (!top[i]) continue;
         tl += i+" - "+top[i].name+" : "+top[i].memberCount+"\n"
      }
      message.channel.send(tl)
    }
});



client.login("NTU2NDU2NTIzNTI2ODMyMTI4.D26ARQ.y8-nzG40tNd9lVXVp2vrfe1tc8A")
