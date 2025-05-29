import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Medical Laser Services - Hub City Engraving",
  description:
    "Precision laser cutting, engraving, and marking services for medical equipment, facilities, and healthcare applications.",
}

export default function MedicalPage() {
  const services = [
    "Medical equipment nameplates and labels",
    "Surgical instrument marking",
    "Hospital room signage and wayfinding",
    "Medical device compliance labeling",
    "Patient identification tags",
    "Laboratory equipment marking",
    "Sterilization indicators",
    "Medical facility signage",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/medical-sterile-instrument.png"
              alt="Medical laser engraving services - sterile instrument marking and barcode labeling"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">Medical Laser Services</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hub City Engraving provides precision laser services specifically designed for the medical industry. Our
              state-of-the-art equipment ensures the highest standards of accuracy and cleanliness required for medical
              applications, from surgical instrument marking to hospital signage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We understand the critical nature of medical environments and deliver solutions that meet strict
              regulatory requirements while maintaining the durability and precision your facility demands.
            </p>
          </div>

          <Card className="mb-12 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Our Medical Services</CardTitle>
              <CardDescription>Specialized laser solutions for healthcare facilities</CardDescription>
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
                src="/images/medical-hospital-tags.png"
                alt="Hospital asset tracking tags and sterilized instrument labels"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/medical-sterile-instrument.png"
                alt="Sterile medical instrument with laser engraved barcode labeling"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-4">Ready to Discuss Your Medical Project?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Contact us today for a consultation on your medical laser service needs
            </p>
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]">
              <Link href="/contact">Get Medical Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
