import PageHeader from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ImageWrapper from "@/components/ImageWrapper"

export default function PereiraPage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-yellow-900 via-yellow-700 to-yellow-900 text-white flex flex-col items-center">
      <PageHeader title="Pereira" subtitle="Corazón del Eje Cafetero" />

      <Card className="w-full max-w-4xl bg-yellow-900 border border-yellow-600 shadow-md mt-6">
        <ImageWrapper
          src="https://photo620x400.mnstatic.com/a67c75e8996acf5638984fb4cb790904/pereira.jpg"
          alt="Pereira"
        />
        <CardContent className="space-y-4 p-6">
          <p>
            Pereira es una ciudad cálida y acogedora, rodeada de montañas y cafetales. Es un punto clave del Eje Cafetero colombiano.
          </p>
          <p><strong>Población:</strong> 477,000</p>
          <ul className="list-disc pl-4">
            <li><strong>Viaducto César Gaviria:</strong> Puente icónico que conecta la ciudad y ofrece vistas panorámicas.</li>
            <li><strong>Parque Ukumarí:</strong> Bioparque con enfoque en conservación y educación ambiental.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Link href="/proyecto/ciudades">
          <Button variant="ghost" className="text-yellow-300 hover:text-white hover:bg-yellow-800">
            ← Volver a ciudades
          </Button>
        </Link>
      </div>
    </main>
  )
}