const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjUwNjA4MTMwODIwMDE0MDgy.XeN1pg.kYdolfHQNKWDy8z6udDfsF0nm8g';

bot.on('ready', () =>{
    console.log('Eboys, prepare to be detected!');
})

bot.on('message', msg=>{
    if(msg.content === "I'm not an eboy"){
        msg.reply('Shut up Eboy.');
    }
    
    if(msg.content === "i'm not an eboy"){
        msg.reply('Shut up Eboy.');
    }

    if(msg.content === "I'm not an Eboy"){
        msg.reply('Shut up Eboy.');
    }

    if(msg.content === "i'm not an Eboy"){
        msg.reply('Shut up Eboy.');
    }

    if(msg.content === "I am not an eboy"){
        msg.reply('Shut up Eboy.');
    }

    if(msg.content === "i am not an eboy"){
        msg.reply('Shut up Eboy.');
    }

    if(msg.content === "I'm not a fucking eboy"){
        msg.reply('Shut up Eboy.');
    }

    if(msg.content === "Shut up eboy detector"){
        msg.reply('No u Eboy.');
    }

    if(msg.content === "Im not an eboy"){
        msg.reply('Shut up Eboy.');
    }

    if(msg.content === "im not an eboy"){
        msg.reply('Shut up Eboy.');
    }

    if(msg.content === "Akshath is an eboy"){
        msg.reply('Seems we have an intellectual here.');
    }

    if(msg.content === "Akshath you are an eboy"){
        msg.reply('Nice eye for eboys.');
    }
})


bot.login(token);

client.login(process.env.BOT_TOKEN);
