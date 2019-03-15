import React from 'react';
import { FilterOptions } from '../types';
import styles from './SearchByQuery.module.scss';

interface Props {
  searchQuery: string;
  filterOptions: FilterOptions;
  currency: string;
  onChange: (
    searchQuery: string,
    filterOptions: FilterOptions,
    currency: string
  ) => void;
}

function SearchByQuery({
  searchQuery,
  filterOptions,
  currency,
  onChange,
}: Props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={searchQuery}
        onChange={e => onChange(e.target.value.trim(), filterOptions, currency)}
      />
    </div>
  );
}

export default SearchByQuery;
