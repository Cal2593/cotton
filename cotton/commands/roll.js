const { SlashCommandBuilder, DiscordAPIError, DirectoryChannel } = require('discord.js');
const { rollies } = require('./functions/dice');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('They see me rollin')
        .addStringOption(option =>
            option.setName('dice')
                .setDescription('Which dice do you want to roll?')
                .setRequired(true)),
    async execute(interaction) {
        const diceRoll = interaction.options.getString('dice');
        if(diceRoll.search(" ")===-1){
            var diceSize = parseInt(diceRoll.substring(diceRoll.indexOf('d')+1));
            var modifier = 0;
        }else{
            var modifier = parseInt(diceRoll.substring(diceRoll.indexOf(' ')+1));
            var diceSize = parseInt(diceRoll.substring(diceRoll.indexOf('d')+1, diceRoll.lastIndexOf(' ')));
            console.log(modifier);
        }
        const numOfDice = parseInt(diceRoll.substring(0,diceRoll.indexOf('d')));
        const result = rollies(numOfDice,diceSize);
        const moddedResult = result+modifier;
        if(modifier>0){
            var mod = "\\+";
        }else if(modifier<0){
            var mod = "";
        }else{
            var mod = " ";
            var modifier = " ";   
        }
            await interaction.reply("**Result:** "+numOfDice.toString()+"d"+diceSize.toString()+" (**"+result.toString()+"**) "+mod+modifier+
            "\n**Total:** "+moddedResult.toString());
    }};