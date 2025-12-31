import styles from "./Realization.module.css";
import Image from "next/image";
import { realizations } from "../../data";

export default function Realizations() {
  return (
    <div className={styles.realizations}>
      <h1 className={styles.title}>Réalisations</h1>
      <section>
        {realizations.map((item, index) => (
          <article 
            key={item.id} 
            className={`${styles.article} ${index === 0 ? styles["first-article"] : ""}`}
          >
            <h2 className={styles.subtitle}>{item.title} {item.date !== "" && <span className={styles["post-date"]}>{item.date}</span>}</h2>
            <div className={styles.content}>
              {/* <div className={styles["img-container"]}>
                <Image className={styles.img} src={item.img[0].src} alt={item.title} width={500} height={500} />
              </div> */}
              <div className={styles["text-container"]}>
                {item.date !== "" && <p className={styles["post-date"]}>Evenement du <strong>{item.date}</strong></p>}
                <p className={styles.postContent} dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}