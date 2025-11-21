import StudentCard from "@/components/StudentCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8 p-6">
      <StudentCard
        name="Cristian Yesid Mesa Giraldo"
        program="Tecnología en Análisis y Desarrollo de Software - SENA"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" // puedes cambiarlo por una imagen tuya
        bio="Apasionado por el desarrollo web, la estética techno, me gustan los videojuegos y los deportes y fiel al FC Barcelona"
      />
      <Link href="/proyecto">
        <Button variant="default">Ir al Proyecto</Button>
      </Link>
    </main>
  )
}