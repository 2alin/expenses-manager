import React from 'react';
import FilterFormOptionDate from './FilterFormOptionDate';
import FilterFormOptionAmount from './FilterFormOptionAmount';
import FilterFormOptionSelect from './FilterFormOptionSelect';
import { Store, FilterOptions } from '../types';


interface Props {
  trans: any;
  options: FilterOptions;
  currency: string;
  onClick: (options: FilterOptions, currency:string) => void;
}

class FilterForm extends React.Component<Props> {
  state: FilterOptions;
  constructor(props: Props) {
    super(props);
    this.state = this.props.options;
  }
  handleCheck = (e: any, element: string) => {
    const isOn = e.target.checked;
    this.setState({ [element]: { ...this.state[element], isOn } });
  };
  handleDateChange = (e: any) => {
    const value = new Date(e.target.value);
    const element = e.target.name;
    this.setState({ [element]: { ...this.state[element], value } });
  };
  handleChange = (e: any) => {
    const value = e.target.value;
    const element = e.target.name;
    this.setState({ [element]: { ...this.state[element], value } });
  };
  isDisabled = (element: string) => {
    return !this.state[element].isOn;
  };
  render() {
    const trans = this.props.trans;

    return (
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <FilterFormOptionDate text={trans.startDate}
          optionName={'startDate'}
          filterOption={this.state.startDate}
          handleCheck={this.handleCheck}
          handleChange={this.handleDateChange}
        />
        <FilterFormOptionDate text={trans.endDate}
          optionName={'endDate'}
          filterOption={this.state.endDate}
          handleCheck={this.handleCheck}
          handleChange={this.handleDateChange}
        />
        <FilterFormOptionAmount text={trans.minAmount}
          optionName={'minAmount'}
          filterOption={this.state.minAmount}
          handleCheck={this.handleCheck}
          handleChange={this.handleChange}
        />
        <FilterFormOptionAmount text={trans.maxAmount}
          optionName={'maxAmount'}
          filterOption={this.state.maxAmount}
          handleCheck={this.handleCheck}
          handleChange={this.handleChange}
        />
        <FilterFormOptionSelect text={trans.currency}
          optionName={'currency'}
          filterOption={this.state.currency}
          handleCheck={this.handleCheck}
          handleChange={this.handleChange}
        />
        <div className="row">
          <button onClick={() => this.props.onClick(this.state, this.props.currency)}>{trans.filter}</button>
        </div>
      </form>
    );
  }
}

export default FilterForm;
