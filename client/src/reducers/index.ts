import { combineReducers } from 'redux';
import i18n from './i18n';
import finance from './finance';
import expenses from './expenses';
import filterOptions from './filterOptions';
import optionsContainer from './optionsContainer';
import expenseToUpdate from './expenseToUpdate';

const rootReducer = combineReducers({
  i18n,
  expenses,
  filterOptions,
  optionsContainer,
  expenseToUpdate,
  finance
});

export default rootReducer;
