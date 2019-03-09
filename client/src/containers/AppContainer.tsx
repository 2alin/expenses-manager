import { connect } from 'react-redux';
import { Store} from '../types';
import App from '../components/App'
import {trans} from '../utilities/i18n'

const mapStateToProps = (state: Store) => ({
  trans: trans[state.i18n.language]
});


export default connect(
  mapStateToProps,
  null
)(App);
