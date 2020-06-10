const {getMeals} = require("./services/meal-service");

// const AWS = require('aws-sdk');
// const dynamoDB = new AWS.DynamoDB({
//   region: 'us-east-2',
//   apiVersion: '2020-08-10'
// });


exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(getMeals()),
  };

  return response;
};