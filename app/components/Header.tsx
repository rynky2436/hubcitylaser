"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const locations = [
    { name: "Great Falls, VA", href: "/locations/great-falls-va" },
    { name: "McLean, VA", href: "/locations/mclean-va" },
    { name: "Falls Church, VA", href: "/locations/falls-church-va" },
    { name: "Vienna, VA", href: "/locations/vienna-va" },
    { name: "Tysons Corner, VA", href: "/locations/tysons-corner-va" },
    { name: "Potomac, MD", href: "/locations/potomac-md" },
    { name: "Bethesda, MD", href: "/locations/bethesda-md" },
    { name: "Chevy Chase, DC", href: "/locations/chevy-chase-dc" },
    { name: "Georgetown, DC", href: "/locations/georgetown-dc" },
    { name: "Cathedral Heights/AU Park, DC", href: "/locations/cathedral-heights-au-park-dc" },
    { name: "Woodley Park/Cleveland Park, DC", href: "/locations/woodley-park-cleveland-park-dc" },
  ]

  return (
    <header className="bg-hub-blue text-hub-white py-4 shadow-md sticky top-0 z-50">
      <div className="container-max flex justify-between items-center">
        <Link href="/" className="flex items-center" aria-label="Engrave Everything Home">
          <Image
            src="/images/logo-blk.png"
            alt="Engrave Everything Logo"
            width={90}
            height={23}
            className="h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-hub-silver transition-colors">
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="font-medium hover:underline underline-offset-4 text-hub-white">
                Industries
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-hub-blue text-hub-white border-hub-silver">
              <DropdownMenuItem asChild>
                <Link href="/medical">Medical</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/professional">Professional</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/restaurants">Restaurants</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/real-estate">Real Estate</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/agriculture">Agriculture</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/retail">Retail</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/industrial">Industrial</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tech">Tech</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hospitality">Hospitality</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="font-medium hover:underline underline-offset-4 text-hub-white">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-hub-blue text-hub-white border-hub-silver">
              <DropdownMenuItem asChild>
                <Link href="/services/business-signage">Business Signage</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/awards-recognition">Awards & Recognition</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/industrial-identification">Industrial Identification</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/promotional-items">Promotional Items</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/personalized-gifts">Personalized Gifts</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="font-medium hover:underline underline-offset-4 text-hub-white">
                Events & Occasions
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-hub-blue text-hub-white border-hub-silver">
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/weddings">Weddings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/retirement-parties">Retirement Parties</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/baby-showers-gender-reveals">Baby Showers & Gender Reveals</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/anniversaries">Anniversaries</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/graduations">Graduations</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/corporate-events">Corporate Events</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/trade-shows-conferences">Trade Shows & Conferences</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/religious-ceremonies">Religious Ceremonies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/quinceaneras-sweet-16s">Quinceañeras & Sweet 16s</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/holiday-gifts-decor">Holiday Gifts & Decor</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/pet-memorials-celebrations">Pet Memorials & Celebrations</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/events-occasions/school-sports-events">School & Sports Events</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="font-medium hover:underline underline-offset-4 text-hub-white">
                Where We Serve
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-hub-blue text-hub-white border-hub-silver">
              <DropdownMenuItem asChild>
                <Link href="/areas-we-serve">All Areas</Link>
              </DropdownMenuItem>
              <div className="border-t border-hub-silver my-1" />
              {locations.map((loc) => (
                <DropdownMenuItem key={loc.href} asChild>
                  <Link href={loc.href}>{loc.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/blog" className="hover:text-hub-silver transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-hub-silver transition-colors">
            Contact Us
          </Link>
          <a href="tel:240-324-7110" className="btn-primary">
            Call Now: (240) 324-7110
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-hub-white focus:outline-none" aria-label="Open menu">
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-hub-blue px-4 pb-4 pt-2">
          <div className="flex flex-col space-y-2">
            <Link href="/" className="block py-2 hover:text-hub-silver transition-colors" onClick={toggleMobileMenu}>
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-medium hover:underline underline-offset-4 text-hub-white w-full justify-between"
                >
                  Industries
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-hub-blue text-hub-white border-hub-silver w-[calc(100%-2rem)] ml-4">
                <DropdownMenuItem asChild>
                  <Link href="/medical" onClick={toggleMobileMenu}>
                    Medical
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/professional" onClick={toggleMobileMenu}>
                    Professional
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/restaurants" onClick={toggleMobileMenu}>
                    Restaurants
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/real-estate" onClick={toggleMobileMenu}>
                    Real Estate
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/agriculture" onClick={toggleMobileMenu}>
                    Agriculture
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/retail" onClick={toggleMobileMenu}>
                    Retail
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/industrial" onClick={toggleMobileMenu}>
                    Industrial
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tech" onClick={toggleMobileMenu}>
                    Tech
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hospitality" onClick={toggleMobileMenu}>
                    Hospitality
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-medium hover:underline underline-offset-4 text-hub-white w-full justify-between"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-hub-blue text-hub-white border-hub-silver w-[calc(100%-2rem)] ml-4">
                <DropdownMenuItem asChild>
                  <Link href="/services/business-signage" onClick={toggleMobileMenu}>
                    Business Signage
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/awards-recognition" onClick={toggleMobileMenu}>
                    Awards & Recognition
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/industrial-identification" onClick={toggleMobileMenu}>
                    Industrial Identification
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/promotional-items" onClick={toggleMobileMenu}>
                    Promotional Items
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/personalized-gifts" onClick={toggleMobileMenu}>
                    Personalized Gifts
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-medium hover:underline underline-offset-4 text-hub-white w-full justify-between"
                >
                  Events & Occasions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-hub-blue text-hub-white border-hub-silver w-[calc(100%-2rem)] ml-4">
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/weddings" onClick={toggleMobileMenu}>
                    Weddings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/retirement-parties" onClick={toggleMobileMenu}>
                    Retirement Parties
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/baby-showers-gender-reveals" onClick={toggleMobileMenu}>
                    Baby Showers & Gender Reveals
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/anniversaries" onClick={toggleMobileMenu}>
                    Anniversaries
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/graduations" onClick={toggleMobileMenu}>
                    Graduations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/corporate-events" onClick={toggleMobileMenu}>
                    Corporate Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/trade-shows-conferences" onClick={toggleMobileMenu}>
                    Trade Shows & Conferences
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/religious-ceremonies" onClick={toggleMobileMenu}>
                    Religious Ceremonies
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/quinceaneras-sweet-16s" onClick={toggleMobileMenu}>
                    Quinceañeras & Sweet 16s
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/holiday-gifts-decor" onClick={toggleMobileMenu}>
                    Holiday Gifts & Decor
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/pet-memorials-celebrations" onClick={toggleMobileMenu}>
                    Pet Memorials & Celebrations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events-occasions/school-sports-events" onClick={toggleMobileMenu}>
                    School & Sports Events
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="font-medium hover:underline underline-offset-4 text-hub-white w-full justify-between"
                >
                  Where We Serve
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-hub-blue text-hub-white border-hub-silver w-[calc(100%-2rem)] ml-4">
                <DropdownMenuItem asChild>
                  <Link href="/areas-we-serve" onClick={toggleMobileMenu}>
                    All Areas
                  </Link>
                </DropdownMenuItem>
                <div className="border-t border-hub-silver my-1" />
                {locations.map((loc) => (
                  <DropdownMenuItem key={loc.href} asChild>
                    <Link href={loc.href} onClick={toggleMobileMenu}>
                      {loc.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/blog"
              className="block py-2 hover:text-hub-silver transition-colors"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-hub-silver transition-colors"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
            <a href="tel:240-324-7110" className="btn-primary w-full text-center mt-2">
              Call Now: (240) 324-7110
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
