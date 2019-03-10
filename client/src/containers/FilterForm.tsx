import { connect } from 'react-redux';
import FilterForm from '../components/FilterForm';
import {
  setVisibleOptions,
  setExpensesFilter,
  filterExpensesList,
} from '../actions';
import { Store, FilterOptions } from '../types';
import { trans } from '../utilities/i18n';

const mapStateToProps = (state: Store) => ({
  options: state.filterOptions,
  trans: trans[state.i18n.language].history.filterOptions,
  currency: state.i18n.currency,
});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (options: FilterOptions, currency: string) => {
    dispatch(setExpensesFilter(options));
    dispatch(filterExpensesList(options, currency));
    dispatch(setVisibleOptions(false, 'NONE'));
    console.log("currency", currency);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
