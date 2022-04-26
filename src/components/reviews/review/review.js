import { connect } from 'react-redux';
import { reviewSelector, userSelector } from '../../../redux/selectors';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ id, review, user }) => {
  const { text, rating } = review;
  const { name } = user;

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
  review: reviewSelector(state, props),
  user: userSelector(state, props)
});

Review.propTypes = {
  review: PropTypes.object,
  user: PropTypes.object,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect(mapStateToProps)(Review);
