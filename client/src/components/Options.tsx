import React from 'react';
import LanguageList from '../containers/LanguageList';
import CurrencyList from '../containers/CurrencyList';
import FilterForm from '../containers/FilterForm';
import AddCommentForm from '../containers/AddCommentForm';
import AddReceiptForm from '../containers/AddReceiptForm';
import styles from './Options.module.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const transitionClasses = {
  enter: styles.enter,
  enterActive: styles.enterActive,
  exit: styles.exit,
  exitActive: styles.exitActive,
};

interface Props {
  displayed: boolean;
  optionsToShow: string;
  onExitClick: () => void;
}

export default function Options({
  displayed,
  optionsToShow,
  onExitClick,
}: Props) {
  return (
    <TransitionGroup component={null}>
      {displayed ? (
        <CSSTransition timeout={300} classNames={transitionClasses}>
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
