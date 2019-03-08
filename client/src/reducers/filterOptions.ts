import {FilterAction, FilterOptions} from '../types'



const initialState:FilterOptions = {
  startDate: {isOn: false, value: new Date},
  endDate: {isOn: false, value: new Date},
  currency: {isOn: false, value: 'USD'},
  minAmount: {isOn: false, value: 0}, 
  maxAmount: {isOn: false, value: 0}, 
}


const filterOptions = (state:FilterOptions = initialState, action:FilterAction) => {
  switch(action.type) {
    case 'SET_EXPENSES_FILTER':
      return action.options;
    default:
      return state;
  }
};

export default filterOptions;
