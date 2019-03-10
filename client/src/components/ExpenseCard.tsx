import React from 'react';
import { Expense, User } from '../types';
import { toYYMMDD, convertCurrency } from '../utilities/methods';
import styles from './ExpenseCard.module.scss';
interface Props {
  expense: Expense;
  currency: string;
}

function ExpenseCard({ expense, currency }: Props) {
  const { merchant, amount, user, comment } = expense;
  const name = user.first + ' ' + user.last;
  const date = toYYMMDD(new Date(expense.date));
  console.log(amount, currency);
  const altAmount = convertCurrency(amount, currency);
  const amountText = `${amount.value} ${
    amount.currency
  } (${altAmount.value.toFixed(2)} ${altAmount.currency})`;
  return (
    <div className={styles.card}>
      {/* MAIN: includes all the info except comment */}
      <div className={styles.main}>
        <div className={styles.row}>
          <span
            className={[styles.rightMargin, styles.name, styles.bold].join(' ')}
          >
            {name}
          </span>
          <div>
            <span className={[styles.rightMargin, styles.bold].join(' ')}>
              {merchant}
            </span>
            <span className={styles.light}>{date}</span>
          </div>
        </div>
        <div className={styles.row}>
          <span className={[styles.rightMargin, styles.light].join(' ')}>
            {user.email}
          </span>
          <span className={styles.light}>{amountText}</span>
        </div>
      </div>
      {/* Comment section, if it exists */}
      {comment.trim() != '' && <div className={styles.comment}>{comment}</div>}
      {/* FOOTER: includes controls to add comments and receipts*/}
      <div className={styles.footer}>
        <button>ADD COMMENT</button>
        <button>ADD RECEIPT</button>
      </div>
    </div>
  );
}

export default ExpenseCard;
