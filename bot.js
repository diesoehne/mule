const Discord = require('discord.js');
const mule = new Discord.Client();

mule.on('message', msg => {
    if (msg.content.toLowerCase() === '+help open') {
        msg.guild.createChannel('support-' + msg.member.id,'text');
    } else
    if (msg.content.toLowerCase() === '+help close') {
        let a = msg.guild.channels.array();
        for (let i = 0; i < msg.guild.channels.size; i++) {
            if(a[i].name === 'support-' + msg.member.id && a[i].type === 'text') {
                a[i].delete(); break;
            }
        }
    }
});
mule.login('NTc3MTU2MDA1NjcwOTQ0NzY4.XNg-Gg.efvmDX0v44bcdV4e4Z8VS13_Zic');