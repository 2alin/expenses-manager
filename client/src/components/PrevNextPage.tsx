import React from 'react'
import styles from './PrevNextPage.module.scss'

interface Props {
  text: string;
  disabled:boolean;
  onClick: ()=>void;
}

function PrevNextPage({text, disabled, onClick}:Props) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {text}
    </button>
  )
}

export default PrevNextPage
