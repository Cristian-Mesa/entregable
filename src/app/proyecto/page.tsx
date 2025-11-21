import PageHeader from "@/components/PageHeader"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProyectoPage() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-black via-purple-950 to-black text-gray-100 font-serif">
      <PageHeader
        title="Directorio Turístico Interactivo"
        subtitle="Proyecto – Web React 2025"
      />

      <Card className="max-w-2xl mx-auto mt-10 bg-gradient-to-tr from-gray-900 to-black border border-purple-800 shadow-[0_0_20px_rgba(128,0,128,0.4)]">
        <CardHeader>
          <CardTitle className="text-purple-300 text-2xl tracking-wide">Descripción</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-sm leading-relaxed text-gray-300">
            Este proyecto muestra 6 páginas estáticas por ciudad, una página dinámica y un formulario de contacto.
            Está construido con Next.js, Tailwind y componentes de shadcn/ui.
          </p>

          <div className="flex gap-4">
            <Link href="/proyecto/ciudades">
              <Button className="bg-purple-700 hover:bg-purple-800 text-white shadow-md transition-all duration-300">
                Ciudades
              </Button>
            </Link>

            <Link href="/proyecto/contacto">
              <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900 hover:text-white transition-all duration-300">
                Contacto
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Botón para volver al inicio */}
      <div className="mt-8 flex justify-center">
        <Link href="/">
          <Button variant="ghost" className="text-purple-400 hover:text-white hover:bg-purple-900 transition">
            ← Volver al inicio
          </Button>
        </Link>
      </div>
    </main>
  )
}