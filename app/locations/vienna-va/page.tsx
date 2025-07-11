import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  name: "Vienna, VA",
  title: "Laser Engraving Services in Vienna, VA | Hub City Laser",
  description:
    "Hub City Laser provides top-quality laser engraving services for businesses and residents in Vienna, VA. From corporate awards to custom gifts, we deliver precision and excellence.",
  keywords: "laser engraving Vienna VA, custom gifts Vienna, corporate awards Vienna VA, Vienna laser cutting",
  mainImage: "/images/vienna-va-landmark.png",
  intro:
    "For residents and businesses in Vienna, VA, Hub City Laser offers premier laser engraving services that combine artistry with precision. We are dedicated to providing our Vienna clients with exceptional custom products for any occasion.",
  services: [
    {
      name: "Corporate Awards",
      description: "Recognize excellence with beautifully engraved awards for your Vienna-based business.",
      image: "/images/corporate-award.png",
    },
    {
      name: "Personalized Gifts",
      description: "Create unique, personalized gifts for birthdays, anniversaries, and holidays in Vienna.",
      image: "/images/valentines-day-gift.png",
    },
    {
      name: "Custom Signage",
      description: "Enhance your Vienna storefront or office with professional, custom-engraved signage.",
      image: "/images/trade-show-booth-sign.png",
    },
  ],
  ctaText: "Get a Quote for Your Vienna Project",
  ctaLink: "/contact",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function ViennaPage() {
  return <LocationTemplate {...locationData} />
}
