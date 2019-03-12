import React from 'react';
import warningIcon from '../assets/icons/circle-warning.svg';
import styles from './EmptyList.module.scss'

interface Props {
  hadFiltered: boolean;
  hasError: boolean;
}

function EmptyList({ hadFiltered, hasError }: Props) {
  return (
    <div className={styles.container}>
      {hadFiltered ? (
        <React.Fragment>
          <img src={warningIcon} alt="Warning" />
          <p>
            You are getting an empty list with the filters you chose. Try
            changing your filter options.
          </p>
        </React.Fragment>
      ) : hasError ? (
        <React.Fragment>
          <img src={warningIcon} alt="Warning" />
          <p>
            Error while fetching data from the server. Please check if your API
            is running, and reload after that.
          </p>
        </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EmptyList;
