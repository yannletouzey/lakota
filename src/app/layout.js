import { Header, Footer } from "./components";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export const metadata = {
  title: "Association lakota | Éducation et bien-être des jeunes filles en Côte d’Ivoire",
  description: "Association en Côte d’Ivoire engagée pour l’éducation et le bien-être des jeunes filles, afin de promouvoir l’égalité et un avenir meilleur.",
  keywords: [
    "éducation jeunes filles Côte d’Ivoire",
    "bien-être filles Afrique",
    "égalité des genres",
    "ONG CÔte d’Ivoire",
    "soutien scolarisation",
    "droits des enfants",
  ],
  openGraph: {
    title: "Association Lakota | Éducation et bien-être des jeunes filles",
    description: "Nous militons en Côte d’Ivoire pour l’accès à l’éducation, la protection et l’épanouissement des jeunes filles.",
    url: "https://lakota.vercel.app/",
    siteName: "Association lakota nouvelle vision",
    images: [
      {
        url: "https://lakota.vercel.app/main.jpg",
        width: 1200,
        height: 630,
        alt: "Association pour l’éducation et le bien-être des jeunes filles en Côte d’Ivoire",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Association Lakota | Éducation et bien-être des jeunes filles",
    description: "Association ivoirienne dédiée à l’éducation et au bien-être des jeunes filles, pour construire une société plus juste et inclusive.",
    images: ["https://lakota.vercel.app/main.jpg"],
  },
  icons: {
    icon: 'https://lakota.vercel.app/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="fr">
        <body>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
