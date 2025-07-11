import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  name: "Potomac, MD",
  title: "Laser Engraving Services in Potomac, MD | Hub City Laser",
  description:
    "Hub City Laser offers premium laser engraving services to the Potomac, MD community. We specialize in custom gifts, corporate awards, and personalized home decor.",
  keywords: "laser engraving Potomac MD, custom gifts Potomac, corporate awards Potomac MD, Potomac laser cutting",
  mainImage: "",
  intro:
    "Serving the distinguished community of Potomac, MD, Hub City Laser provides exquisite laser engraving services for all your personal and professional needs. We pride ourselves on delivering products that reflect the elegance and quality our Potomac clients expect.",
  services: [
    {
      name: "Equestrian Tack & Awards",
      description: "Custom engraved items for the vibrant equestrian community in Potomac.",
      image: "/images/sports-trophy.png",
    },
    {
      name: "Luxury Home Decor",
      description: "Personalized home decor items that add a touch of class to any Potomac residence.",
      image: "/images/anniversary-wall-art.png",
    },
    {
      name: "Executive Gifts",
      description: "Sophisticated, custom-engraved gifts perfect for corporate partners and executives in Potomac.",
      image: "/images/corporate-executive-gift.png",
    },
  ],
  ctaText: "Get a Quote for Your Potomac Project",
  ctaLink: "/contact",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PotomacPage() {
  return <LocationTemplate {...locationData} />
}
