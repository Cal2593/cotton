const { SlashCommandBuilder, DiscordAPIError } = require('discord.js');
const { exit } = require('node:process');
const wait = require('node:timers/promises').setTimeout;
const end = require('./arrays/end.js').end;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timer')
        .setDescription('time to decide')
        .addIntegerOption(option =>
            option.setName("minutes")
                    .setDescription("How many minutes?")
                    .setMinValue(1)
                    .setMaxValue(10)
                    .setRequired(true)
        ),
    async execute(interaction) {
        const i = interaction.options.getInteger('minutes');
    }
};