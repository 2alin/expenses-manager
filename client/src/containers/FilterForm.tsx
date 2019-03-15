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
  trans: trans[state.i18n.language].history.filterOptions,
  options: state.filterOptions,
  currency: state.i18n.currency,
  searchQuery: state.searchQuery,
});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (options: FilterOptions, currency: string, searchQuery:string) => {
    dispatch(setExpensesFilter(options));
    dispatch(filterExpensesList(options, currency, searchQuery));
    dispatch(setVisibleOptions(false, 'NONE'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
