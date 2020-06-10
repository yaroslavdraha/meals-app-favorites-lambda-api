const {getMeals, addFavorite} = require("./services/meal-service");

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB({
  region: 'us-east-2',
  apiVersion: '2012-08-10'
});

exports.handler = async (event, context) => {
  // add favorites
  const response = {
    context,
    event: event
  };

  const res = await addFavorite('m2', 'default', dynamoDB);

  return res;
};

const res = exports.handler();
