const Discord = require("discord.js");
const myid = ['425314863737470997']
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();


client.login("Njc5NDEzNDg2NjY0Njc5NDk2.Xkw_og.1w-CeLiQe_VFvTtuBLv--anwBco");
client2.login("Njc5NzU1NDM3NTUzMzUyNzQ3.Xk195w.qijOpnXlU-RykvNFGgoQbI72Khg");
client3.login("Njc5NzU4Mjg1NDgxNDQzNTEy.Xk2A3Q.aFUjqApRboSfdDFi045GiYfIpto");
client4.login("NjgwMDQ0MjIzNzU1NDUyNDM3.Xk6LcQ.lmAXWHq-y6wCPVbqKHiT1EZukos");
client5.login("NjgwMDQ2OTgyODg2MzI2MzI4.Xk6NiQ.icxQuBGgyNj_ZIZJxTneYQDVV3Q");
client6.login("NjgwMDQ4NTU4NDM5MDA2MjQ0.Xk6Otw.MYOdjZpE-uR4HBaPK09BX-0Fofs");



client.on('message', message => {
  if (message.content === '$d') {
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client2.on('message', message => {
  if(message.content === '$d'){
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client3.on('message', message => {
  if(message.content === '$d'){
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client4.on('message', message => {
  if (message.content === '$d') {
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client5.on('message', message => {
  if(message.content === '$d'){
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === '$d') {
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});



client.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
if (message.content === '$"spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});



client.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client2.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client3.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client4.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client5.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client6.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
