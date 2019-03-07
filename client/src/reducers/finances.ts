// TS Interface imports
import {BudgetAction, TotalSpentAction} from '../actions'

export const budget = (state = {amount:0, currency:'USD'}, action: BudgetAction) => {
  switch(action.type) {
    case 'SET_BUDGET':
      return action.budget;
    default:
      return state;

  }
}

export const totalSpent = (state = {amount:0, currency:'USD'}, action: TotalSpentAction) => {
  switch(action.type) {
    case 'SET_TOTAL_SPENT':
      return action.totalSpent;
    default:
      return state;

  }
}