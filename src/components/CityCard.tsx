import Image from "next/image";

export default function CityCard({
  name,
  img,
  href,
}: {
  name: string;
  img: string;
  href: string;
}) {
  return (
    <article className="rounded-lg overflow-hidden shadow-lg border border-purple-700 bg-gray-950 hover:shadow-purple-700 transition-shadow duration-300">
      <a href={href} className="block">
        <div className="h-40 relative">
          <Image src={img} alt={name} fill className="object-cover" />
        </div>
        <div className="p-3 bg-white text-center">
          <h3 className="font-semibold text-gray-900 tracking-wide">{name}</h3>
        </div>
      </a>
    </article>
  );
}