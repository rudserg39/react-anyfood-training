import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { restaurantsSelector } from '../../redux/selectors';
import Restaurants from '../restaurants';
import Header from '../header';

const App = ({ restaurants }) => (
  <div>
    <Header />
    <Restaurants restaurants={restaurants} />
  </div>
);

const mapStateToProps = state => ({
  restaurants: restaurantsSelector(state)
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  restaurants: PropTypes.array,
};
