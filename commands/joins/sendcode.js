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
        name: 'sendcode',
        description: 'Avoir un code de vérification',    
    })

//?========================
//* Utilisateur autorisé.
WhiteList = variables.WhiteList
//?=========================
//* INTERACTION CREATE
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'sendcode')
    {
        const nombre = 25
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
                .setTitle(`Commande sendcode >> Utilisé`)
                .setDescription(`**Utilisateur**: ${interaction.user} \`\`\`${interaction.user.id}\`\`\`\n\n**Key**: \`\`\`${passwordsuper}\`\`\``)
                .setTimestamp()
                .setFooter(`Developped By OldModz95`)
                channel.send({embeds: [embed_logs]});

                let embed_add = new MessageEmbed()
                .setColor('#1FDF64')
                .setTitle(`Code de vérification Généré » ProtonDev!`)
                .setDescription(`**Votre code:** ||${passwordsuper}||`)
                .setTimestamp()
                .setFooter(`Developped By OldModz95`)

                interaction.reply({
                    embeds: [embed_add],
                    ephemeral: true,
                })
	}//*End interaction commands
});
//* END INTERACTION CREATE
//?=========================

}//* End module.exports


// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB