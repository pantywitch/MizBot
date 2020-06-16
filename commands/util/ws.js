const { Command } = require('discord.js-commando');

module.exports = class MizbotCommand extends Command {
    constructor(client) {
            super(client, {
                    name: 'ws',
                    aliases: [],
                    group: 'util',
                    memberName: 'ws',
                    description: 'Lists an OOC note regarding Wilderness Survival requirements.'
            });
    }

    run(msg) {
        return msg.reply('The following list is a region by region notation of what skill level is required to survive in the various regions listed. Eyktol E+, Cyphrus C+, Sylira C+, Taldera (Forest) C+, Taldera (Arctic) E+, Kalea M+, Falyndar E+, The Suvan Sea C+, The Outer Oceans E+.');
    }
};
