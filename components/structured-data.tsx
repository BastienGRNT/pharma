interface StructuredDataProps {
  type?: "pharmacy" | "medical"
}

export function StructuredData({ type = "pharmacy" }: StructuredDataProps) {
  const pharmacyData = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "@id": "https://pharmacie-gaia.fr/#pharmacy",
    name: "Pharmacie Gaïa",
    alternateName: ["Pharmacie Gaia", "Gaia Pharmacy"],
    description:
      "Pharmacie moderne dans l'éco-quartier Flaubert à Rouen. Dispensation de médicaments, parapharmacie, matériel médical, conseils pharmaceutiques personnalisés. Ouverture septembre 2025.",
    url: "https://pharmacie-gaia.fr",
    sameAs: [
      "https://www.facebook.com/pharmaciegaia",
      "https://www.instagram.com/pharmaciegaia",
      "https://www.linkedin.com/company/pharmacie-gaia",
      "https://www.google.com/maps/place/Pharmacie+Gaia",
    ],
    logo: {
      "@type": "ImageObject",
      url: "https://pharmacie-gaia.fr/logo.png",
      width: 512,
      height: 512,
    },
    image: [
      {
        "@type": "ImageObject",
        url: "https://pharmacie-gaia.fr/images/pharmacy-exterior.jpg",
        width: 1200,
        height: 800,
        caption: "Façade de la Pharmacie Gaïa dans le quartier Flaubert",
      },
      {
        "@type": "ImageObject",
        url: "https://pharmacie-gaia.fr/images/pharmacy-interior.jpg",
        width: 1200,
        height: 800,
        caption: "Intérieur moderne de la Pharmacie Gaïa",
      },
    ],
    telephone: "+33235000000",
    email: "contact@pharmaciegaia.com",
    faxNumber: "+33235000001",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Éco-quartier Flaubert",
      addressLocality: "Rouen",
      addressRegion: "Normandie",
      postalCode: "76000",
      addressCountry: "FR",
      name: "Pharmacie Gaïa",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.4431,
      longitude: 1.0993,
      elevation: "10m",
    },
    hasMap: "https://www.google.com/maps/place/Quartier+Flaubert,+76000+Rouen",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "19:30",
        validFrom: "2025-09-01",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "19:00",
        validFrom: "2025-09-01",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00",
        validFrom: "2025-09-01",
      },
    ],
    specialOpeningHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        opens: "00:00",
        closes: "00:00",
        validFrom: "2025-12-25",
        validThrough: "2025-12-25",
        description: "Fermé le jour de Noël",
      },
      {
        "@type": "OpeningHoursSpecification",
        opens: "00:00",
        closes: "00:00",
        validFrom: "2025-01-01",
        validThrough: "2025-01-01",
        description: "Fermé le jour de l'An",
      },
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Carte Vitale", "Mutuelle"],
    foundingDate: "2025-09-01",
    slogan: "Votre santé, notre priorité",
    keywords: [
      "pharmacie",
      "médicaments",
      "parapharmacie",
      "conseils santé",
      "Rouen",
      "Flaubert",
      "ordonnance",
      "matériel médical",
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 49.4431,
        longitude: 1.0993,
      },
      geoRadius: "10000",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Rouen",
        sameAs: "https://fr.wikipedia.org/wiki/Rouen",
      },
      {
        "@type": "AdministrativeArea",
        name: "Seine-Maritime",
        sameAs: "https://fr.wikipedia.org/wiki/Seine-Maritime",
      },
      {
        "@type": "AdministrativeArea",
        name: "Normandie",
        sameAs: "https://fr.wikipedia.org/wiki/Normandie",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Pharmacie Gaïa",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dispensation de médicaments",
            description: "Délivrance de médicaments sur ordonnance avec conseils personnalisés",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Produits de parapharmacie",
            description: "Cosmétiques, compléments alimentaires, soins du corps",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Matériel médical",
            description: "Vente et location de matériel médical pour le maintien à domicile",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conseils pharmaceutiques",
            description: "Conseils personnalisés en matière de santé et bien-être",
          },
        },
      ],
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33235000000",
        contactType: "customer service",
        email: "contact@pharmaciegaia.com",
        availableLanguage: ["French"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:30",
          closes: "19:30",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+33235000000",
        contactType: "emergency",
        availableLanguage: ["French"],
        description: "Service de garde pharmaceutique",
      },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Dr. Claire Martin",
        jobTitle: "Pharmacienne titulaire",
        worksFor: {
          "@type": "Pharmacy",
          name: "Pharmacie Gaïa",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Docteur en Pharmacie",
        },
      },
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Accès PMR",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Climatisation",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Accès TEOR",
        value: true,
      },
    ],
    isAccessibleForFree: true,
    smokingAllowed: false,
    publicAccess: true,
    branchCode: "76000-GAIA-001",
    vatID: "FR00000000000",
    duns: "000000000",
    globalLocationNumber: "0000000000000",
    isicV4: "4773",
    naics: "446110",
    taxID: "00000000000",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5.0,
      reviewCount: 1,
      bestRating: 5,
      worstRating: 1,
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: 5,
          bestRating: 5,
        },
        author: {
          "@type": "Person",
          name: "Client satisfait",
        },
        reviewBody: "Excellente pharmacie moderne avec un personnel très professionnel et à l'écoute.",
        datePublished: "2025-09-15",
      },
    ],
    potentialAction: [
      {
        "@type": "SearchAction",
        target: "https://pharmacie-gaia.fr/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "ReserveAction",
        target: "https://pharmacie-gaia.fr/reservation",
        object: {
          "@type": "Service",
          name: "Réservation de médicaments",
        },
      },
    ],
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://pharmacie-gaia.fr/#organization",
    name: "Pharmacie Gaïa",
    legalName: "Pharmacie Gaïa SARL",
    url: "https://pharmacie-gaia.fr",
    logo: {
      "@type": "ImageObject",
      url: "https://pharmacie-gaia.fr/logo.png",
      width: 512,
      height: 512,
    },
    foundingDate: "2025-09-01",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rouen",
        addressCountry: "FR",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33235000000",
      contactType: "customer service",
      email: "contact@pharmaciegaia.com",
      availableLanguage: "French",
    },
    sameAs: [
      "https://www.facebook.com/pharmaciegaia",
      "https://www.instagram.com/pharmaciegaia",
      "https://www.linkedin.com/company/pharmacie-gaia",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Éco-quartier Flaubert",
      addressLocality: "Rouen",
      addressRegion: "Normandie",
      postalCode: "76000",
      addressCountry: "FR",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 4,
    },
    knowsAbout: [
      "Pharmacie",
      "Médicaments",
      "Parapharmacie",
      "Conseils santé",
      "Matériel médical",
      "Aromathérapie",
      "Phytothérapie",
      "Homéopathie",
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Ordre National des Pharmaciens",
        url: "http://www.ordre.pharmacien.fr/",
      },
      {
        "@type": "Organization",
        name: "Syndicat des Pharmaciens de Seine-Maritime",
      },
    ],
    award: ["Certification ISO 9001", "Label Qualité Pharmacie"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Autorisation d'ouverture de pharmacie",
        recognizedBy: {
          "@type": "Organization",
          name: "ARS Normandie",
        },
      },
    ],
  }

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pharmacie-gaia.fr/#localbusiness",
    name: "Pharmacie Gaïa",
    image: {
      "@type": "ImageObject",
      url: "https://pharmacie-gaia.fr/images/pharmacy-exterior.jpg",
      width: 1200,
      height: 800,
    },
    description: "Pharmacie moderne dans l'éco-quartier Flaubert à Rouen",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Éco-quartier Flaubert",
      addressLocality: "Rouen",
      addressRegion: "Normandie",
      postalCode: "76000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.4431,
      longitude: 1.0993,
    },
    url: "https://pharmacie-gaia.fr",
    telephone: "+33235000000",
    email: "contact@pharmaciegaia.com",
    priceRange: "€€",
    openingHours: ["Mo-Fr 08:30-19:30", "Sa 09:00-19:00"],
    paymentAccepted: ["Cash", "Credit Card", "Carte Vitale"],
    currenciesAccepted: "EUR",
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://pharmacie-gaia.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pharmacies Rouen",
        item: "https://pharmacie-gaia.fr/pharmacies-rouen",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pharmacie Gaïa",
        item: "https://pharmacie-gaia.fr",
      },
    ],
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quand ouvre la Pharmacie Gaïa ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La Pharmacie Gaïa ouvrira ses portes le 1er septembre 2025 dans l'éco-quartier Flaubert à Rouen.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les horaires de la Pharmacie Gaïa ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Du lundi au vendredi de 8h30 à 19h30, et le samedi de 9h à 19h. Fermé le dimanche.",
        },
      },
      {
        "@type": "Question",
        name: "Où se trouve la Pharmacie Gaïa ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La Pharmacie Gaïa est située dans l'éco-quartier Flaubert, rive gauche à Rouen, facilement accessible par la future ligne TEOR T5.",
        },
      },
      {
        "@type": "Question",
        name: "Quels services propose la Pharmacie Gaïa ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous proposons la dispensation de médicaments, des produits de parapharmacie, du matériel médical, et des conseils pharmaceutiques personnalisés.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacyData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    </>
  )
}
