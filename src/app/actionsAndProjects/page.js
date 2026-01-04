import styles from "./ActionsAndProjects.module.css";
import Image from "next/image";

export default function Events() {
  return (
    <div className={styles["actions-projects"]}>
      <h1 className={styles.title}>Actions et Projets</h1>
      <h2>Notre Projet Phare : Le Pensionnat de Jeunes Filles à Lakota</h2>
      <p>
        Notre objectif majeur est la construction, à <strong><span className="lakota">Lakota</span> (Côte d'Ivoire)</strong>, d'un centre d'accueil et de formation pour les jeunes filles et femmes en situation précaire.<br />
        Ce centre est conçu pour être un édifice porteur d'espoir, offrant un refuge sécurisé et des programmes de réinsertion.
      </p>
      <p>
        Lancement Officiel : Le lancement officiel des travaux de construction du premier centre a eu lieu le 18 janvier 2025.
      </p>
      <p>
        Objectifs du Centre : Assurer l'encadrement, l'orientation et l'assistance des jeunes filles victimes de violences ou sans qualification, afin de faciliter leur insertion sociale.
      </p>
      <p>
        Nos Domaines d'Intervention
        Nous agissons concrètement dans le monde pour soutenir les plus vulnérables.
      </p>
      <p>
        Éducation et Formation : Alphabétisation, soutien scolaire, initiation à la peinture, et campagnes de sensibilisation pour l'hygiène menstruelle et l'éducation des jeunes filles.
      </p>
      <p>
        Santé et Bien-être : Organisation du Fitness de la Solidarité Internationale Féminine (FSIFEM) pour la lutte contre le cancer du sein, et distribution de matériel médical.
      </p>
      <p>
        Protection Sociale et Environnementale : Campagnes de sensibilisation aux Violences Basées sur le Genre (VBG) et création d'infrastructures d'accès à l'eau potable (mini-forages).
      </p>
      <p>
        Solidarité Internationale : Aide et soutien directs aux familles les plus démunies en <strong>France</strong> et en <strong>Afrique</strong>.
      </p>
    </div>
  );
}