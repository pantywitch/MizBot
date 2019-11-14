const { Command } = require('discord.js-commando');

module.exports = class WelcomeCommand extends Command {
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
					color: 0xF1C40F,
          author: {
            name: 'Need character sheet help? Talk to Antipodes!',
            url: 'http://www.mizahar.com/forums/member42114.html',
            icon_url: 'http://www.mizahar.com/forums/download/file.php?avatar=42114_1567836619.png'
          },
					title: 'Getting Started on Mizahar',
					description: "Don't be afraid to ask questions!",
					thumbnail: {
							url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
					},
					fields: [
              {
                name: "Rules",
                value: "[Rules](http://www.mizahar.com/lore/Rules), [Chat Rules](http://mizahar.com/lore/Chat_Rules), [Founder Announcements](http://www.mizahar.com/forums/topic74592.html), [13 Things You Need To Know](http://www.mizahar.com/lore/Things_You_Need_To_Know)"
              },
							{
									name: "Start Here",
									value: "[Starting Guide](http://mizahar.com/lore/Starting_Guide), [Starting Package](http://mizahar.com/lore/Starting_Package), [Skill Guide](http://mizahar.com/lore/Skill_Guide)"
							},
              {
                  name: "How Miz Works",
                  value: " [EXP](http://www.mizahar.com/lore/Experience_Points), [Calendar](http://www.mizahar.com/lore/Calendar), [Religion](http://www.mizahar.com/lore/Religion), [Gnosis](http://www.mizahar.com/lore/Gnosis), [PVP](http://www.mizahar.com/lore/PVP)"
              },
							{
									name: "Making Your Character",
									value: "[Character Sheets Forum](http://www.mizahar.com/forums/character-sheets-f37.html), [Character Sheet Templates](http://www.mizahar.com/forums/topic30558.html), [Help Desk](http://www.mizahar.com/forums/help-desk-f9.html)"
							},
							{
									name: "After Character Creation",
									value: "[Matchmaking Forum](http://www.mizahar.com/forums/character-matchmaking-f41.html), [Plotnotes Forum](http://www.mizahar.com/forums/plotnotes-f136.html), [Post Template Forum](http://www.mizahar.com/forums/post-templates-f130.html)",
							},
              {
                  name: "Other Links",
                  value: "[Scrapbook Forum](http://www.mizahar.com/forums/player-scrapbooks-f98.html), [BBCode Guide](http://www.mizahar.com/forums/topic122.html), [DATS](http://www.mizahar.com/lore/DATS), [Travel Time](http://www.mizahar.com/lore/Travel_times)"
              }
					]
			});
    }
};
