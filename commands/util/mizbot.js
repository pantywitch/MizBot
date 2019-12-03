const { Command } = require('discord.js-commando');

module.exports = class MizbotCommand extends Command {
    constructor(client) {
            super(client, {
                    name: 'mizbot',
                    aliases: [],
                    group: 'util',
                    memberName: 'mizbot',
                    description: 'Links the list of commands.'
            });
    }

    run(msg) {
        return msg.reply('http://www.mizahar.com/lore/MizBot');
    }
};
