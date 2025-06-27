"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                aria-expanded={isMenuOpen}
                aria-haspopup="true"
              >
                Industries
              </button>
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-hub-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                role="menu"
              >
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    role="menuitem"
                  >
                    {industry.name}
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
            <Link href="/services" className="hover:text-hub-silver transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-hub-silver transition-colors">
              Contact
            </Link>
            <a
              href="tel:"
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
              href="tel:"
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
            <Link href="/" className="block py-2 hover:text-hub-silver" role="menuitem">
              Home
            </Link>
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="block py-2 hover:text-hub-silver"
                role="menuitem"
              >
                {industry.name}
              </Link>
            ))}
            <Link
              href="https://engraveeverything.us/shop/"
              className="block py-2 hover:text-hub-silver"
              role="menuitem"
            >
              Gifts
            </Link>
            <Link
              href="https://www.barrelvinedesigns.com/"
              className="block py-2 hover:text-hub-silver"
              role="menuitem"
            >
              Breweries Winery
            </Link>
            <Link href="/services" className="block py-2 hover:text-hub-silver" role="menuitem">
              Services
            </Link>
            <Link href="/contact" className="block py-2 hover:text-hub-silver" role="menuitem">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
