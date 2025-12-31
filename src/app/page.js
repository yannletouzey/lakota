"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";
import TransitionLink from "./components/TransitionLink";

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
              onLoad={() =>
                window.requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))
              }
            />
          </motion.div>
        </div>
        <div className={styles["hero-text"]}>
          <h1>LAKOTA NOUVELLE VISION 🌱 : <span>Un avenir meilleur pour les jeunes filles et femmes vulnérables.</span></h1>
        </div>
      </div>

      <div className={styles.content}>
        <section id="association-lnv" aria-labelledby="titre-association" className={`${styles.missions} ${styles.section}`}>
          <header className={styles.header}>
            <h2 id="titre-association" className={styles.title}>Elles ont juste besoin d'être encadrées</h2>
          </header>

          <article aria-labelledby="presentation-association" className={`${styles.article} ${styles.presentation}`}>
            <div className={styles["article-content"]}>
              <img src="/img/members.png" alt="Photos des membres de l'association" />
              <div className={styles["article-text"]}>
                <h3 id="presentation-association" className={styles["article-title"]}>Notre Mission</h3>
                <p>
                  L'<a href="/about#about-asso"><strong>Association Lakota Nouvelle Vision</strong></a> (A-LNV) est une organisation à but non lucratif créée en septembre 2019. Nous œuvrons en France et en Afrique, particulièrement en Côte d'Ivoire, pour l'encadrement, l'orientation et l'assistance des jeunes filles et des personnes en situation de vulnérabilité.
                </p>
                <h4>Nous agissons principalement dans les domaines suivants:</h4>
                <ul>
                  <li><p>🎓 <span>Éducation et Formation</span></p></li>
                  <li><p>💚 <span>Santé</span></p></li>
                  <li><p>🌿 <span>Protection de l'environnement</span></p></li>
                  <li><p>🫶 <span>Lutte contre les Violences Basées sur le Genre (VBG)</span></p></li>
                  <li><p>🤲 <span>Lutte contre la pauvreté</span></p></li>
                </ul>
              </div>
            </div>
          </article>

          <article aria-labelledby="mot-presidente" id="words-president" className={styles.article}>
            <div className={styles["article-content"]}>
              <h3 id="mot-presidente" className={styles["article-title"]}>Mot de la Présidente Fondatrice Cécile DOGO, épouse MOLLARD</h3>
              <p>
                Marquée par son parcours de vie et animée par une profonde volonté d’aider les autres, <a href="/about#cecile-dogo-story"><span className="cecile"><strong>Cécile DOGO</strong></span></a> a fondé l’<a href="/about#about-asso"><strong>Association Lakota Nouvelle Vision</strong></a> pour offrir aux jeunes filles et femmes défavorisées une chance de se reconstruire et de s’épanouir.</p>
              <p>Entourée d’une équipe engagée, elle œuvre chaque jour pour une société plus juste, fondée sur la solidarité et l’inclusion.</p>
              <p>
                <a href="/about#cecile-dogo-story" className="bouton-lien" aria-label="En savoir plus sur la Présidente Fondatrice et l’histoire de l’association">
                  En savoir plus
                </a>
              </p>
            </div>
          </article>
          <article className={styles.article}>
            <div className={styles["article-title"]}>
            </div>
            <div className={styles["article-content"]}>
              <h3 className={styles["article-title"]}>NOTRE GRAND DÉFI : LE PENSIONNAT DE LAKOTA</h3>
              <p>Soutenez la construction de notre centre d'accueil et de formation à Lakota (Côte d'Ivoire).</p>
              <p>Un refuge essentiel pour les jeunes filles victimes de violences, déscolarisées ou sans qualification, visant à leur offrir un avenir meilleur.</p>
              <div className={styles["cta-buttons"]}>
                <a className={styles["donation-button"]} href="https://www.helloasso.com/associations/association-lakota-nouvelle-vision/formulaires/4" target="_blank" rel="noopener noreferrer">Faire un don</a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
