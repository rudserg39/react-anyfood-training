import { normalizedReviews } from '../../fixtures';

export default function (reviews = normalizedReviews, action) {
  switch (action) {
    default:
      return reviews;
  }
};