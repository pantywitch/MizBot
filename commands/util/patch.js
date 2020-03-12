const { Command } = require('discord.js-commando');
const version = require('./../../version.json');

module.exports = class PatchCommand extends Command {
    constructor(client) {
            super(client, {
                    name: 'patch',
                    aliases: [],
                    group: 'util',
                    memberName: 'patch',
                    description: 'Displays the latest patch notes for the bot'
            });
    }

    run(msg) {
        return msg.embed({
          color: 0xf5ec3d,
          author: {
            name: "MizBot",
            url: "https://github.com/pantywitch/MizBot",
          },
          title: 'Patch Notes 1.1',
          description: "Updated this command.",
          thumbnail: {
            url: 'http://www.mizahar.com/forums/gallery/pic.php?mode=large&pic_id=63580'
          },
      });
    }
};
