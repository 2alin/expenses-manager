import React from 'react';
import styles from './AddReceiptForm.module.scss';

interface Props {
  trans: any;
  id: string;
  onSubmit: (id: string, data: any) => void;
}

export default class AddReceiptForm extends React.Component<Props> {
  state: {
    selectedFile: any;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedFile: undefined,
    };
  }

  handleSelect = (e: any) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData();
    data.append(
      'receipt',
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    this.props.onSubmit(this.props.id, data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          type="file"
          name="fileSelector"
          id="fileSelector"
          onChange={this.handleSelect}
        />
        <button type="submit" disabled={this.state.selectedFile === undefined}>
          {this.props.trans.submit}
        </button>
      </form>
    );
  }
}
