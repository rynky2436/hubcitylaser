import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"
import { SITE_CONFIG } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { defaultLocationImage } from "@/lib/location-images"

type Nearby = { name: string; href: string }

export type LocationTemplateProps = {
  title: string
  description: string
  keywords?: string
  image?: string
  locationName: string
  locationLandmark?: string
  zipCodes?: string[]
  nearbyLocations?: Nearby[]
  // Service-area controls
  areaServed?: string // e.g., "Washington, D.C."
  serviceAreaBusiness?: boolean // when true, render ServiceAreaBusiness JSON-LD (no address)
  serviceAreaNote?: string // visible content note like "Servicing Washington, D.C."
}

export function generateMetadata(data: {
  title: string
  description: string
  keywords?: string
  image?: string
  locationName?: string
}): Metadata {
  const ogImage =
    data.image || (data.locationName ? defaultLocationImage(data.locationName) : "/images/brand-default-og.png")
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [{ url: ogImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [ogImage],
    },
  }
}

export default function LocationTemplate(props: LocationTemplateProps) {
  const {
    title,
    description,
    image,
    locationName,
    locationLandmark,
    zipCodes = [],
    nearbyLocations = [],
    areaServed,
    serviceAreaBusiness,
    serviceAreaNote,
  } = props

  const imgPath = image ?? defaultLocationImage(locationName)

  const jsonLd = serviceAreaBusiness
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        additionalType: "https://schema.org/ServiceAreaBusiness",
        name: SITE_CONFIG.brandName,
        url: "https://engraveeverything.us",
        telephone: SITE_CONFIG.phoneHref,
        email: SITE_CONFIG.email,
        areaServed: areaServed ? { "@type": "AdministrativeArea", name: areaServed } : undefined,
      }
    : null

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Page-level JSON-LD for service-area pages */}
      {jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Laser Engraving Services — {locationName}</h1>
        {serviceAreaNote && <p className="mt-2 text-sm text-gray-600">{serviceAreaNote}</p>}
      </header>

      <section className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-gray-800">{description}</p>
          {locationLandmark && <p className="mt-3 text-gray-600">Landmark: {locationLandmark}</p>}
          {zipCodes.length > 0 && !serviceAreaBusiness && (
            <p className="mt-2 text-gray-600">ZIP codes served: {zipCodes.join(", ")}</p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
              className={cn(
                "inline-flex items-center rounded-md px-4 py-2 text-white",
                "bg-[#002B5C] hover:opacity-90",
              )}
              aria-label="Book a laser engraving consultation"
            >
              Book Consultation
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phoneHref}`}
              className="inline-flex items-center rounded-md border border-[#002B5C] px-4 py-2 text-[#002B5C] hover:bg-[#002B5C]/5"
              aria-label={`Call ${SITE_CONFIG.phoneDisplay}`}
            >
              Call {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-gray-200">
          <Image
            src={imgPath || "/placeholder.svg"}
            alt={`Engraving services in ${locationName}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {nearbyLocations.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Nearby areas</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {nearbyLocations.map((loc) => (
              <li key={loc.href}>
                <Link className="text-[#002B5C] underline underline-offset-2 hover:no-underline" href={loc.href}>
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
