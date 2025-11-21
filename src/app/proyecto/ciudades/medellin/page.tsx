import PageHeader from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ImageWrapper from "@/components/ImageWrapper"

export default function MedellinPage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white flex flex-col items-center">
      <PageHeader title="Medellín" subtitle="Innovación y cultura en el Valle de Aburrá" />

      <Card className="w-full max-w-4xl bg-gray-900 border border-purple-700 shadow-md mt-6">
        <ImageWrapper
          src="/medellin.png"
          alt="Medellín"
        />
        <CardContent className="space-y-4 p-6">
          <p>Medellín es una ciudad vibrante, reconocida por su transformación urbana, su clima primaveral y su gente cálida.</p>
          <p><strong>Población:</strong> 2.5 millones</p>
          <ul className="list-disc pl-4">
            <li><strong>Comuna 13:</strong> Arte urbano, escaleras eléctricas y cultura viva.</li>
            <li><strong>Jardín Botánico:</strong> Espacio natural con orquídeas y arquitectura moderna.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Link href="/proyecto/ciudades">
          <Button variant="ghost" className="text-purple-400 hover:text-white hover:bg-purple-800">
            ← Volver a ciudades
          </Button>
        </Link>
      </div>
    </main>
  )
}