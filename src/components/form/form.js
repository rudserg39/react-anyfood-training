import { useState } from 'react';
import { connect } from 'react-redux';
import { addReview } from '../../redux/actions';
import Rate from '../rate';
import styles from './form.module.css';

const Form = ({ addReview }) => {

  const [review, setReview] = useState({
    id: '',
    userId: '',
    text: '',
    rating: 1
  });

  console.log(review)

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <h4 className={styles.title}>Leave your review</h4>
        <input
          className={styles.name}
          type="text"
          placeholder="Name"
        />
        <textarea
          className={styles.textarea}
          placeholder="Review"
          onChange={(evt) => setReview({ ...review, text: evt.target.value })}
          value={review.text}
        />
        <div className={styles.rate}>
          <Rate
            isComment={true}
            review={review}
            setReview={setReview}
          />
        </div>
        <button
          onClick={() => addReview(review)}
        >
          Publish review
        </button>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  addReview: (review) => dispatch(addReview(review)),
});

export default connect(null, mapDispatchToProps)(Form);;
