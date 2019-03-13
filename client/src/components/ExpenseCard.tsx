import React from 'react';
import AddCommentButton from '../containers/AddCommentButton';
import AddReceiptButton from '../containers/AddReceiptButton';
import ReceiptList from './ReceiptList';
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
  const altAmount = convertCurrency(amount, currency);
  const originalAmountText = `${amount.value} ${amount.currency}`;
  const altAmountText = `${altAmount.value.toFixed(2)} ${altAmount.currency}`;
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
          <span className={styles.light}>
            <span className={styles.bold}>{originalAmountText}</span> (
            {altAmountText})
          </span>
        </div>
      </div>

      {/* Comment section, if it exists */}
      {comment.trim() != '' && <div className={styles.comment}>{comment}</div>}

      {/* FOOTER: includes controls to add comments and receipts*/}
      <div className={styles.footer}>
        <AddCommentButton id={expense.id} comment={expense.comment} />
        <AddReceiptButton id={expense.id} />
        <ReceiptList receiptList={expense.receipts} />
      </div>
    </div>
  );
}

export default ExpenseCard;
