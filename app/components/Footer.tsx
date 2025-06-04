import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-hub-blue text-hub-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/images/engrave-everything-logo.png"
                  alt="Engrave Everything Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-hub-silver mb-4">
              Professional laser engraving and cutting services on wood, metal, glass, and all materials. Located in
              Hagerstown, Maryland serving MD, DE, VA businesses.
            </p>
            <div className="text-hub-silver">
              <p>Hagerstown, Maryland</p>
              <p>Serving MD, DE, VA</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Laser Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#wood-engraving"
                  className="text-hub-silver hover:text-hub-white transition-colors"
                >
                  Wood Laser Engraving
                </Link>
              </li>
              <li>
                <Link href="/services#metal-cutting" className="text-hub-silver hover:text-hub-white transition-colors">
                  Metal Laser Cutting
                </Link>
              </li>
              <li>
                <Link href="/services#glass-etching" className="text-hub-silver hover:text-hub-white transition-colors">
                  Glass Laser Etching
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-hub-silver hover:text-hub-white transition-colors">
                  Custom Laser Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Industries Served</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/medical" className="text-hub-silver hover:text-hub-white transition-colors">
                  Medical Device Engraving
                </Link>
              </li>
              <li>
                <Link href="/industrial" className="text-hub-silver hover:text-hub-white transition-colors">
                  Industrial Laser Marking
                </Link>
              </li>
              <li>
                <Link href="/professional" className="text-hub-silver hover:text-hub-white transition-colors">
                  Professional Office Signs
                </Link>
              </li>
              <li>
                <Link href="/restaurants" className="text-hub-silver hover:text-hub-white transition-colors">
                  Restaurant Laser Engraving
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-hub-silver">
              <li>Hagerstown, Maryland</li>
              <li>Maryland (MD) Statewide</li>
              <li>Delaware (DE) All Counties</li>
              <li>Virginia (VA) Northern Region</li>
              <li>Washington County MD</li>
              <li>Frederick County MD</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hub-silver mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-hub-silver">
              <p>&copy; {new Date().getFullYear()} Engrave Everything Hagerstown MD. All rights reserved.</p>
            </div>
            <div className="text-hub-silver md:text-right">
              <p>
                Professional Laser Engraving Services |{" "}
                <Link href="/sitemap.xml" className="hover:text-hub-white transition-colors">
                  Sitemap
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
