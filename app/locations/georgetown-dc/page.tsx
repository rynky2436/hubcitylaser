import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  name: "Georgetown, DC",
  title: "Laser Engraving Services in Georgetown, DC | Hub City Laser",
  description:
    "Hub City Laser brings historic craftsmanship and modern precision to Georgetown, DC. We offer laser engraving for university merchandise, boutique retail, and historic preservation projects.",
  keywords:
    "laser engraving Georgetown DC, Georgetown University merchandise, boutique retail Georgetown, Georgetown laser cutting",
  mainImage: "",
  intro:
    "In historic Georgetown, DC, Hub City Laser provides laser engraving services that blend modern technology with timeless craftsmanship. We serve the students and faculty of Georgetown University, the chic boutiques on M Street, and the area's historic homes.",
  services: [
    {
      name: "University & Alumni Gifts",
      description: "Custom engraved merchandise and gifts for Georgetown University students, faculty, and alumni.",
      image: "/images/graduation-class-gift.png",
    },
    {
      name: "Boutique Retail Branding",
      description: "Unique branding and product customization for the exclusive boutiques of Georgetown.",
      image: "/images/retail-premium-displays.png",
    },
    {
      name: "Historic Plaques & Markers",
      description: "Durable and elegant plaques for historic homes and landmarks in Georgetown.",
      image: "/images/corporate-recognition-plaque.png",
    },
  ],
  ctaText: "Get a Quote for Your Georgetown Project",
  ctaLink: "/contact",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function GeorgetownPage() {
  return <LocationTemplate {...locationData} />
}
