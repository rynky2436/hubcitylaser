import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  name: "Chevy Chase, DC",
  title: "Laser Engraving Services in Chevy Chase, DC | Hub City Laser",
  description:
    "Hub City Laser provides elegant laser engraving services for the upscale Chevy Chase, DC area. We specialize in luxury retail branding, personalized gifts, and custom home decor.",
  keywords:
    "laser engraving Chevy Chase DC, luxury retail Chevy Chase, personalized gifts Chevy Chase DC, Chevy Chase laser cutting",
  mainImage: "",
  intro:
    "For the discerning clients of Chevy Chase, DC, Hub City Laser offers sophisticated laser engraving services that match the neighborhood's elegance. We provide bespoke products for luxury retail, personal collections, and beautiful homes.",
  services: [
    {
      name: "Luxury Retail Solutions",
      description: "Custom branding and product personalization for the high-end retailers in Chevy Chase.",
      image: "/images/retail-premium-displays.png",
    },
    {
      name: "Personalized Stationery",
      description: "Exquisite, custom-engraved stationery and invitations for Chevy Chase residents.",
      image: "/images/trade-show-notebook-pen.png",
    },
    {
      name: "Custom Home Accents",
      description: "Beautifully engraved home accents that complement the stunning architecture of Chevy Chase.",
      image: "/images/mothers-day-vase.png",
    },
  ],
  ctaText: "Get a Quote for Your Chevy Chase Project",
  ctaLink: "/contact",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function ChevyChasePage() {
  return <LocationTemplate {...locationData} />
}
