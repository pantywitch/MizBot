const { Command } = require('discord.js-commando');
const lib = require('./../../lib.js');
const Stats = require('./../../structures/stats.js');

module.exports = class wordsCommand extends Command {
    constructor(client) {

        super(client, {
            name: 'words',
            aliases: ['word'],
            group: 'writing',
            memberName: 'words',
            description: 'Generates a random English word.',
            examples: [
                '`words` Generates a random English word'
            ]
        });

    }

    run(msg) {

        var guildID = (msg.guild !== null) ? msg.guild.id : null;
        var words = lib.get_asset(guildID, 'words.json');

        // Updated stat
        if (guildID !== null){
            var stats = new Stats();
            stats.inc(guildID, msg.author.id, 'words_generated', 1);
        }

        var rand = Math.floor(Math.random() * words.words.length);
        return msg.say(`[${rand + 1}] ${words.words[rand]}`);

    }
};
