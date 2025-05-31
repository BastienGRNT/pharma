import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Leaf } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Leaf className="h-12 w-12 text-green-600" />
          <span className="text-3xl font-bold text-gray-900">Pharmacie Gaïa</span>
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page non trouvée</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/">
            <Home className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
        </Button>
      </div>
    </div>
  )
}
