import type React from "react"
import type {Metadata, Viewport} from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
}

export const metadata: Metadata = {
  title: "Pharmacie Gaïa Rouen - Quartier Flaubert | Ouverture prévue le 2 février 2026",
  description:
    "Pharmacie Gaïa : votre nouvelle pharmacie dans l'éco-quartier Flaubert à Rouen. Médicaments, parapharmacie, conseils personnalisés. Ouverture prévue le 2 février 2026. Rive gauche, proche TEOR.",
  keywords: [
    "pharmacie Rouen",
    "pharmacie Flaubert",
    "pharmacie quartier Flaubert",
    "pharmacie rive gauche Rouen",
    "médicaments Rouen",
    "parapharmacie Rouen",
    "pharmacie Gaïa",
    "pharmacie éco-quartier",
    "pharmacie TEOR Rouen",
    "conseils pharmaceutiques Rouen",
    "matériel médical Rouen",
    "pharmacie moderne Rouen",
    "pharmacie 76000",
    "pharmacie Seine-Maritime",
    "pharmacie Normandie",
    "ordonnance Rouen",
    "compléments alimentaires Rouen",
    "cosmétiques pharmacie Rouen",
  ],
  authors: [{ name: "Pharmacie Gaïa" }],
  creator: "Pharmacie Gaïa",
  publisher: "Pharmacie Gaïa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pharmagaia.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    title: "Pharmacie Gaïa Rouen - Quartier Flaubert | Ouverture le 2 février 2026",
    description:
      "Votre nouvelle pharmacie dans l'éco-quartier Flaubert à Rouen. Médicaments, parapharmacie, conseils personnalisés. Ouverture prévue le 2 février 2026.",
    url: "https://pharmagaia.com",
    siteName: "Pharmacie Gaïa",
    locale: "fr_FR",
    type: "website",
    countryName: "France",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmacie Gaïa Rouen - Quartier Flaubert | Ouverture le 2 février 2026",
    description:
      "Votre nouvelle pharmacie dans l'éco-quartier Flaubert à Rouen. Médicaments, parapharmacie, conseils personnalisés.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "XUzeHaoejHArrS1FEVQ492sl45bEsL5yLFWQ6sX92g",
  },
  category: "health",
  classification: "Pharmacy",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#16a34a" },
    { media: "(prefers-color-scheme: dark)", color: "#16a34a" },
  ],
  appleWebApp: {
    capable: true,
    title: "Pharmacie Gaïa",
    statusBarStyle: "default",
  },
  applicationName: "Pharmacie Gaïa",
  generator: "Next.js",
  abstract:
    "Pharmacie Gaïa - Votre nouvelle pharmacie dans l'éco-quartier Flaubert à Rouen. Services pharmaceutiques complets, conseils personnalisés.",
  other: {
    "google-site-verification": "XUzeHaoejHArrS1FEVQ492sl45bEsL5yLFWQ6sX92g",
    "msvalidate.01": "your-bing-verification-code",
    "yandex-verification": "your-yandex-verification-code",
    "facebook-domain-verification": "your-facebook-verification-code",
    "norton-safeweb-site-verification": "your-norton-verification-code",
    "geo.region": "FR-76",
    "geo.placename": "Rouen",
    "geo.position": "49.4431;1.0993",
    ICBM: "49.4431, 1.0993",
    "DC.title": "Pharmacie Gaïa Rouen - Quartier Flaubert",
    "DC.creator": "Pharmacie Gaïa",
    "DC.subject": "Pharmacie, Santé, Médicaments, Rouen",
    "DC.description":
      "Pharmacie Gaïa : votre nouvelle pharmacie dans l'éco-quartier Flaubert à Rouen. Services pharmaceutiques complets.",
    "DC.publisher": "Pharmacie Gaïa",
    "DC.contributor": "Équipe Pharmacie Gaïa",
    "DC.date": "2025-09-01",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://pharmacie-gaia.fr",
    "DC.language": "fr-FR",
    "DC.coverage": "Rouen, France",
    "DC.rights": "© 2025 Pharmacie Gaïa",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Pharmacy",
      "@id": "https://pharmagaia.com",
      name: "Pharmacie Gaia Santé Rouen",
      description:
        "Pharmacie située dans l’éco-quartier Flaubert à Rouen rive gauche. Médicaments, conseils pharmaceutiques et livraison à domicile.",
      url: "https://pharmagaia.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "13 rue Berthe Morisot",
        addressLocality: "Rouen",
        postalCode: "76100",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.4431,
        longitude: 1.0993,
      },
      openingHours: ["Mo-Fr 08:30-19:30", "Sa 08:30-19:00"],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-FR" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" title="Pharmacie Gaïa - Actualités" href="/rss.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pharmacie Gaïa" />
        <meta name="application-name" content="Pharmacie Gaïa" />
        <meta name="msapplication-tooltip" content="Pharmacie Gaïa - Rouen" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="screen-orientation" content="portrait" />
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />
        <meta name="nightmode" content="enable/disable" />
        <meta name="layoutmode" content="fitscreen/standard" />
        <meta name="imagemode" content="force" />
        <meta name="screen-orientation" content="portrait" />
        <meta property="business:contact_data:street_address" content="Éco-quartier Flaubert" />
        <meta property="business:contact_data:locality" content="Rouen" />
        <meta property="business:contact_data:region" content="Normandie" />
        <meta property="business:contact_data:postal_code" content="76000" />
        <meta property="business:contact_data:country_name" content="France" />
        <meta property="place:location:latitude" content="49.4431" />
        <meta property="place:location:longitude" content="1.0993" />
        <meta name="geo.region" content="FR-76" />
        <meta name="geo.placename" content="Rouen" />
        <meta name="geo.position" content="49.4431;1.0993" />
        <meta name="ICBM" content="49.4431, 1.0993" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="expires" content="never" />
        <meta name="pragma" content="no-cache" />
        <meta name="cache-control" content="no-cache" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Pharmacie Gaïa",
              url: "https://pharmagaia.com",
              potentialAction: {
                "@type": "SearchAction",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className} itemScope itemType="https://schema.org/WebPage">
        {children}
      </body>
    </html>
  )
}
