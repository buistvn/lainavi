module.exports = {
    name: 'delete',
    description: 'Deletes a number of messages (limit 100)',
    aliases: ['purge'],
    usage: '[number of messages]',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply("that doesn't seem to be a valid number.");
        } else if (amount <= 1 || amount > 100) {
            return message.reply(
                'you need to input a number between 1 and 99.'
            );
        }

        message.channel.bulkDelete(amount, true).catch((err) => {
            console.error(err);
            message.channel.send(
                'there was an error trying to delete messages in this channel!'
            );
        });
    },
};
