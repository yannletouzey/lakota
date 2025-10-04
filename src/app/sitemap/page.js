import styles from "./Sitemap.module.css";
import { routes } from "../../data";
import TransitionLink from "../components/TransitionLink";

export default function Sitemap() {

  return (
    <div className={styles.sitemap}>
      <h1 className={styles.title}>Sitemap</h1>
      <ul className={styles['sitemap-list']}>
        {routes.map((route) => (
          <li key={route.href} className={styles["sitemap-item"]}>
            <TransitionLink props={{ href: route.href, text: route.name }} />
            {route.anchors && (
              <ul className={styles["anchors-list"]}>
                {route.anchors.map((anchor) => (
                  <li key={anchor.id}>
                    <TransitionLink props={{ href: `${route.href}#${anchor.id}`, text: anchor.name }} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};