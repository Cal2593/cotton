const fs = require('node:fs');
const path = require('node:path');
const { token } = require('./config.json');
const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.commands = new Discord.Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    //Set a new item in the collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}

client.events = new Discord.Collection();
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.on('interactionCreate', async interaction => {
    console.log(interaction.user.tag+" in the "+interaction.channel.name+" channel triggered an interaction.");
    if(!interaction.isChatInputCommand()) return;
    //First, fetch the command in the Collection with that name and assign it to command
    const command = interaction.client.commands.get(interaction.commandName); 
    //Then if the command doesn't exist, it will return undefined so exit early
    if(!command) return;
    //If it does exist
    try {
        await command.execute(interaction);//call the commands execute method and pass in the interaction
    }catch (error) {// if something goes wrong, call the error
        console.error(error);
        await interaction.reply({content: 'There was an error while executing this command'});// and log back to the user to let them know
    }
});

client.login(token);