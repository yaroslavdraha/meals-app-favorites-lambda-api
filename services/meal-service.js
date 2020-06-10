


const getMeals = () => {
  return [1,2,3];
};

const addFavorite = (mealId, userId = 'default') => {

  const params = {
    Item: {
      "mealId": {
        S: mealId
      },
      "userId": {
        S: userId
      }
    },
    TableName: 'ma-favorites'
  }

  dynamoDB.putItem(params, (err, data) => {

  });

  return [1,2,3];
};

module.exports = {
  getMeals
}
