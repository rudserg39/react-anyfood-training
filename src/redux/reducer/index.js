import { combineReducers } from 'redux';
import restaurants from './restaurants';
import order from './order';
import products from './products';
import reviews from './reviews';
import users from './users';

export default combineReducers({
  restaurants,
  order,
  products,
  reviews,
  users
});
