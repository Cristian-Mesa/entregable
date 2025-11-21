import PageHeader from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ImageWrapper from "@/components/ImageWrapper"

export default function BogotaPage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-t from-gray-950 via-gray-800 to-black text-white font-serif flex flex-col items-center">
      <PageHeader title="Bogotá" subtitle="Capital cultural y política de Colombia" />

      <Card className="w-full max-w-4xl bg-gray-800 border border-gray-600 shadow-md mt-6">
        <ImageWrapper
          src="/bogota.png"
          alt="Bogotá"
        />
        <CardContent className="space-y-4 p-6">
          <p>
            Bogotá es una metrópolis diversa, con historia colonial, arte moderno y una vida cultural activa. Su altitud le da un clima fresco y único.
          </p>
          <p><strong>Población:</strong> 7.9 millones</p>
          <ul className="list-disc pl-4">
            <li><strong>Monserrate:</strong> Mirador icónico con vista panorámica y santuario religioso.</li>
            <li><strong>Museo del Oro:</strong> Colección precolombina de oro más grande del mundo.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Link href="/proyecto/ciudades">
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-700">
            ← Volver a ciudades
          </Button>
        </Link>
      </div>
    </main>
  )
}