import React from 'react';
import I18nBar from './I18nBar';
import styles from './App.module.scss';
import OptionsDisplayed from '../containers/OptionsDisplayed';

function App() {
  return (
    <React.Fragment>
      <div className={styles.app}>
        <div className={styles.titleBar}>
          <span className={styles.title}>Expenses Manager</span>
          <I18nBar />
        </div>
        {/* container to display options for language, currency and expenses list filter */}
        <OptionsDisplayed/>
      </div>
    </React.Fragment>
  );
}

export default App;
