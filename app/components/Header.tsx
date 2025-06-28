"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  const industries = [
    { name: "Medical", href: "/medical" },
    { name: "Professional", href: "/professional" },
    { name: "Restaurants", href: "/restaurants" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Agriculture", href: "/agriculture" },
    { name: "Retail", href: "/retail" },
    { name: "Industrial", href: "/industrial" },
    { name: "Technology", href: "/tech" },
    { name: "Hospitality", href: "/hospitality" },
  ]

  const materialServices = [
    { name: "Wood Engraving", href: "/services/wood-engraving" },
    { name: "Metal Cutting & Marking", href: "/services/metal-cutting" },
    { name: "Glass Etching", href: "/services/glass-etching" },
    { name: "Acrylic Signs & Displays", href: "/services/acrylic-signs" },
    { name: "All Services", href: "/services" },
  ]

  return (
    <header className="bg-hub-blue text-hub-white shadow-lg">
      <nav className="container-max" aria-label="Main Navigation">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3" aria-label="Engrave Everything - Home">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/images/engrave-everything-logo.png"
                alt="Engrave Everything Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-hub-silver transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button
                className="hover:text-hub-silver transition-colors"
                aria-expanded={isIndustriesDropdownOpen}
                aria-haspopup="true"
                onClick={() => setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen)}
              >
                Industries
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-hub-white text-gray-900 rounded-lg shadow-lg transition-all duration-200 z-50 ${
                  isIndustriesDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                role="menu"
              >
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    role="menuitem"
                    onClick={() => setIsIndustriesDropdownOpen(false)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button
                className="hover:text-hub-silver transition-colors"
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                Services
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-60 bg-hub-white text-gray-900 rounded-lg shadow-lg transition-all duration-200 z-50 ${
                  isServicesDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                role="menu"
              >
                {materialServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    role="menuitem"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="https://engraveeverything.us/shop/" className="hover:text-hub-silver transition-colors">
              Gifts
            </Link>
            <Link href="https://www.barrelvinedesigns.com/" className="hover:text-hub-silver transition-colors">
              Breweries Winery
            </Link>
            <Link href="/contact" className="hover:text-hub-silver transition-colors">
              Contact
            </Link>
            <a
              href="tel:+12401234567" // Replace with your actual phone number
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              aria-label="Call us now"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call Now</span>
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <a
              href="tel:+12401234567" // Replace with your actual phone number
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-1"
              aria-label="Call us now"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm">Call</span>
            </a>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4" role="menu">
            <Link
              href="/"
              className="block py-2 hover:text-hub-silver"
              role="menuitem"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button
              className="block w-full text-left py-2 hover:text-hub-silver"
              onClick={() => setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen)}
              aria-expanded={isIndustriesDropdownOpen}
            >
              Industries
            </button>
            {isIndustriesDropdownOpen && (
              <div className="pl-4">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block py-2 hover:text-hub-silver"
                    role="menuitem"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            )}
            <button
              className="block w-full text-left py-2 hover:text-hub-silver"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              aria-expanded={isServicesDropdownOpen}
            >
              Services
            </button>
            {isServicesDropdownOpen && (
              <div className="pl-4">
                {materialServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-2 hover:text-hub-silver"
                    role="menuitem"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="https://engraveeverything.us/shop/"
              className="block py-2 hover:text-hub-silver"
              role="menuitem"
              onClick={() => setIsMenuOpen(false)}
            >
              Gifts
            </Link>
            <Link
              href="https://www.barrelvinedesigns.com/"
              className="block py-2 hover:text-hub-silver"
              role="menuitem"
              onClick={() => setIsMenuOpen(false)}
            >
              Breweries Winery
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-hub-silver"
              role="menuitem"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
