import type { Metadata } from "next"
import IndustryTemplate from "../components/IndustryTemplate"

export const metadata: Metadata = {
  title: "Industrial Laser Engraving Services | Hub City Laser",
  description:
    "Heavy-duty laser engraving for industrial applications. Safety signs, equipment tags, identification labels, and compliance marking.",
}

export default function IndustrialPage() {
  const services = [
    "Industrial safety signs and warning labels",
    "Equipment identification and asset tags",
    "Compliance and regulatory marking",
    "Machine nameplates and serial number engraving",
    "Facility wayfinding and directional signage",
    "Quality control and inspection labels",
  ]

  return (
    <IndustryTemplate
      title="Industrial"
      description="Heavy-duty laser engraving solutions for manufacturing, industrial facilities, and equipment manufacturers. Durable marking that meets industry standards and regulatory requirements."
      services={services}
    />
  )
}
