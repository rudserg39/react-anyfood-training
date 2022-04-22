import { normalizedProducts } from '../../fixtures';

export default function (products = normalizedProducts, action) {
  switch (action) {
    default:
      return products;
  }
};
