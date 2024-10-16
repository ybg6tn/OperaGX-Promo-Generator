const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]
});

const app = require("express")();
app.listen(() => 0);
app.get("/", (req, res) => {
  res.send("Hi");
});

const config = {
  prefix: "-",
  channel2: "1190345008478437506",//ايدي شات الاستقالة
  channel3: "1175165416881000519",//ايدي شات العصابات
    channel4: "1190330447373275289",//ايدي شات الداخلية
  channel5: "1190331700304154664",//ايدي شات مخالفات
  channel6: "1190330447373275289",//ايدي شات العدل
  channel7: "1190331828398211122",//ايدي شات تسديد
  channel8: "1184419551698489376",//ايدي شات يوتيوبر 
  channel9: "1184419610267746334",//ايدي شات تيكتوكر
  channel10: "1175165418541957240",//ايدي شات اعلامي
  channel11: "1114202424245235823",//ايدي شات مطعم
  channel12: "1190331326600069311",//ايدي شات معرض
  line: "https://cdn.discordapp.com/attachments/1148980819227070484/1184224040668385390/809343066489880599.png?"
}


const prefix = config.prefix;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "استقالة") {
    if(message.channel.id != config.channel2) return;
    let data = {};
    message.channel.send({ content: `اسمك؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: ` عمرك؟` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: ` سبب استقالة؟` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `وظيفتك الحاليه؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `كم مده فلوظيفه؟` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`تقديم استقالة `)
          .setDescription(`سوف يتم الرد عليك قريباً من المسؤولين
          <@&1114201824661098636>
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "العمر :",
              value: `${data.age}`
            },
            {
              name: "سبب الاستقالة :",
              value: `${data.iden}`
            },
            {
              name: "الوظيفة الحالية :",
              value: `${data.experts}`
            },
            {
              name: " المده في الوظيفة :",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم استقالة يرجى إرسال:__** \`${prefix}استقالة\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});



client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "عصابه") {
    if(message.channel.id != config.channel3) return;
    let data = {};
    message.channel.send({ content: `اسمك؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: ` عمرك؟` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: ` خبراتك الاجراميه` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `هل قرات بنود العصابات؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `اي عصابه تبي
__ البلود | مافيا | الماندو   __  ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`تقديم العصابات `)
          .setDescription(`سوف يتم الرد عليك قريباً من المسؤولين
          <@&1114201907490197614>
          <@&1114201907993530479>
          <@&1114201908899479573>
          <@&1114201915211907152>
          <@&1114201921121689730>
          <@&1114201922128330772>
          <@&1126360505741746278>
          <@&1126360647828000888>
          <@&1126360715813462076>
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "العمر :",
              value: `${data.age}`
            },
            {
              name: "هل قرأت بنود العصابات :",
              value: `${data.iden}`
            },
            {
              name: "الخبرات الاجرامية :",
              value: `${data.experts}`
            },
            {
              name: "العصابة :",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم ع العصابات يرجى إرسال:__** \`${prefix}عصابه\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});



client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "عسكريه") {
    if(message.channel.id != config.channel4) return;
    let data = {};
    message.channel.send({ content: `اسمك؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: ` عمرك؟` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: ` خبراتك العسكرية` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `هل قرات بنود الداخلية ` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `اي قطاع تبي
الامن العام| قوات` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`تقديم الداخلية`)
          .setDescription(`سوف يتم الرد عليك قريباً من المسؤولين
          <@&1114201854419664976>`)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "العمر :",
              value: `${data.age}`
            },
            {
              name: "هل قرأت بنود الداخلية:",
              value: `${data.iden}`
            },
            {
              name: "الخبرات العسكرية :",
              value: `${data.experts}`
            },
            {
              name: "القطاع :",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم الداخلية يرجى إرسال:__** \`${prefix}عسكريه\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "مخالفة") {
    if(message.channel.id != config.channel5) return;
    let data = {};
    message.channel.send({ content: `اسمك عزيز العسكري؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: ` وقت المخالفة` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: `المخالفة` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: `سعر المخالفه؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `منشن الشخص المخالف ` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`مخالفات`)
          .setDescription(`سوف يتم تقفل الحساب المخالف فيه حال عدم التسديد `)
          .addFields([
            {
              name: "الاسم العسكري:",
              value: `${data.name}`
            },
            {
              name: "وقت المخالفه؟ :",
              value: `${data.age}`
            },
            {
              name: "المخالفة:",
              value: `${data.iden}`
            },
            {
              name: "سعر المخالفة:",
              value: `${data.experts}`
            },
            {
              name: "شخص المخالف:",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتسجيل المخالفة يرجى إرسال:__** \`${prefix}مخالفة\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "العدل") {
    if(message.channel.id != config.channel6) return;
    let data = {};
    message.channel.send({ content: `اسمك  ؟` }).then(async msg => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect => {
        if(!collect.first()) return;
        data.name = collect.first().content;
        msg.delete().catch(err => 0);
        collect.first().delete().catch(() => 0);
        message.channel.send({ content: ` عمرك ` }).then(async msg1 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect1 => {
        if(!collect1.first()) return;
        data.age = collect1.first().content;
        msg1.delete().catch(err => 0);
        collect1.first().delete().catch(() => 0);
        message.channel.send({ content: `خبراتك` }).then(async msg2 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect2 => {
        if(!collect2.first()) return;
        data.experts = collect2.first().content;
        msg2.delete().catch(err => 0);
        collect2.first().delete().catch(() => 0);
        message.channel.send({ content: ` هل قريت القوانين؟` }).then(async msg3 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(collect3 => {
        if(!collect3.first()) return;
        data.iden = collect3.first().content;
        msg3.delete().catch(err => 0);
        collect3.first().delete().catch(() => 0);
        message.channel.send({ content: `  الوظيفه |محقق|محامي|قاضي` }).then(async msg4 => {
      message.channel.awaitMessages({ filter: (m) => m.author.id === message.author.id, max: 1 }).then(async collect4 => {
        if(!collect4.first()) return;
        data.section = collect4.first().content;
        msg4.delete().catch(err => 0);
        collect4.first().delete().catch(() => 0);
        let embed = new Discord.MessageEmbed()
          .setAuthor({ name: message.member.displayName, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `ID: ${message.author.id}` })
          .setTitle(`العدل`)
          .setDescription(`سوف يتم الرد من احد المسؤولين
          <@&1116678464045600778>
          <@&1116678554520932392>
          
          `)
          .addFields([
            {
              name: "الاسم :",
              value: `${data.name}`
            },
            {
              name: "العمر ؟ :",
              value: `${data.age}`
            },
            {
              name: "خبراتك:",
              value: `${data.iden}`
            },
            {
              name: "هل قريت القوانين:",
              value: `${data.experts}`
            },
            {
              name: "الوظيفه:",
              value: `${data.section}`
            }
          ])
          .setColor("#f1c40f");
        let msg5 = await message.channel.send({ content: `جاري تحميل بياناتك يرجى الانتظار...` });
        setTimeout(async () => {
          await message.delete().catch(() => 0);
          await msg5.delete().catch(() => 0);
          await message.channel.send({ embeds: [embed] });
          await message.channel.send({ content: `${message.author}` });
          await message.channel.send({ files: [config.line] }).catch(() => 0);
          message.channel.send({ content: `**__لتقديم ع العدل يرجى إرسال:__** \`${prefix}العدل\`` });
        }, 5000);
      });
    });
      });
    });
      });
    });
      });
    });
      });
    });
  }
});;

client.on("messageCreate", async message => {
  if(message.author.bot || !message.guild) return;
  let args = message.content.split(" ");
  if(ar