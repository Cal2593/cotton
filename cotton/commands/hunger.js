const { SlashCommandBuilder, DiscordAPIError } = require('discord.js');
const chars = require("./arrays/characters.js").chars;
const levs = require("./arrays/level.js").levs;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('hunger')
        .setDescription('Set, Check and Update Hunger levels')
        .addSubcommand(subcommand =>
            subcommand
                .setName('check')
                .setDescription('Check your hunger level')
            )
        .addSubcommand(subcommand =>
            subcommand
                .setName('modify')
                .setDescription('Modify your hunger level')
                .addStringOption(option => 
                    option.setName('direction')
                        .setDescription('Are you more or less hungry?')
                        .setRequired(true)
                        .addChoices(
                            { name: 'More', value: '1' },
                            { name: 'Less', value: '-1' },
                        )
                    )
            ),
    async execute(interaction) {
        const sub = interaction.options.getSubcommand();
        var user = interaction.user.username;
        switch(sub){
            case "check":
                if (chars.get(user) != null){
                    var level = chars.get(user);
                }else{
                    chars.set(user,0);
                    var level = chars.get(user);
                }
                    await interaction.reply({ content: level.toString() });
                break;
            case "modify":
                var mod = parseInt(interaction.options.getString('direction'));
                if (chars.get(user) != null) {
                    var clevel = chars.get(user) + mod;
                    chars.set(user,mod);
                }else{
                    var clevel = mod;
                    chars.set(user,mod);
                }
                const movCha = levs.find(levs => levs.level === clevel).movement;
                    await interaction.reply({ content: "Your hunger level is now: " + clevel.toString() +
                "\nThis means that you have "+movCha+"ft extra movement" });
                break;
        }
    }
};