import { combineReducers } from 'redux';
import i18n from './i18n';
import { budget, totalSpent } from './finances';
import expenses from './expenses';
import filterOptions from './filterOptions';
import optionsContainer from './optionsContainer';
import expenseToUpdate from './expenseToUpdate';

const rootReducer = combineReducers({
  i18n,
  budget,
  totalSpent,
  expenses,
  filterOptions,
  optionsContainer,
  expenseToUpdate
});

export default rootReducer;
