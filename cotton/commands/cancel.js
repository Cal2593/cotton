const { SlashCommandBuilder, DiscordAPIError } = require('discord.js');
const end = require("./arrays/end.js").end;
module.exports = {
    data: new SlashCommandBuilder()
        .setName("cancel")
        .setDescription("Decision made"),
    async execute(interaction) {
        end.set('cancel',1);
        await interaction.reply("Timer cancelled")
    }
};