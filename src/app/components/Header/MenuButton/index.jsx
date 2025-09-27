'use client'
import { useRef, useEffect } from 'react'
import styles from './ButtonMenu.module.css'
import useStore from '../../../../stores/store'

export default function MenuButton() {

  const { menuButtonIsActive, setMenuButtonIsActive } = useStore()
  const buttonRef = useRef(null)
  
  const handleClick = () => {
    setMenuButtonIsActive(!menuButtonIsActive)    
  }

  useEffect(() => {
    if (menuButtonIsActive) {
      buttonRef.current.classList.add(styles.active)
    } else {
      buttonRef.current.classList.remove(styles.active)
    }
  }, [menuButtonIsActive])

  return (
    <button 
      ref={buttonRef}
      className={styles['menu-button']}
      onClick={handleClick}
    >
      <span className={styles.span}></span>
    </button>
  )
}
