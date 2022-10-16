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
        const numOfDice = parseInt(diceRoll.substring(0,diceRoll.indexOf('d')));
        const diceSize = parseInt(diceRoll.substring(diceRoll.indexOf('d')+1));
        const result = rollies(numOfDice,diceSize);
            await interaction.reply("You rolled "+result.toString()+"!"+
            "\n"+numOfDice.toString()+"d"+diceSize.toString()+"s were rolled.");
    }};