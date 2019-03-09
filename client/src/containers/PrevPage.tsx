import { connect } from 'react-redux';
import PrevNextPage from '../components/PrevNextPage';
import {goPrevPage} from '../actions'
import {Store} from '../types'


const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => {
    return dispatch(goPrevPage());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(PrevNextPage);
