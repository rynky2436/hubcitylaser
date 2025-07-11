import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  name: "Woodley Park & Cleveland Park, DC",
  title: "Laser Engraving in Woodley Park & Cleveland Park, DC | Hub City Laser",
  description:
    "Hub City Laser offers expert laser engraving services to the historic Woodley Park and Cleveland Park neighborhoods. We specialize in custom signage, home decor, and unique gifts.",
  keywords: "laser engraving Woodley Park, Cleveland Park laser cutting, custom gifts DC, historic home plaques DC",
  mainImage: "",
  intro:
    "In the historic and vibrant neighborhoods of Woodley Park and Cleveland Park, Hub City Laser provides bespoke laser engraving services. We cater to the area's unique blend of residential charm and bustling commercial corridors, including the National Zoo.",
  services: [
    {
      name: "Historic Home Plaques",
      description: "Elegant, custom-made plaques for the many historic homes in Woodley and Cleveland Park.",
      image: "/images/corporate-recognition-plaque.png",
    },
    {
      name: "Restaurant & Cafe Branding",
      description: "Unique branding solutions for the popular restaurants and cafes along Connecticut Avenue.",
      image: "/images/restaurant-menu-board.png",
    },
    {
      name: "Zoo & Event Signage",
      description: "Durable and creative signage for events and exhibits at the nearby National Zoo.",
      image: "/images/school-event-signage.png",
    },
  ],
  ctaText: "Get a Quote for Your Project",
  ctaLink: "/contact",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function WoodleyParkPage() {
  return <LocationTemplate {...locationData} />
}
