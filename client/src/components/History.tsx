import React from 'react';
import Pagination from './Pagination'
import ExpenseCard from './ExpenseCard'
import FilterLink from '../containers/FilterLink';
import getAllExpenses from '../utilities/getAllExpenses';
import { Filtered, Expense } from '../types';
import styles from './History.module.scss'

interface Props {
  trans: any;
  filtered: Filtered;
  currency: string;
  onFetched: (list: Array<Expense>) => void;
}

interface State {
  listExpenses: Array<Expense>;
}

class History extends React.Component<Props> {
  componentDidMount() {
    getAllExpenses().then(res => {
      this.props.onFetched(res);
    });
  }
  render() {
    const {
      list: filteredList,
      page,
      total,
      itemsPerPage,
    } = this.props.filtered;
    const currency = this.props.currency;
    const itemsToDisplay = filteredList.slice((page - 1) * 10, page * 10);

    return (
      <div className={styles.container}>
        <div className={styles.bar}>
          <span>{this.props.trans.title}</span>
          <FilterLink text={this.props.trans.filter} />
        </div>
        {filteredList.length > 0 ? (
          <div className={styles.list}>
            {itemsToDisplay.map(item => (
              <ExpenseCard key={item.id} expense={item} currency={currency} />
              // <div>{item.user.first + ' ' + item.user.last}</div>
              // <div>{item.amount.currency}</div>
            ))}
          </div>
        ) : (
          <div className="loading">loading</div>
        )}
        <Pagination {...{page, total, itemsPerPage}}/>
      </div>
    );
  }
}

function History2({ trans }: any) {
  const listPromise = getAllExpenses();
  let completeList;
  listPromise.then(res => {
    console.log(res);
    completeList = res;
  });
  return (
    <div>
      <div>
        <div className="bar">
          <span>{trans.title}</span>
          <FilterLink text={trans.filter} />
        </div>
        <div className="list" />
      </div>
    </div>
  );
}

export default History;
