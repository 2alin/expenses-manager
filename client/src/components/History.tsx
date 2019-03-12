import React from 'react';
import EmptyList from './EmptyList';
import Pagination from './Pagination';
import ExpenseCard from './ExpenseCard';
import FilterLink from '../containers/FilterLink';
import { getAllExpenses } from '../utilities/async';
import { Filtered, Expense } from '../types';
import styles from './History.module.scss';
import { trans } from '../utilities/i18n';

interface Props {
  trans: any;
  filtered: Filtered;
  currency: string;
  hadFiltered: boolean;
  onFetched: (list: Array<Expense>, currency: string) => void;
}

class History extends React.Component<Props> {
  state: {
    hasError: boolean;
  };
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    getAllExpenses()
      .then(res => {
        this.props.onFetched(res, this.props.currency);
      })
      .catch(err => {
        // catching API errors, to show appropriate UI message
        console.log(err);
        this.setState({ hasError: true });
      });
  }

  render() {
    const {
      list: filteredList,
      page,
      total,
      itemsPerPage,
    } = this.props.filtered;
    const { currency, hadFiltered } = this.props;
    const itemsToDisplay = filteredList.slice((page - 1) * 10, page * 10);

    return (
      <div className={styles.container}>
        <div className={styles.bar}>
          <span>{this.props.trans.title}</span>
          <div className={styles.filterBar}>
            {hadFiltered && <span className={styles.filterDone} />}
            <FilterLink text={this.props.trans.filter} />
          </div>
        </div>
        {filteredList.length > 0 ? (
          <div className={styles.list}>
            {itemsToDisplay.map(item => (
              <ExpenseCard key={item.id} expense={item} currency={currency} />
            ))}
          </div>
        ) : (
          <EmptyList
            hadFiltered={hadFiltered}
            hasError={this.state.hasError}
            trans={this.props.trans.messages}
          />
        )}
        <Pagination
          {...{ trans: this.props.trans.footer, page, total, itemsPerPage }}
        />
      </div>
    );
  }
}

export default History;
