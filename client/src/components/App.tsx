import React from 'react';
import TopBar from './TopBar';
import History from '../containers/History';
import OptionsDisplayed from '../containers/OptionsDisplayed';
import styles from './App.module.scss';

function App({ trans }: any) {
  console.log(trans.history);
  return (
    <React.Fragment>
      <div className={styles.app}>
        <TopBar titleText={trans.title}/>
        <History trans={trans.history}/>
        {/* container to display options for language, currency and expenses list filter */}
        <OptionsDisplayed/>
      </div>
    </React.Fragment>
  );
}

export default App;
