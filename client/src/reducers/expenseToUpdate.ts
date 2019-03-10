import { ExpenseToUpdate, ExpenseToUpdateAction } from '../types';

const initialState = {
  id: '0',
  comment: '',
};

const expenseToUpdate = (
  state: ExpenseToUpdate = initialState,
  action: ExpenseToUpdateAction
) => {
  switch (action.type) {
    case 'SET_EXPENSE_TO_UPDATE':
      return {
        id: action.id,
        comment: action.comment
      };
    default:
      return state;
  }
};

export default expenseToUpdate;
