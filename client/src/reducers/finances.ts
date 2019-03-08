import { Amount, BudgetAction, TotalSpentAction } from '../types';

const initialState: Amount = {
  value: 0,
  currency: 'USD',
};

export const budget = (state: Amount = initialState, action: BudgetAction) => {
  switch (action.type) {
    case 'SET_BUDGET':
      return action.budget;
    default:
      return state;
  }
};

export const totalSpent = (
  state: Amount = initialState,
  action: TotalSpentAction
) => {
  switch (action.type) {
    case 'SET_TOTAL_SPENT':
      return action.totalSpent;
    default:
      return state;
  }
};
