import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import {
  setLanguage,
  setCurrency,
  setBudget,
  setTotalSpent,
  setExpensesList,
  addComment,
  setExpensesFilter
} from './actions';
import getAllExpenses from './utilities/getAllExpenses';

const store = createStore(rootReducer);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
console.log('dispatch i18n actions');
store.dispatch(setLanguage('ES'));
store.dispatch(setCurrency('EUR'));
store.dispatch(setLanguage('EN'));
store.dispatch(setCurrency('USD'));
console.log('dispatch finances actions');
store.dispatch(setBudget({ amount: 4500, currency: 'USD' }));
store.dispatch(setTotalSpent({ amount: 3100, currency: 'USD' }));
console.log('dispatch filter options');
const myFilter = {
  startDate: {isOn: true, value: new Date},
  endDate: {isOn: true, value: new Date},
  currency: {isOn: false, value: 'EUR'},
  minAmount: {isOn: true, value: 5000}, 
  maxAmount: {isOn: false, value: 0}, 
}
store.dispatch(setExpensesFilter(myFilter))

// Fetch expenses list from API and dispatch action into the store
console.log('dispatch expenses list');
getAllExpenses().then(res => {
  store.dispatch(setExpensesList(res));
  console.log(store.getState());
  store.dispatch(addComment(res[4].id, 'this is a comment'));
  console.log(store.getState().expenses.list[4]);
});
// store.dispatch(setExpensesList(getAllExpenses()));

// Stop listenint to state updates
unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
