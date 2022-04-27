import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from './constants';


const defaultReviews = normalizedReviews.reduce((acc, review) => ({ ...acc, [review.id]: review }), {});

export default function (reviews = defaultReviews, action) {
  const { type, review } = action;

  switch (type) {
    case ADD_REVIEW:
      return {...reviews, review };
    default:
      return reviews;
  }
};
