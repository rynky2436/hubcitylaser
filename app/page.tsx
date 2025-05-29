import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const industries = [
    {
      name: "Medical",
      href: "/medical",
      description: "Precision laser services for medical equipment and facilities",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2005_51_42%20PM-ec3es3KCalpHNcJr7WcPltSCmrUAJK.png",
    },
    {
      name: "Professional",
      href: "/professional",
      description: "Custom signage and professional marking solutions",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2006_01_43%20PM-xdZC4Pj1ZbOlaGygLnTGON95W9OE98.png",
    },
    {
      name: "Restaurants",
      href: "/restaurants",
      description: "Menu boards, signage, and promotional materials",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2006_06_58%20PM-zzKJTXgw6lFFtuoR7KtpNsyOHB6vk5.png",
    },
    {
      name: "Real Estate",
      href: "/real-estate",
      description: "Property signs, nameplates, and marketing materials",
      image: "/images/real-estate-professional.png",
    },
    {
      name: "Agriculture",
      href: "/agriculture",
      description: "Equipment tags, labels, and farm signage",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2006_25_31%20PM-OfBLQioZbdW9nSrk19T9nBgzGpkOuO.png",
    },
    {
      name: "Retail",
      href: "/retail",
      description: "Store signage, promotional items, and displays",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2006_28_48%20PM-34oWd1KcRVQXtPHIeRPU5xrZGNkDRD.png",
    },
    {
      name: "Industrial",
      href: "/industrial",
      description: "Equipment marking, safety labels, and compliance tags",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2006_32_13%20PM-qByHBo8KMWkBotSU8VfuAaA0cgGtU2.png",
    },
    {
      name: "Technology",
      href: "/tech",
      description: "Precision marking for tech equipment and components",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2006_33_56%20PM-aTLgBFhvy5KCy9hpIzrhtljTxeUW6g.png",
    },
    {
      name: "Hospitality",
      href: "/hospitality",
      description: "Hotel signage, room numbers, and guest amenities",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2006_35_49%20PM-fgZvaXNcK0LkVsqNVoO2Os10ugfCgS.png",
    },
    {
      name: "Personalized Gifts",
      href: "/gifts",
      description: "Custom gifts, home décor, and personalized items",
      image: "/images/gifts-slate-coasters.png",
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hub City Laser",
    description:
      "Professional laser cutting, engraving, and marking solutions for medical, industrial, retail, and more industries.",
    url: "https://hubcitylaser.com",
    telephone: "(555) 123-4567",
    email: "info@hubcitylaser.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Industrial Way",
      addressLocality: "Hub City",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US",
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "40.7128",
        longitude: "-74.0060",
      },
      geoRadius: "100",
    },
    services: [
      "Laser Cutting",
      "Laser Engraving",
      "Laser Marking",
      "Custom Signage",
      "Equipment Tags",
      "Personalized Gifts",
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#002B5C] text-white py-20 relative">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2005_51_42%20PM-ec3es3KCalpHNcJr7WcPltSCmrUAJK.png"
              alt="Precision laser equipment for medical and industrial applications"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Precision Laser Services for Every Industry</h1>
            <p className="text-xl md:text-2xl mb-8 text-[#A5ACAF]">
              Professional laser cutting, engraving, and marking solutions tailored to your business needs
            </p>
            <Button asChild size="lg" className="bg-[#A5ACAF] text-[#002B5C] hover:bg-white">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2006_01_43%20PM-xdZC4Pj1ZbOlaGygLnTGON95W9OE98.png"
                    alt="Professional laser engraved office signage and nameplates"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-[#002B5C] mb-6">About Hub City Laser</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With years of experience in precision laser services, Hub City Laser delivers high-quality cutting,
                  engraving, and marking solutions across multiple industries. Our state-of-the-art equipment and expert
                  team ensure every project meets the highest standards of quality and precision.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From medical equipment marking to personalized gifts, we provide tailored solutions for businesses of
                  all sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#002B5C] mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Card
                  key={industry.name}
                  className="hover:shadow-lg transition-shadow border-[#A5ACAF] overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={`${industry.name} laser services - ${industry.description}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#002B5C]">{industry.name}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#002B5C] text-[#002B5C] hover:bg-[#002B5C] hover:text-white"
                    >
                      <Link href={industry.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#002B5C] mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us today to discuss your laser service needs and get a custom quote
            </p>
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
