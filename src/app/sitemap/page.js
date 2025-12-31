import styles from "./Sitemap.module.css";
import TransitionLink from "../components/TransitionLink";

const routes = [
  { 
    name: 'Accueil', 
    href: '/',
    anchors: [
      {
        name: 'Nos missions principales',
        id: 'main-missions'
      },
      {
        name: 'Nos convictions',
        id: 'our-convictions'
      },
      {
        name: 'Rejoignez-nous',
        id: 'join-us'
      }
    ]
  },
  { 
    name: 'Evenements', 
    href: '/events'
  },
  { 
    name: 'Actions et projets', 
    href: '/actionsAndProjects'
  },
  {
    name: 'Nos réalisations', 
    href: '/realizations'
  },
  { 
    name: 'A propos', 
    href: '/about',
    anchors: [
      {
        name: 'Qui nous sommes',
        id: 'who-we-are'
      },
      {
        name: 'Pourquoi nous agissons',
        id: 'why-we-act'
      },
      {
        name: 'Notre histoire',
        id: 'our-history'
      },
      {
        name: 'L’histoire de Cécile DOGO',
        id: 'cecile-dogo-story'
      },
      {
        name: 'Notre vision et nos valeurs',
        id: 'our-vision'
      }
    ]
  },
  {
    name: 'Contact', 
    href: '/contact'
  },
  {
    name: 'Plan de site', 
    href: '/sitemap'
  }
]
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