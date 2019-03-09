import { connect } from 'react-redux';
import FilterForm from '../components/FilterForm';
import { setVisibleOptions, setExpensesFilter } from '../actions';
import { Store, FilterOptions } from '../types';
import {trans} from '../utilities/i18n'

const mapStateToProps = (state: Store) => ({
  options: state.filterOptions,
  trans: trans[state.i18n.language].history.filterOptions
});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (options: FilterOptions) => {
    dispatch(setExpensesFilter(options));
    dispatch(setVisibleOptions(false, 'NONE'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
