import { connect } from 'react-redux';
import { setLanguage } from '../actions';
import { Store, LanguageAction } from '../types';
import I18nList from '../components/I18nList';
import { LANGUAGES } from '../utilities/constants';
import { Dispatch } from 'react';

const mapStateToProps = (state: Store) => ({
  // pass the language keys as an ordered list
  list: Object.keys(LANGUAGES).sort(),
  // active setting for displaying purposes
  active: state.i18n.language,
});

const mapDispatchToProps = (dispatch: Dispatch<LanguageAction>) => ({
  onClick: (lang: string) => {
    console.log(lang);
    return dispatch(setLanguage(lang));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(I18nList);
