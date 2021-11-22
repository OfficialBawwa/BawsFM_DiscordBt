const Command = require('../structures/command.js')

const { MessageEmbed } = require('discord.js')

module.exports = class Invite extends Command {
  constructor (client) {
    super(client, {
      name: 'invite',
      aliases: ['i']
    })
  }

  async run (message, args) {
    message.channel.send(
      new MessageEmbed()
        .setColor('2CAA80')
        .setDescription(`Here you go! [Click this link](https://discordapp.com/oauth2/authorize?client_id=645170466033762304&scope=bot&permissions=37047360) to invite the bot to your server. Enjoy the tunes! 🥳`)
        .setTimestamp()
        .setFooter(process.env.EMBED_FOOTER, process.env.STATION_ICON)
    )
  }
}
