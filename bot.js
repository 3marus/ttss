const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("621302529996619802")
setInterval(function() {
channel.send(`سلاماىىفتطوىو `);
}, 30)
})

client.login(process.env.BOT_TOKEN);