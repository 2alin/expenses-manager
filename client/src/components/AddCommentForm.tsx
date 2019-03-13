import React from 'react';
import styles from './AddCommentForm.module.scss'

interface Props {
  buttonText: string,
  id: string;
  comment: string;
  onSubmit: (id: string, comment: string) => void;
}

class AddCommentForm extends React.Component<Props> {
  state: {
    comment: string;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      comment: props.comment,
    };
  }
  handleChange = (e: any) => {
    this.setState({
      comment: e.target.value,
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.onSubmit(this.props.id, this.state.comment);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          type="text"
          name="comment"
          id="comment"
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

// const AddCommentForm = ({id,comment, onClick}:Props) => {
//   return (<div>There</div>)
// }

export default AddCommentForm;
