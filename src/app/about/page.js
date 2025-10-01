import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1 
        id="title-presentation" 
        className={styles.title} 
        aria-labelledby="titre-presentation"
      >
        Ensemble, faisons grandir l’espoir à <span>Lakota 🌱</span>
      </h1>
      <section className={styles.content}>
        <header>
          <h2
            id="association-title" 
            className={styles["association-title"]} 
            aria-labelledby="association-title"
          >
            Association Lakota Nouvelle Vision
          </h2>
        </header>
        <article id="who-we-are" className={styles.anchor}>
          <h3 id="presentation-title">Qui nous sommes</h3>
          <p>
            <strong>L’Association Lakota Nouvelle Vision</strong>, fondée par des femmes et des hommes originaires
            de Lakota, est née d’un rêve partagé : voir notre ville s’épanouir et offrir à chaque
            enfant, chaque femme et chaque famille une vie digne et pleine d’opportunités. 
            Depuis 2019, nous agissons en France et en Côte d’Ivoire pour mobiliser les énergies,
            renforcer la solidarité et initier des projets concrets au service de la communauté.
          </p>
        </article>

        <article aria-labelledby="actions-title" id="why-we-act" className={styles.anchor}>
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
      </section>
      <section className={styles.content}>
        <header>
          <h2 
            id="our-history" 
            className={`${styles["history-title"]} ${styles.anchor}`} 
            aria-labelledby="history-title"
          >
            Notre histoire
          </h2>
        </header>
        <article>
          <p>En référence à leurs expériences personnelles en tant que filles issues de familles modestes et ont traversées des épreuves difficiles, un groupe de femmes originaires du département de Lakota (dans la région du Loh Djiboua en Côte d’Ivoire) ont créé <strong>L'Association Lakota Nouvelle Vision</strong> (A-LNV) en France, le 18 septembre 2019, sous le N°W941016133, puis enregistrée en Côte d’Ivoire sous le récépissé N°3478/MIS/DGAT/DAG/SDVA.</p>
          <p>Le but visé est d’encadrer, d’orienter et d’assister les jeunes filles, et les personnes en situation de vulnérabilité.</p>
          <p>Ces femmes s’étant battues pour avoir une situation plus favorable, ont créé cette communauté de solidarité capable de mobiliser toutes leurs synergies et leurs énergies, partageant la même vision.</p>
          <p>Par la suite, plusieurs femmes de différentes origines nous ont rejoins dans ce noble combat.</p>
          <p>Cet engouement a fait naître <strong>L'Association Lakota Nouvelle Vision</strong> en France, notre association compte aujourd’hui plus de 200 membres à travers le monde et reste ouverte à de nouvelles adhésions.</p>
          <p>Toutes ces femmes sont des bénévoles dans la gestion de l’association.</p>
        </article>
      </section>
      <section className={`${styles.content} ${styles["history-cecile"]}`} aria-labelledby="histoire-cecile">
        <header>
          <h2 id="cecile-dogo-story" className={styles.anchor}>L’histoire de Cécile DOGO</h2>
        </header>

        <article>
          <p>
            Je suis <span className={styles.cecile}><strong>Cécile DOGO</strong></span>, et je souhaiterais, par cette occasion, vous raconter mon histoire et la raison de la création de <strong>l’Association Lakota Nouvelle Vision</strong>.
          </p>
          <p>
            Dans ma jeune enfance, j’ai traversé des épreuves difficiles qui m’ont profondément marquée. Malgré cela, j’ai trouvé la force de continuer à avancer.
            À l'âge de 15 ans, j’ai donné naissance à un magnifique enfant.
            C'était un moment à la fois effrayant et merveilleux pour une jeune mère.
            J’étais déterminée à offrir à mon enfant tout l'amour et le soutien dont elle avait besoin, même si moi-même j’en avais encore besoin.
          </p>
          <p>
            Délaissée, seule, devenue la risée de mes proches et de mon entourage, j’ai dû faire face à de nombreux défis en tant que mère adolescente.
            Mais j’ai trouvé le courage de les surmonter : j’ai travaillé deux fois plus que les jeunes filles de mon âge pour subvenir aux besoins de mon enfant.
          </p>
          <p>
            Je passais certaines nuits sans manger. De petits boulots en petits boulots, j’arrivais à peine à joindre les deux bouts. Malgré les difficultés, j’ai toujours gardé l'espoir et travaillé sans relâche pour offrir un avenir meilleur à mon enfant.
            Pour moi, les études étaient terminées, tout comme mon ambition de devenir cadre de ma région, une personne influente dans la société.
          </p>
          <p>
            Au fil des années, j’ai réussi à me construire, par la grâce de Dieu, une vie meilleure pour mon enfant et moi. Mon expérience difficile dans ma jeunesse m’a rendue plus forte et plus déterminée.
          </p>
          <p>
            Aujourd'hui, j’utilise ce vécu pour aider d'autres jeunes mères et jeunes filles qui traversent des situations similaires. 
            Entourée de personnes formidables et généreuses, nous avons créé <strong>l’AS Lakota Nouvelle Vision</strong> pour venir en aide à toutes ces jeunes filles et femmes délaissées, méprisées, sans qualifications ou orientations, et les aider à s'insérer dans le tissu social.
          </p>
          <p>
            Loin de leur famille à cause des études, ou parfois sans famille, ces jeunes filles et ces femmes sont des proies faciles pour bon nombre de prédateurs.
            Notre objectif est de créer des <strong>centres d’accueil, de formation, d’encadrement et d’insertion</strong> dans le tissu social, dans toutes les grandes régions et villes de la Côte d’Ivoire.
          </p>
        </article>
      </section>
    </div>
  );
};