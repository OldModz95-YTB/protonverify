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
        name: 'aleatoire_nombre',
        description: 'Crée une clé aleatoire',
        options:
        [
            {
                name: 'nombre',
                description: 'Nombre de caractère de la clé',
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

	if (interaction.commandName === 'aleatoire_nombre')
    {

        if(WhiteList.includes(interaction.user.id))
        {
            const nombre = interaction.options.getString('nombre');
            function makeid(length) 
		    {
		    	var result           = [];
		    	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		    	var charactersLength = characters.length;
		    	for ( var i = 0; i < length; i++ ) {
		    	  result.push(characters.charAt(Math.floor(Math.random() * 
		     charactersLength)));
		       }
		       return result.join('');
		    }

		const passwordsuper = (makeid(nombre)) // Stockage du mdp dans une variable

            //Add
            const megadb = require("megadb")
            const db = new megadb.crearDB("keys")
            const memberaction = interaction.user.id;

             db.establecer("keys", {})
                
                if(db.tiene(`${passwordsuper}`)) return interaction.reply({ephemeral: true, content: `**ERROR KEY:** La license existe déjà.`})
                
                db.establecer(`${passwordsuper}.${interaction.user.id}`, {keys: passwordsuper, membre: memberaction})

                const channel = client.channels.cache.get(variables.channelReport);
                let embed_logs = new MessageEmbed()
                .setColor('#FF8533')
                .setTitle(`Commande ajouter >> Utilisé`)
                .setDescription(`**Utilisateur**: ${interaction.user} \`\`\`${interaction.user.id}\`\`\`\n\n**Key**: \`\`\`${passwordsuper}\`\`\``)
                .setTimestamp()
                .setFooter(`Developped By OldModz95`)
                channel.send({embeds: [embed_logs]});

                let embed_add = new MessageEmbed()
                .setColor('#1FDF64')
                .setTitle(`License Généré » ProtonDev!`)
                .setDescription(`**Key Crée:** ||${passwordsuper}||`)
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
            interaction.reply({ephemeral: true, content: `Désoler, mais tu ne peux pas faire cela.`})
            let descriptions = `**Utilisateur**: ${userreport} \`\`\`${userreport.id}\`\`\``
            const channel = client.channels.cache.get(variables.channelReport);
            let embed_report = new MessageEmbed()
            .setColor('#C219D8')
            .setTitle(`Commande ajouter >> Utilisé`)
            .setDescription(`${descriptions}`)
            .setTimestamp()
            .setFooter(`Developped By OldModz95`)
            channel.send({embeds: [embed_report]});
        }


	}//*End interaction commands
});
//* END INTERACTION CREATE
//?=========================

}//* End module.exports

// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB
