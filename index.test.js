const lambdaLocal = require("lambda-local");
const lambdaFunc = require('./index');

describe('Test Main handler requests', () => {
  it('should receive user favorites', async () => {
    const res = await lambdaLocal.execute({
      event: {
        path: "/byuserid/default",
        httpMethod: "GET"
      },
      lambdaFunc
    });

    const resBody = JSON.parse(res.body);

    expect(resBody.favorites).toEqual(['m1']);
  })
});
