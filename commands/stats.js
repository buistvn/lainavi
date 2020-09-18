process.env.LEAGUE_API_PLATFORM_ID = 'NA1'

const { key } = require('../config.json');
const LeagueJS = require('leaguejs');
const league = new LeagueJS(key);
const { getChampionName } = require('../modules/getChampionName.js');

module.exports = {
    name: 'stats',
    description: 'Shows a player\'s rank and recent ten matches',
    usage: '[player name (NA region)]',
    cooldown: 10,
    async execute(message, args) {
        const data = [];
        var name;

        if (!args.length) {
            return message.reply('you need to include a player name.');
        }
        else {
            name = args[0];
            for (var i = 1; i < args.length; i++) {
                name += ' ' + args[i];
            }
        }

        var summonerData = await league.Summoner
            .gettingByName(name)
            .catch(err => {
                'use strict'; 
                console.error(err);
                return message.reply('that player name doesn\'t exist!');
            });
        data.push(`${summonerData.name}'s Highest Mastery Champions`);
        var masteryData = await league.ChampionMastery.gettingBySummoner(summonerData.id, "NA1");
        for (var j = 0; j < 10; j++) {
            var mastery = masteryData[j];
            var champ = getChampionName(mastery.championId);
            data.push(`${j + 1} ${champ} ${mastery.championPoints} ${mastery.championLevel}`);
        }
        
        /*
        var matchlist = await league.Match.gettingListByAccount(summonerData.accountId, "NA1" , { "options": { "queue": [420], "startIndex": 10, "endIndex": 10}});
        console.log(matchlist);
        console.log(matchlist.endIndex);
        */
        /*
        for (var k = 0; k < ; k++) {

        }
        */
        message.channel.send(data, { split: true });
    }
}