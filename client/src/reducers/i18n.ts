import { combineReducers } from 'redux';

// TS Interface imports
import { LanguageAction, CurrencyAction } from '../actions';

const language = (state = 'EN', action: LanguageAction) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return action.language;
    default:
      return state;
  }
};

const currency = (state = 'USD', action: CurrencyAction) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return action.currency;

    default:
      return state;
  }
};

const i18n = combineReducers({
  language,
  currency,
});

export default i18n;
