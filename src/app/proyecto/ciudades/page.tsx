import GridContainer from "@/components/GridContainer"
import CityCard from "@/components/CityCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const cities = [
  {
    name: "Medellín",
    img: "https://media.istockphoto.com/id/1318666502/es/foto/medell%C3%ADn-centro-atardecer-colombia.jpg?s=612x612&w=0&k=20&c=wra_1fX39AGHg0SREx6bNIlmTOsWsMuAfYxW2fi6P4c=",
    href: "/proyecto/ciudades/medellin"
  },
  {
    name: "Bogotá",
    img: "https://media.istockphoto.com/id/1453256961/es/foto/vista-a%C3%A9rea-del-paisaje-urbano-moderno-de-bogot%C3%A1-en-colombia-por-la-tarde.jpg?s=612x612&w=0&k=20&c=qYSb6v0CH9MDDePZJZdlD0qT850vGDCzS3KlJsLiVVE=",
    href: "/proyecto/ciudades/bogota"
  },
  {
    name: "Cali",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Panor%C3%A1mica_nocturna_de_Cali_2023.jpg/330px-Panor%C3%A1mica_nocturna_de_Cali_2023.jpg",
    href: "/proyecto/ciudades/cali"
  },
  {
    name: "Cartagena",
    img: "https://blog.properati.com.co/wp-content/uploads/2021/02/GettyImages-1148861090-1024x681.jpg",
    href: "/proyecto/ciudades/cartagena"
  },
  {
    name: "Bucaramanga",
    img: "https://www.upb.edu.co/es/imagenes/img-sobrelaciudadbucaramanga-cam-1464102319822.jpg",
    href: "/proyecto/ciudades/bucaramanga"
  },
  {
    name: "Pereira",
    img: "https://photo620x400.mnstatic.com/a67c75e8996acf5638984fb4cb790904/pereira.jpg",
    href: "/proyecto/ciudades/pereira"
  }
]

export default function Ciudades() {
  return (
    <main className="min-h-screen p-8 bg-black text-black ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-wide">Ciudades</h1>
        <Link href="/proyecto">
          <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900 hover:text-white transition-all duration-300">
            ← Volver a proyecto
          </Button>
        </Link>
      </div>

      <GridContainer>
        {cities.map((c) => (
          <CityCard key={c.name} name={c.name} img={c.img} href={c.href} />
        ))}
      </GridContainer>
    </main>
  )
}