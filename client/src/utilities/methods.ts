import { EXRATES } from './constants';
import { Amount, Expense, FilterOptions } from '../types';

// formats days/months in 'dd' / 'mm'
const doubleDigit = (value: number) => {
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
  console.log("filteredlist",filteredList);
  return filteredList;
};
