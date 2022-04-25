import { normalizedReviews } from '../../fixtures';


const defaultReviews = normalizedReviews.reduce((acc, review) => ({ ...acc, [review.id]: review }), {});

export default function (reviews = defaultReviews, action) {
  switch (action) {
    default:
      return reviews;
  }
};
