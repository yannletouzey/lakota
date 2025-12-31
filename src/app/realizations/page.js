import styles from "./Realization.module.css";
import Image from "next/image";
import { realizations } from "../../data";

export default function Realizations() {
  return (
    <div className={styles.realizations}>
      <h1 className={styles.title}>Nos réalisations</h1>
      <p className={styles["presentation-text"]}>
        Découvrez les actions concrètes que nous avons menées pour transformer des vies et contribuer au développement de nos communautés, de la Côte d'Ivoire à la France.<br /> Chaque date marque une étape dans notre engagement.
      </p>

      <section>
        {realizations.map((item) => (
          <div key={item.id} className={styles.article}>
            <h2 className={styles.subtitle}>{item.title}</h2>
            {item.content.map((event, idx) => (
              <div key={`${item.id}-${idx}`} className={styles.event}>
                <h3>{event.subtitle}</h3>
                <p className={styles.date}><strong>{event.date}</strong></p>
                <p className={styles.text}>{event.content}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}