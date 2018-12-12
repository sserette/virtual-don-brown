const aws = require('aws-sdk');
aws.config.update({
    region:'us-east-1',
    accessKeyId: 'AKIAIJHPD47W7EI5GNMA',
    secretAccessKey: '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'
});

module.exports = {
    getPrediction: function(record) {
        let params = {
            MLModelId: 'ml-9LLrxYKTOGi',
            PredictEndpoint: 'https://realtime.machinelearning.us-east-1.amazonaws.com',
            Record: {
                'Date': record.date,
                'GameID': record.gameId,
                'Drive': record.drive,
                'qtr': record.quarter,
                'down': record.down,
                'time': record.time,
                'timeUnder': record.timeUnder,
                'TimeSecs': record.timeInSec,
                'PlayTimeDiff': record.playTimeDiff,
                'SideOfField': record.side,
                'yrdln': record.yardLine,
                'yrdline100': record.yardsFromOwnGoal,
                'ydstogo': record.yardsToGo,
                'ydsnet': record.netYards,
                'GoalToGo': record.goalToGo,
                'FirstDown': record.firstDown,
                'posteam': record.possessingTeam,
                'DefensiveTeam': record.defendingTeam,
                'Yards.Gained': record.yardsGained,
                'Touchdown': record.touchdown,
                'Safety': record.safety,
                'Tackler1': record.tackler1,
                'Tackler2': record.tackler2,
                'Fumble': record.fumble,
                'RecFumbTeam': record.fumbleRecoveringTeam,
                'RecFumbPlayer': record.fumbleRecoveringPlayer,
                'PosTeamScore': record.possScore,
                'DefTeamScore': record.defScore,
                'ScoreDiff': record.scoreDiff,
                'HomeTeam': record.homeTeam,
                'AwayTeam': record.awayTeam,
                'HomeTimeouts_Remaining_Pre': record.homeTimeouts,
                'AwayTimeouts_Remaining_Pre': record.awayTimeouts,
                'Field_Goal_Prob': record.fieldGoalProb,
                'Safety_Prob': record.safetyProb,
                'Touchdown_Prob': record.touchdownProb,
                'Win_Prob': record.winProb,
                'WPA': record.winProbAdded,
                'Season': record.season
            }
        };
        let ml = new aws.MachineLearning();
        return new Promise((resolve, reject) => {
            ml.predict(params, function(err, data) {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }
};
