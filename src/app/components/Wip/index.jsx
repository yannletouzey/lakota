import React from 'react'
import styles from './Wip.module.css'

export default function Wip() {
  return (
    <div className={styles.wip}>
      <p className={styles['wip-text']}>Work in progress <span className={styles['wip-point']}>.</span><span className={styles['wip-point']}>.</span><span className={styles['wip-point']}>.</span></p>
    </div>
  )
}