import React from 'react';
import { toYYMMDD } from '../utilities/methods';
import { FilterOption } from '../types';

interface Props {
  text: string;
  optionName: string;
  filterOption: FilterOption;
  handleCheck: (e: any, element: string) => void;
  handleChange: (e: any) => void;
}

function FilterFormOptionDate({
  text,
  optionName,
  filterOption,
  handleCheck,
  handleChange,
}: Props) {
  return (
    <div>
      <div>
        <input
          type="checkbox"
          name={optionName + 'Check'}
          id={optionName + 'Check'}
          onChange={e => handleCheck(e, optionName)}
          checked={filterOption.isOn}
        />
        <label htmlFor={optionName + 'Check'}>{text}</label>
      </div>
      <input
        disabled={!filterOption.isOn}
        type="date"
        name={optionName}
        id={optionName}
        onChange={e => handleChange(e)}
        value={toYYMMDD(filterOption.value as Date)}
      />
    </div>
  );
}

export default FilterFormOptionDate;
