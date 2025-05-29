import Image from "next/image"

interface HeroSectionProps {
  title: string
  description: string
  backgroundImage: string
}

export default function HeroSection({ title, description, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative bg-hub-blue text-hub-white section-padding">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={`${title} background image - Hub City Laser Engraving Hagerstown MD`}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-hub-blue opacity-80"></div>
      </div>

      {/* Content */}
      <div className="container-max relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-blue-100 max-w-4xl">{description}</p>
      </div>
    </section>
  )
}
