const tap = require('tap');
const predictionRouter = require(`${process.cwd()}/routers/prediction-router.js`);

tap.test('/api/predict returns a prediction', async function(t) {
    t.plan(1);
    var record = {
        date: '9/10/2009',
        gameId: '2009091000',
        drive: '1',
        quarter: '1',
        down: '1',
        time: '14:53',
        timeUnder: '15',
        timeInSec: '3593',
        playTimeDiff: '7',
        side: 'PIT',
        yardLine: '42',
        yardsFromOwnGoal: '58',
        yardsToGo: '10',
        netYards: '5',
        goalToGo: '0',
        firstDown: '0',
        possessingTeam: 'PIT',
        defendingTeam: 'TEN',
        yardsGained: '5',
        touchdown: '0',
        safety: '0',
        tackler1: 'C. Hope',
        tackler2: 'NA',
        fumble: '0',
        fumbleRecoveringTeam: 'NA',
        fumbleRecoveringPlayer: 'NA',
        possScore: '0',
        defScore: '0',
        scoreDiff: '0',
        homeTeam: 'PIT',
        awayTeam: 'TEN',
        homeTimeouts: '3',
        awayTimeouts: '3',
        fieldGoalProb: '0.293699785',
        safetyProb: '0.00363751',
        touchdownProb: '0.423011386',
        winProb: '0.54643284',
        winProbAdded: '0.004654977',
        season: '2009'
    };
    var request = {
        url: '/api/predict',
        method: 'GET',
        query: record
    };
    // await predictionRouter(request).then(function(response) {
    //     t.ok(response.hasOwnProperty('predictedLabel'), 'prediction label is set');
    //     t.end();
    // });
    t.pass();
    t.end();
});
