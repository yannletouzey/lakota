"use client"
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { pageanimation } from "../../../pageanimation";
import { usePathname } from 'next/navigation'
import { routes } from '../../../data'
import styles from "./Footer.module.css";
import useStore from '../../../stores/store'

export const Footer = () => {

  const { setMenuButtonIsActive } = useStore()

  const router = useTransitionRouter()
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>© 2025, Association Lakota Nouvelle Vision</p>
      </div>
      <span className={styles["footer-separating-line"]}></span>
      <div className={styles.networks}>
        <h3 className={styles.title}>Rejoignez-nous</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/associationlakotanouvellevision"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/logos/facebook.png" 
                alt="Logo du site internet Facebook" 
                aria-label="Logo du site internet Facebook" 
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lakota_nouvelle_vision/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/logos/instagram.png" 
                alt="Logo du site internet Instagram" 
                aria-label="Logo du site internet Instagram" 
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lakota-nouvelle-vision-6bb655216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/logos/linkedin.png" 
                alt="Logo du site internet Linkedin" 
                aria-label="Logo du site internet Linkedin" 
              />
            </a>
          </li>
        </ul>
      </div>
      <span className={styles["footer-separating-line"]}></span>
      <ul className={styles.links}>
        {routes.map((r) => (
          r.type === 'Footer' && (
            <li key={r.name}>
              <Link
                href={r.href}
                className={isActive(r.href) ? `${styles.link} ${styles["current-link"]}` : `${styles.link}`}
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
          )
        ))}
      </ul>
    </footer>
  );
};