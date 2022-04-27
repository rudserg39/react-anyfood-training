import { v4 as uuidv4 } from 'uuid';

export default store => next => action => {
  if (!action.review) next(action);

  const { type, review } = action;

  next({
    type,
    review: { id: uuidv4(), ...review }
  });
};