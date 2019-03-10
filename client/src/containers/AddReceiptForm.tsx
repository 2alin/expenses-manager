import { connect } from 'react-redux';
import AddReceiptForm from '../components/AddReceiptForm';
import { setVisibleOptions, updateExpense } from '../actions';
import { uploadReceipt } from '../utilities/async';
import { trans } from '../utilities/i18n';
import { Store, Expense } from '../types';

const mapStateToProps = (state: Store, ownProps: any) => ({
  trans: trans[state.i18n.language].history.receiptForm,
  id: state.commentToUpdate.id,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (id: string, data: any) => {
    console.log('onSubmit');
    console.log('id', id);
    console.log('data', data);
    uploadReceipt(id, data).then(res => {
      dispatch(updateExpense(res));
    });
    dispatch(setVisibleOptions(false, 'NONE'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReceiptForm);
