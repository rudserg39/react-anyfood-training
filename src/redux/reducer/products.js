import { normalizedProducts } from '../../fixtures';

const defaultProducts = normalizedProducts.reduce((acc, product) => ({ ...acc, [product.id]: product}), {});

export default function (products = defaultProducts, action) {
  switch (action) {
    default:
      return products;
  }
};
