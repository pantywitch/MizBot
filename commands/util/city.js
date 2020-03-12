const { Command } = require('discord.js-commando');
const lib = require('./../../lib.js');

// just a list of the currently closed cities
var closed = ['sahova', 'nyka', 'avanthal', 'the spires', 'sultros', 'alvadas', 'kalinor', 'taloba', 'zinrah', 'black rock', 'endrykas', 'riverfall', 'kenash', 'mura', 'abura'];

module.exports = class CityCommand extends Command {
    constructor(client) {

        super(client, {
            name: 'city',
            aliases: [],
            group: 'util',
            memberName: 'city',
            description: 'Displays useful and informational links for that city.',
            examples: [
                '`city syka` - Shows a list of links for Syka',
            ],
            args: [
                {
                    key: 'type',
                    prompt: 'Which city? Reply with `syka`, `lhavit`, `syliras`, `outpost`, `ravok`, `sunberth`, `zeltiva`, or `wind reach`',
                    type: 'string'
                }
            ]
        });

    }

		run (msg, {type}){
      var options = [];
        type = type.toLowerCase();
// Checks whether or not the listed city is in the closed variable array
				if (closed.includes(type)) {
					return msg.say("That city is closed!");
      	} else if (type === 'syka'){
					return msg.embed({
							color: 0x9B59B6,
							author: {
								name: "Storyteller: Gossamer",
								url: "http://www.mizahar.com/forums/member57.html",
								icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=57_1555170736.png'
							},
							title: 'Syka',
							description: "This brand new settlement is a tropical paradise on the edge of the Falyndar jungle. Buffeted by the Suvan, the settlement of Syka holds many secrets.",
							thumbnail: {
									url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
										name: "Forums",
										value: "[IC Forum](http://www.mizahar.com/forums/syka-f156.html), [OOC Forum](http://www.mizahar.com/forums/paradise-rediscovered-f157.html)"
								},
								{
										name: "Getting Started",
										value: "[Codex](http://www.mizahar.com/forums/topic65044.html), [Request Thread](http://www.mizahar.com/forums/topic66737.html), [Employment Guide](http://www.mizahar.com/forums/topic71334.html), [OOC Thread](http://www.mizahar.com/forums/topic73545.html)"
								},
								{
										name: "Spring 520",
										value: "[Registry](http://www.mizahar.com/forums/topic78157.html)"
								},
								{
									name: "Lore Pages",
									value: "[Syka](http://www.mizahar.com/lore/Syka)"
								},
              ],
              footer: {
                  text: "MOST AWESOME CITY EVER"
              }
						});
      	} else if(type === 'lhavit'){
					return msg.embed({
							color: 0x9B59B6,
							author: {
								name: "Storyteller: Luminescence",
								url: "http://www.mizahar.com/forums/member43765.html",
								icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=43765_1515859156.png'
							},
							title: 'Lhavit',
							description: "Crystaline city of the clouds located on Kalea's extreme west coast. Home of the Alvina of the Stars and rife with magic, this remote city shimmers with its own unique light.",
							thumbnail: {
									url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
									{
											name: "Forums",
											value: "[IC Forum](http://www.mizahar.com/forums/lhavit-f103.html), [OOC Forum](http://www.mizahar.com/forums/the-shape-of-things-to-come-f116.html)"
									},
									{
											name: "Getting Started",
											value: "[Codex](http://www.mizahar.com/forums/topic36355.html), [Job and Wage Requests](http://www.mizahar.com/forums/topic75282.html), [OOC Thread](http://www.mizahar.com/forums/topic65868.html)"
									},
									{
											name: "Spring 520",
											value: "[Registry](http://www.mizahar.com/forums/topic78163.html), [Calendar](http://www.mizahar.com/forums/topic78186.html)"
									},
									{
										name: "Lore Pages",
										value: "[Lhavit](http://www.mizahar.com/lore/Lhavit)"
									}
							]
					});
				} else if(type === 'syliras'){
						return msg.embed({
							color: 0x9B59B6,
							author: {
								name: "Storyteller: Mayhem",
								url: "http://www.mizahar.com/forums/member117883.html",
								icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=117883_1567473135.jpg'
							},
							title: 'Syliras',
							description: "Capital city of Sylira, Syliras is the cultural melting pot of humanity where folks are slowly rebuilding civilization in a setting forged by the honor of the Syliran Knights. Place of the massive Ironworks and the Miza Mint, as well as the maintainers of the Kabrin Road, the only major road in Mizahar, Syliras is an important part of the Mizaharian World.",
							thumbnail: {
								url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
                {
									name: "Getting Started",
									value: "[Syliras Starting Guide](http://www.mizahar.com/forums/topic77733.html), [Linkmap](http://www.mizahar.com/forums/topic32.html), [OOC Thread](http://www.mizahar.com/forums/topic77179.html), [Request Thread](http://www.mizahar.com/forums/topic77691.html)"
								},
								{
									name: "Forums",
									value: "[Syliras Forum](http://www.mizahar.com/forums/syliras-closed-f19.html), [Cobalt Mountains Forum](http://www.mizahar.com/forums/the-cobalt-mountains-f79.html)"
								},
                {
                  name: "Spring 520",
                  value: "[Registry](http://www.mizahar.com/forums/topic78165.html), [Quest (rescheduled for Spring)](http://www.mizahar.com/forums/post548923.html#p548923)"
                },
								{
									name: "Lore Pages",
									value: "[Syliras](http://www.mizahar.com/lore/Syliras), [Syliran Knights](http://www.mizahar.com/lore/Syliran_Knights)"
								}
						],
					});
				} else if(type === 'ravok'){
						return msg.embed({
							color: 0x9B59B6,
							author: {
								name: "Storyteller: Gillar",
								url: "http://www.mizahar.com/forums/member58.html",
								icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=58_1379896652.gif'
							},
							title: 'Ravok',
							description: "Built on an enormous lake, Ravok is the home of a floating city populated with humans who believe their home to be superior to the rest of Mizahar. They love and honor their god in all they do but are very untrusting of outsiders.",
							thumbnail: {
								url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
										name: "Forums",
										value: "[IC Forum](http://www.mizahar.com/forums/ravok-f61.html), [OOC Forum](http://www.mizahar.com/forums/the-docks-f83.html)"
								},
								{
										name: "Getting Started",
										value: "[Linkmap](http://www.mizahar.com/forums/topic70803.html), [Request Thread](http://www.mizahar.com/forums/topic68754.html), [OOC Thread](http://www.mizahar.com/forums/topic65902.html)"
								},
								{
									name: "Lore Pages",
									value: "[Ravok](http://www.mizahar.com/lore/Ravok)"
								}
						]
					});
				} else if(type === 'sunberth'){
						return msg.embed({
							color: 0x206694,
							author: {
								name: "Storyteller: Resolve",
								url: "http://www.mizahar.com/forums/member127810.html",
								icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=127810_1575993537.png'
							},
							title: 'Sunberth',
							description: "A former mining town almost entirely destroyed in the Valterrian, Sunberth is populated by the descendants of the mine workers. They hold a tremendous grudge against the way their ancestors were treated, and have come to believe that the post-cataclysm chaos is actually better than the 'order' that preceded it. As such, they have a great antipathy toward anything resembling 'civilization' in the law-and-order kind of way.",
							thumbnail: {
								url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
										name: "Forums",
										value: "[IC Forum](http://www.mizahar.com/forums/sunberth-f60.html), [OOC Forum](http://www.mizahar.com/forums/underneath-the-slag-heap-f158.html)"
								},
								{
										name: "Getting Started",
										value: "[Linkmap](http://www.mizahar.com/forums/topic56411.html), [Grade Requests](http://www.mizahar.com/forums/topic73598.html), [All Other Requests](http://www.mizahar.com/forums/help-desk-f9.html), [OOC Thread](http://www.mizahar.com/forums/topic56375.html)"
								},
								{
										name: "Spring 520",
										value: "[Registry](http://www.mizahar.com/forums/topic78161.html), [Calendar](http://www.mizahar.com/forums/topic78179.html), [Requests](http://www.mizahar.com/forums/topic77857.html)"
								},
								{
									name: "Lore Pages",
									value: "[Sunberth](http://www.mizahar.com/lore/Sunberth)"
								}
						]
					});
				} else if(type === 'zeltiva'){
						return msg.embed({
							color: 0x206694,
							author: {
								name: "Storyteller: Gossamer, requests go through Help Desk",
								url: "http://www.mizahar.com/forums/help-desk-f9.html",
								icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=57_1555170736.png'
							},
							title: 'Zeltiva',
							description: "A port city surrounded on three sides by mountains, Zeltiva is the home of the finest shipbuilders and sailors in Mizahar. It also boasts an exceptional university, and is a center of trade in both goods and ideas.	",
							thumbnail: {
								url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
										name: "Forums",
										value: "[IC Forum](http://www.mizahar.com/forums/zeltiva-f26.html), [OOC Forum](http://www.mizahar.com/forums/all-at-sea-f137.html)"
								},
								{
										name: "Getting Started",
										value: "[Codex](http://www.mizahar.com/forums/topic76365.html), [Grade Requests](http://www.mizahar.com/forums/topic76875.html), [All Other Requests](http://www.mizahar.com/forums/help-desk-f9.html), [OOC Thread](http://www.mizahar.com/forums/topic77011.html)"
								},
								{
										name: "Spring 520",
										value: "[Registry](http://www.mizahar.com/forums/topic78158.html)"
								},
								{
									name: "Lore Pages",
									value: "[Zeltiva](http://www.mizahar.com/lore/Zeltiva)"
								}
						]
					});
				} else if(type === 'wind reach'){
						return msg.embed({
							color: 0x206694,
							author: {
								name: "Storyteller: Gossamer, requests go through Help Desk",
								url: "http://www.mizahar.com/forums/help-desk-f9.html",
								icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=57_1555170736.png'
							},
							title: 'Wind Reach',
							description: "A remote western outpost in some of the tallest mountains of Kalea, here humanity has formed a unique bond with enormous, oversized eagles they live in harmony with. Often never touching the ground, these bow-wielding humans reside in Mt. Skyinarta, an ancient dead volcano they've carved out for their enormous companions.",
							thumbnail: {
								url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
										name: "Forums",
										value: "[IC Forum](http://www.mizahar.com/forums/zeltiva-f26.html), [OOC Forum](http://www.mizahar.com/forums/stoking-the-flames-f117.html)"
								},
								{
										name: "Getting Started",
										value: "[Codex](http://www.mizahar.com/forums/topic74853.html), [Grade Requests](http://www.mizahar.com/forums/topic73616.html), [All Other Requests](http://www.mizahar.com/forums/help-desk-f9.html), [OOC Thread](http://www.mizahar.com/forums/topic73565.html)"
								},
								{
										name: "Winter 519",
										value: "[Registry](http://www.mizahar.com/forums/topic77830.html)"
								},
								{
									name: "Lore Pages",
									value: "[Wind Reach](http://www.mizahar.com/lore/Wind_Rich)"
								}
						]
					});
        } else if (type === 'outpost'){
					return msg.embed({
							color: 0x9B59B6,
							author: {
								name: "Storyteller: Gossamer",
								url: "http://www.mizahar.com/forums/member57.html",
								icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=57_1555170736.png'
							},
							title: 'The Outpost',
							description: "A gift from Xyna to the peoples of Mizahar. It is a magical place full of potential and possibility where all can gather and exchange ideas and commerce.  It is a universal trading post ran by Xyna and her priests and priestesses, and is acessible by anyone from any major city in Mizahar through their infamous Dovecotes.",
							thumbnail: {
									url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
										name: "Forums",
										value: "[IC Forum](http://www.mizahar.com/forums/the-outpost-f186.html), [OOC Thread](http://www.mizahar.com/forums/topic77925.html)"
								},
								{
										name: "Getting Started",
										value: "[Codex](http://www.mizahar.com/forums/topic77894.html), [Registry](http://www.mizahar.com/forums/topic77939.html), [Requests](http://www.mizahar.com/forums/topic78047.html)"
								},
								{
									name: "Lore Pages",
									value: "[Xyna](http://www.mizahar.com/lore/Xyna)"
								},
              ],
              footer: {
                  text: "Voted #1 Vacation Destination by MizBot"
              }
						});
					// if you type in nonsense this is what you get
      	} else {
            return msg.say("That's not a city!");
        }

    }

};
