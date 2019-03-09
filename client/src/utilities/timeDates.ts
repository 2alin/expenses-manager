// date:Date =>  'YY-MM-DD':string

const doubleDigit = (value: number) => {
  return (value < 10 ? '0' : '') + value;
};

export const toYYMMDD = (date: Date) => {
  return [
    date.getUTCFullYear(),
    doubleDigit(date.getUTCMonth() + 1),
    doubleDigit(date.getUTCDate()),
  ].join('-');
};
