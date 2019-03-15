import { connect } from 'react-redux';
import SearchByQuery from '../components/SearchByQuery';
import { Store, Expense, FilterOptions} from '../types';
import { setSearchQuery, filterExpensesList } from '../actions';

const mapStateToProps = (state: Store) => ({
  searchQuery: state.searchQuery,
  filterOptions: state.filterOptions,
  currency: state.i18n.currency,
});

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (searchQuery:string, filterOptions:FilterOptions, currency:string) => {
    dispatch(setSearchQuery(searchQuery));
    dispatch(filterExpensesList(filterOptions, currency, searchQuery));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByQuery);
