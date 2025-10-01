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
        <article>
          <h3 id="presentation-title">Qui nous sommes</h3>
          <p>
            <strong>L’Association Lakota Nouvelle Vision</strong>, fondée par des femmes et des hommes originaires
            de Lakota, est née d’un rêve partagé : voir notre ville s’épanouir et offrir à chaque
            enfant, chaque femme et chaque famille une vie digne et pleine d’opportunités. 
            Depuis 2019, nous agissons en France et en Côte d’Ivoire pour mobiliser les énergies,
            renforcer la solidarité et initier des projets concrets au service de la communauté.
          </p>
        </article>

        <article aria-labelledby="beliefs-title">
          <h3 id="beliefs-title">Nos convictions</h3>
          <p>
            Nous croyons profondément que le changement durable repose sur l’engagement collectif. Trois valeurs guident chacune de nos actions :
          </p>
          <ul>
            <li>✨ L’éducation change des vies et ouvre l’avenir</li>
            <li>✨ La solidarité sauve des familles et renforce le lien social</li>
            <li>✨ L’action collective transforme une communauté entière</li>
          </ul>
        </article>

        <article aria-labelledby="actions-title">
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

        <aside aria-labelledby="join-title">
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
      <section className={`${styles.content} ${styles["history-cecile"]}`} aria-labelledby="histoire-cecile">
        <header>
          <h2 id="history-cecile">L’histoire de Cécile DOGO</h2>
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