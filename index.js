const {getMeals} = require("./services/meal-service");

// const AWS = require('aws-sdk');
// const dynamoDB = new AWS.DynamoDB({
//   region: 'us-east-2',
//   apiVersion: '2020-08-10'
// });

exports.handler = (event, context, callback) => {
  // get favorites by user id

  // add favorites

  const response = {
    context,
    event
  };

  setTimeout(() => {
    callback(null, response)
  }, 100)
};