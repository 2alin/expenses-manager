import {combineReducers} from 'redux';
import i18n from './i18n'
import {budget, totalSpent} from './finances'

const rootReducer = combineReducers({
  i18n,
  budget,
  totalSpent
})

export default rootReducer;