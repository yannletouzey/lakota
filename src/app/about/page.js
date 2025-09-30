import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.content} aria-labelledby="association-title">
      <h1 id="association-title">Ensemble, faisons grandir l’espoir à Lakota 🌱</h1>

      <article aria-labelledby="presentation-title">
        <h3 id="presentation-title">Qui nous sommes</h3>
        <p>
          L’Association Lakota Nouvelle Vision, fondée par des femmes et des hommes originaires
          de Lakota, est née d’un rêve partagé : voir notre ville s’épanouir et offrir à chaque
          enfant, chaque femme et chaque famille une vie digne et pleine d’opportunités. 
          Depuis 2019, nous agissons en France et en Côte d’Ivoire pour mobiliser les énergies,
          renforcer la solidarité et initier des projets concrets au service de la communauté.
        </p>
      </article>

      <section aria-labelledby="beliefs-title">
        <h3 id="beliefs-title">Nos convictions</h3>
        <p>
          Nous croyons profondément que le changement durable repose sur l’engagement collectif.
          Trois valeurs guident chacune de nos actions :
        </p>
        <ul>
          <li>✨ L’éducation change des vies et ouvre l’avenir</li>
          <li>✨ La solidarité sauve des familles et renforce le lien social</li>
          <li>✨ L’action collective transforme une communauté entière</li>
        </ul>
      </section>

      <section aria-labelledby="actions-title">
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
      </section>

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
    </div>
  );
};