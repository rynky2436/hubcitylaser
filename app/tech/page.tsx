import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Technology Laser Services - Hub City Laser",
  description: "Precision marking for tech equipment, components, and technology company branding and signage needs.",
}

export default function TechPage() {
  const services = [
    "Electronic component marking",
    "Tech equipment identification",
    "Circuit board labeling",
    "Data center signage and labels",
    "Technology company branding",
    "Product serial number marking",
    "Cable and wire identification",
    "Tech office signage and displays",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200&query=technology%20component%20laser%20marking"
              alt="Technology laser services"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">Technology Laser Services</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Meet the precision requirements of the technology industry with micro-marking, component identification,
              and high-tech signage solutions. Hub City Laser delivers the accuracy and quality standards demanded by
              technology companies and manufacturers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From delicate electronic components to data center infrastructure, our advanced laser technology provides
              permanent, precise markings without compromising component integrity.
            </p>
          </div>

          <Card className="mb-12 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Our Technology Services</CardTitle>
              <CardDescription>Precision solutions for the technology industry</CardDescription>
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
                src="/placeholder.svg?height=300&width=500&query=electronic%20circuit%20board%20marking"
                alt="Electronic circuit board marking"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&query=data%20center%20equipment%20labels"
                alt="Data center equipment labels"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-4">Advance Your Tech Operations</h2>
            <p className="text-lg text-gray-700 mb-6">Get precision marking that meets technology industry standards</p>
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]">
              <Link href="/contact">Get Technology Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
