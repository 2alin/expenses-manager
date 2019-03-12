import React from 'react';
import warningIcon from '../assets/icons/circle-warning.svg';
import styles from './EmptyList.module.scss'
import { trans } from '../utilities/i18n';

interface Props {
  trans: any;
  hadFiltered: boolean;
  hasError: boolean;
}

function EmptyList({trans, hadFiltered, hasError }: Props) {
  return (
    <div className={styles.container}>
      {hadFiltered ? (
        <React.Fragment>
          <img src={warningIcon} alt="Warning" />
          <p>
            {trans.emptyListFilter}
          </p>
        </React.Fragment>
      ) : hasError ? (
        <React.Fragment>
          <img src={warningIcon} alt="Warning" />
          <p>
            {trans.errorAPI}
          </p>
        </React.Fragment>
      ) : (
        <p>{trans.loading}...</p>
      )}
    </div>
  );
}

export default EmptyList;
