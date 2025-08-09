// Host-agnostic central configuration for Hub City Laser

export type NavChild = { label: string; href: string }
export type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; children: NavChild[]; href?: undefined }

export const SITE_CONFIG = {
  // Branding
  brand: {
    name: "Hub City Laser",
    logo: "/images/engrave-everything-logo-proper.png",
    alt: "Engrave Everything ornate crest logo",
  },

  // Legacy/compat keys
  brandName: "Hub City Laser",
  assets: { logo: "/images/engrave-everything-logo-proper.png" },

  // Colors
  colors: {
    primary: "#002B5C", // Deep blue
    secondary: "#A5ACAF", // Silver
    background: "#FFFFFF",
    textOnPrimary: "#FFFFFF",
  },

  // Contact
  contact: {
    phone: "240-324-7110",
    email: "info@engraveeverything.us",
  },
  // Legacy/compat
  phoneDisplay: "240-324-7110",
  phoneHref: "+12403247110",
  email: "info@engraveeverything.us",

  // CTA
  cta: {
    label: "Book Consultation",
    bookConsultationText: "Book Consultation",
    bookConsultationUrl: "https://calendly.com/ryan-mangan/custom-laser-engraving-consultation",
  },

  siteUrl: "https://engraveeverything.us",

  // Dropdown source lists
  industries: [
    { label: "Medical", href: "/medical" },
    { label: "Professional", href: "/professional" },
    { label: "Restaurants", href: "/restaurants" },
    { label: "Real Estate", href: "/real-estate" },
    { label: "Agriculture", href: "/agriculture" },
    { label: "Retail", href: "/retail" },
    { label: "Industrial", href: "/industrial" },
    { label: "Tech", href: "/tech" },
    { label: "Hospitality", href: "/hospitality" },
    { label: "Personalized Gifts & Home", href: "/gifts" },
  ],

  services: [
    { label: "All Services", href: "/services" },
    { label: "Business Signage", href: "/services/business-signage" },
    { label: "Awards & Recognition", href: "/services/awards-recognition" },
    { label: "Industrial Identification", href: "/services/industrial-identification" },
    { label: "Personalized Gifts", href: "/services/personalized-gifts" },
    { label: "Promotional Items", href: "/services/promotional-items" },
    { label: "Tri-Layer Acrylic Engraving", href: "/services/tri-layer-acrylic-engraving" },
  ],

  // Top-level navigation (matches screenshot)
  nav: [
    { label: "Home", href: "/" },
    { label: "Industries", children: [] }, // children filled from industries below
    { label: "Services", children: [] }, // children filled from services below
    { label: "Events & Occasions", href: "/events-occasions" },
    { label: "Locations", href: "/areas-we-serve" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
} as const

// Expand "Industries" and "Services" from their source lists if empty
function expandDerivedNav(nav: readonly NavItem[]): NavItem[] {
  return nav.map((item) => {
    if (item.label === "Industries" && "children" in item && (!item.children || item.children.length === 0)) {
      return { label: item.label, children: [...SITE_CONFIG.industries] }
    }
    if (item.label === "Services" && "children" in item && (!item.children || item.children.length === 0)) {
      return { label: item.label, children: [...SITE_CONFIG.services] }
    }
    return item as NavItem
  })
}

export const NAV_EXPANDED: NavItem[] = expandDerivedNav(SITE_CONFIG.nav)

// Helpers
export function toE164(phone?: string): string {
  if (!phone) return ""
  const digits = phone.replace(/\D/g, "")
  if (!digits) return ""
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`
  if (digits.length === 10) return `+1${digits}`
  return `+${digits}`
}

export function telHref(phone?: string): string {
  const e164 = toE164(phone)
  return e164 ? `tel:${e164}` : "tel:"
}

export function mailtoHref(email?: string): string {
  return `mailto:${email ?? ""}`
}
