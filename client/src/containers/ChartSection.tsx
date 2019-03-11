import { connect } from 'react-redux';
import { Store, Expense } from '../types';
import ChartSection from '../components/ChartSection';
import {trans} from '../utilities/i18n'

const mapStateToProps = (state: Store) => ({
  trans: trans[state.i18n.language].charts,
  financeData: state.finance
});

export default connect(
  mapStateToProps,
  null
)(ChartSection);
