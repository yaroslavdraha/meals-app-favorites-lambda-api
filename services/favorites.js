const db = require('../providers/database');

const favoritesTableName = 'meals-favorites';

const getFavorites = async (userId = 'default') => {
  const params = {
    TableName: favoritesTableName,
    KeyConditionExpression: "userId = :v1",
    ExpressionAttributeValues: {
      ":v1": userId
    }
  }

  return db.query(params).promise();
}

const addFavorite = async (mealId, userId = 'default') => {
  const params = {
    TableName: favoritesTableName,
    Item: {
      "mealId": mealId,
      "userId": userId
    }
  }

  return db.put(params).promise();
};

const removeFavorite = async (mealId, userId = 'default') => {
  const params = {
      TableName: favoritesTableName,
      Key: {
        "mealId": mealId,
        "userId": userId
      }
    }

    return db.delete(params).promise();
}

module.exports = {
  addFavorite,
  getFavorites,
  removeFavorite
}
