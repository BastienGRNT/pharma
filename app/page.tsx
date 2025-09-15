import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Pill,
  Heart,
  ShoppingBag,
  CheckCircle,
  Leaf,
  Stethoscope,
} from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"
import Image from 'next/image';
import image1 from './assets/Image1.png';
import Head from "next/head"


export const metadata: Metadata = {
  title: "Pharmacie Gaïa - Quartier Flaubert, Rouen | Ouverture prévue 4ème trimestre 2025",
  description:
    "Votre nouvelle pharmacie dans l'éco-quartier Flaubert à Rouen. Médicaments, conseils personnalisés, parapharmacie. Ouverture prévue septembre 2025.",
}

const pharmacyData = {
  name: "Pharmacie Gaïa",
  openingDate: "4ème trimestre 2025",
  phone: "06 60 62 03 09",
  email: "cg@pharmagaia.com",
  hours: "Du lundi au vendredi : 8h30-19h30 | Samedi : 9h-19h",
  address: "13 rue Berthe Morisot, 76100 Rouen",
  mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.5427102915646!2d1.064937476782433!3d49.438027659740946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0de064eec976b%3A0xdffbb2877e9e3976!2s13%20Rue%20Berthe%20Morisot%2C%2076100%20Rouen!5e1!3m2!1sfr!2sfr!4v1742569603406!5m2!1sfr!2sfr",
}

export default function PharmacieGaia() {
  return (
    <>

    <Head>
        <title>Pharmacie Gaïa – Pharmacie à Rouen, Éco-quartier Flaubert</title>
        <meta
          name="description"
          content="Pharmacie Gaïa, votre pharmacie de quartier à Rouen, dans l'éco-quartier Flaubert."
        />
        <meta
          name="keywords"
          content="Pharmacie Rouen, Éco-quartier Flaubert, Santé Rouen, Pharmacie de quartier"
        />
        <link rel="canonical" href="https://gaia-sante-rouen.fr/" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="fr" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Pharmacy",
              "name": "Pharmacie Gaïa",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Adresse ici",
                "addressLocality": "Rouen",
                "postalCode": "76000",
                "addressCountry": "FR"
              },
              "url": "https://pharmagaia.com"
            }),
          }}
        />
      </Head>

      <StructuredData type="pharmacy" />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
        {/* Navigation */}
        <nav
          className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
          role="navigation"
          aria-label="Navigation principale"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-600" aria-hidden="true" />
                <span className="text-xl font-bold text-gray-900">Pharmacie Gaïa</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a
                  href="#presentation"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  aria-label="Aller à la section présentation"
                >
                  Présentation
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  aria-label="Aller à la section services"
                >
                  Services
                </a>
                <a
                  href="#localisation"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  aria-label="Aller à la section localisation"
                >
                  Localisation
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  aria-label="Aller à la section contact"
                >
                  Contact
                </a>
              </div>
              <Button className="bg-green-600 hover:bg-green-700" aria-label="Nous contacter par téléphone" asChild>
                <a href="#contact">
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                  Nous contacter
                </a>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8" role="banner">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
                <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                Ouverture le {pharmacyData.openingDate}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
                Pharmacie
                <span className="block text-green-600">Gaïa</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Votre nouvelle pharmacie de quartier au cœur de l'éco-quartier Flaubert à Rouen
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
                  aria-label="Découvrir nos services"
                  asChild
                >
                  <a href="#services">
                    <Pill className="h-5 w-5 mr-2" aria-hidden="true" />
                    Découvrir nos services
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-green-600 text-green-700"
                  aria-label="Localisation Quartier Flaubert, Rouen"
                  asChild
                >
                  <a href="#localisation">
                    <MapPin className="h-5 w-5 mr-2" aria-hidden="true" />
                    Nous trouver
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Presentation Section */}
        <section id="presentation" className="py-16 bg-white" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Bienvenue dans votre nouvelle pharmacie</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La Pharmacie Gaïa vous accueille dans un espace moderne et convivial pour tous vos besoins de santé.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Notre engagement</h3>
                <p className="text-gray-600">
                  Nous vous proposons des conseils personnalisés et des produits de qualité dans un cadre accueillant au
                  cœur du quartier Flaubert.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                    <span className="text-gray-700">Conseils personnalisés</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                    <span className="text-gray-700">Produits de qualité</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                    <span className="text-gray-700">Équipe à votre écoute</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                    <span className="text-gray-700">Espace moderne</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                {/* Image principale du cabinet - Vue extérieure */}
                <div className="relative h-80 w-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <Image src={image1} alt="Image vue éxtèrieur" className="mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
              <p className="text-xl text-gray-600">Tous les services essentiels pour votre santé et votre bien-être</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Pill className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <CardTitle>Médicaments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Dispensation de médicaments sur ordonnance avec conseils personnalisés.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-teal-600" aria-hidden="true" />
                  </div>
                  <CardTitle>Parapharmacie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Cosmétiques, soins du corps, compléments alimentaires et produits de bien-être.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Stethoscope className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                  </div>
                  <CardTitle>Matériel médical</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Vente et location de matériel médical pour le maintien à domicile.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <CardTitle>Conseils santé</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Conseils personnalisés en matière de santé, bien-être et prévention.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Localisation Section */}
        <section id="localisation" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nous Trouver</h2>
              <p className="text-xl text-gray-600">Idéalement située dans l'éco-quartier Flaubert à Rouen</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Adresse</h3>
                    <p className="text-gray-600">{pharmacyData.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Accès</h3>
                    <p className="text-gray-600">
                      Parking à proximité et Teor: Ligne T5 prochainement
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-green-600 hover:bg-green-700" asChild>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        pharmacyData.address,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-5 w-5 mr-2" aria-hidden="true" />
                      Itinéraire
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-96">
                <iframe
                  src={pharmacyData.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de localisation de la pharmacie"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
              <p className="text-xl text-gray-600">
                Nous sommes à votre disposition pour répondre à toutes vos questions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-green-600" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Téléphone</h3>
                          <a href="tel:+33660620309" className="text-gray-600 hover:text-green-600 transition-colors">
                            {pharmacyData.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-teal-600" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Email</h3>
                          <a
                            href="mailto:contact@pharmaciegaia.com"
                            className="text-gray-600 hover:text-teal-600 transition-colors"
                          >
                            {pharmacyData.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Horaires</h3>
                          <p className="text-gray-600">{pharmacyData.hours}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Ouverture prochaine</h3>
                      <p className="text-gray-600 mb-6">
                        La Pharmacie Gaïa ouvrira ses portes le {pharmacyData.openingDate}. Nous avons hâte de vous
                        accueillir !
                      </p>
                      <div className="space-y-3">
                        <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                          <a href={`tel:${pharmacyData.phone.replace(/\s/g, "")}`} aria-label="Appeler la pharmacie">
                            <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                            Appeler maintenant
                          </a>
                        </Button>
                        <Button variant="outline" className="w-full border-green-600 text-green-700" asChild>
                          <a href={`mailto:${pharmacyData.email}`} aria-label="Envoyer un email">
                            <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                            Envoyer un email
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" aria-hidden="true" />
                <span className="text-2xl font-bold">Pharmacie Gaïa</span>
              </div>
              <p className="text-gray-400 mb-4">Votre pharmacie de quartier au cœur de l'éco-quartier Flaubert</p>
              <div className="flex justify-center space-x-6 text-sm text-gray-400">
                <span>Ouverture {pharmacyData.openingDate}</span>
                <span>•</span>
                <span>Quartier Flaubert, Rouen</span>
                <span>•</span>
                <span>Conseils personnalisés</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
