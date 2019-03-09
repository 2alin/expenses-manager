import { connect } from 'react-redux';
import FilterLink from '../components/FilterLink';
import { setVisibleOptions } from '../actions';
import {Store} from '../types'


const mapStateToProps = (state: Store, ownProps:any) => ({ text: ownProps.text});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: () => {
    return dispatch(setVisibleOptions(true, 'FILTER_LIST'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
