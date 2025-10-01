export const data = [
  {
    email: "as.lakotanouvellevision@outlook.fr"
  }
]

export const routes = [
  { 
    type: 'Header',
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
    type: 'Header',
    name: 'Evenements', 
    href: '/events'
  },
  { 
    type: 'Footer',
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
      }
    ]
  },
  {
    type: 'Footer',
    name: 'Contact', 
    href: '/contact'
  },
  { 
    type: 'Footer',
    name: 'Plan du site', 
    href: '/sitemap',
  },
  // {
  //   name: 'Activités',
  //   href: '/activities'
  // }
]

export const events = [
  {
    id: 1,
    title: "Célebration de la solidarité",
    content: "Rejoignez-nous pour la Célébration de la solidarité Créteil 2025 ! 🤝 Venez passer un moment de partage et de convivialité le samedi 22 novembre à partir de 10h, au 21 rue Charles Beuvin. ​Au programme : exposition, sensibilisation, coaching, table ronde, et une soirée animée ! Ne manquez pas le dîner solidaire (sur inscription) à l'Espace Jean Ferrat. ​Pour plus d'informations, contactez le 06 60 77 73 74 +2250709440127",
    date: "23 septembre 2025",
    img: [
      {
        src: "/img/blog/230925.jpg",
        alt: "Image de l'evenement de la célebration de la solidarité du 22 novembre 2025 à Créteil"
      }
    ]
  },
  {
    id: 2,
    title: "Les écrans en famille",
    content: "Les écrans font partie de notre quotidien, mais comment les aborder sereinement avec nos enfants ? 🤔 ​L'association Lakota Nouvelle Vision vous invite à un atelier pour répondre à toutes vos questions et vous donner des conseils pratiques pour un bon usage des écrans en famille. Un rendez-vous enrichissant pour tous les parents 👨‍👩‍👧‍👦 ​🗓️ Date : 8 octobre 2025 ⏰ Heure : 14h à 16h 📍 Lieu : 1 Rue Albert Doyen, 94000 Créteil 📞 Contact inscription : 06 60 77 73 74",
    date: "13 septembre 2025",
    img: [
      {
        src: "/img/blog/130925.jpg",
        alt: "Image"
      }
    ]
  },
  {
    id: 3,
    title: "La rentrée des enfants !!!",
    content: "✨ C'est la rentrée ! ✨ ​Toute notre équipe souhaite une excellente rentrée scolaire à tous les élèves. ​Notre association a pour mission de soutenir les jeunes filles en situation de précarité. En ce jour si particulier, nous avons une pensée spéciale pour elles. Que cette année soit remplie d'épanouissement, de savoir et de joie d'apprendre. ​Bon mois de septembre à tous !",
    date: "01 septembre 2025",
    img: [
      {
        src: "/img/blog/010925.jpg",
        alt: "Image de l'evenement de la rentrée scolaire du 01 septembre 2025"
      }
    ]
  },
]