import {
  Expense,
  FilterOptions,
  LanguageAction,
  CurrencyAction,
  Amount,
  SpentByCurrency,
} from '../types';

// `lang` could be 'EN', 'ES', etc
export const setLanguage = (language: string): LanguageAction => ({
  type: 'SET_LANGUAGE',
  language,
});

//`currency` could be 'USD', 'MXN', 'EUR', etc
export const setCurrency = (currency: string): CurrencyAction => ({
  type: 'SET_CURRENCY',
  currency,
});

export const setExpensesList = (expensesList: Array<Expense>) => ({
  type: 'SET_EXPENSES_LIST',
  expensesList,
});

export const filterExpensesList = (
  options: FilterOptions,
  currency: string
) => ({
  type: 'FILTER_EXPENSES_LIST',
  options,
  currency,
});

export const updateExpense = (expense: Expense) => ({
  type: 'UPDATE_EXPENSE',
  expense,
});

export const addReceipt = (id: string, receipt: string) => ({
  type: 'ADD_RECEIPT',
  id,
  receipt,
});

export const setExpensesFilter = (options: FilterOptions) => ({
  type: 'SET_EXPENSES_FILTER',
  options,
});

export const goPrevPage = () => ({
  type: 'GO_PREV_PAGE',
});

export const goNextPage = () => ({
  type: 'GO_NEXT_PAGE',
});

export const setVisibleOptions = (
  displayed: boolean,
  optionsToShow: string
) => ({
  type: 'SET_VISIBLE_OPTIONS',
  displayed,
  optionsToShow,
});

export const setExpenseToUpdate = (id: string, comment: string) => ({
  type: 'SET_EXPENSE_TO_UPDATE',
  id,
  comment,
});

export const setFinanceData = (
  budget: Amount,
  totalSpent: Amount,
  spentByCurrency: SpentByCurrency,
  currencySet: string
) => ({
  type: 'SET_FINANCE_DATA',
  budget,
  totalSpent,
  spentByCurrency,
  currencySet,
});

export const updateFinanceCurrency = (currency: string) => ({
  type: 'UPDATE_FINANCE_CURRENCY',
  currency,
});
