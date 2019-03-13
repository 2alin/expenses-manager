import React from 'react';
import { FilterOption } from '../types';
import { EXRATES } from '../utilities/constants';

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

      <select
        disabled={!filterOption.isOn}
        name={optionName}
        id={optionName}
        onChange={handleChange}
        value={filterOption.value as string}
      >
        {Object.keys(EXRATES.rates)
          .sort()
          .map(lang => (
            <option key={lang}>{lang}</option>
          ))}
      </select>
    </div>
  );
}

export default FilterFormOptionDate;
