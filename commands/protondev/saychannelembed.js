// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB

const { MessageEmbed } = require('discord.js')
const variables = require(`../../variables/variables.json`)

module.exports = (client) => {

    const guildID = variables.guildidcmd
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
        name: 'saychanembed',
        description: 'Envoyer un message embed custom',
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
                name: 'title',
                description: 'Ajouter un titre',
                type: 'STRING',
                required: true
            },
            {
                name: 'message',
                description: 'Ajouter un message',
                type: 'STRING',
                required: true
            },
            {
                name: 'colors',
                description: '(ex: #C219D8 ou GREEN)',
                type: 'STRING',
                required: true
            },
            {
                name: 'footer',
                description: 'Ajouter un footer',
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

	if (interaction.commandName === 'saychanembed')
    {
        if(WhiteList.includes(interaction.user.id))
        {
            const chan = interaction.options.getChannel('channel');
		    const channel = client.channels.cache.get(chan.id);

            const title = interaction.options.getString('title');
            const message = interaction.options.getString('message');
            const colors = interaction.options.getString('colors');
            const footer = interaction.options.getString('footer');

            if (!channel) return interaction.reply("Je ne trouve pas le channel....");

            let embed_mess = new MessageEmbed()
            //.setColor(`${color}`)
            .setTitle(`${title}`)
            .setColor(`${colors}`)//#007ACC
            .setDescription(`${message}`)
            .setTimestamp()
            .setFooter(`${footer}・ProtonVerify`)
            channel.send({embeds: [embed_mess]});

		    //channel.send(message);
		    interaction.reply({ephemeral: true, content: `J'ai bien envoyer le message dans le channel: <#${chan.id}>!`});

            //*==========

            const channellogs = client.channels.cache.get(variables.channelReport);
            let embed_logs = new MessageEmbed()
            .setColor('#303030')
            .setTitle(`ProtonVerify`)
            .setDescription(`**Commande:** saychanembed
            \n**Commande par**: <@${interaction.user.id}> - ${interaction.user.username}\`\`\`${interaction.user.id}\`\`\``)

            let embed_logs2 = new MessageEmbed()
            .setColor('#303030')
            .setTitle(`ProtonVerify・(Up Commands)`)
            .setDescription(`**Titre:** \`\`\`${title}\`\`\`
            \n**Message:** \`\`\`${message}\`\`\`
            \n**Footer:** \`\`\`${footer}\`\`\``)
            .setTimestamp()
            .setFooter(`Developped By OldModz95 - Proposed By ProtonDev`)

            channellogs.send({embeds: [embed_logs]});
            channellogs.send({embeds: [embed_logs2]});
            //============

        }
        else
        {
            interaction.reply({ephemeral: true, content: `Désoler, vous ne pouvez pas faire cette commands.`})

            const channellogs = client.channels.cache.get(variables.channelReport);
            let embed_logs = new MessageEmbed()
            .setColor('RED')
            .setTitle(`ProtonVerify・Erreur Permission`)
            .setDescription(`__Tentative de commande administrateur__
            **Commande:** saychanembed
            \n**Commande par**: <@${interaction.user.id}> - ${interaction.user.username}\`\`\`${interaction.user.id}\`\`\``)
            channellogs.send({embeds: [embed_logs]});
        }
        
	}//*End interaction commands
});
//* END INTERACTION CREATE
//?=========================

}//* End module.exports

// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB
