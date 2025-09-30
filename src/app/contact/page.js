import { data } from "../../data";
import Wip from "../components/Wip";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.countries}>

        <div className={styles.country}>
          <h2>Côte d’Ivoire</h2>
          <address itemScope>
            <span className={styles.item} itemProp="name"><strong>Siege social: Cocody Angre</strong></span><br />
            <span className={styles.item} itemProp="streetAddress">Groupement 4000</span><br />
            <span className={styles.item} itemProp="streetAddress">Villa 621 01</span><br />
            <span className={styles.item} itemProp="postalCode">BP 13143</span>
            <span className={styles.item} itemProp="addressLocality">Abidjan 01</span><br />
            <span className={styles.item} itemProp="addressCountry">Cote d’Ivoire</span><br />
            <ul>
              <li><span className={styles.item}>Tél : </span><a href="(+225) 07 59 66 58 97" itemProp="telephone">(+225) 07 59 66 58 97</a></li>
              <li><span className={styles.item}>Tél : </span><a href="(+225) 05 00 54 67 67" itemProp="telephone">(+225) 05 00 54 67 67</a></li>
              <li><span className={styles.item}>Tél : </span><a href="07 48 95 60 44" itemProp="telephone">07 48 95 60 44</a></li>
            </ul>
            Email : <a href="mailto:as.lakotanouvellevision@outlook.fr" itemProp="email">as.lakotanouvellevision@outlook.fr</a>
          </address>
          <address itemScope>
            <span className={styles.item} itemProp="streetAddress">Quartier DOGOHIRI-RESIDENTIEL à 100 m du collège LOTUS et du carrefour APOLOSS</span><br />
            <span className={styles.item} itemProp="addressLocality">Lakota</span><br />
            <span className={styles.item} itemProp="addressCountry">Cote d’Ivoire</span><br />
            <ul>
              <li><span className={styles.item}>Tél : </span>+225 07 48 95 60 44</li>
              <li><span className={styles.item}>Tél : </span>+225 05 45 60 35 44</li>
              <li><span className={styles.item}>Tél : </span>+225 07 48 27 47 38</li>
              <li><span className={styles.item}>Tél : </span>+225 01 52 99 60 92</li>
            </ul>
            Email : <a href="mailto:as.lakotanouvellevision@outlook.fr" itemProp="email">as.lakotanouvellevision@outlook.fr</a>
          </address>
        </div>

        <div className={styles.country}>
          <h2>France</h2>
          <address itemScope>
            <span className={styles.item} itemProp="name"><strong>Association Lakota Nouvelle Vision</strong></span><br />
            <span className={styles.item} itemProp="streetAddress">36 rue du général Lacharrière Bâtiment D2</span><br />
            <span className={styles.item} itemProp="postalCode">94000</span> <span className={styles.item} itemProp="addressLocality">Créteil (Val-de-Marne)</span><br />
            <span className={styles.item} itemProp="addressCountry">France</span><br />
            Tél : +33 6 60 77 73 74<br />
            Email : <a href="mailto:as.lakotanouvellevision@outlook.fr">as.lakotanouvellevision@outlook.fr</a>
          </address>
        </div>
      </div>
    </div>
  );
};
{/* <address itemscope itemtype="https://schema.org/Organization">
  <span itemProp="name">Association Lakota Nouvelle Vision</span><br>
  <span itemProp="streetAddress">123 Rue des Solidarités</span><br>
  <span itemProp="addressLocality">Lakota</span>, 
  <span itemProp="postalCode">40100</span><br>
  <span itemProp="addressCountry">Côte d'Ivoire</span><br>
  Tél : <a href="tel:+2250123456789" itemProp="telephone">+225 01 23 45 67 89</a><br>
  Email : <a href="mailto:contact@lakotanv.org" itemProp="email">contact@lakotanv.org</a>
</address> */}