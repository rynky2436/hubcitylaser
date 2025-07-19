import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  description: string
  ctaButtonText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  backgroundImage?: string
  imageAlt?: string
}

export default function HeroSection({
  title,
  description,
  ctaButtonText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = "/placeholder.svg", // Default placeholder
  imageAlt = "Hero background image",
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 px-4 md:px-6 max-w-3xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg md:text-xl">{description}</p>
        {(ctaButtonText && ctaLink) || (secondaryCtaText && secondaryCtaLink) ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaButtonText && ctaLink && (
              <Button asChild className="bg-[#A5ACAF] text-[#002B5C] hover:bg-gray-300">
                <Link href={ctaLink}>{ctaButtonText}</Link>
              </Button>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-[#002B5C] bg-transparent"
              >
                <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        ) : null}
      </div>
    </section>
  )
}
