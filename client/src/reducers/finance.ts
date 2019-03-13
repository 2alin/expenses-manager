import {convertCurrency} from '../utilities/methods'

const initialState = {
  budget: {value: 0, currency: 'USD'},
  totalSpent: {value:0, currency: 'USD'},
  spentByCurrency: {},
  currencySet: 'USD',
}

const finance = (state = initialState, action:any) => {
  switch(action.type) {
    case 'SET_FINANCE_DATA':
      return {
        budget: action.budget,
        totalSpent: action.totalSpent,
        spentByCurrency: action.spentByCurrency,
        currencySet: action.currencySet
      }
    case 'UPDATE_FINANCE_CURRENCY':
      return {
        ...state,
        budget: convertCurrency(state.budget, action.currency),
        totalSpent: convertCurrency(state.totalSpent, action.currency),
        currencySet: action.currency
      }
    default:
      return state;
  }
}

export default finance;


