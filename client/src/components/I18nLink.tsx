import React from 'react';
import styles from './I18nLink.module.scss';

interface Props {
  text: string;
  onClick: () => void;
}

function I18nLink({ text, onClick }: Props) {
  return <div onClick={onClick} className={styles.item}>{text}</div>;
}

export default I18nLink;
