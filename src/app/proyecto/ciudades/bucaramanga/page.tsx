import PageHeader from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ImageWrapper from "@/components/ImageWrapper"

export default function BucaramangaPage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-tr from-green-900 via-gray-900 to-black text-white flex flex-col items-center">
      <PageHeader title="Bucaramanga" subtitle="Ciudad bonita y de parques" />

      <Card className="w-full max-w-4xl bg-gray-900 border border-green-700 shadow-md mt-6">
        <ImageWrapper
          src="https://www.upb.edu.co/es/imagenes/img-sobrelaciudadbucaramanga-cam-1464102319822.jpg"
          alt="Bucaramanga"
        />
        <CardContent className="space-y-4 p-6">
          <p>
            Bucaramanga es conocida por su tranquilidad, espacios verdes y calidad de vida. Es una ciudad moderna con alma emprendedora.
          </p>
          <p><strong>Población:</strong> 581,000</p>
          <ul className="list-disc pl-4">
            <li><strong>Parque Nacional del Chicamocha:</strong> Cañón impresionante con teleférico y actividades de aventura.</li>
            <li><strong>Parque San Pío:</strong> Espacio urbano con esculturas de Botero y zonas verdes.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Link href="/proyecto/ciudades">
          <Button variant="ghost" className="text-green-400 hover:text-white hover:bg-green-800">
            ← Volver a ciudades
          </Button>
        </Link>
      </div>
    </main>
  )
}