const { Command } = require('discord.js-commando');
const lib = require('./../../lib.js');
const Stats = require('./../../structures/stats.js');

module.exports = class LhexCommand extends Command {
    constructor(client) {

        super(client, {
            name: 'lhex',
            aliases: ['reincarnate'],
            group: 'fun',
            memberName: 'lhex',
            description: 'Tells you what you\'ve reincarnated as',
            examples: [
                '`lhex` Generates a random reincarnation'
            ]
        });

    }

    run(msg) {

        var guildID = (msg.guild !== null) ? msg.guild.id : null;
        var lhex = lib.get_asset(guildID, 'lhex.json');

        // Updated stat
        if (guildID !== null){
            var stats = new Stats();
            stats.inc(guildID, msg.author.id, 'reincarnations_generated', 1);
        }

        var rand = Math.floor(Math.random() * lhex.lhex.length);
        return msg.say(`It's your lucky day! You've been reincarnated as ${lhex.lhex[rand]}!`);

    }
};
