import React from 'react';
import FilterLink from '../containers/FilterLink';
import getAllExpenses from '../utilities/getAllExpenses';
import { Expense } from '../types';

interface Props {
  trans: any;
  filteredList: Array<Expense>;
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
    const filteredList = this.props.filteredList;
    const itemsToDisplay = filteredList.slice(0, 10);
    return (
      <div>
        <div className="bar">
          <span>{this.props.trans.title}</span>
          <FilterLink text={this.props.trans.filter} />
        </div>
        {filteredList.length > 0 ? (
          <div className="list">
            {itemsToDisplay.map(item => (
              <div>{item.user.first + ' ' + item.user.last}</div>
            ))}
          </div>
        ) : (
          <div className="loading">loading</div>
        )}
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
