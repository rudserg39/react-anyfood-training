import { normalizedRestaurants } from '../../fixtures';

export default function (restaurants = normalizedRestaurants, action) {
  switch (action) {
    default:
      return restaurants;
  }
};
