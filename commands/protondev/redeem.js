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
        name: 'redeem',
        description: 'Vérifiez vous aevc une clé',
        options:
        [
            {
                name: 'key',
                description: 'Votre clé',
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

	if (interaction.commandName === 'redeem')
    {

            if(interaction.channel.id == variables.ChannelList.verify)
            {
                //Add
                const megadb = require("megadb")
                const db = new megadb.crearDB("keys")
                const keyss = interaction.options.getString('key');
                //const memberaction = interaction.user.id;
                //let member = interaction.user;
                if(!db.tiene(`${keyss}`)) return interaction.reply({ephemeral: true, content: `Clé non valide.`})


                const channel = client.channels.cache.get(variables.channelReport);
                let embed_logs = new MessageEmbed()
                .setColor('#FF8533')
                .setTitle(`Commande redeem >> Utilisé`)
                .setDescription(`**Utilisateur**: ${interaction.user} \`\`\`${interaction.user.id}\`\`\`\n\n**Key utilisé**: \`\`\`${keyss}\`\`\``)
                .setTimestamp()
                .setFooter(`Developped By OldModz95`)
                channel.send({embeds: [embed_logs]});

                let embed_add = new MessageEmbed()
                .setTitle("Redeem » Succès!")
                .setColor(0x00AE86)
                .setDescription(`• ${interaction.user}, Vous venez d'être vérifié.`)
                .setThumbnail("https://i.imgur.com/4EHz1as.gif")
                .setFooter(`Redeem utilisé par ${interaction.user.tag}`);

                var guild = client.guilds.cache.get(variables.guildID)
                const member = await guild.members.fetch(interaction.user.id)
                const role = await guild.roles.fetch(variables.RoleList.member)
                member.roles.add(role)



                interaction.reply({
                    //content: 'Voici les informations que je peux vous fournir !',
                    embeds: [embed_add],
                    ephemeral: true, //Pour que seul la personne aillant fait la commande, vois la réponse.
                })
                if(db.tiene(`${keyss}`)){
                    db.eliminar(`${keyss}`)
                    }
            }
            else
            {
                interaction.reply({ephemeral: true, content: `Channel not valid.`})
            }


	}//*End interaction commands
});
//* END INTERACTION CREATE
//?=========================

}//* End module.exports

// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqBes
