const Discord = require('discord.js');
  
const fetch = require('node-fetch');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('BetaNuBot is Online!');
});

client.on('message', message => {
    if(message.author.bot || message.content.startsWith('+') || message.content.startsWith('/')) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'ping') {
            message.channel.send('pong!');
        }

        return;
    } else {

        var embedColor = 'WHITE';
        var embedTitle = '';
        var embedImage = '';
        var embedFiles = null;

        let getRole = function(role){
            if (message.member.roles.cache.find(r => r.name === role)) {
                embedColor = message.member.roles.cache.find(r => r.name === role).hexColor;
                embedTitle = role;
            }
        }

        try{ 
                if (message.member.roles.cache.find(r => r.name === "Exec")) {
                embedColor = '#fefefe';
                embedTitle = 'Executive';
                //console.log('Role Found!');
            } else {
                getRole("Academic");
                getRole("Public Relations");
                getRole("Social");
                getRole("Philanthropy");
                getRole("Health & Wellness");
                getRole("EDI");
                getRole("Recruitment");
                getRole("Fundraising");
                getRole("Merchandise");
                getRole("Professional");
                getRole("Outreach");
            }
            var embededMsg = new Discord.MessageEmbed({
                title: embedTitle.toUpperCase() + ' ANNOUNCEMENT',
                description: '@everyone, ' + message.content,
            });

            if (message.attachments.size > 0) {
                if (message.attachments.every(attachIsImage)){
                    msgArray = message.attachments.array();
                    embedImage = msgArray[0].url;
                    //console.log(embedImage);
                } else {
                    embedFiles=message.attachments;
                }
            }

            function attachIsImage(msgAttach) {
                var isImage = false;
                var url = msgAttach.url;
                //True if this url is a png image.
                url.indexOf("png", url.length - 3) !== -1 ? isImage = true : null;
                url.indexOf("gif", url.length - 3) !== -1 ? isImage = true : null;
                url.indexOf("jpg", url.length - 3) !== -1 ? isImage = true : null;
                url.indexOf("jpeg", url.length - 4) !== -1 ? isImage = true : null;
                return isImage;
            }

            embededMsg.setAuthor(message.member.displayName,message.author.displayAvatarURL({dynamic:true}),null);
            embededMsg.setColor(embedColor);
            embededMsg.setImage(embedImage);
            embededMsg.setTimestamp(Date.now());
            if (embedFiles != null)
            {
                embedFiles.forEach(file => {
                    embededMsg.attachFiles(file);
                });
            }

            var msgChannel = message.channel;
            message.delete({timeout: 100});
            msgChannel.send(embededMsg);
        } catch(e) {
            console.log(message.content);
            console.log(e);
        }
    }
    
});


client.login('NzU4MTE1MjEyNTkwNDQ4NjUy.X2qPzw.asWmMY1YiZ7ouDsNY4jY8bVkxmo');