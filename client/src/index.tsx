import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { setLanguage, setCurrency, setBudget, setTotalSpent } from './actions';

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
store.dispatch(setBudget({amount: 4500, currency: 'USD'}));
store.dispatch(setTotalSpent({amount: 3100, currency: 'USD'}));

// Stop listenint to state updates
unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
