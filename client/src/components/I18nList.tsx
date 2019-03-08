import React from 'react';
import styles from './I18nLink.module.scss';

interface Props {
  list: string[];
  active: string;
  onClick: (lang: string) => void;
}

function I18nLink({ list, active, onClick }: Props) {
  return (
    <ul>
      {list.map(lang => (
        <li key={lang} onClick={() => onClick(lang)}>
          {lang}
        </li>
      ))}
    </ul>
  );
}

export default I18nLink;
