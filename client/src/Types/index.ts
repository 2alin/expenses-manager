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
}

export interface FilterOptions {
  startDate: FilterOption;
  endDate: FilterOption;
  currency: FilterOption;
  minAmount: FilterOption;
  maxAmount: FilterOption;
}

export interface Store {
  i18n: I18n;
  budget: Budget;
  totalSpent: TotalSpent;
  expenses: Expenses;
  filterOptions: FilterOptions;
}