import React from 'react';
import styles from './I18nList.module.scss';

interface Props {
  list: string[];
  active: string;
  onClick: (lang: string) => void;
}

function I18nLink({ list, active, onClick }: Props) {
  return (
    <ul className = {styles.list}>
      {list.map(lang => (
        <li
          key={lang}
          className={lang === active ? styles.active : ''}
          onClick={() => onClick(lang)}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
}

export default I18nLink;
