'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTransitionRouter } from 'next-view-transitions'
import useStore from '../../../../stores/store'
import { useMobile } from '../../../../hooks/useMobile'
import { pageanimation } from '../../../../pageanimation'
import { routes } from '../../../../data'
import './index.css'

export default function Menu() {
  const navbarRef = useRef(null)
  const { menuButtonIsActive, setMenuButtonIsActive } = useStore()
  const router = useTransitionRouter()
  const pathname = usePathname()

  const isActive = (path) => pathname === path
    
  const { isMobile } = useMobile()

  useEffect(() => {
    if (isMobile) {
      if (menuButtonIsActive) {
        navbarRef.current.style.right = '0'
      } else {
        navbarRef.current.style.right = `-${navbarRef.current?.offsetWidth}px`
      }
    } else {
      navbarRef.current.style.right = 0
    }
  }, [menuButtonIsActive, isMobile])

  return (
    <nav 
      ref={navbarRef}
      className='navbar' 
      role="navigation" 
      aria-label="Menu principal"
    >
      <ul>
        {routes.map((r) => (
          <li key={r.name}>
            <Link
              href={r.href}
              className={isActive(r.href) ? 'link current-link' : 'link'}
              aria-current={isActive(r.href) ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault()
                setMenuButtonIsActive(false)                
                router.push(r.href, {
                  onTransitionReady: pageanimation
                })
              }}
            >
              {r.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
