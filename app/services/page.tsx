import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Our Laser Engraving Services | EZ Engrave Everything",
  description:
    "Explore EZ Engrave Everything's comprehensive laser engraving and cutting services for businesses across various industries. Custom solutions for signs, awards, industrial parts, and more.",
  keywords:
    "laser engraving services, custom laser cutting, business signage, industrial marking, promotional items, personalized gifts, awards and recognition, tri-layer acrylic engraving",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Business Signage",
      description: "Custom signs, plaques, and displays for your business.",
      image: "/images/retail-traditional-signage.png",
      link: "/services/business-signage",
    },
    {
      title: "Awards & Recognition",
      description: "Personalized awards, trophies, and plaques for any achievement.",
      image: "/images/corporate-award.png",
      link: "/services/awards-recognition",
    },
    {
      title: "Industrial Identification",
      description: "Durable marking for parts, equipment, and compliance labels.",
      image: "/images/industrial-compliance-marking.png",
      link: "/services/industrial-identification",
    },
    {
      title: "Promotional Items",
      description: "Branded merchandise and giveaways for marketing and events.",
      image: "/images/trade-show-promotional-product.png",
      link: "/services/promotional-items",
    },
    {
      title: "Personalized Gifts",
      description: "Unique custom gifts for individuals and special occasions.",
      image: "/images/personalized-gifts.png",
      link: "/services/personalized-gifts",
    },
    {
      title: "Tri-Layer Acrylic Engraving",
      description: "Expert engraving on challenging multi-color acrylic materials.",
      image: "/images/tri-layer-acrylic-sample.png",
      link: "/services/tri-layer-acrylic-engraving",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002B5C] to-[#004080] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Comprehensive Laser Engraving Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              EZ Engrave Everything offers a wide range of precision laser engraving and cutting services tailored to meet the unique needs of businesses and individuals.
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Explore our capabilities and discover how we can bring your vision to life with professional quality and expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#A5ACAF] text-[#002B5C] hover:bg-white">
                <Link href="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation" target="_blank" rel="noopener noreferrer">
                  Get a Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#002B5C]">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-[#002B5C]">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Services</h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                From intricate designs to large-scale production, our advanced laser technology delivers unparalleled
                precision and quality across various applications.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden flex flex-col">
                  <div className="aspect-video relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-[#002B5C]">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild className="w-full bg-[#002B5C] text-white hover:bg-blue-800">
                      <Link href={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002B5C] text-white text-center">
          <div className="container px-4 md:px-6 max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Start Your Project?</h2>
            <p className="text-lg md:text-xl">
              Whether you have a specific design in mind or need assistance bringing your idea to life, our team is here
              to help. Contact us today for a personalized consultation.
            </p>
            <Button asChild className="bg-[#A5ACAF] text-[#002B5C] hover:bg-gray-300">
              <Link href="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
