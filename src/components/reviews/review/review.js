import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ id, review, user }) => {
  const { text, rating } = review;
  const { name } = user;

  console.log(review)

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {name}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );

};

const mapStateToProps = (state, props) => ({
  review: state.reviews[props.id],
  user: state.users.find(user => user.id === state.reviews[props.id].userId)
});

Review.propTypes = {
  review: PropTypes.object,
  user: PropTypes.object,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect(mapStateToProps)(Review);
