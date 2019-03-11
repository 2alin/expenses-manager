export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const BUDGET = {
  currency: 'USD',
  value: 500000,
};

// indexing signature
interface Languages {
  [index: string]: string;
}
interface ExRates {
  rates: { [index: string]: number };
  base: string;
  date: string;
}

export const LANGUAGES: Languages = {
  ES: 'spanish',
  EN: 'english',
};

// for testing purposes only USD base and a past date is considered
// but an external api can be used for a future deployment
export const EXRATES: ExRates = {
  rates: {
    MXN: 19.2834144184,
    AUD: 1.4216718266,
    HKD: 7.8498894295,
    CHF: 1.0048651039,
    CAD: 1.3381689518,
    USD: 1.0,
    JPY: 111.8089341,
    BRL: 3.7754975674,
    CZK: 22.6377708978,
    NOK: 8.6722689076,
    INR: 70.2627156126,
    PLN: 3.8032728881,
    MYR: 4.0945599292,
    ZAR: 14.2045997346,
    ILS: 3.615656789,
    GBP: 0.7604599735,
    SGD: 1.357717824,
    EUR: 0.8845643521,
    CNY: 6.7100398054,
    TRY: 5.417691287,
    SEK: 9.3210968598,
    RUB: 65.8299867315,
    NZD: 1.4753648828,
    DKK: 6.5996461743,
  },
  base: 'USD',
  date: '2019-03-06',
};
