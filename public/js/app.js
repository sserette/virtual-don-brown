let urlBuilder = function(params) {
    let baseUrl = '/api/predict?';
    let keys = Object.keys(params);
    for(let key of keys) {
        let pair = key + '=' + params[key] + '&';
        baseUrl += pair;
    }
    baseUrl = baseUrl.slice(0, -1);
    return baseUrl;
};

$(document).ready(function() {
    $('#predict-btn').click(function() {
        let date = $('#date').val();
        let gameId = $('#gameId').val();
        let drive = $('#drive').val();
        let quarter = $('#quarter').val();
        let down = $('#down').val();
        let time = $('#time').val();
        let timeUnder = $('#timeUnder').val();
        let timeInSec = $('#timeInSec').val();
        let playTimeDiff = $('#playTimeDiff').val();
        let side = $('#side').val();
        let yardLine = $('#yardLine').val();
        let yardsFromOwnGoal = $('#yardsFromOwnGoal').val();
        let yardsToGo = $('#yardsToGo').val();
        let netYards = $('#netYards').val();
        let goalToGo = $('#goalToGo').val();
        let firstDown = $('#firstDown').val();
        let possessingTeam = $('#possessingTeam').val();
        let defendingTeam = $('#defendingTeam').val();
        let yardsGained = $('#yardsGained').val();
        let touchdown = $('#touchdown').val();
        let safety = $('#safety').val();
        let tackler1 = $('#tackler1').val();
        let tackler2 = $('#tackler2').val();
        let fumble = $('#fumble').val();
        let fumbleRecoveringTeam = $('#fumbleRecoveringTeam').val();
        let fumbleRecoveringPlayer = $('#fumbleRecoveringPlayer').val();
        let possScore = $('#possScore').val();
        let defScore = $('#defScore').val();
        let scoreDiff = $('#scoreDiff').val();
        let homeTeam = $('#homeTeam').val();
        let awayTeam = $('#awayTeam').val();
        let homeTimeouts = $('#homeTimeouts').val();
        let awayTimeouts = $('#awayTimeouts').val();
        let fieldGoalProb = $('#fieldGoalProb').val();
        let safetyProb = $('#safetyProb').val();
        let touchdownProb = $('#touchdownProb').val();
        let winProb = $('#winProb').val();
        let winProbAdded = $('#winProbAdded').val();
        let season = $('#season').val();
        let params = {
            date: date,
            gameId: gameId,
            drive: drive,
            quarter: quarter,
            down: down,
            time: time,
            timeUnder: timeUnder,
            timeInSec: timeInSec,
            playTimeDiff: playTimeDiff,
            side: side,
            yardLine: yardLine,
            yardsFromOwnGoal: yardsFromOwnGoal,
            yardsToGo: yardsToGo,
            netYards: netYards,
            goalToGo,
            firstDown: firstDown,
            possessingTeam: possessingTeam,
            defendingTeam: defendingTeam,
            yardsGained: yardsGained,
            touchdown: touchdown,
            safety: safety,
            tackler1: tackler1,
            tackler2: tackler2,
            fumble: fumble,
            fumbleRecoveringTeam: fumbleRecoveringTeam,
            fumbleRecoveringPlayer: fumbleRecoveringPlayer,
            possScore: possScore,
            defScore: defScore,
            scoreDiff: scoreDiff,
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            homeTimeouts: homeTimeouts,
            awayTimeouts: awayTimeouts,
            fieldGoalProb: fieldGoalProb,
            safetyProb: safetyProb,
            touchdownProb: touchdownProb,
            winProb: winProb,
            winProbAdded: winProbAdded,
            season: season
        };
        let url = urlBuilder(params);
        $.get(url, function(data) {
            let prediction = data.predictedLabel;
            if(prediction == 0) {
                $('#prediction').html('Run');
            }
            else if(prediction == 1) {
                $('#prediction').html('Pass');
            }
        });
    });
});
