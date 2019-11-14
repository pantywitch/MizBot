const { Command } = require('discord.js-commando');
const lib = require('./../../lib.js');

const moment = require('moment');
require('moment-duration-format');

const version = require('./../../version.json');
const Stats = require('./../../structures/stats.js');

module.exports = class InfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'info',
			aliases: [],
			group: 'util',
			memberName: 'info',
			description: 'Displays information and statistics about the bot.',
			guildOnly: true
		});
	}

	run(msg) {
            
            var stats = new Stats();
            
		return msg.embed({
			color: 3447003,
                        title: lib.get_string(msg.guild.id, 'info:bot'),
			fields: [
                                {
					name: lib.get_string(msg.guild.id, 'info:version'),
					value: `v${version.version}`,
					inline: true
				},
				{
					name: lib.get_string(msg.guild.id, 'info:uptime'),
					value: moment.duration(this.client.uptime)
						.format('d[ days], h[ hours], m[ minutes, and ]s[ seconds]'),
					inline: true
				},
                                {
					name: lib.get_string(msg.guild.id, 'info:generalstats'),
					value: `
• ${lib.get_string(msg.guild.id, 'info:servers')}: ${this.client.guilds.size}
• ${lib.get_string(msg.guild.id, 'info:sprints')}: ${stats.getTotalActiveSprints()}
`,
					inline: false
				}
			],
                        timestamp: new Date()
                        
		});
	}
};