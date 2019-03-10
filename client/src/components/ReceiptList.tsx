import React from 'react';
import styles from './ReceiptList.module.scss'
import {API_URL} from '../utilities/constants'

interface Props {
  receiptList: any[];
}

function ReceiptList({ receiptList }: Props) {
  return (
    <ul className={styles.list}>
      {receiptList.map((receipt, index) => (
        <li key={index}>
          <a href={API_URL + receipt.url} target="_blank">{index + 1} </a>
        </li>
      ))}
    </ul>
  );
}

export default ReceiptList;
