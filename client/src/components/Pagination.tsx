import React from 'react';
import PrevPage from '../containers/PrevPage';
import NextPage from '../containers/NextPage';
import styles from './Pagination.module.scss';

interface Props {
  trans: any;
  page: number;
  total: number;
  itemsPerPage: number;
}

function Pagination({trans, page, total, itemsPerPage }: Props) {
  return (
    <div className={styles.bar}>
      <div>
        <PrevPage text={trans.previous} disabled={page <= 1}/>
        <NextPage text={trans.next} disabled={(page*itemsPerPage) >= total}/>
      </div>
      <span>
        {(page - 1) * itemsPerPage + 1} - {page * itemsPerPage} / {total}
      </span>
    </div>
  );
}

export default Pagination;
