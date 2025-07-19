import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "./HeroSection"

interface IndustryTemplateProps {
  title: string
  description: string
  keywords: string
  heroDescription: string
  backgroundImage: string
  overviewTitle: string
  overviewParagraph1: string
  overviewParagraph2: string
  overviewImage: string
  overviewImageAlt: string
  overviewFeature1Title: string
  overviewFeature1Description: string
  overviewFeature2Title: string
  overviewFeature2Description: string
  detailedServicesTitle: string
  detailedServices: {
    title: string
    description: string
    applications: string[]
    image: string
    alt: string
  }[]
  ctaTitle: string
  ctaDescription: string
  ctaButtonText: string
}

export function generateMetadata({ title, description, keywords }: IndustryTemplateProps): Metadata {
  return {
    title,
    description,
    keywords,
  }
}

export default function IndustryTemplate({
  title,
  description,
  keywords,
  heroDescription,
  backgroundImage,
  overviewTitle,
  overviewParagraph1,
  overviewParagraph2,
  overviewImage,
  overviewImageAlt,
  overviewFeature1Title,
  overviewFeature1Description,
  overviewFeature2Title,
  overviewFeature2Description,
  detailedServicesTitle,
  detailedServices = [], // Ensure detailedServices defaults to an empty array
  ctaTitle,
  ctaDescription,
  ctaButtonText,
}: IndustryTemplateProps) {
  return (
    <>
      <HeroSection title={title} description={heroDescription} backgroundImage={backgroundImage} />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">{overviewTitle}</h2>
              <p className="text-gray-700 mb-6">{overviewParagraph1}</p>
              <p className="text-gray-700 mb-6">{overviewParagraph2}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">{overviewFeature1Title}</h4>
                  <p className="text-gray-600 text-sm">{overviewFeature1Description}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">{overviewFeature2Title}</h4>
                  <p className="text-gray-600 text-sm">{overviewFeature2Description}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={overviewImage || "/placeholder.svg"}
                  alt={overviewImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">{overviewImageAlt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">{detailedServicesTitle}</h2>
          <div className="space-y-12">
            {detailedServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold text-hub-blue mb-4">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">Applications:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">{ctaDescription}</p>
          <div className="space-x-4">
            <Link
              href="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaButtonText}
            </Link>
            <Link href="/services" className="btn-primary bg-white text-hub-blue hover:bg-gray-100">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
