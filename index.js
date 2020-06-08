import {getMeals} from "./services/meal-service";

exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(getMeals()),
  };

  return response;
};