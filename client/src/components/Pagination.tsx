import React from 'react';
import PrevPage from '../containers/PrevPage';
import NextPage from '../containers/NextPage';
import styles from './Pagination.module.scss';

interface Props {
  page: number;
  total: number;
  itemsPerPage: number;
}

function Pagination({ page, total, itemsPerPage }: Props) {
  return (
    <div className={styles.bar}>
      <div>
        <PrevPage text="Prev " />
        <NextPage text="Next" />
      </div>
      <span>
        {(page - 1) * itemsPerPage + 1} - {page * itemsPerPage} / {total}
      </span>
    </div>
  );
}

export default Pagination;
