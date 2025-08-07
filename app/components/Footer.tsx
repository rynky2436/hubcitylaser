import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/ez-engrave-everything-logo-new.png"
                alt={`${SITE_CONFIG.brandName} logo`}
                width={150}
                height={48}
                className="h-10 w-auto"
              />
              <span className="sr-only">{SITE_CONFIG.brandName}</span>
            </Link>
            <p className="text-sm text-gray-600">
              Precision laser engraving for businesses and individuals across the DC, MD, and Northern VA region.
            </p>
            <div className="flex gap-2">
              <Button asChild className="bg-[#002B5C] text-white hover:bg-[#002B5C]/90">
                <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book Consultation
                </a>
              </Button>
              <Button asChild variant="outline" className="border-[#A5ACAF] text-[#002B5C] hover:bg-[#A5ACAF]/10">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-3 text-sm font-semibold tracking-wide text-[#002B5C]">Services</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/services/business-signage" className="hover:underline">Business Signage & Displays</Link></li>
              <li><Link href="/services/industrial-identification" className="hover:underline">Industrial Identification</Link></li>
              <li><Link href="/services/awards-recognition" className="hover:underline">Awards & Recognition</Link></li>
              <li><Link href="/services/promotional-items" className="hover:underline">Promotional Items</Link></li>
              <li><Link href="/services/personalized-gifts" className="hover:underline">Personalized Gifts</Link></li>
              <li><Link href="/services/tri-layer-acrylic-engraving" className="hover:underline">Tri-Layer Acrylic</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h2 className="mb-3 text-sm font-semibold tracking-wide text-[#002B5C]">Industries</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link href="/medical" className="hover:underline">Medical & Healthcare</Link></li>
              <li><Link href="/professional" className="hover:underline">Professional Services</Link></li>
              <li><Link href="/restaurants" className="hover:underline">Restaurants</Link></li>
              <li><Link href="/real-estate" className="hover:underline">Real Estate</Link></li>
              <li><Link href="/industrial" className="hover:underline">Industrial</Link></li>
              <li><Link href="/retail" className="hover:underline">Retail</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-3 text-sm font-semibold tracking-wide text-[#002B5C]">Contact</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#002B5C]" aria-hidden />
                <a href={`tel:${SITE_CONFIG.phoneHref}`} className="hover:underline">{SITE_CONFIG.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2 break-all">
                <Mail className="h-4 w-4 text-[#002B5C]" aria-hidden />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:underline">{SITE_CONFIG.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
