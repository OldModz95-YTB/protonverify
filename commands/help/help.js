// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB

const { MessageEmbed } = require('discord.js')
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
        name: 'help',
        description: 'Voir les fonctionnalités du bot.',
    })

//?========================
//* Utilisateur autorisé.
WhiteList = variables.WhiteList

//?=========================
//* INTERACTION CREATE

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand())
    {
        return
    }

    const { commandName, options } = interaction

    if(commandName === 'help')
    {
        if(WhiteList.includes(interaction.user.id))
        {
            let embed_add = new MessageEmbed()
            .setColor('#C219D8')
            .setTitle(`Help Commande`)
            .setDescription(`▸__**COMMANDE MEMBRE [2]**__
            \`/sendcode\`  -| Avoir un code de vérification
            \`/redeem\`  -| Ce vérifier pour avoir accès au serveur
            
            ▸__**COMMANDE ADMIN [5]**__
            \`/ajouter\`  -| Ajouter une clé personnaliser
            \`/aleatoire_nombre\`  -| Ajouter une clé aléatoire avec un nombre personnaliser
            \`/aleatoire\`  -| Ajouter une clé aléatoire
            \`/saychannel\`  -| Parler dans un channel
            \`/supprimer\`  -| Supprimer une clé`)
            .setTimestamp()
            .setFooter(`Developped By OldModz95`)
            
            interaction.reply({
                //content: 'Voici les informations que je peux vous fournir !',
                embeds: [embed_add],
                ephemeral: true, //Pour que seul la personne aillant fait la commande, vois la réponse.
            })
        }
        else
        {
            let embed_add = new MessageEmbed()
            .setColor('#C219D8')
            .setTitle(`Help Commande`)
            .setDescription(`▸__**COMMANDE MEMBRE [2]**__
            \`/sendcode\`  -| Avoir un code de vérification
            \`/redeem\`  -| Ce vérifier pour avoir accès au serveur`)
            .setTimestamp()
            .setFooter(`Developped By OldModz95`)

            interaction.reply({
                //content: 'Voici les informations que je peux vous fournir !',
                embeds: [embed_add],
                ephemeral: true, //Pour que seul la personne aillant fait la commande, vois la réponse.
            })
        }
    }

}) //* END INTERACTION CREATE
//?=========================

}//* End module.exports


// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB