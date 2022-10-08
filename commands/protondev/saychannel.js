// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB

const { MessageEmbed } = require('discord.js')
const moment = require('moment');
const variables = require(`../../variables/variables.json`)

module.exports = (client) => {

    const guildID = variables.guildID
    const guild = client.guilds.cache.get(guildID)
    let commands

    if(guild)
    {
        commands = guild.commands
    }
    else
    {
        commands = client.application.commands
    }


    commands.create({
        name: 'say',
        description: 'Envoyer un message dans un channel',
        permission: true,
        options:
        [
            {
                name: 'channel',
                description: 'Choisir le channel ou envoyer le message',
                type: 'CHANNEL',
                required: true
            },
            {
                name: 'message',
                description: 'Ajouter votre message',
                type: 'STRING',
                required: true
            }
        ],
        
    })

//?========================
//* Utilisateur autorisé.
WhiteList = variables.WhiteList

//?=========================
//* INTERACTION CREATE
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'say')
    {
        if(WhiteList.includes(interaction.user.id))
        {
            const chan = interaction.options.getChannel('channel');
            const message = interaction.options.getString('message');
		    const channel = client.channels.cache.get(chan.id);
            if (!channel) return interaction.reply("J'ai pas trouver le channel..");
		    channel.send(message);
		    return interaction.reply({ephemeral: true, content: `J'ai envoyer le message dans le channel: <#${chan.id}>!`});
        }
        else
        {
            interaction.reply({ephemeral: true, content: `Désoler, mais tu ne peux pas faire cela.`})
        }
        
	}//*End interaction commands
});
//* END INTERACTION CREATE
//?=========================

}//* End module.exports



// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB
