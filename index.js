const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const {getMeals, addFavorite} = require("./services/meal-service");

app.use(bodyParser.json({ strict: false }));

// const AWS = require('aws-sdk');
// const dynamoDB = new AWS.DynamoDB({
//   region: 'us-east-2',
//   apiVersion: '2012-08-10'
// });

app.get('/', (req, res) => {
  res.json({
    favorites: getMeals()
  });
});

module.exports.handler = serverless(app);
