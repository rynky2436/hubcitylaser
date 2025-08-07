import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#002B5C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/ez-engrave-everything-logo-new.png"
                alt="EZ Engrave Everything Logo"
                width={200}
                height={100}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-[#A5ACAF] text-sm leading-relaxed">
              Professional laser engraving services for businesses, organizations, and individuals. 
              Specializing in precision engraving, custom signage, awards, and personalized gifts.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#A5ACAF] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#A5ACAF] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#A5ACAF] hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#A5ACAF] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/business-signage" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Business Signage
                </Link>
              </li>
              <li>
                <Link href="/services/awards-recognition" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link href="/services/industrial-identification" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Industrial Identification
                </Link>
              </li>
              <li>
                <Link href="/services/promotional-items" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Promotional Items
                </Link>
              </li>
              <li>
                <Link href="/services/personalized-gifts" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Personalized Gifts
                </Link>
              </li>
              <li>
                <Link href="/services/tri-layer-acrylic-engraving" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Tri-Layer Acrylic Engraving
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/medical" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Medical & Healthcare
                </Link>
              </li>
              <li>
                <Link href="/professional" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="/restaurants" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/industrial" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Industrial
                </Link>
              </li>
              <li>
                <Link href="/retail" className="text-[#A5ACAF] hover:text-white transition-colors">
                  Retail
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#A5ACAF] flex-shrink-0" />
                <Link href="tel:+1234567890" className="text-[#A5ACAF] hover:text-white transition-colors">
                  (123) 456-7890
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#A5ACAF] flex-shrink-0" />
                <Link href="mailto:info@ezengrave.com" className="text-[#A5ACAF] hover:text-white transition-colors">
                  info@ezengrave.com
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#A5ACAF] flex-shrink-0 mt-0.5" />
                <div className="text-[#A5ACAF]">
                  <div>Washington DC Metro Area</div>
                  <div>Maryland & Virginia</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block bg-[#A5ACAF] text-[#002B5C] px-4 py-2 rounded hover:bg-white transition-colors text-sm font-medium"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#A5ACAF]/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[#A5ACAF]">
              © 2024 EZ Engrave Everything. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-[#A5ACAF] hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#A5ACAF] hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/areas-we-serve" className="text-[#A5ACAF] hover:text-white transition-colors">
                Service Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
