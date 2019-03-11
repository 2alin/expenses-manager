import React from 'react';
import Pagination from './Pagination';
import ExpenseCard from './ExpenseCard';
import FilterLink from '../containers/FilterLink';
import {getAllExpenses} from '../utilities/async';
import { Filtered, Expense } from '../types';
import styles from './History.module.scss';

interface Props {
  trans: any;
  filtered: Filtered;
  currency: string;
  hadFiltered: boolean;
  onFetched: (list: Array<Expense>, currency:string) => void;
}


class History extends React.Component<Props> {
  componentDidMount() {
    getAllExpenses().then(res => {
      this.props.onFetched(res,this.props.currency);
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
          <div>
            { hadFiltered &&
            <span className={styles.filterDone}>Done!</span>}
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
          <div className="emptyList">Nothing to show :(</div>
        )}
        <Pagination {...{trans:this.props.trans.footer, page, total, itemsPerPage }} />
      </div>
    );
  }
}

export default History;
