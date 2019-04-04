import React from 'react';
import AddCommentButton from '../containers/AddCommentButton';
import AddReceiptButton from '../containers/AddReceiptButton';
import ReceiptList from './ReceiptList';
import { Expense } from '../types';
import { toYYMMDD, convertCurrency } from '../utilities/methods';
import styles from './ExpenseCard.module.scss';
interface Props {
  expense: Expense;
  currency: string;
}

function ExpenseCard({ expense, currency }: Props) {
  const { id, merchant, amount, user, comment, receipts } = expense;
  const name = user.first + ' ' + user.last;
  const date = toYYMMDD(new Date(expense.date));
  const altAmount = convertCurrency(amount, currency);
  const originalAmountText = `${new Intl.NumberFormat().format(amount.value)} ${
    amount.currency
  }`;
  const altAmountText = `${new Intl.NumberFormat('us-US', {
    maximumFractionDigits: 2,
  }).format(altAmount.value)} ${altAmount.currency}`;
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
        <AddCommentButton id={id} comment={comment} />
        <AddReceiptButton id={id} />
        <ReceiptList receiptList={receipts} />
      </div>
    </div>
  );
}

export default ExpenseCard;
