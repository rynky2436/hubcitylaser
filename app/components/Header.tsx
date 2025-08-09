"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/site-config"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleMobile = () => setMobileOpen((v) => !v)

  // Defensive fallbacks to prevent runtime crashes if config is partial
  const PRIMARY = SITE_CONFIG.colors?.primary ?? "#002B5C"
  const SECONDARY = SITE_CONFIG.colors?.secondary ?? "#A5ACAF"
  const WHITE = SITE_CONFIG.colors?.white ?? "#FFFFFF"

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="w-full" style={{ backgroundColor: PRIMARY, color: WHITE }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SITE_CONFIG.phoneHref}`}
              className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-white/70 rounded-sm"
              aria-label={`Call ${SITE_CONFIG.brandName} at ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <strong>{SITE_CONFIG.phoneDisplay}</strong>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="hidden sm:flex items-center gap-2 text-white/90 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white/70 rounded-sm"
              aria-label={`Email ${SITE_CONFIG.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {SITE_CONFIG.email}
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link className="hover:underline" href="/services">
              Services
            </Link>
            <Link className="hover:underline" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE_CONFIG.brandName} home`}>
          <Image
            src={SITE_CONFIG.assets?.logo ?? "/placeholder.svg?height=56&width=180&query=brand%20logo%20fallback"}
            alt={`${SITE_CONFIG.brandName} logo`}
            width={180}
            height={56}
            className="h-12 w-auto"
            priority
          />
          <span className="sr-only">{SITE_CONFIG.brandName}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" style={{ color: PRIMARY }}>
          <Link href="/" className="transition-colors" style={{ color: PRIMARY }}>
            Home
          </Link>

          {/* Industries */}
          <div className="relative">
            <button
              className="flex items-center transition-colors"
              onMouseEnter={() => setOpenDropdown("industries")}
              onMouseLeave={() => setOpenDropdown((cur) => (cur === "industries" ? null : cur))}
              aria-haspopup="true"
              aria-expanded={openDropdown === "industries"}
            >
              Industries <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {openDropdown === "industries" && (
              <div
                className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                onMouseEnter={() => setOpenDropdown("industries")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/medical"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Medical & Healthcare
                </Link>
                <Link
                  href="/professional"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Professional Services
                </Link>
                <Link
                  href="/restaurants"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Restaurants
                </Link>
                <Link
                  href="/real-estate"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Real Estate
                </Link>
                <Link
                  href="/agriculture"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Agriculture
                </Link>
                <Link
                  href="/retail"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Retail
                </Link>
                <Link
                  href="/industrial"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Industrial
                </Link>
                <Link
                  href="/tech"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Technology
                </Link>
                <Link
                  href="/hospitality"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Hospitality
                </Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="relative">
            <button
              className="flex items-center transition-colors"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown((cur) => (cur === "services" ? null : cur))}
              aria-haspopup="true"
              aria-expanded={openDropdown === "services"}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {openDropdown === "services" && (
              <div
                className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href="/services"
                  className="block px-4 py-3 text-sm font-medium text-[#002B5C] hover:bg-gray-50 border-b border-gray-100"
                >
                  All Services
                </Link>
                <Link
                  href="/services/business-signage"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Business Signage & Displays
                </Link>
                <Link
                  href="/services/industrial-identification"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Industrial Identification
                </Link>
                <Link
                  href="/services/awards-recognition"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Awards & Recognition
                </Link>
                <Link
                  href="/services/promotional-items"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Promotional Items
                </Link>
                <Link
                  href="/services/personalized-gifts"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Personalized Gifts
                </Link>
                <Link
                  href="/services/tri-layer-acrylic-engraving"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]"
                >
                  Tri-Layer Acrylic Engraving
                </Link>
              </div>
            )}
          </div>

          <Link href="/events-occasions" className="transition-colors">
            Events &amp; Occasions
          </Link>
          <Link href="/areas-we-serve" className="transition-colors">
            Locations
          </Link>
          <Link href="/blog" className="transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <Button asChild className="text-white" style={{ backgroundColor: PRIMARY }}>
            <a href={`tel:${SITE_CONFIG.phoneHref}`} aria-label={`Tap to call ${SITE_CONFIG.phoneDisplay}`}>
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {SITE_CONFIG.phoneDisplay}
            </a>
          </Button>
          <Button asChild style={{ backgroundColor: SECONDARY, color: PRIMARY }}>
            <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer">
              {SITE_CONFIG.cta?.label ?? "Book Consultation"}
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md"
          style={{ color: PRIMARY }}
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3" style={{ color: PRIMARY }}>
            <Link href="/" className="block hover:opacity-80">
              Home
            </Link>
            <Link href="/services" className="block hover:opacity-80">
              Services
            </Link>
            <Link href="/events-occasions" className="block hover:opacity-80">
              Events &amp; Occasions
            </Link>
            <Link href="/areas-we-serve" className="block hover:opacity-80">
              Locations
            </Link>
            <Link href="/blog" className="block hover:opacity-80">
              Blog
            </Link>
            <Link href="/contact" className="block hover:opacity-80">
              Contact
            </Link>

            <div className="mt-4 flex flex-wrap gap-2">
              <Button asChild className="text-white" style={{ backgroundColor: PRIMARY }}>
                <a href={`tel:${SITE_CONFIG.phoneHref}`} aria-label={`Tap to call ${SITE_CONFIG.phoneDisplay}`}>
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </Button>
              <Button asChild style={{ backgroundColor: SECONDARY, color: PRIMARY }}>
                <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  {SITE_CONFIG.cta?.label ?? "Book Consultation"}
                </a>
              </Button>
            </div>

            <div className="mt-3 text-sm opacity-80">
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:underline">
                {SITE_CONFIG.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
