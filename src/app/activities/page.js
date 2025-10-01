import Image from "next/image";
import styles from "./Activities.module.css";

const activities = [
  {
    img: "/img/activities/1.png",
    content: "Nous avons le plaisir d'offrir des vivres et non vivres pour les incarcérés de la prison civile."
  },
  {
    img: "/img/activities/2.png",
    content: "Ce fut une grande joie d'offrir des cadeaux pendant les fêtes de fin d'année aux enfants. Leurs parents ont été aussi par des vivres."
  },
  {
    img: "/img/activities/3.png",
    content: "Accompagner et encourager les initiatives de certains artistes en herbe pétri de talents dans des handicaps."
  },
  {
    img: "/img/activities/4.png",
    content: "Don de kit de salubrité dans les villages et campements de la région de Lakota."
  },
  {
    img: "/img/activities/5.png",
    content: "Don de vêtements dans les quartiers précaritaires aux personnes défavoriées, ce fut une très belle expérience de partage et de convivialité."
  },
  {
    img: "/img/activities/6.png",
    content: "L'éducation est la base du développement d'un pays et la jeunesse en est l'avenir, alors nous avons accompagné, par des dons de kit scolaires, des enfants dont les parents sont en situations difficiles."
  }
];

export default function Activities() {
  return (
    <div className={styles.activities}>
      <h1 className={styles.title}>Activités</h1>
      {activities.map((activity, index) => (
        <article 
          key={index} 
          className={`${styles.article} ${index === 0 ? styles["first-article"] : ""}`}
        >
          <div className={styles.content}>
            <div className={styles["img-container"]}>
              <Image className={styles.img} src={activity.img} alt="" width={500} height={500} />
            </div>
            <div className={styles["text-container"]}>
              <p className={styles.postContent}>{activity.content}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}