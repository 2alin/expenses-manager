import React from 'react';
import LanguageList from '../containers/LanguageList';
import CurrencyList from '../containers/CurrencyList';
import FilterForm from '../containers/FilterForm';
import AddCommentForm from '../containers/AddCommentForm';
import AddReceiptForm from '../containers/AddReceiptForm';
import styles from './Options.module.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

  return (
    <TransitionGroup component={null}>
      {displayed ? (
        <CSSTransition
          timeout={300}
          classNames={{
            enter: styles.enter,
            enterActive: styles['enter-active'],
            exit: styles.exit,
            exitActive: styles['exit-active'],
          }}
        >
          <div className={styles.container}>
            <div className={styles.main}>
              <div className={styles.exit} onClick={onExitClick} />
              {optionsToShow === 'I18N' && (
                <React.Fragment>
                  <LanguageList />
                  <CurrencyList />
                </React.Fragment>
              )}
              {optionsToShow === 'FILTER_LIST' && <FilterForm />}
              {optionsToShow === 'COMMENT' && <AddCommentForm />}
              {optionsToShow === 'RECEIPT' && <AddReceiptForm />}
            </div>
          </div>
        </CSSTransition>
      ) : null}
    </TransitionGroup>
  );
}
