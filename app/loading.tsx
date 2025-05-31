import { Leaf } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Leaf className="h-12 w-12 text-green-600 animate-pulse" />
          <span className="text-3xl font-bold text-gray-900">Pharmacie Gaïa</span>
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Chargement en cours...</p>
      </div>
    </div>
  )
}
