import React from 'react';
import Link from './Link'
import styles from './FilterLink.module.scss';

interface Props {
  text: string;
  onClick: () => void;
}

function FilterLink({ text, onClick }: Props) {
  return <Link {...{text, onClick}} className={styles.link} />;
}

export default FilterLink;
