//--------------
// TS Interfaces
//--------------

export interface LanguageAction {
  type: string;
  language: string;
}

export interface CurrencyAction {
  type: string;
  currency: string;
}
export interface AmountCurrency {
  currency: string;
  amount: number;
}

export interface BudgetAction {
  type: string;
  budget: AmountCurrency;
}

export interface TotalSpentAction {
  type: string;
  totalSpent: AmountCurrency;
}

export interface Expense {
  id: string;
  amount: {value: number, currency: string};
  date: Date;
  merchant: string;
  receipts: string[];
  comment: string;
  category: string;
  user: {first: string, email: string, last: string};
  index: number;
}

export interface FilterOptions {
  startDate: {isOn: boolean, value: Date};
  endDate: {isOn: boolean, value: Date};
  currency: {isOn: boolean, value: string};
  minAmount: {isOn: boolean, value: number};
  maxAmount: {isOn: boolean, value: number};
}

//--------------
// Redux Actions
//--------------

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

export const setBudget = (budget: AmountCurrency): BudgetAction => ({
  type: 'SET_BUDGET',
  budget,
});

export const setTotalSpent = (
  totalSpent: AmountCurrency
): TotalSpentAction => ({
  type: 'SET_TOTAL_SPENT',
  totalSpent,
});

export const setExpensesList = (expensesList: Array<Expense>) => ({
  type: 'SET_EXPENSES_LIST',
  expensesList,
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
