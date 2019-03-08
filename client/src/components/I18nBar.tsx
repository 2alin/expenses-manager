import React from 'react'
import LanguageLink from '../containers/LanguageLink'
import CurrencyLink from '../containers/CurrencyLink'
import styles from './I18nBar.module.scss'

function I18nBar() {
  return (
    <div className={styles.list}>
      <LanguageLink />
      <CurrencyLink />
    </div>
  )
}

export default I18nBar
