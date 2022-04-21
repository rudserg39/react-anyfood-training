import { createSelector } from 'reselect';

const restaurantsSelector = state => state.restaurants;
const orderSelector = state => state.order;

export const productsSelector = createSelector([restaurantsSelector], restaurants => restaurants.flatMap(restaurant => restaurant.menu));

export const orderedProductsSelector = createSelector([productsSelector, orderSelector], (products, order) => {
  return Object.entries(order).map(orderedProduct => {
    const [orderedProductId, orderedProductsAmount] = orderedProduct;
    return {
      product: products.find(product => product.id === orderedProductId),
      orderedProductsAmount
    };
  })
});

export const totalPriceSelector = createSelector([orderedProductsSelector], orderedProducts => orderedProducts.reduce((acc, curr) => {
  return acc += curr.product.price * curr.orderedProductsAmount;
}, 0));

