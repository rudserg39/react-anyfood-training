import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Basket from '../basket';
import Tabs from '../tabs';
import Form from '../form';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant }) => {
  const [activeId, setActiveId] = useState('menu');

  const { id, name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs
        tabs={[{ id: 'menu', label: 'Menu' }, { id: 'reviews', label: 'Reviews' }]}
        activeId={activeId}
        onChange={setActiveId}
      />
      <div className={styles.wrapper}>
        <div className={styles.restaurant}>
          {activeId === 'menu' && <Menu key={id} menu={menu} />}
          {activeId === 'reviews' &&
            <div className={styles.comments}>
              <Reviews reviews={reviews} />
              <Form />
            </div>
          }
        </div>
        <Basket />
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array.isRequired,

  }).isRequired,
};

export default Restaurant;
