import PageHeader from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ImageWrapper from "@/components/ImageWrapper"

export default function CaliPage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-r from-black via-red-900 to-yellow-900 text-white flex flex-col items-center">
      <PageHeader title="Cali" subtitle="Capital de la salsa y la energía nocturna" />

      <Card className="w-full max-w-4xl bg-red-950 border border-yellow-600 shadow-md mt-6">
        <ImageWrapper
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Panor%C3%A1mica_nocturna_de_Cali_2023.jpg/330px-Panor%C3%A1mica_nocturna_de_Cali_2023.jpg"
          alt="Cali"
        />
        <CardContent className="space-y-4 p-6">
          <p>
            Cali vibra con ritmo, color y sabor. Su cultura salsera y ambiente nocturno la convierten en una ciudad alegre y apasionada.
          </p>
          <p><strong>Población:</strong> 2.2 millones</p>
          <ul className="list-disc pl-4">
            <li><strong>Ruta de la Salsa:</strong> Recorrido por escuelas, bares y museos dedicados al baile.</li>
            <li><strong>Zoológico de Cali:</strong> Uno de los más completos de Latinoamérica, con enfoque ecológico.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Link href="/proyecto/ciudades">
          <Button variant="ghost" className="text-yellow-400 hover:text-white hover:bg-red-800">
            ← Volver a ciudades
          </Button>
        </Link>
      </div>
    </main>
  )
}