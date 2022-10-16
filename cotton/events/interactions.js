module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        console.log(interaction.user.tag+" in the "+interaction.channel.name+" channel triggered an interaction.");
    },
};