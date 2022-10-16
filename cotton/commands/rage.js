const { SlashCommandBuilder, DiscordAPIError } = require('discord.js');
const { rollies } = require('./functions/dice');
const extreme = require('./arrays/extreme.js').extreme;
const moder = require('./arrays/moder.js').moder;
const mild = require('./arrays/mild.js').mild;
const wait = require('node:timers/promises').setTimeout;
const { textEd } = require('./functions/textEd');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rage')
        .setDescription('Shit\'s about to get wild'),
    async execute(interaction) {
        const table = rollies(1,20);
        const effect = rollies(1,100);
        if(table <= 3){
            console.log(table + " - " + effect);
            const resp = extreme.get(effect);
            const newResp = textEd(resp);
            await interaction.reply("You just rolled a **"+table+"**. Shit\'s about to get _EXTREEEEEME_ mofos");
            await wait(2000);
            await interaction.editReply("You rolled **"+effect+"** on the Extreme table.");
            await wait(1500);
            await interaction.editReply("Building suspense...");
            await wait(1500);
            await interaction.editReply(newResp+"\n**Table roll**: "+table+" - Extreme.\n**Result**: "+effect);
        }else if(table >= 10){
            console.log(table + " - " + effect);
            const resp = mild.get(effect);
            const newResp = textEd(resp);
            await interaction.reply("You just rolled a **"+table+"**. #NamelessGoneMild");
            await wait(2000);
            await interaction.editReply("You rolled **"+effect+"** on the Mild table.");
            await wait(1500);
            await interaction.editReply("Building suspense...");
            await wait(1500);
            await interaction.editReply(newResp+"\n**Table roll**: "+table+" - Mild.\n**Result**: "+effect);
        }else{
            console.log(table + " - " + effect);
            const resp = moder.get(effect);
            const newResp = textEd(resp);
            await interaction.reply("You just rolled a **"+table+"**. Let's party on the Moderately fun table.");
            await wait(2000);
            await interaction.editReply("You rolled **"+effect+"** on the Moderate table.");
            await wait(1500);
            await interaction.editReply("Building suspense...");
            await wait(1500);
            await interaction.editReply(newResp+"\n**Table roll**: "+table+" - Moderate.\n**Result**: "+effect);
        }
    }};