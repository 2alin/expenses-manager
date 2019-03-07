import React from 'react';
import styles from './ExpensesHistory.module.scss'

function ExpensesHistory({ expenses }: any) {
  return (
    <ul className={styles.history}>
      {expenses.map((item: any) => {
        const user = item.user;
        return <li key={item.id}>{user.first + " " + user.last}</li>;
      })}
    </ul>
  );
}

export default ExpensesHistory;
