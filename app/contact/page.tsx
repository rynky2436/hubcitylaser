import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/site-config'
import ContactForm from './contact-form'
import { Phone, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact | Engrave Everything',
  description:
    'Contact Engrave Everything for laser engraving services. Call 240-324-7110 or email info@engraveeverything.us. Book a consultation or request a quote.',
}

export default function ContactPage() {
  return (
    <main className="min-h-[60vh] bg-white">
      <section className="bg-[#002B5C] text-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-semibold">{'Contact'}</h1>
          <p className="mt-2 text-white/85">
            {'We respond quickly. Call, email, or book a consultation—we’ll help you plan your engraving project.'}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm">
            <a
              href={`tel:${SITE_CONFIG.phoneHref}`}
              className="inline-flex items-center gap-2 rounded bg-white/10 px-3 py-2 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={`Call ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" aria-hidden />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 rounded bg-white/10 px-3 py-2 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={`Email ${SITE_CONFIG.email}`}
            >
              <Mail className="h-4 w-4" aria-hidden />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <a
              href={SITE_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-white text-[#002B5C] px-3 py-2 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Book consultation on Calendly"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-[#002B5C]">{'Send us a message'}</h2>
            <p className="mt-2 text-gray-600">
              {'Share a few details about your use case, materials, and quantity. We’ll reply with options and a quote.'}
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
            <p className="mt-4 text-sm text-gray-600">
              {'Prefer email? '}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-[#002B5C] underline-offset-2 hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </p>
          </div>

          <aside className="rounded-lg border border-[#A5ACAF]/40 p-6">
            <h3 className="text-lg font-semibold text-[#002B5C]">{'Quick actions'}</h3>
            <ul className="mt-3 space-y-3 text-sm text-gray-700">
              <li>
                <a href={SITE_CONFIG.calendlyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#002B5C] hover:underline">
                  <Calendar className="h-4 w-4" aria-hidden />
                  Book Consultation
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phoneHref}`} className="inline-flex items-center gap-2 text-[#002B5C] hover:underline">
                  <Phone className="h-4 w-4" aria-hidden />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="inline-flex items-center gap-2 text-[#002B5C] hover:underline break-all">
                  <Mail className="h-4 w-4" aria-hidden />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-md bg-[#002B5C]/5 p-4 text-sm text-gray-700">
              We work with metals, plastics, acrylics, glass, wood, and coated items. Typical turnaround is 3–7 business days depending on scope.
            </div>
          </aside>
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
          Looking for pricing now?{' '}
          <Link href="/services" className="text-[#002B5C] underline-offset-2 hover:underline">
            Explore all services
          </Link>
        </div>
      </section>
    </main>
  )
}
