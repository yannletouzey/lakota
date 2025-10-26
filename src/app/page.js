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
          <h1>LAKOTA NOUVELLE VISION 🌱 : <span>Un avenir meilleur pour les jeunes filles et femmes vulnérables.</span></h1>
        </div>
      </div>

      <div className={styles.content}>
        <section id="association-lnv" aria-labelledby="titre-association" className={`${styles.missions} ${styles.section}`}>
          <header className={styles.header}>
            <h2 id="titre-association">Association Lakota Nouvelle Vision (A-LNV)</h2>
            <p className="sous-titre">Solidarité – Égalité – Engagement</p>
          </header>

          <article aria-labelledby="presentation-association" className={`${styles.article} ${styles.presentation}`}>
            <div className={styles["article-title"]}>
              <h3 id="presentation-association">Présentation de l'association</h3>
            </div>
            <div className={styles["article-content"]}>
              <img src="/img/members.png" alt="Photos des membres de l'association" />
              <p>
                L’association <strong>Originaires du département de Lakota (Côte d'Ivoire)</strong>, les membres fondateurs de l’association ont traversé des épreuves difficiles. Fondée en France le <time dateTime="2019-09-18">18 septembre 2019</time>, l’<abbr title="Association Lakota Nouvelle Vision">A-LNV</abbr> est aujourd’hui également enregistrée en Côte d'Ivoire.<br />Son objectif est de mobiliser toutes les énergies de cette communauté solidaire afin d’accompagner les institutions étatiques dans leur politique de lutte contre la pauvreté et d’insertion sociale.<br />L’association compte aujourd’hui plus de <strong>200 membres bénévoles</strong> à travers le monde.
              </p>
            </div>
          </article>

          <article aria-labelledby="vision-valeurs" className={styles.article}>
            <div className={styles["article-title"]}>
              <h3 id="vision-valeurs">Notre Vision et Nos Valeurs</h3>
            </div>
            <div className={styles["article-content"]}>
              <p>
                Proposer un monde où chaque fille et chaque personne défavorisée a la possibilité de s’épanouir,  d’être respectée et de mettre en valeur son potentiel. Nous défendons leurs droits fondamentaux et favorisons un accès équitable à l’éducation, à la santé et à la justice.
              </p>
              <div>
                <ul>
                  <li>
                    <p>⚖️ <strong>Égalité et justice</strong><br /><span>Défendre les droits de chacun sans distinction.</span></p>
                  </li>
                  <li>
                    <p>🤝 <strong>Solidarité</strong><br /><span>Unir nos forces pour construire un avenir meilleur.</span></p>
                  </li>
                  <li>
                    <p>🌟 <strong>Engagement</strong><br /><span>Agir concrètement pour un changement durable.</span></p>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article aria-labelledby="mot-presidente" id="words-president" className={styles.article}>
            <div className={styles["article-title"]}>
              <h3>Mot de la Présidente Fondatrice Cécile DOGO, épouse MOLLARD</h3>
            </div>
            <div className={styles["article-content"]}>
              <p>
                Marquée par son parcours de vie et animée par une profonde volonté d’aider les autres, <span className="cecile"><strong>Cécile DOGO</strong></span> a fondé l’<strong>Association Lakota Nouvelle Vision</strong> pour offrir aux jeunes filles et femmes défavorisées une chance de se reconstruire et de s’épanouir.</p>
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
              <h3 id="main-missions">Notre Mission</h3>
            </div>
            <div className={styles["article-content"]}>
              <p><strong>L'Association Lakota Nouvelle Vision (A-LNV)</strong> est une organisation à but non lucratif créée en septembre 2019. Nous œuvrons en France et en Afrique, particulièrement en Côte d'Ivoire, pour l'encadrement, l'orientation et l'assistance des jeunes filles et des personnes en situation de vulnérabilité.</p>
              <h4>Nous agissons principalement dans les domaines suivants:</h4>
              <ul>
                <li>🎓 Éducation et Formation</li>
                <li>💚 Santé</li>
                <li>🌿 Protection de l'environnement</li>
                <li>🫶 Lutte contre les Violences Basées sur le Genre (VBG)</li>
                <li>🤲 Lutte contre la pauvreté</li>
              </ul>
            </div>
          </article>
          <article className={styles.article}>
            <div className={styles["article-title"]}>
              <h3>NOTRE GRAND DÉFI : LE PENSIONNAT DE LAKOTA</h3>
            </div>
            <div className={styles["article-content"]}>
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
