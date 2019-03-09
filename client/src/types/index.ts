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

export interface Expenses {
  list: Array<Expense>;
  total: number;
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

export interface Store {
  i18n: I18n;
  budget: Budget;
  totalSpent: TotalSpent;
  expenses: Expenses;
  filterOptions: FilterOptions;
  optionsContainer: OptionsContainer;
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

// export interface ExpensesListAction {
//   type: string;
//   expensesList: Array<Expense>;
// }

// export interface CommentAction {
//   type: string;
//   id: number;
//   comment: string;
// }

// export interface ReceiptAction {
//   type: string;
//   id: number;
//   receipt: string;
// }

export interface FilterAction {
  type: string;
  options: FilterOptions;
}
