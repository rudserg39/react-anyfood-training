import { createSelector } from 'reselect';

const productsSelector = state => state.products;
const orderSelector = state => state.order;

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



