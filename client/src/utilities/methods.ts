import { EXRATES } from './constants';
import { Amount } from '../types';

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
  if (amount.currency === newCurrency) return amount;
  const valueUSD = amount.value / EXRATES.rates[amount.currency];
  return {
    value: valueUSD * EXRATES.rates[newCurrency],
    currency: newCurrency,
  };
};
