export interface I18n {
  language: string;
  currency: string;
}

export interface Amount {
  value: number;
  currency: string;
}

export interface Budget extends Amount {}

export interface TotalSpent extends Amount {}

export interface User {
  first: string;
  email: string;
  last: string;
}

export interface Expense {
  id: string;
  amount: Amount;
  date: Date;
  merchant: string;
  receipts: string[];
  comment: string;
  category: string;
  user: User;
  index: number;
}

export interface Filtered {
  list: Array<Expense>;
  total: number;
  page: number;
  itemsPerPage: number;
}

export interface Expenses {
  completeList: Array<Expense>;
  total: number;
  filtered: Filtered;
}

export interface FilterOption {
  isOn: boolean;
  value: string | Date | number;
  [propName: string]: any; //index signature
}

export interface FilterOptions {
  startDate: FilterOption;
  endDate: FilterOption;
  currency: FilterOption;
  minAmount: FilterOption;
  maxAmount: FilterOption;
  [propName: string]: FilterOption; // index signature
}

export interface OptionsContainer {
  displayed: boolean;
  optionsToShow: string;
}

export interface ExpenseToUpdate {
  id: string,
  comment: string,
}

export interface SpentByCurrency {
  [currency:string]: {
    numberOfExpenses: number,
    valueInOriginalCurrency: number
  }
}

export interface Finance {
  budget: Amount;
  totalSpent: Amount;
  spentByCurrencyDict: SpentByCurrency,
  currencySet: string;
}

export interface Store {
  i18n: I18n;
  expenses: Expenses;
  filterOptions: FilterOptions;
  optionsContainer: OptionsContainer;
  expenseToUpdate: ExpenseToUpdate;
  finance: Finance
}

//-------------------
// Action Interfaces
//-------------------

export interface LanguageAction {
  type: string;
  language: string;
}

export interface CurrencyAction {
  type: string;
  currency: string;
}

export interface BudgetAction {
  type: string;
  budget: Amount;
}

export interface TotalSpentAction {
  type: string;
  totalSpent: Amount;
}

export interface VisibleOptionsAction {
  type: string;
  displayed: boolean;
  optionsToShow: string;
}

export interface ExpenseToUpdateAction {
  type: string,
  id: string,
  comment: string
}

export interface FilterAction {
  type: string;
  options: FilterOptions;
}
