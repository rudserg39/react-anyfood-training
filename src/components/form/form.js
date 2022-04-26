import Rate from '../rate';
import styles from './form.module.css';

const Form = () => (
  <div className={styles.wrapper}>
    <div className={styles.innerWrapper}>
      <h4 className={styles.title}>Leave your review</h4>
      <textarea className={styles.textarea}></textarea>
      <div className={styles.rate}>
        <Rate isComment={true} />
      </div>
      <button>Publish review</button>
    </div>
  </div>
);

export default Form;
