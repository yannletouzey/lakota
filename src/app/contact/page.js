import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>NOUS SOUTENIR / CONTACT</h1>
      <h2 className={styles.subtitle}>FAIRE UN DON ET DEVENIR MÉCÈNE</h2>
      <p className={styles.paragraph}>
        Nous avons besoin de vous pour bâtir cet édifice merveilleux et continuer à semer l'espoir.<br />
        Votre soutien est essentiel pour la réalisation effective de tous les travaux de construction du centre.<br />
        Nous sommes ouverts à la discussion pour des partenariats.<br />
        Nous disposons d'un "Dossier de Mécénat" et de "Demande de Subvention".
      </p>
      <a className="donation-button" href="https://www.helloasso.com/associations/association-lakota-nouvelle-vision/formulaires/4" target="_blank" rel="noopener noreferrer">Faire un don</a>
      <div className={styles["cta-buttons"]}>
      </div>
      <h2 className={styles.subtitle}>DEVENONS PARTENAIRES</h2>
      <h3 className={styles["subtitle-h3"]}>Contactez-Nous</h3>
      <address className={styles.address} itemScope>
        <span className={styles.item} itemProp="name"><strong>Présidente : <span className="cecile">Cécile DOGO</span></strong></span><br />
        <span className={styles.item} itemProp="streetAddress">36 rue du général Lacharrière</span><br />
        <span className={styles.item} itemProp="streetAddress">Bâtiment D2</span><br />
        <span className={styles.item} itemProp="postalCode">94000</span> <span className={styles.item} itemProp="addressLocality">Créteil</span>, Val-de-Marne <span className={styles.item} itemProp="addressCountry">France</span><br /> 
      </address>
      <ul className={styles["contact-list"]} itemScope>
        <li>
          <span className={styles.item} itemProp="phone">Téléphone : +33 6 60 77 73 74</span>
        </li>
        <li>
          <span className={styles.item}>
            Email : <a href="mailto:as.lakotanouvellevision@outlook.fr" itemProp="email">as.lakotanouvellevision@outlook.fr</a>
          </span>
        </li>
      </ul>
    </div>
  );
};