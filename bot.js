const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('523270601872506890').roles.find("name", "members").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});
