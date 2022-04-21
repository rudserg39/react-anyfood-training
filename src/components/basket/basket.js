import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  const products = state.restaurants.flatMap(restaurant => restaurant.menu);

  const order = Object.entries(state.order).map(orderedProduct => {
    const [orderedProductId, orderedProductsAmount] = orderedProduct;
    return {
      product: products.find(product => product.id === orderedProductId),
      orderedProductsAmount
    };
  });

  const totalPrice = order.reduce((acc, curr) => {
    return acc += curr.product.price * curr.orderedProductsAmount;
  }, 0);

  return {
    order,
    totalPrice
  };
};

export default connect(mapStateToProps)(Basket);
