import { DECREMENT, INCREMENT, REMOVE, ADD_REVIEW } from './reducer/constants';

export const decrement = (id) => ({ type: DECREMENT, id });
export const increment = (id) => ({ type: INCREMENT, id });
export const remove = (id) => ({ type: REMOVE, id});
export const addReview = (review) => ({ type: ADD_REVIEW, review });
