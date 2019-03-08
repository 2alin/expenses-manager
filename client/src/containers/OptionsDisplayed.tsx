import { connect } from 'react-redux';
import { setVisibleOptions } from '../actions';
import { Store, VisibleOptionsAction } from '../types';
import Options from '../components/Options';
import { Dispatch } from 'react';

const mapStateToProps = (state: Store) => ({
  displayed: state.optionsContainer.displayed,
  optionsToShow: state.optionsContainer.optionsToShow,
});

const mapDispatchToProps = (dispatch: Dispatch<VisibleOptionsAction>) => ({
  onExitClick: () => {
    return dispatch(setVisibleOptions(false,'NONE'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
