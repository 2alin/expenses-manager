import { Expenses } from '../types';
import { filterExpenses } from '../utilities/methods';

const initialState: Expenses = {
  completeList: [],
  total: 0,
  filtered: {
    list: [],
    total: 0,
    page: 1,
    itemsPerPage: 10,
  },
};

const expenses = (state: Expenses = initialState, action: any) => {
  const { total: filteredTotal, page, itemsPerPage } = state.filtered;
  switch (action.type) {
    case 'SET_EXPENSES_LIST':
      return {
        completeList: action.expensesList || [],
        total: action.expensesList ? action.expensesList.length : 0,
        filtered: {
          ...state.filtered,
          list: action.expensesList || [],
          total: action.expensesList ? action.expensesList.length : 0,
        },
      };
    case 'FILTER_EXPENSES_LIST':
      const filteredList = filterExpenses(
        state.completeList,
        action.options,
        action.currency
      );
      return {
        ...state,
        filtered: {
          list: filteredList,
          total: filteredList.length,
          page: initialState.filtered.page,
          itemsPerPage: initialState.filtered.itemsPerPage,
        },
      };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        completeList: state.completeList.map(expense =>
          expense.id === action.expense.id
            ? { ...expense, comment: action.expense.comment }
            : expense
        ),
        filtered: {
          ...state.filtered,
          list: state.filtered.list.map(expense =>
            expense.id === action.expense.id
              ? { ...expense, comment: action.expense.comment }
              : expense
          ),
        },
      };
    case 'ADD_RECEIPT':
      return {
        ...state,
        completeList: state.completeList.map(expense =>
          expense.id === action.id
            ? { ...expense, receipts: [...expense.receipts, action.receipt] }
            : expense
        ),
      };
    case 'GO_PREV_PAGE':
      return {
        ...state,
        filtered: {
          ...state.filtered,
          page: page > 1 ? page - 1 : 1,
        },
      };
    case 'GO_NEXT_PAGE':
      return {
        ...state,
        filtered: {
          ...state.filtered,
          page: page * itemsPerPage < filteredTotal ? page + 1 : page,
        },
      };
    default:
      return state;
  }
};
export default expenses;
