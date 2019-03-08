import { Expenses } from '../types';

const initialState: Expenses = {
  list: [],
  total: 0,
};

const expenses = (state: Expenses = initialState, action: any) => {
  switch (action.type) {
    case 'SET_EXPENSES_LIST':
      return {
        list: action.expensesList,
        total: action.expensesList.length,
      };
    case 'ADD_COMMENT':
      return {
        list: state.list.map(expense =>
          expense.id === action.id
            ? { ...expense, comment: action.comment }
            : expense
        ),
        total: state.total,
      };
    case 'ADD_RECEIPT':
      return {
        list: state.list.map(expense =>
          expense.id === action.id
            ? { ...expense, receipts: [...expense.receipts, action.receipt] }
            : expense
        ),
        total: state.total,
      };
    default:
      return state;
  }
};
export default expenses;
