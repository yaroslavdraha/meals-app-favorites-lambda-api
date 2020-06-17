const lambdaLocal = require("lambda-local");
const lambdaFunc = require('../../index');

/**
 * TODO:
 * Test has been turned off on CI
 * It is needed to configure DynamoDB docker image on CI + Tables schemas
 */

describe('Favorites resource', () => {
  const favoriteMealId = 'm1';
  const userId = 'testuserid';

  it('should add favorite', async () => {
    const res = await addFavoriteRequest({mealId: favoriteMealId, userId});
    const resBody = JSON.parse(res.body);

    expect(typeof resBody.message).toBe('string');
    expect(res.statusCode).toEqual(200);
  });

  it('should not add favorite', async () => {
    const res = await addFavoriteRequest({mealId: null})

    expect(res.statusCode).toEqual(500);
  });

  it('should get favorites by user id', async () => {
    const res = await getFavoriteRequest(userId);
    const resBody = JSON.parse(res.body);

    expect(res.statusCode).toEqual(200);
    expect(resBody.favorites.length >= 1).toBeTruthy();
    expect(resBody.favorites[0]).toEqual(favoriteMealId);
  });

  it('should remove favorite by user id and meal id', async () => {
    const reqBody = {
      userId,
      mealId: favoriteMealId
    }

    const res = await lambdaLocal.execute({
      event: {
        path: "/favorites",
        httpMethod: "DELETE",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json"
        }
      },
      lambdaFunc
    });

    const resBody = JSON.parse(res.body);

    expect(typeof resBody.message).toBe('string');
    expect(res.statusCode).toEqual(200);
  })

  it('should not find removed favorite', async () => {
    const res = await getFavoriteRequest(userId);
    const body = JSON.parse(res.body);
    const favoriteItem = body.favorites.find(mealId => mealId === favoriteMealId);

    expect(res.statusCode).toEqual(200);
    expect(favoriteItem).toBeUndefined();
  })

  const addFavoriteRequest = async (body) => {
    return await lambdaLocal.execute({
      event: {
        path: "/favorites",
        httpMethod: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        }
      },
      lambdaFunc
    });
  }

  const getFavoriteRequest = async (userId) => {
    return await lambdaLocal.execute({
      event: {
        path: "/favorites/byuserid/" + userId,
        httpMethod: "GET"
      },
      lambdaFunc
    });
  }
});
