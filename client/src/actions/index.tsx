import {
  Amount,
  Expense,
  FilterOptions,
  LanguageAction,
  CurrencyAction,
  BudgetAction,
  TotalSpentAction,
} from '../types';
import { string } from 'prop-types';

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

export const setBudget = (budget: Amount): BudgetAction => ({
  type: 'SET_BUDGET',
  budget,
});

export const setTotalSpent = (totalSpent: Amount): TotalSpentAction => ({
  type: 'SET_TOTAL_SPENT',
  totalSpent,
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

export const addComment = (id: string, comment: string) => ({
  type: 'ADD_COMMENT',
  id,
  comment,
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

export const setCommentToUpdate = (id:string, comment: string) => ({
  type: 'SET_COMMENT_TO_UPDATE',
  id,
  comment,
})
