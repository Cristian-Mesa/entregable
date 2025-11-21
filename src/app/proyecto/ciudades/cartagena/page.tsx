import PageHeader from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ImageWrapper from "@/components/ImageWrapper"

export default function CartagenaPage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-yellow-900 via-orange-800 to-red-900 text-white flex flex-col items-center">
      <PageHeader title="Cartagena" subtitle="Encanto colonial frente al mar" />

      <Card className="w-full max-w-4xl bg-orange-900 border border-yellow-600 shadow-md mt-6">
        <ImageWrapper
          src="https://blog.properati.com.co/wp-content/uploads/2021/02/GettyImages-1148861090-1024x681.jpg"
          alt="Cartagena"
        />
        <CardContent className="space-y-4 p-6">
          <p>
            Cartagena es una joya colonial bañada por el Caribe. Sus murallas, balcones y playas la convierten en un destino romántico y cultural.
          </p>
          <p><strong>Población:</strong> 1.1 millones</p>
          <ul className="list-disc pl-4">
            <li><strong>Ciudad Amurallada:</strong> Centro histórico con arquitectura colonial, plazas y museos.</li>
            <li><strong>Castillo de San Felipe:</strong> Fortaleza militar con túneles y vistas panorámicas.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Link href="/proyecto/ciudades">
          <Button variant="ghost" className="text-yellow-300 hover:text-white hover:bg-orange-800">
            ← Volver a ciudades
          </Button>
        </Link>
      </div>
    </main>
  )
}