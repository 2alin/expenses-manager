import axios from 'axios';

function getAllExpenses() {
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
      // get the complete list of expenses
      expensesList = res.data.expenses;
      return expensesList;
    })
    .catch(err => {
      console.log('there was an error while fetching');
      console.log(err);
    });
};

export default getAllExpenses;
