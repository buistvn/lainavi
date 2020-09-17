module.exports = {
    name: 'server',
    description: 'Shows server name and total members',
    guildOnly: true,
    execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
}