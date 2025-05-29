import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Agriculture Laser Services - Hub City Laser",
  description:
    "Equipment tags, labels, and farm signage for agricultural operations, livestock management, and farm equipment.",
}

export default function AgriculturePage() {
  const services = [
    "Farm equipment identification tags",
    "Livestock ear tags and markers",
    "Agricultural signage and warnings",
    "Seed and chemical labeling",
    "Farm gate and property signs",
    "Equipment maintenance labels",
    "Crop identification markers",
    "Safety and compliance signage",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200&query=farm%20equipment%20laser%20tags%20agriculture"
              alt="Agriculture laser services"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">Agriculture Laser Services</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Keep your agricultural operation organized and compliant with durable laser-cut tags, labels, and signage
              designed to withstand harsh outdoor conditions. Hub City Laser understands the unique challenges of farm
              environments and provides solutions built to last.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From equipment identification to livestock management, our weather-resistant materials and precision
              marking ensure your farm operations run smoothly and safely.
            </p>
          </div>

          <Card className="mb-12 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Our Agriculture Services</CardTitle>
              <CardDescription>Durable solutions for farm and agricultural operations</CardDescription>
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
                src="/placeholder.svg?height=300&width=500&query=farm%20equipment%20identification%20tag"
                alt="Farm equipment identification tag"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&query=agricultural%20warning%20signage"
                alt="Agricultural warning signage"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-4">Organize Your Agricultural Operation</h2>
            <p className="text-lg text-gray-700 mb-6">Get durable tags and signage that stand up to farm conditions</p>
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]">
              <Link href="/contact">Get Agriculture Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
