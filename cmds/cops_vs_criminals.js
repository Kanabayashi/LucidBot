module.exports = {
  name: "cop_v_crim",
  description: "Cops Vc Crim Statistics",
  execute(message, key) {
    
    const Discord = require("discord.js");
    const fetch = require("node-fetch");
    let fullcommand = message.content.substr(3);
    let splitcommand = fullcommand.split(" ");
    let username = splitcommand.slice(1);

const api = `https://api.mojang.com/users/profiles/minecraft/${username}`;
    fetch(api)
      .catch()
      .then(response => {
        return response.json();
      })
      .then(data => {
        const id = data.id;

        const hypixel = `https://api.hypixel.net/player?key=${key}&uuid=${id}`;
        fetch(hypixel)
          .catch()
          .then(response => {
            return response.json();
          })

          .then(player => {
            var joindate = player["player"]["firstLogin"];
            var months_arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var date = new Date(joindate);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var convdataTime = month + "/" + day + "/" + year + ``;
            var lastlogout2 = player["player"]["lastLogout"];
            var ldate = new Date(lastlogout2);
            var lyear = ldate.getFullYear();
            var lmonth = months_arr[ldate.getMonth()];
            var lday = ldate.getDate();
            var lastlogout2 = lmonth + "/" + lday + "/" + lyear + ``;
            var dname = player["player"]["displayname"];
            var vers = (player["player"]["mcVersionRp"]);
            var version = ("On " + vers)
            if (typeof vers === "undefined") {
              var version = " ";
            }
            var coin = player["player"]["stats"]["MCGO"]["coins"];
            var planted = player["player"]["stats"]["MCGO"]["bombs_planted"];
            var defused = player["player"]["stats"]["MCGO"]["bombs_defused"];
            var killstreak = player["player"]["stats"]["MCGO"]["highest_killstreak"];
            var shots = player["player"]["stats"]["MCGO"]["shots_fired"];
            var kills = player["player"]["stats"]["MCGO"]["kills"];
            var deaths = player["player"]["stats"]["MCGO"]["deaths"];
            var b = kills;
            var c = deaths;
            var d = b / c;
            var kdrdeci = d;
            var kdr = kdrdeci.toFixed(2);
            var wins = player["player"]["stats"]["MCGO"]["game_wins"];
            var plays = player["player"]["stats"]["MCGO"]["game_plays"];
            var loss = plays - wins;
            var bc = wins;
            var cc = loss;
            var dc = bc / cc;
            var wlrdeci = dc;
            var wlr = wlrdeci.toFixed(2);
            var gamemode = player["player"]["mostRecentGameType"]; 
            if (typeof gamemode === "undefined") {
              var gamemode = "Limbo";
            }
            var lastlogin = player["player"]["lastLogin"];
            var lastlogout = player["player"]["lastLogout"];
            var vtime = new Date(lastlogout);
            var ts = new Date();      
            var h = lastlogout;
            var i = lastlogin;
            var j = h - i;
            var lastl = j;
            var j = lastl;
            let d2args = player["player"]["newPackageRank"];
  	switch (d2args) {
		case "VIP":
   			var drank = "[VIP]"
    		break;
		case "VIP_PLUS":
   			var drank = "[VIP+]"
    		break;
		case "MVP":
   			var drank = "[MVP]"
    		break;	
		case "MVP_PLUS":
   			var drank = "[MVP+]"		
	}
	let dargs = player["player"]["rank"];
  	switch (dargs) {
		case "YOUTUBE":
   			var drank = "[Youtube]"
    		break;
		case "HELPER":
   			var drank = "[Helper]"
    		break;
		case "MOD":
   			var drank = "[Mod]"
    		break;	
		case "ADMIN":
   			var drank = "[Admin]"
    		break;	
		case "OWNER":
   			var drank = "[Owner]"
    		break;	
		case "NONE":
   			var drank = " "
    		break;		
	}
        let pref = player["player"]["prefix"];
  	switch (pref) {
		case "§3[BUILD TEAM]":
   			var drank = "[Build Team]"
    		break;
		case "§d[PIG§b+++§d]":
   			var drank = "[PIG+++]"
    		break;			
	}
        let mpack = player["player"]["monthlyPackageRank"];
  	switch (pref) {
		case "SUPERSTAR":
   			var drank = "[MVP++]"
    		break;		
	}
            try {
            function formatNumber(num) {
              var num_parts = num.toString().split(".");
              num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return num_parts.join(".");
            }
            var kills = formatNumber(kills);
            var coin = formatNumber(coin);
            var deaths = formatNumber(deaths);
            var kdr = formatNumber(kdr);
            var defused = formatNumber(defused)
            var planted = formatNumber(planted)
            var wlr = formatNumber(wlr);
            var loss = formatNumber(loss)
            var wins = formatNumber(wins)
            var shots = formatNumber(shots)
            var plays = formatNumber(plays)
            } catch {}

           var skin = `https://mc-heads.net/body/${id}/left?`+ (new Date()).getTime();
           var guildname = `https://api.hypixel.net/findGuild?key=${key}&byUuid=${id}`;
              fetch(guildname)
                .then(response => {
                  return response.json();
                })
                .then(guild => {
                  var guildn = guild["guild"];

                  var guildstats = `https://api.hypixel.net/guild?key=${key}&id=${guildn}`;
                  fetch(guildstats)
                    .then(response => {
                      return response.json();
                    })
                    .then(guilds => {
                       try {
                        var nnguild = guilds["guild"]["name"];
                        var nguild = nnguild.replace(/ /g,"%20");
                      } catch {
                        var nnguild = "None";
                      }
                      try { var guildt = "[" + guilds['guild']['tag'] + "] " } catch {var guildt = " "}
            if (lastlogin > lastlogout) {
               var lastl = ('Online')
               var footer = (`Lucid v2.7.3 | ${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`) 
               var footp = ("http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png")
               var color = ('#00FF00')
            }
            if (lastlogin < lastlogout) {
               var lastl = ('Offline')
               var footer = (`Lucid v2.7.3 | ${dname}'s ${lastl} | Last Seen In ${gamemode}! | ${version}`)
               var footp = ("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png")
               var color = ('#b22121')
                }
                    const pbembed = new Discord.MessageEmbed()
                    .setColor(color)
                    .setTitle('**CvC**')
                    .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/CVC-64.png')
                    .addField("`Player`", `[**${drank} ${dname} ${guildt}**](https://plancke.io/hypixel/player/stats/${username})`)
                    .addField("`KDR`", `**${kdr}**`, true)
                    .addField("`Kills`", `**${kills}**`, true)
                    .addField("`Deaths`", `**${deaths}**`, true)
                    .addField("`Win/Loss`", `**${wlr}**`, true)
                    .addField("`Wins`", `**${wins}**`, true)
                    .addField("`Losses`", `**${loss}**`, true)
                    .addField("`Bombs Defused`", `**${defused}**`, true)
                    .addField("`Bombs Planted`", `**${planted}**`, true)
                    .addField("`Games Played`", `**${plays}**`, true)
                    .addField("`Shots Fired`", `**${shots}**`, true)
                    .addField("`Coins`", `**${coin}**`, true)
                    .addField("`Guild`", `[**${nnguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
                    .setImage(`${skin}`, true)
                    .setTimestamp('')
                    .setFooter(footer, footp)
                    const mmEmbed = message.reply({embed: pbembed}).then(msg => {
        msg.react('📩');
        msg.react('❌');

        const collector = msg.createReactionCollector(
        (reaction, user) => ['❌','📩',].includes(reaction.emoji.name) && user.id === message.author.id,
        {idle: 300000}
        )
        collector.on('collect', reaction => {
		
                if (reaction.emoji.name === '📩') {
                reaction.users.remove(message.author.id);
                message.author.send(pbembed)
                 }
                if (reaction.emoji.name === '❌') {
                msg.delete();
                message.delete();
                }
                            })
                        })
                        })
                    })
          });
      });
  }
}