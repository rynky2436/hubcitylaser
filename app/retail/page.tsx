import type { Metadata } from "next"
import IndustryTemplate from "../components/IndustryTemplate"

export const metadata: Metadata = {
  title: "Retail Laser Engraving Services | Hub City Laser",
  description:
    "Custom laser engraving for retail businesses. Store displays, product labels, promotional items, and point-of-sale materials.",
}

export default function RetailPage() {
  const services = [
    "Custom store displays and product showcases",
    "Point-of-sale signage and promotional materials",
    "Product labels and pricing displays",
    "Store branding and directional signage",
    "Customer loyalty program materials",
    "Seasonal and holiday promotional displays",
  ]

  return (
    <IndustryTemplate
      title="Retail"
      description="Attract customers and enhance your retail environment with custom laser-engraved displays, signage, and promotional materials that showcase your products and brand."
      services={services}
    />
  )
}
