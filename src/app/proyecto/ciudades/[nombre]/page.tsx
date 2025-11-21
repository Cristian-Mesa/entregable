interface Props {
  params: Promise<{ nombre: string }>;
}

export default async function CityDynamic({ params }: Props) {
  const { nombre } = await params;

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold">Bienvenidos a: {nombre}</h1>

      <div className="mt-4 p-4 border rounded">
        <p>
          Esta página demuestra rutas dinámicas con params.nombre usando App Router en Next.js 16.
        </p>
      </div>

      <a href="/proyecto/ciudades" className="mt-4 inline-block text-blue-600">
        Volver a ciudades
      </a>
    </main>
  );
}
