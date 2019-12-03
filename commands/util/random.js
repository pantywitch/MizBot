const { Command } = require('discord.js-commando');
const lib = require('./../../lib.js');
const Stats = require('./../../structures/stats.js');

module.exports = class RandomCommand extends Command {
    constructor(client) {

        super(client, {
            name: 'random',
            aliases: [],
            group: 'writing',
            memberName: 'random',
            description: 'Generates a random thing from the chosen list of things.',
            examples: [
                '`random city` Generates a random city',
								'`random location` Geneartes a random location, including cities.',
								'`random skill` Generates a random skill from the skill list.',
								'`random race` Generates a random race from the race list.',
								'`random NPC` Generates a random NPC with 3 random skills, a random race, and a random gender.  Use ~generate char to pick a random name. (NOT YET IMPLEMENTED)'
            ]
						args: [
							{
								key: 'type',
								prompt: ' What thing do you want to randomize? Reply with `city`, `location`, `skill`, `race`, or `NPC`.',
								type: 'string'
							}
						]
        });

    }

		run (msg, {type}){
      var options = [];
			var guildID = (msg.guild !== null) ? msg.guild.id : null;
			var randum = lib.get_asset(guildID, 'random.json');
        type = type.toLowerCase();
				// Now we list the things!
				if (type === 'city'){
					var rand = Math.floor(Math.random() * randum.city.length);
        	return msg.say(`[${rand + 1}] ${randum.city[rand]}`);
				}
				else if (type === 'skill'){
					var rand = Math.floor(Math.random() * randum.skills.length);
					return msg.say(`[${rand + 1}] ${randum.skills[rand]}`);
				}
				else if (type === 'location'){
					var rand = Math.floor(Math.random() * randum.location.length);
					return msg.say(`[${rand + 1}] ${randum.location[rand]}`);
				}
				else if (type === 'race'){
					var rand = Math.floor(Math.random() * randum.race.length);
					return msg.say(`[${rand + 1}] ${randum.race[rand]}`);
				}
				else {
					return msg.say("Sorry, I didn't understand.");
				}
		};
