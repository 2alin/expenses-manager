import React from 'react';
import Link from './Link'
import styles from './Link.module.scss';

interface Props {
  lang: string;
  curr: string
  onClick: () => void;
}

function I18nLink({ lang, curr, onClick }: Props) {
  const text = lang + ' / ' + curr;
  return <Link {...{text, onClick}} className={styles.link} />;
}

export default I18nLink;
