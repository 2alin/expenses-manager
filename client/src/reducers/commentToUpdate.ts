import { CommentToUpdate, CommentToUpdateAction } from '../types';

const initialState = {
  id: '0',
  comment: '',
};

const commentToUpdate = (
  state: CommentToUpdate = initialState,
  action: CommentToUpdateAction
) => {
  switch (action.type) {
    case 'SET_COMMENT_TO_UPDATE':
      return {
        id: action.id,
        comment: action.comment
      };
    default:
      return state;
  }
};

export default commentToUpdate;
