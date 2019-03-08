import { connect } from 'react-redux';
import I18nLink from '../components/I18nLink';
import { setVisibleOptions } from '../actions';

const mapStateToProps = (state: any) => ({ text: state.i18n.currency });

const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => {
    return dispatch(setVisibleOptions(true, 'I18N'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(I18nLink);
