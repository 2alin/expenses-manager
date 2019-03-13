import { connect } from 'react-redux';
import AddReceiptButton from '../components/AddReceiptButton';
import { setVisibleOptions, setExpenseToUpdate } from '../actions';
import {trans} from '../utilities/i18n'
import { Store } from '../types';

const mapStateToProps = (state: Store, ownProps: any) => ({
  buttonText:trans[state.i18n.language].history.expense.addReceipt,
  id: ownProps.id,
});

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (id: string) => {
    dispatch(setExpenseToUpdate(id, ''));
    dispatch(setVisibleOptions(true, 'RECEIPT'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReceiptButton);
