import styles from "./Sitemap.module.css";
import { routes } from "../../data";
import Wip from "../components/Wip";

export default function Sitemap() {
  return (
    <div className={styles.sitemap}>
      <h1 className={styles.title}>Sitemap</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.href}>
            <a href={route.href}>{route.name}</a>
          </li>
        ))}
      </ul>
      <Wip />
    </div>
  );
};