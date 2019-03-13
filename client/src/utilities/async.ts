import axios from 'axios';
import { API_URL } from './constants';

export function getAllExpenses() {
  let expensesList = [];

  return axios
    .get(API_URL + '/expenses')
    .then(res => {
      // get the number of expenses
      const numberExpenses = res.data.total;
      // fetch all expenses list
      return axios.get(API_URL + '/expenses', {
        params: { limit: numberExpenses, offset: 0 },
      });
    })
    .then(res => {
      console.log('success fetching complete expenses list');
      // get the complete list of expenses
      expensesList = res.data.expenses;
      // parse expense.amount.value as floating number
      expensesList = expensesList.map((expense: any) => ({
        ...expense,
        amount: {
          ...expense.amount,
          value: Number.parseFloat(expense.amount.value),
        },
      }));
      return expensesList;
    })
    .catch(err => {
      console.log('there was an error while fetching');
      console.log(err);
    });
}

export function uploadComment(id: string, comment: string) {
  return axios
    .post(API_URL + '/expenses/' + id, { comment: comment })
    .then(res => {
      console.log('success updating comment');
      return res.data;
    })
    .catch(err => {
      console.log('there was an error while updating expense');
      console.log(err);
    });
}

export function uploadReceipt(id: string, data: any) {
  return axios
    .post(API_URL + '/expenses/' + id + '/receipts', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      console.log('success uploading receipt');
      return res.data;
    })
    .catch(err => {
      console.log('there was an error while uploading receipt');
      console.log(err);
    });
}
