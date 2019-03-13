import React from 'react';
import TopBar from './TopBar';
import History from '../containers/History';
import ChartSection from '../containers/ChartSection'
import OptionsDisplayed from '../containers/OptionsDisplayed';
import styles from './App.module.scss';

function App({ trans }: any) {
  return (
    <React.Fragment>
      <div className={styles.app}>
        <TopBar titleText={trans.title} />
        <div className={styles.body}>
          {/* section to display charts*/}
          <ChartSection />
          {/* section to display expenses history list, filtered ones and controls */}
          <History trans={trans.history} />
        </div>
        {/* container to display any kind of configuration popups */}
        <OptionsDisplayed />
      </div>
    </React.Fragment>
  );
}

export default App;
