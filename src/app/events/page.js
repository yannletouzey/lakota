import styles from "./Events.module.css";
import Image from "next/image";
import { events } from "../../data";

export default function Events() {
  return (
    <div className={styles.events}>
      <h1 className={styles.title}>Evenements</h1>
      <section>
        {events.map((event, index) => (
          <article 
            key={event.id} 
            className={`${styles.article} ${index === 0 ? styles["first-article"] : ""}`}
          >
            <h2 className={styles.subtitle}>{event.title} {event.date !== "" && <span className={styles["post-date"]}>Evenement du <strong>{event.date}</strong></span>}</h2>
            <div className={styles.content}>
              <div className={styles["img-container"]}>
                <Image className={styles.img} src={event.img[0].src} alt={event.title} width={500} height={500} />
              </div>
              <div className={styles["text-container"]}>
                {event.date !== "" && <p className={styles["post-date"]}>Evenement du <strong>{event.date}</strong></p>}
                <p className={styles.postContent} dangerouslySetInnerHTML={{ __html: event.content }} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}