import { connect } from 'react-redux';
import AddCommentButton from '../components/AddCommentButton';
import { setVisibleOptions, setExpenseToUpdate } from '../actions';
import {trans} from '../utilities/i18n'
import { Store } from '../types';

const mapStateToProps = (state: Store, ownProps: any) => ({
  buttonText:trans[state.i18n.language].history.expense.addComment,
  id: ownProps.id,
  comment: ownProps.comment,
});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (id: string, comment: string) => {
    dispatch(setExpenseToUpdate(id, comment));
    dispatch(setVisibleOptions(true, 'COMMENT'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCommentButton);
