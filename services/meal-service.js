
const getMeals = () => {
  return [1,2,3];
};

const addFavorite = async (mealId, userId = 'default', db) => {
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

  return new Promise((res, rej) => {
    res(2);
  })

  // return new Promise((res, rej) => {
  //   db.putItem(params, (err, data) => {
  //     if (err) {
  //       rej(err);
  //     } else {
  //       res(data)
  //     }
  //   });
  // })
};

module.exports = {
  getMeals,
  addFavorite
}
