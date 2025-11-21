interface StudentCardProps {
  name: string
  program: string
  image: string
  bio: string
}

export default function StudentCard({ name, program, image, bio }: StudentCardProps) {
  return (
    <div className="bg-neutral-900 text-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 max-w-sm mx-auto">
      <img
        src={image}
        className="w-32 h-32 rounded-full object-cover border-4 border-neutral-700"
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm italic">{program}</p>
      <p className="text-center text-sm">{bio}</p>
    </div>
  )
}