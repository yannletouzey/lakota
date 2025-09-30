"use client"
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { pageanimation } from "../../../pageanimation";
import { usePathname } from 'next/navigation'
import useStore from '../../../stores/store'
import { useMobile } from '../../../hooks/useMobile'
import styles from "./Footer.module.css";

export const Footer = () => {

  const { menuButtonIsActive, setMenuButtonIsActive } = useStore()
  const router = useTransitionRouter()
  const pathname = usePathname()

  const isActive = (path) => pathname === path
    
  const { isMobile } = useMobile()

  return (
    <footer className={styles.footer}>
      <div className={styles.networks}>
        <h3 className={styles.title}>Rejoignez-nous</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/associationlakotanouvellevision"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/facebook.png" alt="Logo du site internet Facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lakota_nouvelle_vision/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/logos/instagram.png" alt="Logo du site internet Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <span className={styles["footer-separating-line"]}></span>
      <ul className={styles.links}>
        <li>
          <Link 
            href="/about"
            className={isActive("/about") ? `${styles.link} ${styles["current-link"]}` : `${styles.link}`}
            onClick={(e) => {
              e.preventDefault()
              setMenuButtonIsActive(false)         
              router.push("/about", {
                onTransitionReady: pageanimation
              })
            }}
          >
            A propos
          </Link>
        </li>
        <li>
          <Link 
            href="/contact"
            className={isActive("/contact") ? `${styles.link} ${styles["current-link"]}` : `${styles.link}`}
            onClick={(e) => {
              e.preventDefault()
              setMenuButtonIsActive(false)         
              router.push("/contact", {
                onTransitionReady: pageanimation
              })
            }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            href="/sitemap"
            className={isActive("/sitemap") ? `${styles.link} ${styles["current-link"]}` : `${styles.link}`}
            onClick={(e) => {
              e.preventDefault()
              setMenuButtonIsActive(false)         
              router.push("/sitemap", {
                onTransitionReady: pageanimation
              })
            }}
          >
            Plan du site
          </Link>
        </li>
      </ul>
    </footer>
  );
};