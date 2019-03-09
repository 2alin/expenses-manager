import { connect } from 'react-redux';
import PrevNextPage from '../components/PrevNextPage';
import {goNextPage} from '../actions'
import {Store} from '../types'


const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => {
    console.log('clicked');
    return dispatch(goNextPage());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(PrevNextPage);
