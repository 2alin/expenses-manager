import React from 'react';
import { Expense, FilterOptions } from '../types';

interface Props {
  searchQuery: string;
  filterOptions: FilterOptions
  currency: string;
  onChange: (searchQuery:string, filterOptions:FilterOptions, currency:string) => void;
}



function SearchByQuery({ searchQuery,filterOptions, currency,onChange }: Props) {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onChange(e.target.value.trim(), filterOptions, currency)}
    />
  );
}

export default SearchByQuery;
