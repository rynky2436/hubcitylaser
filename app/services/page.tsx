import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "All Services - Hub City Laser",
  description:
    "Complete list of laser cutting, engraving, and marking services including signs, plaques, nameplates, equipment tags, compliance labels, promotional items, awards, and personalized gifts.",
}

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Signage Solutions",
      services: [
        "Custom business signs",
        "Directional signage",
        "Safety signs",
        "Outdoor signage",
        "Indoor displays",
        "Wayfinding systems",
      ],
      image: "/placeholder.svg?height=300&width=400&query=custom%20business%20signage",
    },
    {
      title: "Professional Items",
      services: [
        "Nameplates",
        "Desk signs",
        "Door plates",
        "Office directories",
        "Executive plaques",
        "Professional awards",
      ],
      image: "/placeholder.svg?height=300&width=400&query=professional%20desk%20nameplate",
    },
    {
      title: "Industrial Applications",
      services: [
        "Equipment tags",
        "Asset labels",
        "Compliance labels",
        "Safety warnings",
        "Data plates",
        "Serial number marking",
      ],
      image: "/placeholder.svg?height=300&width=400&query=industrial%20equipment%20tags",
    },
    {
      title: "Promotional Materials",
      services: [
        "Marketing displays",
        "Trade show materials",
        "Promotional items",
        "Brand elements",
        "Custom logos",
        "Event signage",
      ],
      image: "/placeholder.svg?height=300&width=400&query=promotional%20marketing%20displays",
    },
    {
      title: "Awards & Recognition",
      services: [
        "Achievement awards",
        "Recognition plaques",
        "Trophies",
        "Commemorative items",
        "Service awards",
        "Milestone gifts",
      ],
      image: "/placeholder.svg?height=300&width=400&query=laser%20engraved%20awards",
    },
    {
      title: "Personalized Gifts",
      services: [
        "Custom cutting boards",
        "Engraved tumblers",
        "Pet tags",
        "Home décor",
        "Wedding favors",
        "Memorial items",
      ],
      image: "/placeholder.svg?height=300&width=400&query=personalized%20laser%20gifts",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200&query=laser%20cutting%20and%20engraving%20services"
              alt="Laser services"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">All Services</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hub City Laser offers comprehensive laser cutting, engraving, and marking services across multiple
              industries and applications. Our state-of-the-art equipment and experienced team deliver precision results
              for projects of all sizes, from single custom pieces to large production runs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need industrial equipment marking, professional signage, or personalized gifts, we have the
              expertise and technology to bring your vision to life with exceptional quality and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="border-[#A5ACAF] h-full overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#002B5C]">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#002B5C] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12 bg-gray-50 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Our Capabilities</CardTitle>
              <CardDescription>Advanced laser technology for superior results</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden mx-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=400&query=laser%20cutting%20machine%20in%20action"
                    alt="Laser Cutting"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="font-semibold text-[#002B5C] mb-3">Laser Cutting</h3>
                <p className="text-gray-700">
                  Precision cutting through various materials including wood, acrylic, metal, and more
                </p>
              </div>
              <div className="text-center">
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden mx-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=400&query=laser%20engraving%20detail%20work"
                    alt="Laser Engraving"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="font-semibold text-[#002B5C] mb-3">Laser Engraving</h3>
                <p className="text-gray-700">Detailed surface engraving for text, logos, and intricate designs</p>
              </div>
              <div className="text-center">
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden mx-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=400&query=laser%20marking%20on%20metal"
                    alt="Laser Marking"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="font-semibold text-[#002B5C] mb-3">Laser Marking</h3>
                <p className="text-gray-700">Permanent marking for identification, compliance, and branding</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center bg-[#002B5C] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg mb-6 text-[#A5ACAF]">
              Contact us today to discuss your laser service needs and get a custom quote
            </p>
            <Button asChild size="lg" className="bg-[#A5ACAF] text-[#002B5C] hover:bg-white">
              <Link href="/contact">Get Your Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
