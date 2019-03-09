import React from 'react'
import styles from './TopBar.module.scss'
import I18nBar from './I18nBar'

function TopBar({ titleText }: { titleText: string }) {
  return (<div className={styles.titleBar}>
    <span className={styles.title}>{titleText}</span>
    <I18nBar />
  </div>)
}

export default TopBar;
