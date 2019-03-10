import { connect } from 'react-redux';
import AddCommentForm from '../components/AddCommentForm';
import { setVisibleOptions, updateExpense} from '../actions';
import {uploadComment} from '../utilities/async'
import { Store, Expense } from '../types';

const mapStateToProps = (state: Store, ownProps: any) => ({
  id: state.commentToUpdate.id,
  comment: state.commentToUpdate.comment,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (id: string, comment: string) => {
    console.log('comment', comment);
    uploadComment(id, comment).then((res) => {
      dispatch(updateExpense(res));
    })
    dispatch(setVisibleOptions(false, 'NONE'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCommentForm);
