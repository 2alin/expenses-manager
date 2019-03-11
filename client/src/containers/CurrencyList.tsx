import { connect } from 'react-redux';
import {
  setCurrency,
  setVisibleOptions,
  updateFinanceCurrency,
} from '../actions';
import { Store, CurrencyAction } from '../types';
import I18nList from '../components/I18nList';
import { EXRATES } from '../utilities/constants';
import { trans } from '../utilities/i18n';

const mapStateToProps = (state: Store) => ({
  // translation for description text
  trans: {
    description: trans[state.i18n.language].i18nOptions.currDescription,
  },
  // pass the currency keys as an ordered list
  list: Object.keys(EXRATES.rates).sort(),
  // active setting for displaying purposes
  active: state.i18n.currency,
});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (curr: string) => {
    dispatch(setCurrency(curr));
    dispatch(updateFinanceCurrency(curr));
    dispatch(setVisibleOptions(false, 'NONE'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(I18nList);
