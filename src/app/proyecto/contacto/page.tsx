import PageHeader from "@/components/PageHeader"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactoPage() {
  return (
    <main className="min-h-screen p-8 bg-black text-white">
      <PageHeader
        title="Contáctanos"
        subtitle="¿Tienes dudas, sugerencias o quieres colaborar?"
      />

      <Card className="max-w-xl mx-auto mt-10 bg-gray-900 border border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Formulario de contacto</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block mb-1 text-sm font-medium text-white">Nombre</label>
            <Input
              id="nombre"
              placeholder="Tu nombre"
              className="bg-gray-800 text-white border-gray-600"
            />
          </div>

          <div>
            <label htmlFor="correo" className="block mb-1 text-sm font-medium text-white">Correo electrónico</label>
            <Input
              id="correo"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className="bg-gray-800 text-white border-gray-600"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block mb-1 text-sm font-medium text-white">Mensaje</label>
            <Textarea
              id="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              className="bg-gray-800 text-white border-gray-600"
            />
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            Enviar mensaje
          </Button>
        </CardContent>
      </Card>

      {/* Botón de regreso a Proyecto */}
      <div className="mt-8 flex justify-center">
        <Link href="/proyecto">
          <Button variant="ghost" className="text-purple-400 hover:text-white hover:bg-purple-900 transition">
            ← Volver a proyecto
          </Button>
        </Link>
      </div>
    </main>
  )
}