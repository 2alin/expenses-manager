import { connect } from 'react-redux';
import AddCommentForm from '../components/AddCommentForm';
import { addComment, setVisibleOptions } from '../actions';
import { Store } from '../types';

const mapStateToProps = (state: Store, ownProps: any) => ({
  id: state.commentToUpdate.id,
  comment: state.commentToUpdate.comment,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (id: string, comment: string) => {
    console.log('id',id);
    console.log('comment',comment);
    dispatch(addComment(id, comment));
    dispatch(setVisibleOptions(false, 'NONE'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCommentForm);
