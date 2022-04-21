import { connect } from 'react-redux';
import { orderedProductsSelector, totalPriceSelector } from '../../redux/selectors';
import cn from 'classnames';
import BasketItem from './basket-item';
import styles from './basket.module.css';

const Basket = ({ order, totalPrice }) => {
  return (
    <div className={cn(styles.basket, totalPrice > 0 ? styles.show : styles.hide)}>
      <p className={styles.title}>Basket</p>
        {
         order.map(orderItem => (
          orderItem.orderedProductsAmount ?
          <BasketItem
            key={orderItem.product.id}
            product={orderItem.product}
            amount={orderItem.orderedProductsAmount}
          /> : ''
         ))
        }
      <hr/>
      <p className={styles.total}>Total: {totalPrice} $</p>
      <button className={styles.checkout}>Checkout</button>
    </div>
  );
};

const mapStateToProps = state => ({
  order : orderedProductsSelector(state),
  totalPrice: totalPriceSelector(state)
});

export default connect(mapStateToProps)(Basket);
