import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Industrial Laser Services - Hub City Laser",
  description:
    "Equipment marking, safety labels, and compliance tags for industrial facilities, manufacturing, and heavy equipment.",
}

export default function IndustrialPage() {
  const services = [
    "Equipment identification and asset tags",
    "Safety warning labels and signs",
    "Compliance and regulatory markings",
    "Industrial nameplates and data plates",
    "Maintenance scheduling labels",
    "Quality control markings",
    "Hazard identification signage",
    "Custom industrial fixtures",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200&query=industrial%20equipment%20laser%20marking"
              alt="Industrial laser services"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">Industrial Laser Services</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ensure safety, compliance, and efficiency in your industrial facility with precision laser marking and
              engraving services. Hub City Laser provides durable, permanent markings that withstand harsh industrial
              environments while meeting strict regulatory requirements.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our industrial-grade materials and precision marking techniques ensure your equipment tags, safety labels,
              and compliance markings remain legible and intact throughout the equipment's lifecycle.
            </p>
          </div>

          <Card className="mb-12 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Our Industrial Services</CardTitle>
              <CardDescription>Durable marking solutions for industrial environments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#002B5C] rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&query=industrial%20safety%20warning%20labels"
                alt="Industrial safety warning labels"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&query=equipment%20asset%20identification%20tags"
                alt="Equipment asset identification tags"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-4">Secure Your Industrial Operations</h2>
            <p className="text-lg text-gray-700 mb-6">
              Get permanent, compliant markings that ensure safety and efficiency
            </p>
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]">
              <Link href="/contact">Get Industrial Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
