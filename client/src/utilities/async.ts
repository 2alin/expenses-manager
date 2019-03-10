import axios from 'axios';

export function getAllExpenses() {
  let expensesList = [];

  return axios
    .get('http://localhost:3000/expenses')
    .then(res => {
      // get the number of expenses
      const numberExpenses = res.data.total;
      // fetch all expenses list
      return axios.get('http://localhost:3000/expenses', {
        params: { limit: numberExpenses, offset: 0 },
      });
    })
    .then(res => {
      console.log('success fetching complete expenses list')
      // get the complete list of expenses
      expensesList = res.data.expenses;
      return expensesList;
    })
    .catch(err => {
      console.log('there was an error while fetching');
      console.log(err);
    });
}

export function uploadComment(id: string, comment: string) {
  return axios
    .post(`http://localhost:3000/expenses/${id}`, { comment: comment })
    .then((res) => {
      console.log('success updating comment')
      return res.data;
    })
    .catch(err => {
      console.log('there was an error while updating expense');
      console.log(err);
    });
}
