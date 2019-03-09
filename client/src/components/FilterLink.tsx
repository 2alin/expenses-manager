import React from 'react';
import Link from './Link'
import styles from './Link.module.scss';

interface Props {
  text: string;
  onClick: () => void;
}

function FilterLink({ text, onClick }: Props) {
  return <Link {...{text, onClick}} className={styles.link} />;
}

export default FilterLink;
