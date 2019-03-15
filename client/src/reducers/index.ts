import { combineReducers } from 'redux';
import i18n from './i18n';
import finance from './finance';
import expenses from './expenses';
import filterOptions from './filterOptions';
import optionsContainer from './optionsContainer';
import expenseToUpdate from './expenseToUpdate';
import searchQuery from './searchQuery'

const rootReducer = combineReducers({
  i18n,
  expenses,
  filterOptions,
  optionsContainer,
  expenseToUpdate,
  finance,
  searchQuery
});

export default rootReducer;
