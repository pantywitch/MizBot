const { Command } = require('discord.js-commando');

module.exports = class PatchCommand extends Command {
    constructor(client) {
            super(client, {
                    name: 'welcome',
                    aliases: ["welc", "start"],
                    group: 'util',
                    memberName: 'welcome',
                    description: 'Displays a list of links to get started on Mizahar.'
            });
    }

    run(msg) {
			return msg.embed({
					color: 0x04385D,
					title: 'Useful Links to Get Started',
					description: "Don't be afraid to ask questions.",
					thumbnail: {
							url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
					},
					fields: [
							{
									name: "Starting Guide",
									value: "http://mizahar.com/lore/Starting_Guide"
							},
							{
									name: "Starting Package",
									value: "http://mizahar.com/lore/Starting_Package"
							},
							{
									name: "Race List",
									value: "http://mizahar.com/lore/Race_List"
							},
							{
									name: "City List",
									value: "http://mizahar.com/lore/City_List",
							},
              {
                  name: "Help Desk",
                  value: "http://www.mizahar.com/forums/help-desk-f9.html"
              }
					]
			});
    }
};
