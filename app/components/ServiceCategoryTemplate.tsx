import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServiceCategoryTemplateProps {
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
  ctaLink: string
  secondaryCtaText: string
  secondaryCtaLink: string
}

export default function ServiceCategoryTemplate({
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
  detailedServices = [], // Default to empty array
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: ServiceCategoryTemplateProps) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative w-full h-[500px] flex items-center justify-center text-center text-white">
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt={description}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 px-4 md:px-6 max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
            <p className="text-lg md:text-xl">{heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#A5ACAF] text-[#002B5C] hover:bg-gray-300">
                <Link href={ctaLink}>{ctaButtonText}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-[#002B5C] bg-transparent"
              >
                <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-[#002B5C]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{overviewTitle}</h2>
                <p className="text-lg leading-relaxed">{overviewParagraph1}</p>
                <p className="text-lg leading-relaxed">{overviewParagraph2}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#002B5C] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold">{overviewFeature1Title}</h3>
                      <p className="text-gray-600">{overviewFeature1Description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#002B5C] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold">{overviewFeature2Title}</h3>
                      <p className="text-gray-600">{overviewFeature2Description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src={overviewImage || "/placeholder.svg"}
                  alt={overviewImageAlt}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 text-[#002B5C]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">{detailedServicesTitle}</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {detailedServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    width={400}
                    height={250}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-[#002B5C]">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {service.applications.map((app, appIndex) => (
                        <li key={appIndex}>{app}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002B5C] text-white text-center">
          <div className="container px-4 md:px-6 max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{ctaTitle}</h2>
            <p className="text-lg md:text-xl">{ctaDescription}</p>
            <Button asChild className="bg-[#A5ACAF] text-[#002B5C] hover:bg-gray-300">
              <Link href={ctaLink}>{ctaButtonText}</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
