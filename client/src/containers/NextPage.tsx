import { connect } from 'react-redux';
import PrevNextPage from '../components/PrevNextPage';
import {goNextPage} from '../actions'


const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => {
    return dispatch(goNextPage());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(PrevNextPage);
