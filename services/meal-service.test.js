const {getMeals} = require('./meal-service');

test('test meals', () => {
  expect(getMeals()).toEqual([1,2,3]);
})