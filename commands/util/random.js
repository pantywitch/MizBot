const { Command } = require('discord.js-commando');
const lib = require('./../../lib.js');
const Stats = require('./../../structures/stats.js');

module.exports = class RandumCommand extends Command {
    constructor(client) {

        super(client, {
            name: 'random',
            aliases: ['rand'],
            group: 'writing',
            memberName: 'random',
            description: 'Generates a random thing from the chosen list of things.',
            examples: [
                '`random city` Generates a random city',
								'`random location` Geneartes a random location, including cities.',
								'`random skill` Generates a random skill from the skill list.',
								'`random race` Generates a random race from the race list.',
								'`random NPC` Generates a random NPC with 3 random skills, a random race, and a random gender.  Use ~generate char to pick a random name. (NOT YET IMPLEMENTED)'
            ],
						args: [
							{
								key: 'type',
								prompt: ' What thing do you want to randomize? Reply with `city`, `location`, `skill`, `race`, or `NPC`.',
								type: 'string'
							}
						]
        });

    }

		run (msg, {type}) {
			var guildID = (msg.guild !== null) ? msg.guild.id : null;
			var city = lib.get_asset(guildID, 'rcity.json');
      var location = lib.get_asset(guildID, 'rlocation.json');
      var race = lib.get_asset(guildID, 'rrace.json');
      var skills = lib.get_asset(guildID, 'rskills.json')

        type = type.toLowerCase();
				// Now we list the things!
				if (type === 'city'){
					var rand = Math.floor(Math.random() * city.city.length);
        	return msg.say(`[${rand + 1}] ${city.city[rand]}`);
				} else if (type === 'skill'){
					var rand = Math.floor(Math.random() * skills.skills.length);
					return msg.say(`[${rand + 1}] ${skills.skills[rand]}`);
				} else if (type === 'location'){
					var rand = Math.floor(Math.random() * location.location.length);
					return msg.say(`[${rand + 1}] ${location.location[rand]}`);
				} else if (type === 'race'){
					var rand = Math.floor(Math.random() * race.race.length);
					return msg.say(`[${rand + 1}] ${race.race[rand]}`);
				}
			}
		};
