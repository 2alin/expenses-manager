import { connect } from 'react-redux';
import {setLanguage} from '../actions'
import I18nList from '../components/I18nList';
import { LANGUAGES } from '../utilities/constants';

const mapStateToProps = (state: any) => ({
  list: Object.keys(LANGUAGES),
  active: state.i18n.language,
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onClick: (lang: string) => {
    console.log(lang);
    return dispatch(setLanguage(lang))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(I18nList);
