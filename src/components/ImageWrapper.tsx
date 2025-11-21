import Image from "next/image"

export default function ImageWrapper({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-4xl w-full rounded overflow-hidden shadow-md">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={600}
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  )
}