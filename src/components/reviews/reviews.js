import PropTypes from 'prop-types';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews }) => (
  <div className={styles.reviews}>
    {reviews.map((id) => (
      <Review key={id} id={id} />
    ))}
  </div>
);

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default Reviews;
