const express = require('express');
const predictionRouter = express.Router();
const predict = require(`${process.cwd()}/predict`);

predictionRouter.all('/api/predict', async function (req, res) {
    try {
        let result;
        if(req.method === 'GET') {
            result = await predict.getPrediction(req.query);
        }
        res.json(result.Prediction);
    }
    catch (err) {
        res.status(500);
        res.end();
        console.error(err);
    }
});

module.exports = predictionRouter;
