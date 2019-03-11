import { connect } from 'react-redux';
import { Store, Expense } from '../types';
import ChartSection from '../components/ChartSection';

const mapStateToProps = (state: Store) => ({
  financeData: state.finance
});

export default connect(
  mapStateToProps,
  null
)(ChartSection);
