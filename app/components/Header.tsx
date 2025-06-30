import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-hub-blue text-hub-white">
      <Link className="flex items-center gap-2" href="/">
        <Image src="/images/logo-blk.png" alt="Engrave Everything Logo" width={90} height={23} className="h-auto" />
        <span className="sr-only">Engrave Everything</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link className="font-medium hover:underline underline-offset-4" href="/">
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
        <Link className="font-medium hover:underline underline-offset-4" href="/gifts">
          Gifts
        </Link>
        <Link className="font-medium hover:underline underline-offset-4" href="/blog">
          Blog
        </Link>
        <Link className="font-medium hover:underline underline-offset-4" href="/contact">
          Contact
        </Link>
        <Button className="bg-hub-silver text-hub-blue hover:bg-hub-silver/90" asChild>
          <a href="tel:2403247110">Call Now: (240) 324-7110</a>
        </Button>
      </nav>
      <div className="md:hidden">
        <Button variant="ghost" size="icon">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
