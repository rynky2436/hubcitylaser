import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Precision Laser Engraving Solutions for B2B: UID Tags, Medical Devices & More | EZ Engrave Everything Blog",
  description:
    "Discover high-performance laser engraving solutions for B2B clients, including UID tags for medical devices, industrial barcoding, and corporate branding. Learn about our precision, reliability, and compliance.",
}

export default function FirstBlogPostPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-6 leading-tight">
          Precision Laser Engraving Solutions for B2B: UID Tags, Medical Devices & More
        </h1>
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/uid-laser-marking.png"
            alt="Precision UID Corporate Laser Marking Solutions"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 700px"
            className="rounded-lg"
          />
        </div>

        <div className="prose prose-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            In the world of business-to-business manufacturing and logistics, precision and traceability are not
            optional—they are essential. At EZ Engrave Everything, we specialize in high-performance laser engraving
            solutions designed for B2B clients with demanding standards. From UID-compliant tags for medical devices to
            durable industrial barcoding and corporate branding, our services are built for accuracy, reliability, and
            compliance.
          </p>
          <p className="mb-6">
            Whether you're managing medical prototypes, aerospace components, or high-volume production batches, our
            laser systems are equipped to meet your requirements with micron-level precision.
          </p>

          <h2 className="text-3xl font-semibold text-[#002B5C] mb-4">
            What We Offer: B2B-Ready Laser Engraving Services
          </h2>
          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">UID & Part Number Marking for Medical Devices</h3>
          <p className="mb-4">
            We provide MIL-STD-130-compliant UID (Unique Identification) laser engraving for medical device
            manufacturers, contractors, and suppliers. Using state-of-the-art equipment, we produce high-contrast,
            machine-readable DataMatrix codes, serial numbers, and part numbers on metals such as aluminum and stainless
            steel. All engravings meet durability and verification standards for FDA and DoD compliance.
          </p>

          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">Barcode & QR Code Laser Etching</h3>
          <p className="mb-4">
            Ensure traceability across your supply chain with long-lasting barcode, QR code, and asset tag engraving.
            Our laser-etched markings resist heat, abrasion, and chemicals, making them ideal for harsh environments in
            industrial, aerospace, and electronics applications.
          </p>

          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">
            Custom Nameplates, Panel Labels & Corporate Branding
          </h3>
          <p className="mb-6">
            We manufacture custom nameplates, signage, and identification panels for commercial offices, production
            facilities, and OEMs. From aluminum control labels to engraved stainless-steel desk tags, we provide
            batch-run engraving for branded and functional parts.
          </p>

          <h2 className="text-3xl font-semibold text-[#002B5C] mb-4">Why Laser Engraving for B2B?</h2>
          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">Permanent, High-Resolution Marking</h3>
          <p className="mb-4">
            Laser engraving creates precise, permanent marks that won’t fade, peel, or wear off. This is essential for
            part tracking, brand integrity, and compliance with government or industry labeling requirements.
          </p>

          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">Batch Consistency at Scale</h3>
          <p className="mb-4">
            Our laser process ensures uniformity and speed, even at scale. Whether you're producing prototypes or
            thousands of serialized parts, we deliver consistent, high-quality results.
          </p>

          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">Versatility Across Materials</h3>
          <p className="mb-4">We work with a wide range of materials, including:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Anodized aluminum</li>
            <li>Stainless steel</li>
            <li>ABS and engineering plastics</li>
            <li>Polycarbonate</li>
            <li>Glass and coated metals</li>
          </ul>

          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">Local Reliability, National Standards</h3>
          <p className="mb-6">
            Based in Maryland, EZ Engrave Everything serves B2B clients who demand professional, timely service with
            enterprise-level precision. From one-off prototyping to recurring production batches, we deliver results
            that meet both your deadlines and industry specifications.
          </p>

          <h2 className="text-3xl font-semibold text-[#002B5C] mb-4">Our B2B Workflow</h2>
          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">Consultation & Sample Production</h3>
          <p className="mb-4">
            We review your specifications and can provide free test samples for qualified projects. Material
            compatibility, compliance requirements, and visual clarity are all evaluated before production begins.
          </p>

          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">Batch Processing</h3>
          <p className="mb-4">
            Whether the job involves ten components or ten thousand, we offer structured production and volume-based
            pricing. Your project stays on schedule and within budget.
          </p>

          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">Quality Assurance</h3>
          <p className="mb-4">
            All UID and barcode engravings are inspected for readability and compliance. Optional third-party
            verification services can be provided for regulated industries.
          </p>

          <h3 className="text-2xl font-medium text-[#002B5C] mb-2">Repeat Order Support</h3>
          <p className="mb-6">
            We retain your digital files and templates, which means faster turnarounds on reorders, engineering
            revisions, or volume scaling.
          </p>

          <h2 className="text-3xl font-semibold text-[#002B5C] mb-4">Common B2B Applications</h2>
          <ul className="list-disc list-inside mb-6">
            <li>UID labels for FDA-regulated medical prototypes</li>
            <li>Serialized part marking for traceability in R&D</li>
            <li>Equipment identification tags for contract manufacturers</li>
            <li>Industrial control panel faceplates</li>
            <li>Branded plaques and office nameplates</li>
          </ul>
        </div>
      </article>
    </main>
  )
}
