import { Component } from 'react';
import PropTypes from 'prop-types';

import Product from '../product';

import styles from './menu.module.css';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }


  render() {
    const { menu } = this.props;

    if (this.state.error) {
      return <p>Меню этого ресторана сейчас недоступно :(</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
