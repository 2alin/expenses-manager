import React from 'react';
import warningIcon from '../assets/icons/circle-warning.svg';
import styles from './EmptyList.module.scss';

interface Props {
  trans: any;
  searchQuery: string;
  hadFiltered: boolean;
  hasError: boolean;
}

function EmptyList({ trans, searchQuery, hadFiltered, hasError }: Props) {
  return (
    <div className={styles.container}>
      {searchQuery.length > 0 ? (
        <React.Fragment>
          <img src={warningIcon} alt="Warning" />
          <p>{trans.emptyListSearch}</p>
        </React.Fragment>
      ) : hadFiltered ? (
        <React.Fragment>
          <img src={warningIcon} alt="Warning" />
          <p>{trans.emptyListFilter}</p>
        </React.Fragment>
      ) : hasError ? (
        <React.Fragment>
          <img src={warningIcon} alt="Warning" />
          <p>{trans.errorAPI}</p>
        </React.Fragment>
      ) : (
        <p>{trans.loading}...</p>
      )}
    </div>
  );
}

export default EmptyList;
