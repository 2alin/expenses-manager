const initialState = {
  list: [],
  total: 0,
};

interface State {
  list: any[];
  total: number;
}

const expenses = (state:State = initialState, action: any) => {
  switch (action.type) {
    case 'SET_EXPENSES_LIST':
      console.log('hi');
      console.log(action.expensesList.length);
      return {
        list: action.expensesList,
        total: action.expensesList.length,
      };
    case 'ADD_COMMENT':
      console.log('there');
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
