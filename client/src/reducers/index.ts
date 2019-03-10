import { combineReducers } from 'redux';
import i18n from './i18n';
import { budget, totalSpent } from './finances';
import expenses from './expenses';
import filterOptions from './filterOptions';
import optionsContainer from './optionsContainer';
import commentToUpdate from './commentToUpdate';

const rootReducer = combineReducers({
  i18n,
  budget,
  totalSpent,
  expenses,
  filterOptions,
  optionsContainer,
  commentToUpdate
});

export default rootReducer;
