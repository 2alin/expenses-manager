import { connect } from 'react-redux';
import { Store, Expense} from '../types';
import History from '../components/History'
import { setExpensesList } from '../actions';


const mapStateToProps = (state: Store, ownProps:any) => ({
  ...ownProps,
  filteredList: state.expenses.filtered.list
})

const mapDispatchToProps = (dispatch: any) => ({
  onFetched: (list:Array<Expense>) => {
    console.log('Fetching Expenses List');
    return dispatch(setExpensesList(list))
  },
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
