'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/ez-engrave-everything-logo-new.png"
              alt="EZ Engrave Everything Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
              Home
            </Link>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'industries' && (
                <div 
                  className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link href="/medical" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Medical & Healthcare
                  </Link>
                  <Link href="/professional" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Professional Services
                  </Link>
                  <Link href="/restaurants" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Restaurants & Food Service
                  </Link>
                  <Link href="/real-estate" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Real Estate
                  </Link>
                  <Link href="/agriculture" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Agriculture & Farming
                  </Link>
                  <Link href="/retail" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Retail & Commerce
                  </Link>
                  <Link href="/industrial" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Industrial & Manufacturing
                  </Link>
                  <Link href="/tech" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Technology & IT
                  </Link>
                  <Link href="/hospitality" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Hospitality & Tourism
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link href="/services" className="block px-4 py-3 text-sm font-medium text-[#002B5C] hover:bg-gray-50 border-b border-gray-100">
                    All Services
                  </Link>
                  <Link href="/services/business-signage" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Business Signage & Displays
                  </Link>
                  <Link href="/services/industrial-identification" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Industrial Identification
                  </Link>
                  <Link href="/services/awards-recognition" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Awards & Recognition
                  </Link>
                  <Link href="/services/promotional-items" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Promotional Items
                  </Link>
                  <Link href="/services/personalized-gifts" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Personalized Gifts
                  </Link>
                  <Link href="/services/tri-layer-acrylic-engraving" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Tri-Layer Acrylic Engraving
                  </Link>
                </div>
              )}
            </div>

            {/* Events & Occasions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('events')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
                Events & Occasions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'events' && (
                <div 
                  className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link href="/events-occasions" className="block px-4 py-3 text-sm font-medium text-[#002B5C] hover:bg-gray-50 border-b border-gray-100">
                    All Events & Occasions
                  </Link>
                  <Link href="/events-occasions/weddings" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Weddings
                  </Link>
                  <Link href="/events-occasions/corporate-events" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Corporate Events
                  </Link>
                  <Link href="/events-occasions/graduations" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Graduations
                  </Link>
                  <Link href="/events-occasions/anniversaries" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Anniversaries
                  </Link>
                  <Link href="/events-occasions/retirement-parties" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Retirement Parties
                  </Link>
                  <Link href="/events-occasions/holiday-gifts-decor" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Holiday Gifts & Decor
                  </Link>
                  <Link href="/events-occasions/school-sports-events" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    School & Sports Events
                  </Link>
                  <Link href="/events-occasions/trade-shows-conferences" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Trade Shows & Conferences
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('locations')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
                Locations <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'locations' && (
                <div 
                  className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link href="/areas-we-serve" className="block px-4 py-3 text-sm font-medium text-[#002B5C] hover:bg-gray-50 border-b border-gray-100">
                    Areas We Serve
                  </Link>
                  <Link href="/locations/bethesda-md" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Bethesda, MD
                  </Link>
                  <Link href="/locations/potomac-md" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Potomac, MD
                  </Link>
                  <Link href="/locations/frederick-md" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Frederick, MD
                  </Link>
                  <Link href="/locations/mclean-va" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    McLean, VA
                  </Link>
                  <Link href="/locations/great-falls-va" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Great Falls, VA
                  </Link>
                  <Link href="/locations/tysons-corner-va" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Tysons Corner, VA
                  </Link>
                  <Link href="/locations/falls-church-va" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Falls Church, VA
                  </Link>
                  <Link href="/locations/vienna-va" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Vienna, VA
                  </Link>
                  <Link href="/locations/georgetown-dc" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Georgetown, DC
                  </Link>
                  <Link href="/locations/chevy-chase-dc" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#002B5C]">
                    Chevy Chase, DC
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
              Blog
            </Link>

            <Link href="/contact" className="text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
              Contact
            </Link>

            <Button asChild className="bg-[#002B5C] hover:bg-[#A5ACAF] text-white">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
                Services
              </Link>
              <Link href="/events-occasions" className="text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
                Events & Occasions
              </Link>
              <Link href="/areas-we-serve" className="text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
                Locations
              </Link>
              <Link href="/blog" className="text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-[#002B5C] hover:text-[#A5ACAF] transition-colors">
                Contact
              </Link>
              <Button asChild className="bg-[#002B5C] hover:bg-[#A5ACAF] text-white w-fit">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
