// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB

const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS],
    partials: ['MESSAGE', 'USER', 'REACTION'] 
});
let nbr1 = 30;


module.exports = (client) => {

    client.on("guildMemberAdd", member => {
        try {
      
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
      
              const passwordsuper = (makeid(nbr1)) // Stockage du mdp dans une variable
      
      
          const megadb = require("megadb")
          const db = new megadb.crearDB("keys")
          if(!db.tiene("keys")){
            db.establecer("keys", {})
          }
            if(db.tiene(`${passwordsuper}`)) return member.send("**ERROR KEY:** La key existe déjà.")
          db.establecer(`${passwordsuper}.${member.id}`, {keys: passwordsuper}, {iddiscord: member.id})
      
                const embedguildMemberAdd = new Discord.RichEmbed()
                .setTitle("Bienvenue » ProtonDev!")
                .setColor(0x00AE86)
                .setImage('https://c.tenor.com/LDuF2jVabwoAAAAC/banner-welcome.gif')
                .setDescription(`• Entré le code pour être vérifié\n\n**Votre code d'accès:** ||\`${passwordsuper}\`||`)
                .setFooter(`Developped By OldModz95`);
      
            member.send(embedguildMemberAdd);
        } catch (error){
            console.log(`Il a une erreur : ${error}`)
        }
      });

}//* End module.exports

// Développer par OldModz95#3105
// Support: https://discord.gg/MS6TMgRfqB