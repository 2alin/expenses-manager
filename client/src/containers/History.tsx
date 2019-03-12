import { connect } from 'react-redux';
import { Store, Expense } from '../types';
import History from '../components/History';
import { setExpensesList, setFinanceData } from '../actions';
import { getFinanceData } from '../utilities/methods';

const mapStateToProps = (state: Store, ownProps: any) => ({
  ...ownProps,
  filtered: state.expenses.filtered,
  currency: state.i18n.currency,
  hadFiltered: state.expenses.filtered.total !== state.expenses.total,
});

const mapDispatchToProps = (dispatch: any) => ({
  onFetched: (list: Array<Expense>, currency: string) => {
    dispatch(setExpensesList(list));
    const { budget, totalSpent, spentByCurrency, currencySet } = getFinanceData(
      list,
      currency
    );
    dispatch(
      setFinanceData(
        budget,
        { value: totalSpent, currency },
        spentByCurrency,
        currencySet
      )
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
