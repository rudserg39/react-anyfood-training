import styles from './form.module.css';

const Form = () => (
  <div className={styles.wrapper}>
    <div className={styles.innerWrapper}>
      <h4 className={styles.title}>Leave your review</h4>
        <textarea className={styles.textarea}></textarea>
      <button>Publish review</button>
    </div>
  </div>
);

export default Form;
