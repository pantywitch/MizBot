const { Command } = require('discord.js-commando');
const NameGenerator = require('./../../structures/gen.js');

module.exports = class GenerateCommand extends Command {
    constructor(client) {

        super(client, {
            name: 'generate',
            aliases: ['gen'],
            group: 'writing',
            memberName: 'generate',
            description: 'Random generator for various things (character names, place names, land names, book titles, story ideas). Define the type of item you wanted generated and then optionally, the amount of items to generate.',
            examples: [
                '`generate char` Generates 10 character names',
                '`generate place 20` Generates 20 fantasy place names',
            ],
            args: [
                {
                    key: 'type',
                    prompt: 'What type of name do you want to generate? (`char`, `place`)',
                    type: 'string'
                },
                {
                    key: 'amount',
                    default: '10',
                    prompt: 'How many names do you want to generate?',
                    type: 'integer',
                    max: '25'
                }
            ]
        });
    }

    run(msg, {type, amount}) {

        let generator = new NameGenerator();
        return generator.generate(msg, type, amount);

    }
};
