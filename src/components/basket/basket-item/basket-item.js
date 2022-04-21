import { connect } from 'react-redux';
import { decrement, increment, remove } from '../../../redux/actions';
import styles from './basket-item.module.css';

const BasketItem = ({ product, amount, decrement, increment, remove }) => {
  return (
    <div className={styles.product}>
      <p className={styles.name}>{product.name}</p>
      <div className={styles.controls}>
        <button className={styles.button} onClick={decrement}>-</button>
        <p className={styles.amount}>{amount}</p>
        <button className={styles.button} onClick={increment}>+</button>
        <p className={styles.price}>Price: {product.price * amount} $</p>
        <button className={styles.button} onClick={remove}>x</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.product.id)),
  increment: () => dispatch(increment(props.product.id)),
  remove: () => dispatch(remove(props.product.id))
});

export default connect(null, mapDispatchToProps)(BasketItem);
