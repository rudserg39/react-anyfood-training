import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ReactComponent as Star } from '../../icons/star.svg';

import styles from './rate.module.css';

const Rate = ({ value, isComment }) => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          data-id={i <= value - 1 ? 'full-star' : 'empty-star'}
          className={cn(styles.star, { [styles.checked]: !isComment ? i <= value - 1 : i <= rating - 1 }, isComment && styles.cursor)}
          onClick={() => setRating(i + 1)}
        />
      ))}
    </div>
  );
};

Rate.propTypes = {
  value: PropTypes.number,
};

export default Rate;
