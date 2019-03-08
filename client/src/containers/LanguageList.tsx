import { connect } from 'react-redux';
import { setLanguage, setVisibleOptions } from '../actions';
import { Store, LanguageAction } from '../types';
import I18nList from '../components/I18nList';
import { LANGUAGES } from '../utilities/constants';

const mapStateToProps = (state: Store) => ({
  // pass the language keys as an ordered list
  list: Object.keys(LANGUAGES).sort(),
  // active setting for displaying purposes
  active: state.i18n.language,
});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (lang: string) => {
    dispatch(setLanguage(lang));
    dispatch(setVisibleOptions(false, 'NONE'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(I18nList);
