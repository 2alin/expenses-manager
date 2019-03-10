import { connect } from 'react-redux';
import { Store, Expense } from '../types';
import History from '../components/History';
import { setExpensesList } from '../actions';

const mapStateToProps = (state: Store, ownProps: any) => ({
  ...ownProps,
  filtered: state.expenses.filtered,
  currency: state.i18n.currency,
  hadFiltered: state.expenses.filtered.total !== state.expenses.total
});

const mapDispatchToProps = (dispatch: any) => ({
  onFetched: (list: Array<Expense>) => {
    return dispatch(setExpensesList(list));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
