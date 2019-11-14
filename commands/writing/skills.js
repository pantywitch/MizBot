const { Command } = require('discord.js-commando');
const lib = require('./../../lib.js');
const Stats = require('./../../structures/stats.js');

module.exports = class SkillsCommand extends Command {
    constructor(client) {

        super(client, {
            name: 'skills',
            aliases: ['skill'],
            group: 'writing',
            memberName: 'skills',
            description: 'Generates a random skill.',
            examples: [
                '`skills` Generates a skill'
            ]
        });

    }

    run(msg) {

        var guildID = (msg.guild !== null) ? msg.guild.id : null;
        var skills = lib.get_asset(guildID, 'skills.json');

        // Updated stat
        if (guildID !== null){
            var stats = new Stats();
            stats.inc(guildID, msg.author.id, 'skills_generated', 1);
        }

        var rand = Math.floor(Math.random() * skills.skills.length);
        return msg.say(`[${rand + 1}] ${skills.skills[rand]}`);

    }
};
