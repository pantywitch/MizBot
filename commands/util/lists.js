const { Command } = require('discord.js-commando');

module.exports = class ListsCommand extends Command {
    constructor(client) {
            super(client, {
                    name: 'lists',
                    aliases: ['list'],
                    group: 'util',
                    memberName: 'lists',
                    description: 'Displays a list of links of lists.'
            });
    }

    run(msg) {
			return msg.embed({
					color: 0xF1C40F,
					title: 'List of Lists',
					description: "of Lists of Lists of...",
					thumbnail: {
							url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
					},
					fields: [
						{
								name: "Starting Lists",
								value: "[Race List](http://mizahar.com/lore/Race_List), [City List](http://mizahar.com/lore/City_List), [Skill List](http://www.mizahar.com/lore/Skill_List)"
						},
						{
							name: "Reference Lists",
							value: "[Price List](http://mizahar.com/lore/Price_List), [Magic List](http://www.mizahar.com/lore/Magic_List), [Storyteller List](http://www.mizahar.com/lore/Moderator_List)"
						},
						{
							name: "Religious Lists",
							value: " [Gnosis List](http://www.mizahar.com/lore/Gnosis_List), [God List](http://www.mizahar.com/lore/God_List)"
						}
					]
			});
    }
};
