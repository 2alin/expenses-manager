import { connect } from 'react-redux';
import I18nLink from '../components/I18nLink';

const mapStateToProps = (state: any) => ({ text: state.i18n.language });

const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => {
    console.log('clicked language');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(I18nLink);
