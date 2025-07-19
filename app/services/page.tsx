import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Laser Engraving Services | Hub City Laser",
  description:
    "Explore Hub City Laser's comprehensive laser engraving and cutting services for businesses across various industries. Custom solutions for signs, awards, industrial parts, and more.",
  keywords:
    "laser engraving services, custom laser cutting, business signage, industrial marking, promotional items, personalized gifts, awards and recognition, Hub City Laser services",
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
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection
        title="Our Comprehensive Laser Engraving Services"
        description="Hub City Laser offers a wide range of precision laser engraving and cutting services tailored to meet the unique needs of businesses and individuals. Explore our capabilities and discover how we can bring your vision to life."
        backgroundImage="/abstract-geometric-pattern.png"
        imageAlt="Abstract geometric pattern background"
        ctaButtonText="Get a Free Quote"
        ctaLink="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />

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
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-[#002B5C] mb-2">{service.title}</h3>
                    <p className="text-gray-700 flex-grow">{service.description}</p>
                    <Button asChild className="mt-4 bg-[#002B5C] text-white hover:bg-blue-800">
                      <Link href={service.link}>Learn More</Link>
                    </Button>
                  </div>
                </div>
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
              <Link href="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
