"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const ref = useRef(null);  

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 64px", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <div
        ref={ref}
        className={styles["hero-home"]}
        aria-labelledby="hero-title"
      >
        <div className={styles["bg-wrapper"]}>
          <motion.div className={styles["bg-img"]} style={{ scale, opacity, transformOrigin: 'bottom center' }}>
            <Image
              className={styles.img}
              src="/img/main.jpg"
              alt=""
              fill
              priority
              onLoadingComplete={() =>
                window.requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))
              }
            />
          </motion.div>
        </div>
        <div className={styles["hero-text"]}>
          <h1>Ensemble, donnons un nouvel avenir à <span>Lakota 🌱</span></h1>
          <p>
            L’Association Lakota Nouvelle Vision agit pour l’éducation, la santé et la solidarité
            à Lakota, en Côte d’Ivoire, afin de construire un avenir meilleur pour toute une
            communauté.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <section aria-labelledby="missions-title" className={`${styles.missions} ${styles.section}`}>
          <h2 id="missions-title">Nos missions principales</h2>
          <div className={styles["missions-grid"]}>
            <article>
              <h3>Éducation</h3>
              <p>Offrir aux jeunes, particulièrement aux filles, des opportunités d’apprentissage et d’épanouissement.</p>
            </article>
            <article>
              <h3>Santé & Bien-être</h3>
              <p>Contribuer à l’accès aux soins, à la prévention sanitaire et au soutien psychologique.</p>
            </article>
            <article>
              <h3>Solidarité & Habitat</h3>
              <p>Améliorer les conditions de vie et renforcer le lien social dans la communauté.</p>
            </article>
            <article>
              <h3>Mobilisation & Partenariats</h3>
              <p>Créer des synergies locales et internationales pour un impact durable.</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="convictions-title" className={`${styles.convictions} ${styles.section}`}>
          <h2 id="convictions-title">Nos convictions</h2>
          <p>
            Nous croyons que chaque action compte et que le changement durable repose sur l’engagement collectif :
          </p>
          <ul>
            <li>✨ L’éducation change des vies et ouvre l’avenir</li>
            <li>✨ La solidarité sauve des familles et renforce le lien social</li>
            <li>✨ L’action collective transforme une communauté entière</li>
          </ul>
        </section>

        <aside aria-labelledby="cta-title" className={`${styles.cta} ${styles.section}`}>
          <h2 id="cta-title">Rejoignez-nous</h2>
          <p>
            Devenez membre, faites un don ou participez à nos projets pour construire un nouvel avenir à Lakota. Chaque geste compte !
          </p>
          <div className={styles["cta-buttons"]}>
            <a className={styles["donation-button"]} href="https://www.helloasso.com/associations/association-lakota-nouvelle-vision/formulaires/4" target="_blank" rel="noopener noreferrer">Faire un don</a>
          </div>
        </aside>
      </div>
    </>
  );
}
