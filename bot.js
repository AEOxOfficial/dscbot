﻿const Discord = require('discord.js');
const fs = require ('fs');
const client = new Discord.Client(); 
const prefix = "+"



client.on('message', message => {
    var prefix = '+';
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
       message.channel.send('**Check Your DM! :mailbox_with_mail: **');
       if(!message.channel.guild) return message.reply('** This Command Works Only In Servers. **');
      if(!message.member.hasPermission('SEND_MESSAGES')) return      message.channel.send('**Sadly You Dont Have The** `SEND_MESSAGES` **Permission.**' );
  
  
  
  
  message.author.sendMessage(`
  **__[❖═════════════════════════════❖]__**
        َ     __TheAdrianZ|lil cearceaf#5970 Bot__
  **__[❖═════General Commands═════❖]__**
  **🔰-| +id |** To Know Informations About Your Account
  **🔰-| +srvbots |** To Know All The Bots That Are In Your Server
  **🔰-| +avatar |** To Know Your / Someone's Profile Picture
  **🔰-| +image |** To Know The Server's Picture
  **🔰-| +count |** To Know How Much Members Are In Your Server
  **🔰-| +ping |** To Know The Bot's Ping
  **🔰-| +say |** To Let The Bot Reply What You Say
  **🔰-| +embed |** To Let The Bot Reply What You Say In A Cool Way
  **__[❖═════Staff Commands═════❖]__**
  **🔰-| +kick |** To Kick Someone From The Server
  **🔰-| +ban |** To Ban Someone From The Server
  **🔰-| +mutechannel|** To Mute A Channel
  **🔰-| +unmutechannel |** To Unmute A Channel
  **🔰-| +hchannel |** To Hide A Channel
  **🔰-| +schannel |** To Show A Hidden Channel
  **🔰-| +dc |** To Delete All Rooms
  **🔰-| +dr |** To Delete All Roles
  **🔰-| +clear |** To Clear Messages
  **🔰-| +server |** To See The Server's Informations
  **🔰-| +space <all | mention channel |** To put a space to a channel
  **🔰-| +nickall|** To change all members name
  **__[❖═════Other Commands═════❖]__**
  **🔰-| +invite |** To Invite The Bot To Your Server
  **🔰-| +support |** To Join The Support Server

  **__iClever Bot__**`);
  
    }
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

                                const devs = ['418281544847720448' , '480114808444682271' , '473920765948067843'];

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


client.on('message', async (message) => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(' ');
  let prefix = '+';
  if (args[0] == `${prefix}nickall`) {
    if (!message.member.hasPermission('MANAGE_NICKNAMES') || !message.guild.me.hasPermission('MANAGE_NICKNAMES')) return;
    if (!args[1]) return message.reply('Type the nickname ( [name] = member username ).');
    let members = message.guild.members.filter(m => m.manageable);
    message.channel.send(`Changing nickname for ${members.size} members.`);
    members.forEach((m, i) => {
      setTimeout(() => {
        m.setNickname(args.slice(1).join(' ').replace('[name]', m.user.username)).catch(e => {
          message.channel.send(`Could not change nickname for **${m.user.tag}**.`);
        });
      }, (2000 * i));
    });
  }
});



client.on("message", msg => {
    if(msg.author.bot || !msg.guild) return;
    let [command, ...args] = msg.content.slice(prefix.length).split(/ +/g);
    if(command === "space") {
        if(args.shift() === "all") {
            let rooms = msg.guild.channels.filter(r=> r.name.includes("-") || r.name.includes("_"))
            rooms.forEach(r=> r.setName(r.name.replace(/-/g, " ").replace(/_/g, " ")))
             msg.channel.send("**Done i have spaced "+rooms.size+" channel ...**")
            .catch(err=> msg.channel.send("i have an error please check my permissons"))
        } 
        else if(msg.mentions.channels.first()) {
            let room = msg.guild.channels.find(m=> m.name === msg.mentions.channels.first().name)
            room.setName(room.name.replace(/-/g, " ").replace(/_/g, " ")).then(sec=> msg.channel.send("**Done i have spaced "+room+" ...**"))
            .catch(err=> msg.channel.send("i have an error please check my permissons"))
        } 
        else msg.channel.send("**Usage: \n > "+prefix+"space <all | mention channel>**")
    }
 
})



                        client.on('guildCreate', guild => {
                            client.channels.get("633550034650136597").send(`**iclever Joined A New Server✅ 
                            Server name: __${guild.name}__
                            Server owner: __${guild.owner}__
                            Server id: __${guild.id}__ 
                            Server Count: __${guild.memberCount}__**`)
                            }); 
                            client.on('guildDelete', guild => {
                              client.channels.get("633550034650136597").send(`**iclever Left A Server ❎ 
                            Server name: __${guild.name}__
                            Server owner: __${guild.owner}__
                            Server id: __${guild.id}__ 
                            Server Count: __${guild.memberCount}__**`)
                            });


                                client.on('message', function(message) {
                                    if (message.channel.type === "dm") {
                                        if (message.author.id === client.user.id) return;
                                        var Dark = new Discord.RichEmbed()
                                        .setColor('RANDOM')
                                        .setTimestamp()
                                        .setTitle('I Got A New Message In My DM :love_letter:')
                                        .setThumbnail(`${message.author.avatarURL}`)
                                        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
                                        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
                                    client.channels.get("633550034650136597").send({embed:Dark});
                                    }
                                });
  
  

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', '「🚀」invites');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("black")
    .setDescription(`**Welcome To The Server !**
    **Your Account Was Created ${createdAt.toFixed(0)} Days Ago** `)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});



client.on('message', message => {
    var prefix = '+';
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {
       message.channel.send('**Check Your DM! :mailbox_with_mail: **');
       if(!message.channel.guild) return message.reply('** This Command Works Only In Servers. **');
      if(!message.member.hasPermission('SEND_MESSAGES')) return      message.channel.send('**Sadly You Dont Have The** `SEND_MESSAGES` **Permission.**' );
  
  
  
  
  message.author.sendMessage(`**https://discordapp.com/api/oauth2/authorize?client_id=681879241322790944&permissions=8&scope=bot**`);
  
    }
  });



                                      client.on("message", (message) => {
 
                                        if (message.content.startsWith("+new")) {  
                                             const reason = message.content.split(" ").slice(1).join(" ");  
                                             if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`Make A Role Named : Support Team | and give the bot **__ADMINISTRATOR__** permission `);
                                             if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You Already Have An Opened Ticket`);
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
                                                 message.channel.send(`Created Ticket #${c.name} :white_check_mark:`);
                                                 const embed = new Discord.RichEmbed()
                                                     .setColor(0xCF40FA)
                                                     .addField(`Hey ${message.author.username}!`, `Your Ticket Is Created #ticket :white_check_mark:`)
                                                     .setTimestamp();
                                                 c.send({
                                                     embed: embed
                                                 });
                                             }).catch(console.error);
                                         }
                                      
                                      
                                       if (message.content.startsWith("+close")) {
                                             if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
                                      
                                           message.channel.send(`Are You Sure You Want To Delete Your Ticket ?Write : **__+Confirm__* To Confirm Your Request`)
                                               .then((m) => {
                                                   message.channel.awaitMessages(response => response.content === '+Confirm', {
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



client.on('message', async msg => { // eslint-disable-line
    var prefix = "+"
    if (msg.author.bot) return undefined;
    
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);

    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)

    if (command === `play`) {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('You Are Not In Voice Room, Join It .');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            
            return msg.channel.send("I Don't Have Permission To Join This Room");
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send("i Don't Have Permission to Talk In This Room");
        }
 
        if (!permissions.has('EMBED_LINKS')) {
            return msg.channel.sendMessage("**I Don't Have Permission 'Embed Link'**")
        }
 
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send(` **${playlist.title}** Music is Added To Start List`);
        } else {
            try {
 
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 5);
                    let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setDescription(`**please use number Video** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

                    .setFooter("Music ✨", 'https://cdn.discordapp.com/avatars/478287039016468491/3cd0a622e42782830c0527b0cdfebc27.jpg')
                    msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
                   
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 15000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('No Video Detected');
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send(':x: No search Detected                   ');
                }
            }
 
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (command === `skip`) {
        if (!msg.member.voiceChannel) return msg.channel.send('You Are Not in Voice Room, Join It ! .');
        if (!serverQueue) return msg.channel.send('No Detect Any Vedio To Stop It');
        serverQueue.connection.dispatcher.end('This Vedio Is Skipeed');
        return undefined;
    } else if (command === `stop`) {
        if (!msg.member.voiceChannel) return msg.channel.send('You Are Not in Voice Room, Join It ! .');
        if (!serverQueue) return msg.channel.send('No Detect Any Vedio To Stop It');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('This Vedios Is Stopeed');
        return undefined;
    } else if (command === `vol`) {
        if (!msg.member.voiceChannel) return msg.channel.send('You Are Not in Voice Room, Join it ! .');
        if (!serverQueue) return msg.channel.send('No Music Detected');
        if (!args[1]) return msg.channel.send(`:loud_sound: Volume Voice **${serverQueue.volume}**`);
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        return msg.channel.send(`:speaker: Volume Changed To **${args[1]}**`);
    } else if (command === `np`) {
        if (!serverQueue) return msg.channel.send('No Detected Any Music');
        const embedNP = new Discord.RichEmbed()
    .setDescription(`:notes: Now Starting : **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
    } else if (command === `queue`) {
        
        if (!serverQueue) return msg.channel.send('No Detected Any Music');
        let index = 0;
        
        const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
        return msg.channel.sendEmbed(embedqu);
    } else if (command === `pause`) {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send('Music Its Paused');
        }
        return msg.channel.send('No Music Detected To Start.');
    } else if (command === "resume") {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send('Music Is Resumed');
        }
        return msg.channel.send('No Detected Any Music To Contune !.');
    }
 
    return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
    
//  console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`I could not join the voice channel ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(` **${song.title}** Music Is Add To Waiting List`);
    }
    return undefined;
}
 
function play(guild, song) {
    const serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
    serverQueue.textChannel.send(`Start Music : **${song.title}**`);
}



client.on('message', message => {
    var prefix = '+';
    if (message.author.bot) return;
     if (message.content === prefix + "support") {
       message.channel.send('**Check Your DM! :mailbox_with_mail: **');
       if(!message.channel.guild) return message.reply('** This Command Works Only In Servers. **');
      if(!message.member.hasPermission('SEND_MESSAGES')) return      message.channel.send('**Sadly You Dont Have The** `SEND_MESSAGES` **Permission.**' );
  
  
  
  
  message.author.sendMessage(`**:gear: __Support__ :gear:** | **https://discord.gg/VptaTCv**`);
  
    }
  });
  
  
  
        client.on('message', message => {
            if (message.content.startsWith("+id")) {
                         if(!message.channel.guild) return message.reply('** This Command Works Only In Servers **');
         
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
		 
		 
		 
            client.on('message', message => {
                if(!message.channel.guild) return;
           var prefix = "+";
                           if(message.content.startsWith(prefix + 'srvbots')) {
           
               
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
                    .setTitle('``Informations Of FridayScript-Studio Bot`` ')
                    .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                    .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                    .addField('``servers``', [client.guilds.size], true)
                    .addField('``Users``' ,`[ ${client.users.size} ]` , true)
                    .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
                    .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                          .addField('``My Prefix``' , `[ + ]` , true)
                          .addField('``My Language``' , `[ Java Script ]` , true)
                          .setFooter('** Friday BOT Bot © 2019 | All Rights Reserved **')
            })
        }
        });



         client.on('message', message => {
            if (!message.channel.guild) return;
    if(message.content =='+count')
    var IzRo = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTitle('🌍| Members Info')
    .addBlankField(true)
    .addField('Member Count',`__${message.guild.memberCount}__`)
    message.channel.send(IzRo);
  });
  
  
  
            client.on('message', message => {
                var prefix = "+"
              if (message.author.x5bz) return;
              if (!message.content.startsWith(prefix)) return;
            
              let command = message.content.split(" ")[0];
              command = command.slice(prefix.length);
            
              let args = message.content.split(" ").slice(1);
            
              if (command == "ban") {
                           if(!message.channel.guild) return message.reply('**This Command Works Only In Servers**');
                     
              if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Dont Have**` BAN_MEMBERS `**Permission.**");
              if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**The Bot Dont Have**` BAN_MEMBERS `**Permission.**");
              let user = message.mentions.users.first();
              let reason = message.content.split(" ").slice(2).join(" ");
              if (message.mentions.users.size < 1) return message.reply("**Mention Someone :x:**");
              if(!reason) return message.reply ("**Write The Reason**");
              if (!message.guild.member(user)
              .bannable) return message.reply("**I Can't Ban Someone's Rank Is Higher Than My Rank**");
            
              message.guild.member(user).ban(7, user);
            
              const banembed = new Discord.RichEmbed()
              .setAuthor(`BANNED!`, user.displayAvatarURL)
              .setColor("RANDOM")
              .setTimestamp()
              .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
              .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
              .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
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
                           if(!message.channel.guild) return message.reply('**This Command Works Only In Servers**');
                     
              if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Dont Have**` KICK_MEMBERS `**Permission.**");
              if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**The Bot Dont Have**` KICK_MEMBERS `**Permission.**");
              let user = message.mentions.users.first();
              let reason = message.content.split(" ").slice(2).join(" ");
              if (message.mentions.users.size < 1) return message.reply("**Mention Someone :x:**");
              if(!reason) return message.reply ("**Write The Reason**");
              if (!message.guild.member(user)
              .kickable) return message.reply("**I Can't Kick Someone's Rank Is Higher Than My Rank**");
            
              message.guild.member(user).kick();
            
              const kickembed = new Discord.RichEmbed()
              .setAuthor(`KICKED!`, user.displayURL)
              .setColor("RANDOM")
              .setTimestamp()
              .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
              .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
              .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
              message.channel.send({
                embed : kickembed
              })
            }
            });
			
			
			
            client.on('message', message => {
                var prefix = "+";
                       if(message.content === prefix + "mutechannel") {
                                           if(!message.channel.guild) return message.reply('** This Command Only Works In Servers **');
                
                   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You Dont Have Enough Permissions**');
                              message.channel.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false
                
                              }).then(() => {
                                  message.reply("**Room Muted :white_check_mark:**")
                              });
                                }
                    if(message.content === prefix + "unmutechannel") {
                                        if(!message.channel.guild) return message.reply('**This Command Only Works In Servers**');
                
                   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Enough Permissions**');
                              message.channel.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: true
                
                              }).then(() => {
                                  message.reply("**Room Unmuted :white_check_mark:**")
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
            if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.reply("**You Dont Have**` MANAGE_CHANNELS `**Permission.**");
            if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**The Bot Dont Have**` MANAGE_CHANNELS `**Permission.**");
            message.guild.channels.forEach(m => {
            m.delete();
            });
            message.reply("Rooms Deleted :white_check_mark:")
            }
            if(message.content.split(' ')[0] == prefix + 'dr') { 
            if (!message.channel.guild) return;
            if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**You Dont Have**` MANAGE_ROLES `**Permission.**");
            if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**The Bot Dont Have**` MANAGE_ROLES `**Permission.**");
            message.guild.roles.forEach(m => {
            m.delete();
            });
            message.reply("Roles Deleted :white_check_mark:")
            }
            });



            client.on('message', message => {  
                var prefix = "+";
                if (message.author.bot) return;
            if (message.content.startsWith(prefix + 'clear')) { 
                if(!message.channel.guild) return message.reply('This Command Works Only In Servers'); 
                    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**You Dont Have**` MANAGE_MESSAGES `**Permission.**');
                    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**You Dont Have**` MANAGE_MESSAGES `**Permission.**');
             let args = message.content.split(" ").slice(1)
                let messagecount = parseInt(args);
                if (args > 99) return message.reply("**The Number Should Be 100-**").then(messages => messages.delete(5000))
                if(!messagecount) args = '100';
                message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
                message.channel.send(`Deleted Messages : \`${args}\``).then(messages => messages.delete(5000));
              }
              });  



            client.on('message', message => {
                var prefix = "+";
                      if(message.content === prefix + "hchannel") {
                      if(!message.channel.guild) return;
                      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Enough Permissions');
                             message.channel.overwritePermissions(message.guild.id, {
                             READ_MESSAGES: false
                 })
                              message.channel.send('Room Hidden :white_check_mark:')
                 }
                });
                
                
                client.on('message', message => {
                var prefix = "+";
                      if(message.content === prefix + "schannel") {
                      if(!message.channel.guild) return;
                      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Enough Permissions');
                             message.channel.overwritePermissions(message.guild.id, {
                             READ_MESSAGES: true
                 })
                              message.channel.send('Rooms Showen :white_check_mark:')
                 }
                });
				
				
				
                  client.on('message', message => {
                     var prefix = '+';
                    if(message.author.bot) return;
                    if(message.channel.type === 'dm') return;
                        if(message.content.startsWith(prefix + 'bc')) {
                         	if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(' **You Dont Have**`ADMINISTRATOR`**Permission.**');
                         let filter = m => m.author.id === message.author.id;
                     
                     let recembed = new Discord.RichEmbed()
                     .setTitle(`${client.user.username}`)
                     .setDescription(`
                     -=-=-=-=-=-=-=-=-=-=
                     🎖 Send Message To A Role Without Embed
                      [__You Should Write The Correct Name Of The Role Without Mention__]

                     🏅 Send Message To A Role With Embed
                      [__You Should Write The Correct Name Of The Role Without Mention__]

                     📭 Send Message To All Members With Embed
                     
                     📧 Send Message To All Members Without Embed
                     
                     🔵 Send Message To Online Members Only Without Embed
                     
                     🔷 Send Message To Online Members Only With Embed

                     🔴 Send Message To Members Who Have The Red Mark Only Without Embed

                     ♦ Send Message To Members Who Have The Red Mark Only With Embed
                     
                     ❌ Cancel
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
                        message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                        
                               message.channel.awaitMessages(filter, {
                                 max: 1,
                                 time: 90000,
                                 errors: ['time']
                               })
                               .then(collected => {
                                   collected.first().delete();
                                   msge = collected.first().content;
                                   msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                       max: 1,
                                       time: 90000,
                                       errors: ['time']
                                     })
                                     .then(collected => {
                                       if(collected.first().content === 'Yes') {
                       message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                       
                       
                       message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`New Message :mega:`)
                               .addField('🔰Server🔰', message.guild.name)
                               .addField('🚩Sender🚩', message.author.username)
                               .addField('📜Message📜', `${msge}`)
                               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                               .setFooter(client.user.username, client.user.avatarURL);
                               m.send({ embed: bc })
                               m.send(`${m}`)
                               
                           })
                       }})
                       if(collected.first().content === 'No') {
                       message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                       message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`New Message :mega:`)
                               .addField('🔰Server🔰', message.guild.name)
                               .addField('🚩Sender🚩', message.author.username)
                               .addField('📜Message📜', `${msge}`)
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
                        message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                     
                            message.channel.awaitMessages(filter, {
                              max: 1,
                              time: 90000,
                              errors: ['time']
                            })
                            .then(collected => {
                                collected.first().delete();
                                msge = collected.first().content;
                                msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                  message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 90000,
                                    errors: ['time']
                                  })
                                  .then(collected => {
                    
                                    if(collected.first().content === 'Yes') {
                    message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                                    
                    
                    message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
                        m.send(`${msge}`) 
                    m.send(`${m}`)       
                            
                        })
                    }
                    if(collected.first().content === 'No') {
                    message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
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
                        message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                        
                               message.channel.awaitMessages(filter, {
                                 max: 1,
                                 time: 90000,
                                 errors: ['time']
                               })
                               .then(collected => {
                                   collected.first().delete();
                                   msge = collected.first().content;
                                   msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                       max: 1,
                                       time: 90000,
                                       errors: ['time']
                                     })
                                     .then(collected => {
                                       if(collected.first().content === 'Yes') {
                       message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                       
                       
                       message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`New Message :mega:`)
                               .addField('🔰Server🔰', message.guild.name)
                               .addField('🚩Sender🚩', message.author.username)
                               .addField('📜Message📜', `${msge}`)
                               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                               .setFooter(client.user.username, client.user.avatarURL);
                               m.send({ embed: bc })
                               m.send(`${m}`)
                               
                           })
                       }})
                       if(collected.first().content === 'No') {
                       message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                       message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        var bc = new Discord.RichEmbed()
                               .setColor('RANDOM')
                               .setTitle(`New Message :mega:`)
                               .addField('🔰Server🔰', message.guild.name)
                               .addField('🚩Sender🚩', message.author.username)
                               .addField('📜Message📜', `${msge}`)
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
                        message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                     
                            message.channel.awaitMessages(filter, {
                              max: 1,
                              time: 90000,
                              errors: ['time']
                            })
                            .then(collected => {
                                collected.first().delete();
                                msge = collected.first().content;
                                msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                  message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 90000,
                                    errors: ['time']
                                  })
                                  .then(collected => {
                    
                                    if(collected.first().content === 'Yes') {
                    message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                                    
                    
                    message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
                        m.send(`${msge}`) 
                    m.send(`${m}`)       
                            
                        })
                    }
                    if(collected.first().content === 'No') {
                    message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
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
                      message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                 msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                                     if(collected.first().content === 'Yes') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                     
                     
                         message.guild.members.forEach(m => {
                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`New Message :mega:`)
                             .addField('🔰Server🔰', message.guild.name)
                             .addField('🚩Sender🚩', message.author.username)
                             .addField('📜Message📜', `${msge}`)
                             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                             .setFooter(client.user.username, client.user.avatarURL);
                             m.send({ embed: bc })
                             m.send(`${m}`)
                             
                         })
                     }})
                     if(collected.first().content === 'No') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                         message.guild.members.forEach(m => {
                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`New Message :mega:`)
                             .addField('🔰Server🔰', message.guild.name)
                             .addField('🚩Sender🚩', message.author.username)
                             .addField('📜Message📜', `${msge}`)
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
                         message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                 msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                     
                                     if(collected.first().content === 'Yes') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                                     
                     
                         message.guild.members.forEach(m => {
                     m.send(`${msge}`) 
                     m.send(`${m}`)       
                             
                         })
                     }
                     if(collected.first().content === 'No') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
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
                         message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                     
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                     msg.edit('✅**| Now Please Write The RoleName**').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                         max: 1,
                                         time: 90000,
                                         errors: ['time']
                                       })
                             
                             .then(collected => {
                                 collected.first().delete();
                                 role = collected.first().content;
                                     let rolecheak = message.guild.roles.find('name', `${role}`)
                                 msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                     
                                     if(collected.first().content === 'Yes') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                                     
                     
                                 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                     
                     m.send(`${msge}`) 
                     m.send(`${m}`)       
                             
                         })
                     }
                     if(collected.first().content === 'No') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
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
                         message.channel.send(':pencil: **| Write The Message To Send:pencil2: **').then(msg => {
                      
                             message.channel.awaitMessages(filter, {
                               max: 1,
                               time: 90000,
                               errors: ['time']
                             })
                     
                             .then(collected => {
                                 collected.first().delete();
                                 msge = collected.first().content;
                                     msg.edit('✅**| Now Please Write The RoleName**').then(msg => {
                                     message.channel.awaitMessages(filter, {
                                         max: 1,
                                         time: 90000,
                                         errors: ['time']
                                       })
                             
                             .then(collected => {
                                 collected.first().delete();
                                 role = collected.first().content;
                                     let rolecheak = message.guild.roles.find('name', `${role}`)
                                 msg.edit('✅ **|  Do You Want A Mention In Your Message ? Write [Yes Or No] **').then(msg => {
                                   message.channel.awaitMessages(filter, {
                                     max: 1,
                                     time: 90000,
                                     errors: ['time']
                                   })
                                   .then(collected => {
                     
                                     if(collected.first().content === 'Yes') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                                     
                     
                                         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`New Message :mega:`)
                             .addField('🔰Server🔰', message.guild.name)
                             .addField('🚩Sender🚩', message.author.username)
                             .addField('📜Message📜', `${msge}`)
                             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
                             .setFooter(client.user.username, client.user.avatarURL);
                             m.send({ embed: bc })
                     m.send(`${m}`)       
                             
                         })
                     }
                     if(collected.first().content === 'No') {
                     message.channel.send(`**:loudspeaker: Message Have Been Sent Succefully :white_check_mark**`);
                     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                             var bc = new Discord.RichEmbed()
                             .setColor('RANDOM')
                             .setTitle(`New Message :mega:`)
                             .addField('🔰Server🔰', message.guild.name)
                             .addField('🚩Sender🚩', message.author.username)
                             .addField('📜Message📜', `${msge}`)
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
                             .setTitle('Succefully Canceled :x:')
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
                                 .addField('🌐** __Region__**',`[** __${msg.guild.region}__ **]`,true)
                                 .addField('🏅** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
                                 .addField('🔴**__MemberCount__**',`[** __${msg.guild.memberCount}__ **]`,true)
                                 .addField('🔵**__Online Members Count__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
                                 .addField('📝**__Text Rooms__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
                                 .addField('🎤**__Voice Rooms__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
                                 .addField('👑**__Owner__**',`**${msg.guild.owner}**`,true)
                                 .addField('🆔**__Server ID__**',`**${msg.guild.id}**`,true)
                                 .addField('📅**__Creation Date__**',msg.guild.createdAt.toLocaleString())
                                 msg.channel.send({embed:embed});
                                }
                                });



         client.on("message", message => {
            var prefix = "+";
            if(message.content.startsWith(prefix + "embed")) {
              
          
          var color = message.content.split(" ")[1];
            var text = message.content.split(" ").slice(2);
              var tt = text.join(" ")
            if(!color) return message.reply("You Should Type A Color !");
              if(!tt) return message.reply("You Should Type Something To Let The Bot Reply it !");
            let embed = new Discord.RichEmbed()
            .setColor(color)
            .setDescription(tt)
            message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
          message.channel.send("`Error`:" + Julian)
              })
            }
            });



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send('**You Dont Have** `SEND_MESSAGES`**Permission.**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
								
								

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by RayGamerMC")

client.user.setActivity(`+help|🔥iClever🔥`, {
type: "WATCHING",
url: "https://www.twitch.tv/PewDiePie"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
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




client.login("ODA2NDg1NjgzMzEyNTI1MzEy.YBqIUg.65ltkSehEKGauzAiOUgtVdmTtmE");

