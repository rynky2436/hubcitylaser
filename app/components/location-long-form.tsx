import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { SITE_CONFIG as RAW_SITE_CONFIG } from "@/lib/site-config"

// Defensive helpers to avoid undefined in SSG
function getBrand() {
  const sc: any = RAW_SITE_CONFIG
  return {
    name: sc?.brandName ?? "Engrave Everything",
    logo: sc?.assets?.logo ?? "/images/engrave-everything-logo-vintage.png",
    alt: "Engrave Everything logo",
  }
}
function getContact() {
  const sc: any = RAW_SITE_CONFIG
  const email = sc?.email ?? "info@engraveeverything.us"
  const phoneDisplay = sc?.phoneDisplay ?? "240-324-7110"
  const phoneHref = sc?.phoneHref ?? "+12403247110"
  return { email, phoneDisplay, phoneHref }
}
function getCta() {
  const sc: any = RAW_SITE_CONFIG
  return {
    label: sc?.cta?.label ?? "Book Consultation",
    url: sc?.cta?.bookConsultationUrl ?? sc?.calendlyUrl ?? "#",
  }
}
function getColors() {
  const sc: any = RAW_SITE_CONFIG
  return {
    primary: sc?.colors?.primary ?? "#002B5C",
    secondary: sc?.colors?.secondary ?? "#A5ACAF",
    background: sc?.colors?.background ?? "#FFFFFF",
    textOnPrimary: sc?.colors?.textOnPrimary ?? "#FFFFFF",
  }
}

export type LongFormLocationProps = {
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
  const description = `Servicing ${locationName}, we provide mobile laser engraving and ship completed orders. Precision engraving on wood, metal, glass, acrylic, and plastic for personal gifts and businesses.`
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

export default function LongFormLocationPage({
  locationName,
  heroImage,
  neighborhoods = [],
  landmarks = [],
  localContextNote,
}: LongFormLocationProps) {
  const brand = getBrand()
  const contact = getContact()
  const cta = getCta()
  const colors = getColors()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/ServiceAreaBusiness",
    name: brand.name,
    url: RAW_SITE_CONFIG?.siteUrl ?? "https://engraveeverything.us",
    areaServed: { "@type": "AdministrativeArea", name: locationName },
    serviceType: "Laser engraving and on‑site engraving",
    telephone: contact.phoneHref,
    email: contact.email,
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {`Engrave Everything – Mobile & On‑Site Laser Engraving for ${locationName}`}
          </h1>
          <p className="mt-3 text-gray-700">
            {`Servicing ${locationName}, we provide mobile laser engraving and ship completed orders.`} This is an
            addition to our established business services—we’re here for both one‑off gifts and large orders.
          </p>
          {localContextNote ? <p className="mt-2 text-gray-600">{localContextNote}</p> : null}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={cta.url}
              className="rounded-md px-4 py-2 font-medium"
              style={{ backgroundColor: colors.primary, color: colors.textOnPrimary }}
              aria-label="Book a laser engraving consultation"
            >
              {cta.label}
            </a>
            <a
              href={`tel:${contact.phoneHref}`}
              className="rounded-md border px-4 py-2 font-medium"
              style={{ borderColor: colors.primary, color: colors.primary }}
              aria-label={`Call ${contact.phoneDisplay}`}
            >
              Call {contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="rounded-md border px-4 py-2 font-medium"
              style={{ borderColor: colors.secondary, color: colors.primary }}
              aria-label={`Email ${contact.email}`}
            >
              {contact.email}
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border">
          <Image
            src={heroImage ?? "/images/brand-default-og.png"}
            alt={`Laser engraving services in ${locationName}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* About Our Services (500+ words) */}
      <section className="prose prose-gray mt-10 max-w-none">
        <h2>About Our Services in {locationName}</h2>
        <p>
          Engrave Everything delivers precision laser engraving across {locationName}. We are a family‑owned business
          that treats every project—whether a single keepsake or a full company rollout—with the same attention to
          detail. Our process focuses on crisp, permanent marks and a smooth client experience from first proof to final
          delivery. We engrave on wood, metal, glass, acrylic, and technical plastics, with workflows dialed in for
          curved, flat, matte, glossy, and coated surfaces. Calibrated power, speed, and focus settings allow us to
          achieve high contrast and legibility on everything from small charms to large plaques.
        </p>
        <p>
          Individuals choose us to personalize items that matter: insulated tumblers and cups, jewelry, charms and
          lockets, watches and watch backs, knives, multi‑tools and EDC gear, perfume and cologne bottles, makeup and
          compact cases, cocktail shakers and barware, water bottles and sports bottles, wallets, passport covers and
          keychains, pet tags, keepsake boxes, and other personal gifts. Many projects involve initials, names, dates,
          coordinates, or short messages that turn an everyday object into a one‑of‑a‑kind piece. We help you select
          fonts, sizes, and placements that complement the material and ensure long‑term durability.
        </p>
        <p>
          For organizations operating in and around {locationName}, we produce office and venue signage, wayfinding,
          nameplates, donor and recognition plaques, awards, branded promotional items, equipment tags, durable UID and
          compliance labels, and panel overlays. We maintain engrave‑ready artwork and settings so reorders are easy and
          consistent. Whether you are outfitting a new space, planning an event, or standardizing asset identification,
          we offer timelines and pricing that match your needs.
        </p>
        <p>
          Turnaround is streamlined: we start with a brief consultation to confirm artwork and layout, provide clear
          proofs, and schedule production. One‑off consumer projects are typically quick; larger orders are planned to
          meet event or deployment dates. We offer mobile on‑site engraving where appropriate and secure shipping so
          finished pieces arrive ready to present or install.
        </p>

        <h3>Popular Items We Engrave</h3>
        <div className="grid gap-2 sm:grid-cols-2">
          <ul className="list-disc pl-6">
            <li>Insulated tumblers (YETI‑style cups) and cups</li>
            <li>Jewelry, charms and lockets</li>
            <li>Watches and watch backs</li>
            <li>Knives, multi‑tools and EDC gear</li>
            <li>Perfume and cologne bottles</li>
          </ul>
          <ul className="list-disc pl-6">
            <li>Makeup and compact cases</li>
            <li>Cocktail shakers and barware</li>
            <li>Water bottles and sports bottles</li>
            <li>Wallets, passport covers and keychains</li>
            <li>Pet tags, keepsake boxes and other personal gifts</li>
          </ul>
        </div>

        <h3>On‑Site & Pop‑Up Services</h3>
        <p>
          We offer live engraving for weddings, corporate parties, store openings, markets, and influencer events in the
          region. Guests watch their items being customized, creating a memorable experience and a premium takeaway. If
          you have a single item, bring it to one of our pop‑ups for immediate engraving—perfect for last‑minute gifts.
        </p>

        <h3>Why Choose Us</h3>
        <ul className="list-disc pl-6">
          <li>Family‑owned service with responsive communication</li>
          <li>High‑quality marks on wood, metal, glass, acrylic, and plastic</li>
          <li>Quick turnaround and dependable scheduling</li>
          <li>Great for one‑off gifts or bulk orders—consistent results every time</li>
          <li>Customers in {locationName} consistently rate us highly for quality and service</li>
        </ul>
      </section>

      {/* Local Connections */}
      {(neighborhoods.length > 0 || landmarks.length > 0) && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Local Connections & Landmarks</h2>
          {neighborhoods.length > 0 && (
            <p className="text-gray-700">Frequently served neighborhoods: {neighborhoods.join(", ")}.</p>
          )}
          {landmarks.length > 0 && (
            <p className="text-gray-700">Landmarks and venues where our work fits perfectly: {landmarks.join(", ")}.</p>
          )}
        </section>
      )}

      {/* Service Area & Contact */}
      <section className="mt-12 rounded-md border p-6">
        <h2 className="text-2xl font-semibold">Service Area & Contact</h2>
        <p className="mt-2 text-gray-800">
          We are a service‑area business. We don’t list a walk‑in address in {locationName}. Book a consultation or
          request a quote and we’ll coordinate mobile service or shipping.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={cta.url}
            className="rounded-md px-4 py-2 font-medium"
            style={{ backgroundColor: colors.primary, color: colors.textOnPrimary }}
          >
            {cta.label}
          </a>
          <a
            href={`tel:${contact.phoneHref}`}
            className="rounded-md border px-4 py-2 font-medium"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            Call {contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-md border px-4 py-2 font-medium"
            style={{ borderColor: colors.secondary, color: colors.primary }}
          >
            {contact.email}
          </a>
          <Link href="/contact" className="rounded-md border px-4 py-2 font-medium" style={{ borderColor: "#E5E7EB" }}>
            Contact Form
          </Link>
        </div>
      </section>
    </main>
  )
}
