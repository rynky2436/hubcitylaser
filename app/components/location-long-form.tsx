import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { SITE_CONFIG } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type LongFormLocationProps = {
  locationName: string
  heroImage?: string
  neighborhoods?: string[]
  landmarks?: string[]
  localContextNote?: string
}

export function generateLocationMetadata({
  locationName,
  heroImage,
}: {
  locationName: string
  heroImage?: string
}): Metadata {
  const title = `Engrave Everything – Mobile & On‑Site Laser Engraving for ${locationName}`
  const description = `Family‑owned laser engraving serving ${locationName}. We engrave wood, metal, glass, acrylic, and plastics for personal gifts and corporate needs. Mobile service and shipping available—no storefront required.`
  const og = heroImage || "/images/brand-default-og.png"
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: og }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [og],
    },
  }
}

function ServicesCopy({ locationName }: { locationName: string }) {
  return (
    <div className="space-y-4 text-gray-800">
      <p>
        Engrave Everything delivers precision laser engraving throughout {locationName}. We are a family‑owned shop
        focused on quality craftsmanship and clean, permanent marks on materials customers use every day. Whether you
        need a single personalized gift or a repeatable solution for your team or business, our process is dialed to
        deliver excellent results with quick turnaround and clear communication.
      </p>
      <p>
        Our equipment is calibrated for consistent depth and contrast on wood, coated and bare metals, glass, acrylic,
        and technical plastics. We routinely engrave fine text, serial numbers, barcodes, patterns, and logos while
        maintaining edge clarity on curved, textured, and reflective surfaces. Surface preparation, fixturing, and test
        passes are included in our workflow so your item looks great the first time—no surprises.
      </p>
      <p>
        Consumers in {locationName} often ask us to personalize everyday carry and lifestyle items. We engrave
        stainless‑steel and powder‑coated tumblers (including popular insulated cup brands), jewelry and charms,
        watches, pocket knives and multi‑tools, perfume and cologne bottles, makeup and brush cases, cocktail shakers,
        water bottles, phone and tablet cases, wallets, passport covers, keychains, pet tags, and keepsake boxes. If
        it’s wood, metal, glass, acrylic, or plastic and can be safely engraved, we’ll help you make it uniquely yours.
      </p>
      <p>
        For organizations, we produce lobby and door signage, wayfinding, desk and wall nameplates, donor and
        recognition plaques, employee awards, badges, branded promotional items, equipment tags, UID/data plates,
        compliance labels, panel overlays, and durable labels that stand up to daily use. We maintain artwork and
        settings so reorders are easy. We can engrave your supplied items or source blank stock on your behalf.
      </p>
      <p>
        Every project starts with a quick consult to confirm artwork, layout, and material. Approvals are provided via
        proof, and most consumer projects are turned around quickly. Corporate orders can be scheduled to meet event or
        deployment timelines, and bulk pricing is available. We also offer on‑site engraving for qualified projects and
        pop‑ups where your audience can watch their items being personalized live.
      </p>
    </div>
  )
}

export default function LongFormLocationPage({
  locationName,
  heroImage,
  neighborhoods = [],
  landmarks = [],
  localContextNote,
}: LongFormLocationProps) {
  const primary = SITE_CONFIG?.colors?.primary ?? "#002B5C"
  const siteUrl = SITE_CONFIG?.siteUrl ?? "https://engraveeverything.us"
  const phoneDisplay = SITE_CONFIG.phoneDisplay
  const phoneHref = SITE_CONFIG.phoneHref
  const email = SITE_CONFIG.email
  const calendly = SITE_CONFIG.calendlyUrl

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ServiceAreaBusiness",
    name: SITE_CONFIG.brandName,
    url: siteUrl,
    areaServed: locationName,
    serviceType: "Laser engraving and on‑site engraving",
    telephone: phoneDisplay,
    email,
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {`Engrave Everything – Mobile & On‑Site Laser Engraving for ${locationName}`}
          </h1>
          <p className="mt-3 text-gray-700">
            {`Servicing ${locationName}, we provide mobile laser engraving and ship completed orders. No storefront is required—schedule a visit or book a consultation and we'll come to you when needed.`}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={calendly}
              className={cn("inline-flex items-center rounded-md px-4 py-2 text-white", "shadow-sm transition-opacity")}
              style={{ backgroundColor: primary }}
              aria-label="Book a laser engraving consultation"
            >
              Book Consultation
            </Link>
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex items-center rounded-md border px-4 py-2 text-[#002B5C] hover:bg-[#002B5C]/5"
              aria-label={`Call ${phoneDisplay}`}
            >
              Call {phoneDisplay}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center rounded-md border px-4 py-2 text-[#002B5C] hover:bg-[#002B5C]/5"
              aria-label={`Email ${email}`}
            >
              {email}
            </a>
          </div>
        </div>
        {heroImage && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
            <Image
              src={heroImage || "/placeholder.svg"}
              alt={`Laser engraving services in ${locationName}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </section>

      {/* About Our Services */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">About Our Services in {locationName}</h2>
        <ServicesCopy locationName={locationName} />
        <div className="mt-4">
          <h3 className="mb-2 font-semibold">Popular consumer items we engrave</h3>
          <ul className="grid list-disc gap-1 pl-6 sm:grid-cols-2">
            <li>Insulated tumblers and cups</li>
            <li>Jewelry, charms, and lockets</li>
            <li>Watches and watch backs</li>
            <li>Knives, multi‑tools, and EDC gear</li>
            <li>Perfume and cologne bottles</li>
            <li>Makeup, brush, and compact cases</li>
            <li>Cocktail shakers and barware</li>
            <li>Water bottles and sports bottles</li>
            <li>Wallets, passport covers, and keychains</li>
            <li>Pet tags, ID tags, and keepsake boxes</li>
          </ul>
        </div>
      </section>

      {/* On‑Site & Pop‑Up Events */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">On‑Site & Pop‑Up Engraving in {locationName}</h2>
        <p className="text-gray-800">
          We travel within {locationName} for weddings, corporate parties, store openings, brand activations, farmers
          markets, and influencer events. Our compact setup allows us to engrave items live while your guests watch.
          Live personalization creates a memorable moment and sends attendees home with a premium, customized gift.
        </p>
        <p className="text-gray-800">
          Prefer to bring a single item? Visit one of our local pop‑ups in {locationName} and we’ll engrave your
          tumbler, bottle, keepsake, or gift while you wait. Contact us for the current pop‑up schedule or to request an
          on‑site activation at your venue.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Why Choose Engrave Everything</h2>
        <ul className="grid list-disc gap-2 pl-6 sm:grid-cols-2">
          <li>Family‑owned business with responsive, personal service</li>
          <li>Quick turnaround and clear proofs before engraving</li>
          <li>High‑quality, permanent marks on wood, metal, glass, acrylic, and plastics</li>
          <li>One‑off gifts or bulk orders—we’ll size the process to your needs</li>
          <li>On‑site engraving and live pop‑ups available for events</li>
          <li>Consistent settings maintained for painless reorders</li>
          <li>Excellent customer satisfaction from residents and organizations in {locationName}</li>
        </ul>
      </section>

      {/* Local Connections */}
      {(neighborhoods.length > 0 || landmarks.length > 0 || localContextNote) && (
        <section className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">Local Connections in {locationName}</h2>
          {localContextNote && <p className="text-gray-800">{localContextNote}</p>}
          {neighborhoods.length > 0 && (
            <p className="text-gray-800">
              We regularly serve neighborhoods such as {neighborhoods.join(", ")} with mobile engraving and shipping
              across the area.
            </p>
          )}
          {landmarks.length > 0 && (
            <p className="text-gray-800">
              Popular destinations and landmarks where our work fits right in include {landmarks.join(", ")}—perfect
              contexts for alumni gifts, corporate recognition, homeowner signage, and special occasions.
            </p>
          )}
        </section>
      )}

      {/* Service Area & Contact */}
      <section className="mt-12 rounded-md border p-6">
        <h2 className="text-2xl font-semibold">Service Area & Contact</h2>
        <p className="mt-2 text-gray-800">
          We are a service‑area business. We do not list a storefront address in {locationName}. Book a consultation or
          request a quote and we’ll coordinate mobile service or shipping.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href={calendly}
            className="inline-flex items-center rounded-md px-4 py-2 text-white"
            style={{ backgroundColor: primary }}
          >
            Book Consultation
          </Link>
          <a href={`tel:${phoneHref}`} className="inline-flex items-center rounded-md border px-4 py-2 text-[#002B5C]">
            Call {phoneDisplay}
          </a>
          <a href={`mailto:${email}`} className="inline-flex items-center rounded-md border px-4 py-2 text-[#002B5C]">
            Request a Quote: {email}
          </a>
          <Link href="/contact" className="inline-flex items-center rounded-md border px-4 py-2 text-[#002B5C]">
            Contact Form
          </Link>
        </div>
      </section>
    </main>
  )
}
