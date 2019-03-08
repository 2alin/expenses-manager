import { connect } from 'react-redux';
import {Store} from '../types'
import I18nLink from '../components/I18nLink';
import { setVisibleOptions } from '../actions';

const mapStateToProps = (state: Store) => ({ text: state.i18n.language });

const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => {
    console.log('clicked language');
    return dispatch(setVisibleOptions(true,'I18N'))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(I18nLink);
