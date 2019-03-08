import { connect } from 'react-redux';
import { setCurrency } from '../actions';
import { Store, CurrencyAction } from '../types';
import I18nList from '../components/I18nList';
import { EXRATES } from '../utilities/constants';
import { Dispatch } from 'react';

const mapStateToProps = (state: Store) => ({
  // pass the currency keys as an ordered list
  list: Object.keys(EXRATES.rates).sort(), 
  // active setting for displaying purposes
  active: state.i18n.currency,
});

const mapDispatchToProps = (dispatch: Dispatch<CurrencyAction>) => ({
  onClick: (curr: string) => {
    console.log(curr);
    return dispatch(setCurrency(curr));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(I18nList);
