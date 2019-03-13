import { EXRATES, BUDGET } from './constants';
import { Amount, Expense, FilterOptions } from '../types';
import CurrencyList from '../containers/CurrencyList';

const doubleDigit = (value: number) => {
  // formats days and months numeric values inro 'dd' or 'mm'
  return (value < 10 ? '0' : '') + value;
};

export const toYYMMDD = (date: Date) => {
  /*
   formats a date to the shape YY-MM-DD 
   input: date [Date]
   output: [String]
  */
  return [
    date.getUTCFullYear(),
    doubleDigit(date.getUTCMonth() + 1),
    doubleDigit(date.getUTCDate()),
  ].join('-');
};

export const convertCurrency = (amount: Amount, newCurrency: string) => {
  /*
    converts an amount into a different currency
    input: amount [{number, string}], newCurrency [string]
    output: [{number, string}]
  */
  const valueUSD = amount.value / EXRATES.rates[amount.currency];
  return {
    value: valueUSD * EXRATES.rates[newCurrency],
    currency: newCurrency,
  };
};

export const filterExpenses = (
  list: Array<Expense>,
  options: FilterOptions,
  currency: string
) => {
  let filteredList = [...list];

  // filter by date

  if (options.startDate.isOn) {
    filteredList = filteredList.filter(
      expense => new Date(options.startDate.value) <= new Date(expense.date)
    );
  }
  if (options.endDate.isOn) {
    filteredList = filteredList.filter(
      expense => new Date(options.endDate.value) >= new Date(expense.date)
    );
  }

  //filter by amount value (in selected currency)

  if (options.minAmount.isOn) {
    filteredList = filteredList.filter(
      expense =>
        options.minAmount.value <=
        convertCurrency(expense.amount, currency).value
    );
  }
  if (options.maxAmount.isOn) {
    filteredList = filteredList.filter(
      expense =>
        options.maxAmount.value >=
        convertCurrency(expense.amount, currency).value
    );
  }

  // filter by currency used

  if (options.currency.isOn) {
    filteredList = filteredList.filter(
      expense => options.currency.value === expense.amount.currency
    );
  }

  return filteredList;
};

export const getSpentByCurrency = (expenseList: Array<Expense>) => {
  // get a dictionary of the shape
  // {'USD': {'numberOfExpenses':10, 'valueInOriginalCurrency':2365},...}
  interface Dict {
    [index: string]: any;
  }
  let dict: Dict = {};
  for (let expense of expenseList) {
    let { currency, value } = expense.amount;
    value += 0;
    if (currency in dict) {
      dict[currency].numberOfExpenses += 1;
      dict[currency].valueInOriginalCurrency += value;
    } else {
      dict[currency] = { numberOfExpenses: 1, valueInOriginalCurrency: value };
    }
  }

  return dict;
};

export const getFinanceData = (
  expenseList: Array<Expense>,
  currency: string
) => {
  /* 
  receives a list of expenses and returns an object 
  with the data optimized for charts 
  */
  const budget = convertCurrency(BUDGET, currency);
  const spentByCurrency = getSpentByCurrency(expenseList);
  let totalSpent = 0;
  for (let currency in spentByCurrency) {
    totalSpent += convertCurrency(
      { currency, value: spentByCurrency[currency].valueInOriginalCurrency },
      currency
    ).value;
  }
  return { budget, totalSpent, spentByCurrency, currencySet: currency };
};
