const {getMeals} = require('./services/meal-service');

test('test meals', () => {
  expect(getMeals()).toEqual([1,2,3]);
})