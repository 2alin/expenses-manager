import React from 'react';
import styles from './I18nList.module.scss';

interface Props {
  trans: any;
  list: string[];
  active: string;
  onClick: (lang: string) => void;
}

function I18nLink({trans, list, active, onClick }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        {trans.description}:
      </div>
      <ul className={styles.list}>
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
    </div>
  );
}

export default I18nLink;
