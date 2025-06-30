import type React from "react"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "./HeroSection"

interface ServiceCategoryTemplateProps {
  title: string
  description: string
  heroImage: string
  imageAlt: string
  serviceItems: string[]
  ctaText: string
  ctaLink: string
  secondaryCtaText: string
  secondaryCtaLink: string
  expertiseContent: React.ReactNode
  locationContent: React.ReactNode
  additionalContent: React.ReactNode
}

export default function ServiceCategoryTemplate({
  title,
  description,
  heroImage,
  imageAlt,
  serviceItems,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  expertiseContent,
  locationContent,
  additionalContent,
}: ServiceCategoryTemplateProps) {
  return (
    <>
      <HeroSection title={title} description={description} backgroundImage={heroImage} />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">{title} - Engrave Everything's Expertise</h2>
              <p className="text-gray-700 mb-6">{description}</p>
              {expertiseContent}
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={heroImage || "/placeholder.svg"}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">{imageAlt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Specific Applications for {title}</h2>
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-semibold text-hub-blue mb-4">Our Core Offerings</h3>
                  <p className="text-gray-700 mb-4">
                    Here are the key services we provide within the {title.toLowerCase()} category, designed to meet
                    your specific needs with precision and quality.
                  </p>
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={heroImage || "/placeholder.svg"} // Using hero image as a general placeholder for this section
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Service Items:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceItems.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="section-padding">
        <div className="container-max">{additionalContent}</div>
      </section>

      {/* Local Service Area */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Serving {title} Needs Across Washington DC, Maryland, and Northern Virginia
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Engrave Everything is your trusted local partner for {title.toLowerCase()} in the DMV area. Our Hagerstown
              facility provides quick, reliable service to businesses and individuals throughout the region.
            </p>
          </div>
          {locationContent}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-hub-blue mb-4">Ready to Start Your {title} Project?</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact Engrave Everything today to discuss your {title.toLowerCase()} needs. Our experts are ready to
            provide a personalized quote and ensure your project is a success.
          </p>
          <div className="space-x-4">
            <Link href={ctaLink} className="btn-primary">
              {ctaText}
            </Link>
            <Link href={secondaryCtaLink} className="btn-secondary">
              {secondaryCtaText}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
