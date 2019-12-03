const { Command } = require('discord.js-commando');
const lib = require('./../../lib.js');

module.exports = class WikiCommand extends Command {
    constructor(client) {

        super(client, {
            name: 'wiki',
            aliases: ['lore'],
            group: 'util',
            memberName: 'wiki',
            description: 'Adds the term onto the end of http://www.Mizahar.com/lore/*, hopefully linking to a wiki page.',
            examples: [
                '`city syka` - Shows a list of links for Syka',
            ],
            args: [
                {
                    key: 'type',
                    prompt: 'Which city? Reply with `syka`, `lhavit`, `syliras`, `ravok`, `sunberth`, `zeltiva`, or `wind reach`',
                    type: 'string'
                }
            ]
        });

    }

		run (msg, {type}){
			type = type.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
			type = type.replace(/ /g, "_");
			var mizlore = "http://www.mizahar.com/lore/";
			var mizresult = mizlore.concat(type);

			return msg.say(mizresult)
		}
}
