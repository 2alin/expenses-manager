import React from 'react';
import LanguageList from '../containers/LanguageList';
import CurrencyList from '../containers/CurrencyList';
import styles from './Options.module.scss';
import joinClasses from '../utilities/joinClasses';

interface Props {
  displayed: boolean;
  optionsToShow: string;
  onExitClick: () => void;
}

export default function Options({
  displayed,
  optionsToShow,
  onExitClick,
}: any) {
  let classList = [styles.container];

  if (displayed) classList.push(styles.displayed);

  return (
    <div className={joinClasses(classList)}>
      <div className={styles.main}>
      <div className={styles.exit} onClick={onExitClick} />
      {optionsToShow === 'I18N' && (
        <React.Fragment>
          <LanguageList />
          <CurrencyList />
        </React.Fragment>
      )}
      {optionsToShow === 'FILTER_LIST' && (
        <div>Here we will have filter options</div>
      )}
      </div>
    </div>
  );
}
