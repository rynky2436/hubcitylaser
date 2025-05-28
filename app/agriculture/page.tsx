import type { Metadata } from "next"
import IndustryTemplate from "../components/IndustryTemplate"

export const metadata: Metadata = {
  title: "Agriculture Laser Engraving Services | Hub City Laser",
  description:
    "Durable laser engraving solutions for agricultural businesses. Equipment identification, farm signage, and livestock management tools.",
}

export default function AgriculturePage() {
  const services = [
    "Farm equipment identification and serial number tags",
    "Livestock ear tags and identification markers",
    "Weather-resistant farm signage and displays",
    "Equipment maintenance and safety labels",
    "Custom farm branding and promotional materials",
    "Agricultural trade show displays and materials",
  ]

  return (
    <IndustryTemplate
      title="Agriculture"
      description="Durable, weather-resistant laser engraving solutions for farms, agricultural equipment manufacturers, and agribusiness. Built to withstand outdoor conditions while maintaining clarity."
      services={services}
    />
  )
}
