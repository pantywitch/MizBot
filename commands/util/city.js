const { Command } = require('discord.js-commando');
const lib = require('./../../lib.js');

module.exports = class AskCommand extends Command {
    constructor(client) {

        super(client, {
            name: 'city',
            aliases: [],
            group: 'util,
            memberName: 'city',
            description: 'Displays useful and informational links for that city.',
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

        var guildID = (msg.guild !== null) ? msg.guild.id : null;

        var options = [];
        type = type.toLowerCase();

        if (type === 'syka'){
					return msg.embed({
							color: 0x3573A4,
							title: 'Syka',
							description: "This brand new settlement is a tropical paradise on the edge of the Falyndar jungle. Buffeted by the Suvan, the settlement of Syka holds many secrets.",
							thumbnail: {
									url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
									{
											name: "Forum",
											value: "http://www.mizahar.com/forums/syka-f156.html"
									},
									{
											name: "Lore Page",
											value: "http://www.mizahar.com/lore/Syka"
									},
									{
											name: "Codex",
											value: "http://www.mizahar.com/forums/topic65044.html"
									}
							],
							footer: {
								icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=57_1555170736.png',
								text: "Moderator: Gossamer"
						});
        } else if(type === 'lhavit'){
					return msg.embed({
							color: 0x3573A4,
							title: 'Lhavit',
							description: "Crystaline city of the clouds located on Kalea's extreme west coast. Home of the Alvina of the Stars and rife with magic, this remote city shimmers with its own unique light.",
							thumbnail: {
									url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
									{
											name: "Forum",
											value: "http://www.mizahar.com/forums/lhavit-f103.html"
									},
									{
											name: "Lore Page",
											value: "http://www.mizahar.com/lore/Lhavit"
									},
									{
											name: "Codex",
											value: "http://www.mizahar.com/forums/topic36355.html"
									}
							],
							footer: {
								icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=43765_1515859156.png',
								text: "Moderator: Luminescence"
					});
				} else if(type === 'syliras'){
						return msg.embed({
							color: 0x3573A4,
							title: 'Syliras, Currently Closed',
							description: "Capital city of Sylira, Syliras is the cultural melting pot of humanity where folks are slowly rebuilding civilization in a setting forged by the honor of the Syliran Knights. Place of the massive Ironworks, extensive agriculture, and the Miza Mint, where coin across the nation is made... Syliras is an important part of the Mizaharian World.",
							thumbnail: {
								url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
									name: "Opening Date",
									value: "December 1st, 2019 (Winter 1st 519)"
								},
								{
									name: "Forum",
									value: "http://www.mizahar.com/forums/syliras-closed-f19.html"
								},
								{
									name: "Lore Page",
									value: "http://www.mizahar.com/lore/Syliras"
								},
								{
									name: "Codex",
									value: "tbd"
								}
						],
								footer: {
									icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=117883_1567473135.jpg',
									text: "Moderator: Mayhem"
					});
				} else if(type === 'ravok'){
						return msg.embed({
							color: 0x3573A4,
							title: 'Ravok',
							description: "Built on an enormous lake, Ravok is the home of a floating city populated with humans who believe their home to superior to the rest of Mizahar. They love and honor their god in all they do but are very untrusting of outsiders.",
							thumbnail: {
								url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
									name: "Forum",
									value: "http://www.mizahar.com/forums/ravok-f61.html"
								},
								{
									name: "Lore Page",
									value: "http://www.mizahar.com/lore/Ravok"
								},
								{
									name: "Linkmap",
									value: "http://www.mizahar.com/forums/topic70803.html"
								}
						],
								footer: {
									icon_url:'http://www.mizahar.com/forums/download/file.php?avatar=117883_1567473135.jpg',
									text: "Moderator: Gillar"
					});
				} else if(type === 'sunberth'){
						return msg.embed({
							color: 0x3573A4,
							title: 'Sunberth',
							description: "A former mining town almost entirely destroyed in the Valterrian, Sunberth is populated by the descendants of the mine workers. They hold a tremendous grudge against the way their ancestors were treated, and have come to believe that the post-cataclysm chaos is actually better than the 'order' that preceded it. As such, they have a great antipathy toward anything resembling 'civilization' in the law-and-order kind of way.",
							thumbnail: {
								url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
									name: "Forum",
									value: "http://www.mizahar.com/forums/sunberth-f60.html"
								},
								{
									name: "Lore Page",
									value: "http://www.mizahar.com/lore/Sunberth"
								},
								{
									name: "Linkmap",
									value: "http://www.mizahar.com/forums/topic56411.html"
								}
						],
								footer: {
									text: "Moderator: None, requests go through Help Desk"
					});
				} else if(type === 'zeltiva'){
						return msg.embed({
							color: 0x3573A4,
							title: 'Zeltiva',
							description: "A port city surrounded on three sides by mountains, Zeltiva is the home of the finest shipbuilders and sailors in Mizahar. It also boasts an exceptional university, and is a center of trade in both goods and ideas.	",
							thumbnail: {
								url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
									name: "Forum",
									value: "http://www.mizahar.com/forums/zeltiva-f26.html"
								},
								{
									name: "Lore Page",
									value: "http://www.mizahar.com/lore/Zeltiva"
								},
								{
									name: "Codex",
									value: "http://www.mizahar.com/forums/topic76365.html"
								}
						],
								footer: {
									text: "Moderator: None, requests go through Help Desk"
					});
				} else if(type === ['wind reach', 'wr']){
						return msg.embed({
							color: 0x3573A4,
							title: 'Wind Reach',
							description: "A remote western outpost in some of the tallest mountains of Kalea, here humanity has formed a unique bond with enormous, oversized eagles they live in harmony with. Often never touching the ground, these bow-wielding humans reside in Mt. Skyinarta, an ancient dead volcano they've carved out for their enormous companions.",
							thumbnail: {
								url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
							},
							fields: [
								{
									name: "Forum",
									value: "http://www.mizahar.com/forums/wind-reach-f30.html"
								},
								{
									name: "Lore Page",
									value: "http://www.mizahar.com/lore/Wind_Reach"
								},
								{
									name: "Codex",
									value: "http://www.mizahar.com/forums/topic74853.html"
								}
						],
								footer: {
									text: "Moderator: None, requests go through Help Desk"
					});
        } else {
            return msg.say("that's not a city!"));
        }

    }

};
