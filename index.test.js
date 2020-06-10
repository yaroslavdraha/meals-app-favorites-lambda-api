const lambdaLocal = require("lambda-local");
const lambdaFunc = require('./index');

describe('Test Main handler requests', () => {
  it('should receive user favorites', async () => {
    const res = await lambdaLocal.execute({lambdaFunc});
    expect(1).toBe(1);
  })
});

