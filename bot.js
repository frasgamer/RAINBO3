const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('523270601872506890').roles.find("name", "OP").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});

client.login(process.env.BOT_TOKEN);
