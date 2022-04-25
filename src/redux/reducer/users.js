import { normalizedUsers } from '../../fixtures';

const defaultUsers = normalizedUsers.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});

export default function (reviews = normalizedUsers, action) {
  switch (action) {
    default:
      return reviews;
  }
};
