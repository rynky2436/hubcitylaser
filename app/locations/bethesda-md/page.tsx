import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  name: "Bethesda, MD",
  title: "Laser Engraving Services in Bethesda, MD | Hub City Laser",
  description:
    "Hub City Laser is the go-to provider for laser engraving in Bethesda, MD. We offer a wide range of services, including medical device marking, corporate branding, and custom gifts.",
  keywords:
    "laser engraving Bethesda MD, medical device marking Bethesda, corporate branding Bethesda MD, Bethesda laser cutting",
  mainImage: "",
  intro:
    "In the bustling heart of Bethesda, MD, Hub City Laser delivers precision laser engraving services tailored to the diverse needs of this dynamic community. From the National Institutes of Health to the vibrant downtown business district, we support Bethesda with unparalleled quality.",
  services: [
    {
      name: "Medical & Lab Equipment Marking",
      description: "Precision marking for medical and research equipment, serving Bethesda's thriving biotech sector.",
      image: "/images/uid-laser-marking.png",
    },
    {
      name: "Restaurant & Retail Signage",
      description: "Stylish and durable signage for the many restaurants and boutiques in downtown Bethesda.",
      image: "/images/restaurant-menu-board.png",
    },
    {
      name: "Corporate Branding",
      description: "Professional branding solutions for the numerous corporate headquarters located in Bethesda.",
      image: "/images/corporate-event-signage.png",
    },
  ],
  ctaText: "Get a Quote for Your Bethesda Project",
  ctaLink: "/contact",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function BethesdaPage() {
  return <LocationTemplate {...locationData} />
}
