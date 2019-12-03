const { Command } = require('discord.js-commando');
const lib = require('./../../lib.js');

module.exports = class MapCommand extends Command {
    constructor(client) {

        super(client, {
            name: 'map',
            aliases: ['maps'],
            group: 'util',
            memberName: 'map',
            description: 'Displays useful and informational links for that map.',
            examples: [
                '`map city` - replies with a map of the cities of Mizahar',
            ],
            args: [
                {
                    key: 'type',
                    prompt: 'Which map? Reply with `geography`, `city`, `regions`, `trade`, `kabrin`.',
                    type: 'string'
                }
            ]
        });

    }

		run (msg, {type}){
			type = type.toLowerCase();
		// maps! yay!
			if (type === 'city') {
				return msg.embed ({
					color: 0x639c2b,
					title: 'Map of the Cities of Mizahar',
					image: {
						url: 'http://www.mizahar.com/w/images/1/1b/Citymap.jpg'
					}
				});
			} else if (type === 'geography') {
					return msg.embed ({
						color: 0x639c2b,
						title: 'Map of the Geography of Mizahar',
						image: {
							url: 'http://www.mizahar.com/w/images/8/8a/FinishedFinalMap.jpg'
						}
				});
			} else if (type === 'regions') {
					return msg.embed ({
						color: 0x639c2b,
						title: 'Map of the Regions of Mizahar',
						image: {
							url: 'http://www.mizahar.com/w/images/3/32/Basicmap.jpg'
						}
				});
			} else if (type === 'trade') {
					return msg.embed ({
						color: 0x639c2b,
						title: 'Map of the Sea Trade Routes of Mizahar',
						image: {
							url: 'http://www.mizahar.com/w/images/9/9f/TradeMap.jpg'
						}
				});
			} else if (type === 'kabrin') {
					return msg.embed ({
						color: 0x639c2b,
						title: 'Map of the Kabrin Road',
						image: {
							url: 'http://www.mizahar.com/w/images/3/38/Roads%21.jpg'
						}
				});
			}
		}
	}
