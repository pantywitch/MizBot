  const { Command } = require('discord.js-commando');
  const lib = require('./../../lib.js');


 module.exports = class RimshotCommand extends Command {
     constructor(client) {
         super(client, {
             name: 'rimshot',
             group: 'fun',
             memberName: 'rimshot',
             description: 'Rimshot emoji',
             examples: [
							 '`rimshot`'
             ]
         });

     }

     run(msg) {
         var guildID = (msg.guild !== null) ? msg.guild.id : null;

				 msg.react('595339299721969678');
     }
 };
