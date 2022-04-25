import { createSelector } from 'reselect';

const productsSelector = state => state.products;
const orderSelector = state => state.order;
const usersSelector = state => state.users;
const reviewsSelector = state => state.reviews;

export const restaurantsSelector = state => state.restaurants;
export const amountSelector = (state, { id }) => state.order[id] || 0;
export const productSelector = (state, { id }) => state.products[id];
export const reviewSelector = (state, { id }) => state.reviews[id];

export const orderedProductsSelector = createSelector([productsSelector, orderSelector], (products, order) => {
  return Object.entries(order).map(orderedProduct => {
    const [orderedProductId, orderedProductsAmount] = orderedProduct;
    return {
      product: products[orderedProductId],
      orderedProductsAmount
    };
  })
});

export const totalPriceSelector = createSelector([orderedProductsSelector], orderedProducts => orderedProducts.reduce((acc, curr) => {
  return acc += curr.product.price * curr.orderedProductsAmount;
}, 0));


export const userSelector = createSelector([
  usersSelector,
  reviewsSelector,
  (state, { id }) => id
],
  (users, reviews, reviewId) => users.find(user => user.id === reviews[reviewId].userId)
);
