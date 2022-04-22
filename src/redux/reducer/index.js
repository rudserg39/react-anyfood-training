import { combineReducers } from 'redux';
import restaurants from './restaurants';
import order from './order';
import products from './products';
import reviews from './reviews';

export default combineReducers({
  restaurants,
  order,
  products,
  reviews
});
