import React from 'react'
import I18nLink from '../containers/I18nLink'
import styles from './I18nBar.module.scss'

function I18nBar() {
  return (
    <div className={styles.list}>
      <I18nLink />
    </div>
  )
}

export default I18nBar
