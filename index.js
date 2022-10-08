// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB

const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS],
    partials: ['MESSAGE', 'USER', 'REACTION'] 
});


client.queue = new Discord.Collection()
const variables = require(`./variables/variables.json`)

//!===================
const help = require('./commands/help/help')
const ajouter = require('./commands/protondev/ajouter');
const redeem = require('./commands/protondev/redeem');
const aleatoire = require('./commands/protondev/aleatoire');
const aleatoire_nombre = require('./commands/protondev/aleatoire_nombre');
const supprimer = require('./commands/protondev/supprimer');
const joins = require('./commands/joins/joins');
const sendcode = require('./commands/joins/sendcode');
const saychannel = require('./commands/protondev/saychannel');
const saychannelembed = require('./commands/protondev/saychannelembed');
//!===================


client.once('ready', () => {
    console.log('Je suis en ligne !')

        client.user.setStatus("dnd");
        client.user.setActivity('Verify Bot', { type: 'WATCHING' });


//*==================

//help(client)
ajouter(client)
redeem(client)
aleatoire(client)
aleatoire_nombre(client)
supprimer(client)
//joins(client)
sendcode(client)
saychannel(client)
help(client)
saychannelembed(client)

//*====================================================================

const channels = variables.ChannelList.reboot
client.channels.cache.get(channels).send(`**▸ J'ai Reboot !**`)
//!=====================================================================
})

client.on('voiceStateUpdate', (old, New) => {
    if (old.id !== client.user.id) return
    if (old.channelID && !New.channelID) client.queue.delete(old.guild.id)
})

client.login(variables.token)


// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB