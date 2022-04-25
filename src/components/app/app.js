import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Restaurants from '../restaurants';
import Header from '../header';

const App = ({ restaurants }) => (
  <div>
    <Header />
    <Restaurants restaurants={restaurants} />
  </div>
);

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  restaurants: PropTypes.array,
};
