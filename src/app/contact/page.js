import { data } from "../../data";
import Wip from "../components/Wip";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles["contact-container"]}>
        <div className={styles["contact-email"]}>
          <a href={`mailto:${data[0].email}`}>{data[0].email}</a>
          <Wip />
        </div>
      </div>
    </div>
  );
};