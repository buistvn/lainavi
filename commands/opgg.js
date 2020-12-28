module.exports = {
    name: 'opgg',
    description: 'Shows link for a player\'s op.gg page',
    usage: '[player name (NA region)]',
    cooldown: 10,
    execute(message, args) {
        var link;
        var name;

        if (!args.length) {
            return message.reply('you need to include a player name.');
        }
        else {
            name = args[0];
            for (var i = 1; i < args.length; i++) {
                name += '+' + args[i];
            }
        }

        link = "https://na.op.gg/summoner/userName=" + name;

        message.channel.send(link);
    }
}