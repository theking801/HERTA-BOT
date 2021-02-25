const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        const newLocal = '(https://discord.gg/naKZcXwuHP)'
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('HERTA BOT')
            .setDescription('[LIEN DU SERVEUR](https://discord.gg/RAd3SZDAvF)')
            .setColor('RANDOM')
            .addField('Champ 1 ', 'JOIN THIS BOT IN YOUR SERVEUR ITS GOOD ', true)
            .addField('Champ 2', '[CLICK HERE TO JOIN THIS BOT](https://discord.com/api/oauth2/authorize?client_id=813134726135152640&permissions=8&scope=bot)', true)
            .setAuthor('HERTA BOT', 'https://cdn.discordapp.com/attachments/801890028791922788/813160698917290025/Animated_GIF-downsized_5.gif', 'https://discord.gg/naKZcXwuHP')
            .setImage('https://cdn.discordapp.com/attachments/801890028791922788/813160698917290025/Animated_GIF-downsized_5.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/801890028791922788/813160698917290025/Animated_GIF-downsized_5.gif')
            .setFooter('NEW BOT , BUT ITS TOO GOOD', 'https://cdn.discordapp.com/attachments/801890028791922788/813160698917290025/Animated_GIF-downsized_5.gif')
            .setTimestamp())
    },
    name: 'embed',
    help : {}
}