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
    <div className={styles.home}>
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
          {/* <h1><span>Association lakota</span> <span>nouvelle vision</span></h1> */}
          <h1>Ensemble, donnons un nouvel avenir à <span>Lakota 🌱</span></h1>
          <p>
            L’Association Lakota Nouvelle Vision agit pour l’éducation, la santé et la solidarité
            à Lakota, en Côte d’Ivoire, afin de construire un avenir meilleur pour toute une
            communauté.
          </p>
        </div>
      </div>
      <section className={styles.content} aria-labelledby="association-title">
        <h2 id="association-title">Ensemble, faisons grandir l’espoir à Lakota 🌱</h2>

        <article className={styles.article} aria-labelledby="presentation-title">
          <h3 id="presentation-title">Qui nous sommes</h3>
          <p>
            L’Association Lakota Nouvelle Vision, fondée par des femmes et des hommes originaires
            de Lakota, est née d’un rêve partagé : voir notre ville s’épanouir et offrir à chaque
            enfant, chaque femme et chaque famille une vie digne et pleine d’opportunités. 
            Depuis 2019, nous agissons en France et en Côte d’Ivoire pour mobiliser les énergies,
            renforcer la solidarité et initier des projets concrets au service de la communauté.
          </p>
        </article>

        <article className={`${styles.article} ${styles.beliefs}`} aria-labelledby="beliefs-title">
          <h3 id="beliefs-title">Nos convictions</h3>
          <p>
            Nous croyons profondément que le changement durable repose sur l’engagement collectif.
            Trois valeurs guident chacune de nos actions :
          </p>
          <ul>
            <li>✨ <strong>L’éducation</strong> change des vies et ouvre l’avenir</li>
            <li>✨ <strong>La solidarité</strong> sauve des familles et renforce le lien social</li>
            <li>✨ <strong>L’action collective</strong> transforme une communauté entière</li>
          </ul>
        </article>

        <article className={styles.article} aria-labelledby="actions-title">
          <h3 id="actions-title">Pourquoi nous agissons</h3>
          <p>
            Lakota fait face à des défis importants : un accès limité aux soins, un taux
            d’alphabétisation encore fragile et des conditions de vie précaires. Chaque projet
            que nous portons – qu’il s’agisse de scolariser une jeune fille, de soutenir une
            famille en difficulté ou d’améliorer l’accès à l’eau et à la santé – est une pierre
            posée pour bâtir un avenir meilleur. 
          </p>
          <p>
            Notre ambition est claire : impulser une dynamique locale capable de transformer la
            vie quotidienne tout en préparant les générations futures à prendre part au
            développement de leur ville.
          </p>
        </article>

        <aside className={styles.aside} aria-labelledby="join-title">
          <h3 id="join-title">Rejoignez-nous</h3>
          <p>
            Rejoindre notre association, c’est participer à une aventure humaine où la chaleur du
            cœur compte autant que l’efficacité de l’action. Vous pouvez contribuer de plusieurs
            manières : en devenant membre, en faisant un don, en relayant nos projets ou en
            apportant vos compétences. 
          </p>
          <p>
            Ensemble, nous pouvons donner un nouveau souffle à Lakota et offrir une vision
            d’avenir à toute une génération.
          </p>
        </aside>
      </section>
    </div>
  );
}
